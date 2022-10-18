import fs from 'fs';
import { GetStaticProps, GetStaticPaths, } from 'next';
import matter from 'gray-matter'
import { frontMatterProps  } from 'types/posts';
import { marked } from 'marked'
import PostTopSection from 'components/post/PostTopSection';

interface BlogPageProps { 
  frontMatter: frontMatterProps;
  content: string;
}

const BlogPage = ({frontMatter, content}: BlogPageProps) => {
  console.log(frontMatter)
  return (
    <div className="mx-auto max-w-[1080px] px-4 md:px-2">
      <PostTopSection frontMatter={frontMatter}/>
      <div
        // className='prose md:prose-lg lg:prose-xl'
        className='prose-headings:text-black30 prose max-w-none prose-p:text-black20 prose-code:text-blue-400'
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  )
}

export default BlogPage;

export const getStaticPaths: GetStaticPaths = () => {
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

export const getStaticProps: GetStaticProps = (context) => {
  // get content for each blog
  if (!context.params || !context.params.slug) {
    const mdfile = fs.readFileSync(`posts/hello-world.md`);
    const { data: frontMatter, content } = matter(mdfile);

    return {
      props: {
        frontMatter,
        content,
      }
    }
  }

  
  const mdfile = fs.readFileSync(`posts/${context.params.slug}.md`);
  const { data: frontMatter, content } = matter(mdfile);

  return {
    props: {
      frontMatter,
      content,
    }
  }
}