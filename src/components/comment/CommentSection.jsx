import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";
import { SectionWrapper } from "../atom/SectionWrapper";
import { useFetch } from "../../hooks/useFetch";
import { commentsUrl } from "../../lib/api-url";
import { Typography } from "../atom/Typography";
import { Loader } from "../atom/Loader";

export const CommentSection = () => {
  const {
    data: comments,
    error,
    isLoading,
    isRejected,
    isResolved,
    run,
  } = useFetch(commentsUrl);

  const onAddComment = (comment) => fetch(commentsUrl, {
      method: "POST",
      body: JSON.stringify(comment),
    }).then(async (res) => {
      const json = await res.json();

      if (res.ok) {
        run();
        return json;
      }

      return Promise.reject(json.error);
    });

  return (
    <SectionWrapper title="On est à l'époque de FaceBook ?">
      <div className=" max-w-2xl m-auto flex flex-col items-center w-full gap-8">
        <div className="grid w-full justify-center grid-cols-auto-fill-200-300 gap-4">
          {isResolved
            ? comments.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))
            : null}
          {isLoading ? <Loader /> : null}
          {isRejected ? (
            <Typography variant="body1">
              Sorry, there is an error : {error}
            </Typography>
          ) : null} 
        </div>
        <CommentForm onSubmit={onAddComment} />
      </div>
    </SectionWrapper>
  );
};
