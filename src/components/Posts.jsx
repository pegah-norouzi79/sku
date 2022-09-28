import CardPost from "./CardPost";

const Posts = ({posts}) => {

  return (
    <>
      <div className="posts !pb-20 md:!pb-0">
        {posts.map((post, index) => {
          return <CardPost key={index} post={post} />;
        })}
      </div>
    </>
  );
};

export default Posts;
