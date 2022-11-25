import Head from "next/head";
import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";
import matter from "gray-matter";
import { frontMatterProps } from "types/posts";
import { marked } from "marked";
import PostTopSection from "components/post/PostTopSection";

interface BlogPageProps {
  frontMatter: frontMatterProps;
  content: string;
}

const BlogPage = ({ frontMatter, content }: BlogPageProps) => {
  console.log("frontmatter", frontMatter);
  console.log("content", content);
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={frontMatter.content} />
        <meta name="description" content={frontMatter.tags} />
        <meta name="description" content={content} />
        <meta property="og:image" content={frontMatter.thumbnail} />
        <meta property="og:description" content={frontMatter.content} />
        <meta property="og:title" content={frontMatter.title} />
      </Head>
      <div className="mx-auto max-w-[1080px] px-4 md:px-2">
        <PostTopSection frontMatter={frontMatter} />
        <div
          className="prose-headings:text-black30 prose max-w-none prose-p:text-black20 prose-code:text-blue-400"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </div>
    </>
  );
};

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
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  // get content for each blog
  const mdfile = fs.readFileSync(`posts/${context.params?.slug}.md`);
  const { data: frontMatter, content } = matter(mdfile);

  return {
    props: {
      frontMatter,
      content,
    },
  };
};
