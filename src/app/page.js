// import Image from "next/image";
import Post from "./components/Post";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Error al obtener los datos");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 mt-5">
          <h1 className="text-center fw-bold">
            Aprender a Consumir una API con Next.js <hr />
          </h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-12">
          <ul>
            {data.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
