import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import videoID from '../../lib/video'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

const videoEmbed = (videoURL) => {
  const id = videoID(videoURL);
  if (id) {
    return `https://www.youtube.com/embed/${id}`;
  }
};


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} - JavaScript Beers</title>
      </Head>
      <div className="wrap">
        <article>
          <img src={postData.img} alt={postData.alt} />
          {/* <div className="embed-responsive">
            <iframe className="embed-responsive-item" src={videoEmbed(postData.video)}></iframe>
          </div> */}
          <h1 className="headingXl">{postData.title}</h1>
          <span className="author">{postData.author}</span>
          <Date dateString={postData.date} />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    </Layout>
  )
}

