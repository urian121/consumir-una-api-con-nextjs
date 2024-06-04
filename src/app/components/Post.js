export default function Post({ post }) {
  return (
    <>
      <li className="lista">
        <h4> {post.title}</h4>
        <p>{post.body}</p>
      </li>
    </>
  );
}
