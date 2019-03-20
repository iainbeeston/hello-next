import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium}/>
  </Layout>
)

Post.getInitialProps = async ({query}) => {
  const { id } = query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.info(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
