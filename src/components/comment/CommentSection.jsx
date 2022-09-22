import { SectionWrapper } from '../atom/SectionWrapper';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

export const CommentSection = () => {
  // Commentaires - Exercise
  const comments = [
    {
      username: 'John Doe',
      comment: 'Hello World',
      createdAt: new Date(1000),
    },
  ];

  return (
    <SectionWrapper title="On est à l'époque de FaceBook ?">
      <div className="flex flex-col items-center w-full max-w-2xl gap-8 m-auto ">
        <div className="grid justify-center w-full gap-4 grid-cols-auto-fill-200-300">
          {/* Commentaires - Exercise */}
          <Comment {...comments[0]} />
        </div>
        <CommentForm />
      </div>
    </SectionWrapper>
  );
};
