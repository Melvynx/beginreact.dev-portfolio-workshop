import React, { useCallback, useEffect, useReducer } from "react";

function asyncReducer(state, action) {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved", data: action.data, error: null };
    }
    case "rejected": {
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const useAsyncState = (url, config) => {
  const [state, dispatch] = useReducer(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
  });

  const { data, error, status } = state;

  const run = useCallback(() => {
    fetch(url, config).then(async (res) => {
      const json = await res.json();

      if (res.ok) {
        console.log({ json });
        dispatch({ type: "resolved", data: json });
      } else {
        dispatch({ type: "rejected", error: json });
      }
    });
  }, [config, url]);

  useEffect(() => {
    run();
  }, [config, run, url]);

  return {
    error,
    status,
    data,
    run,
    isLoading: status === "pending",
    isIdle: status === "idle",
    isResolved: status === "resolved",
    isRejected: status === "rejected",
  };
};
