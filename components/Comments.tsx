import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import useAuthStore from "../store/authStore";
import NoResults from "./NoResults";

interface Iprops {
  comment: string;
  setComment: () => void;
  addComment: () => void;
  isPostingComment: Boolean;
  comments: IComment[];
}

interface IComment {
  comment: string;
  length?: number; // ? : optional
  _key: string;
  postedBy: { _ref: string; _id: string };
}

const Comments = ({comment, setComment, addComment, isPostingComment}: Iprops) => {
  const { userProfile } = useAuthStore();
  const isPostingComment = false;
  const comments = [];
  return (
    <div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-[100px]">
      <div className="overflow-scroll lg:h-[475px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-1 focus:border-gray-300 flex-1 rounded-lg">
        {comments?.length ? (
          <div>videos</div>
        ) : (
          <div>
            <NoResults text="No comments yet." />
          </div>
        )}
      </div>
      {userProfile && (
        <div className="absolute bottom-0 left-0 pb-6 px-2 md:px-10">
          <form onSubmit={() => {}} className="flex gap-4">
            <input
              value=""
              onChange={() => {}}
              placeholder="Add comment..."
              className="bg-primary px-6 py-4 text-medium font-medium border-2 w-[250px] md:w-[750px]"
            ></input>
            <button className="text-md text-gray-400" onClick={() => {}}>
              {isPostingComment ? "Commenting..." : "Comment"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Comments;
