import { getAllPaths, getPageData } from 'lib/posts'

export async function getStaticProps({ params }) {
  const pageData = await getPageData(params.slug)

  return {
    props: {
      slug: params.slug || null,
      pageData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPaths()

  return {
    paths,
    fallback: true
  }
}

const Page = ({ pageData }) => {
  return (
    <>
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
    </>
  )
}

export default Page
