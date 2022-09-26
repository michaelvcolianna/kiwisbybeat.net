import { getPageData } from 'lib/posts'

export async function getStaticProps() {
  const pageData = await getPageData()

  return {
    props: {
      pageData
    }
  }
}

const IndexPage = ({ pageData }) => {
  return (
    <>
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
    </>
  )
}

export default IndexPage
