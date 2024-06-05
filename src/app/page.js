import axios from "axios";
import Post from "./components/Post";

// Función asincrona que obtiene los datos de la API
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    console.log("Error al obtener los datos");
  }
  // retornando los datos obtenidos de la API en formato JSON
  return res.json();
}

// función asincrona que obtiene los datos de la API usando axios
async function getDataAxios() {
  let url_api = "https://jsonplaceholder.typicode.com/posts";
  const res = await axios.get(url_api);
  if (!res.ok) {
    console.log("Error al obtener los datos");
  }
  // retornando los datos obtenidos de la API en formato JSON
  return res.data;
}

export default async function Home() {
  // Llamando a la función asincrona que obtiene los datos de la API
  const dataPosts = await getData();

  // const dataPostsAxios = await getDataAxios();
  // console.log(dataPostsAxios);

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
            {dataPosts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
