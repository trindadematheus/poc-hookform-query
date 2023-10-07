function SkeletonTable() {
  return (
    <>
      <div className="container max-w-5xl">
        <div className="mt-16 flex flex-col gap-4">
          {new Array(10).fill(0).map((_, key) => (
            <div
              key={key}
              className="bg-base-content/10 w-full h-16 animate-pulse"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SkeletonTable;
