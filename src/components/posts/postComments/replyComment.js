import React from "react";
import SingleComments from "./singleComment";

const ReplyComment = ({ parentCommentId, comments, postId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo?._id && (
        <div className="pr-2 md:pr-5 w-full" key={comment._id}>
          <React.Fragment key={comment._id}>
            <SingleComments comment={comment} postId={postId} />
            <ReplyComment
              comments={comments}
              parentCommentId={comment._id}
              postId={postId}
            />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
