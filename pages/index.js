import Head from 'next/head';
import Link from 'next/Link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
      <title>Monster Inc | Home</title>
      <meta name="keywords" content="monsters"/>
      </Head>
      <div>
      <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/monsters/">
          <a className={styles.button}>See Monster Listing</a>
        </Link>
      </div>
    </>
  )
}
