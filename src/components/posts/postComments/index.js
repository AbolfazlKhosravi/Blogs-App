import React from "react";
import CommentForm from "./commentForm";
import SingleComments from "./singleComment";
import ReplyComment from "./replyComment";

const PostComments = ({ post }) => {
  return (
    <div className="flex flex-col items-start justify-start pt-4 lg:pt-6 gap-y-8  pb-6">
      <h2 className="text-slate-700 font-extrabold text-xl lg:text-2xl">
        نظرات
      </h2>
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo?._id &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SingleComments comment={comment} postId={post._id} />
              <ReplyComment
                comments={post.comments}
                parentCommentId={comment._id}
                postId={post._id}
              />
            </React.Fragment>
          )
        );
      })}
      <div className="mt-8 w-full text-slate-600 font-medium">
        <span className="font-bold md:text-lg">ارسال دیدگاه جدید</span>
        <CommentForm postId={post._id} responseTo={null} />
      </div>
    </div>
  );
};

export default PostComments;
