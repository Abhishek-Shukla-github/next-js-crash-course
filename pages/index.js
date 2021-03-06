import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { ArticleList } from '../components/ArticleList';

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>NextJS Crash Course</title>
        <meta name="keywords" content="NextJS crash course!" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}