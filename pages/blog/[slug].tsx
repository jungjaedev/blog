import fs from 'fs';
import { GetStaticProps, GetStaticPaths, } from 'next';
import matter from 'gray-matter'
import { BlogPageProps } from 'types/posts';
import { marked } from 'marked'


const BlogPage = ({frontMatter, content}: BlogPageProps) => {
  return (
    <div className="p5">
      <h1 className="text-2xl py-4">{frontMatter.title}</h1>
      <article
        className='prose md:prose-lg lg:prose-xl'
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  )
}

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // get slug
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  // get content for each blog
  const mdfile = fs.readFileSync(`posts/${context.params?.slug}.md`);
  const { data: frontMatter, content } = matter(mdfile);

  return {
    props: {
      frontMatter,
      content,
    }
  }
}