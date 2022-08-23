import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";
import { SectionWrapper } from "../atom/SectionWrapper";

export const CommentSection = () => {
  // Commentaires - Exercise
  const comments = [
    {
      username: "John Doe",
      comment: "Hello World",
      createdAt: new Date(1000),
    },
  ];

  return (
    <SectionWrapper title="On est à l'époque de FaceBook ?">
      <div className=" max-w-2xl m-auto flex flex-col items-center w-full gap-8">
        <div className="grid w-full justify-center grid-cols-auto-fill-200-300 gap-4">
          {/* Commentaires - Exercise */}
          <Comment {...comments[0]} />
        </div>
        <CommentForm />
      </div>
    </SectionWrapper>
  );
};
