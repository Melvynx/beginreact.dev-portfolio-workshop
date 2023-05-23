import { useFetch } from '../../hooks/useFetch';
import { commentsUrl } from '../../lib/api-url';
import { Loader } from '../atom/Loader';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Typography } from '../atom/Typography';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

export const CommentSection = () => {
  const {
    data: comments,
    error,
    isLoading,
    isRejected,
    isResolved,
    run,
  } = useFetch(commentsUrl);

  const onAddComment = (comment) =>
    fetch(commentsUrl, {
      method: 'POST',
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
      <div className=" m-auto flex w-full max-w-2xl flex-col items-center gap-8">
        <div className="grid w-full grid-cols-auto-fill-200-300 justify-center gap-4">
          {isResolved
            ? comments.map((comment) => <Comment key={comment.id} {...comment} />)
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
