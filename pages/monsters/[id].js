export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((monster) => {
    return {
      params: { id: monster.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { monster: data },
  };
}

export default function Details({ monster }) {
  return (
    <div>
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
      <p>{monster.website}</p>
      <p>{monster.address.city}</p>
    </div>
  );
}
