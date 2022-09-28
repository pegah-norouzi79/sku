import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LoadingPost = () => {
  return (
    <SkeletonTheme baseColor="#f1f1f1" highlightColor="#dcdde1">
      <div className="posts posts-scroller">
        <div className="shadow-sm  rounded-lg border-[1.5px] py-4 border-gray-100">
          <div className="flex items-center justify-between px-4">
            <div className="flex justify-center items-center gap-2">
              <Skeleton circle width={45} height={45} count={1} />
              <div className="flex flex-col  items-center pt-2">
                <Skeleton width={30} height={10} count={1} />
                <Skeleton width={30} height={10} count={1} />
              </div>
            </div>
            <Skeleton width={5} height={20} count={1} />
          </div>
          <Skeleton
            className="mt-3 lg:rounded-lg w-full h-60 lg:h-72"
            count={1}
          />

          <div className="flex mt-2 justify-between items-center px-4">
            <div className="flex  gap-3 text-gray-700">
              <div className="flex flex-col items-center">
                <Skeleton width={20} height={20} count={1} />
              </div>
              <Skeleton width={20} height={20} count={1} className="w-5 h-5" />

              <Skeleton width={20} height={20} count={1} className="w-5 h-5" />
            </div>
          </div>

          <div className="mt-4 px-4">
            <Skeleton width={60} height={15} count={1} />
          </div>

          <div className="pt-4 flex gap-2 items-center px-4">
            <Skeleton circle width={40} height={40} count={1} />
            <div className="flex-1">
              <Skeleton height={40} count={1} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default LoadingPost;
