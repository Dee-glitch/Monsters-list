import Link from "next/link";
import styles from "../../styles/monsters.module.css";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { monsters: data },
  };
}

export default function Monsters({ monsters }) {
  return (
    <div>
      <h1>All Monsters</h1>
      {monsters.map((monster) => (
        <Link href={`/monsters/${monster.id}`} key={monster.id}>
          <a className={styles.single}>
            <h3>{monster.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
