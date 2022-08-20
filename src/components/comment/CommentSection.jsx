import { useEffect, useState } from "react";
import { addComment, getComments } from "../../lib/comments";
import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";
import { SectionWrapper } from "../atom/SectionWrapper";

export const CommentSection = () => {
  const [comments, setComments] = useState([]);
  //

  const updateComments = () => {
    getComments().then((comments) => {
      setComments(comments);
    });
  };

  useEffect(() => {
    updateComments();
  }, []);

  const onAddComment = (comment) => {
    return addComment(comment)
      .then((res) => {
        if (res.ok) {
          updateComments();
          return;
        }
        console.log(res.ok);
        return res.json();
      })
      .then((json) => {
        if (json?.error) {
          return Promise.reject(json.error);
        }
      });
  };

  return (
    <SectionWrapper title="On est à l'époque de FaceBook ?">
      <div className=" max-w-2xl m-auto flex flex-col items-center w-full gap-8">
        <div
          className="grid max-w-2xl justify-center gap-4"
          style={{
            gridTemplateColumns: `repeat(
    auto-fill,
    minmax(min(200px, 300px), 1fr)
  )`,
          }}
        >
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
        <CommentForm onSubmit={onAddComment} />
      </div>
    </SectionWrapper>
  );
};
