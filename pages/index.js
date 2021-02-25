import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul className="list">
        {allPostsData.map(({ id, date, title, author, body, img, alt }) => (
          <li key={id}>
            <article>
              <img src={img} alt={alt} />
              <h2>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <span className="author">{author}</span>
              </h2>
              <span className="lightText">
                <Date dateString={date} />
              </span>
              <div className="wysiwyg">
                <p>{body}</p>
              </div>
            </article>
          </li>          
        ))}
      </ul>
    </Layout>
  )
}
