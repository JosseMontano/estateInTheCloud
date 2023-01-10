import Skeleton from "./showSkeleton";

const LoadSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Skeleton key={i} />
      ))}
    </>
  );
};

export default LoadSkeleton;
