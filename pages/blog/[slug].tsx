import fs from 'fs';
import { GetStaticProps, GetStaticPaths, } from 'next';
import matter from 'gray-matter'
import { BlogPageProps } from 'types/posts';
import { marked } from 'marked'


const BlogPage = ({frontMatter, content}: BlogPageProps) => {
  return (
    <div className="mx-auto max-w-[1080px] px-4 md:px-2">
      <h1 className="text-2xl py-4">{frontMatter.title}</h1> 
      <div
        // className='prose md:prose-lg lg:prose-xl'
        className='prose-headings:text-black30 prose max-w-none prose-p:text-black20 prose-code:text-blue-400'
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