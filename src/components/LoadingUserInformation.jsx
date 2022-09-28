import React from "react";
import Skeleton, {
  SkeletonTheme,
} from "react-loading-skeleton";
const LoadingUserInformation = () => {
  return (
    <SkeletonTheme
      baseColor="#f1f1f1"
      highlightColor="#dcdde1"
    >
      <div className="relative">
        <Skeleton className="h-48" count={1} />
        <div className="absolute -bottom-7 left-4">
          <Skeleton
            circle={true}
            height={60}
            width={60}
            count={1}
          />
        </div>
      </div>
      <div className="flex justify-between px-3 items-center mt-12">
        <Skeleton width={70} count={1} />
        <Skeleton width={30} count={1} />
      </div>

      <div className="flex justify-between px-3 mt-10">
        <div className="flex flex-col gap-1 items-center justify-center">
          <Skeleton width={70} count={1} />
          <Skeleton width={20} count={1} />
          <Skeleton width={40} count={1} />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <Skeleton width={70} count={1} />
          <Skeleton width={20} count={1} />
          <Skeleton width={40} count={1} />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <Skeleton width={70} count={1} />
          <Skeleton width={20} count={1} />
          <Skeleton width={40} count={1} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default LoadingUserInformation;