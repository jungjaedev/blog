import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import fs from "fs";
import matter from 'gray-matter';
import { Posts } from "types/posts";
import { PostList } from 'components/post/PostList';


const Home: NextPage<Posts> = ({posts}: Posts) => {
  posts.sort((a, b)=> new Date(b.frontMatter.date).valueOf() - new Date(a.frontMatter.date).valueOf())
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="성장하는 개발자" />
        {/* <meta
          property="og:image"
          content="이미지링크"
        /> */}
      </Head>
      <PostList posts={posts} />
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // get the post
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace('.md',"");
    const readFiles = fs.readFileSync(`posts/${filename}`, "utf-8");
    const { data : frontMatter } = matter(readFiles);

    return {
      slug,
      frontMatter,
    }
  });

  return {
    props: {
      posts,
    }
  }
}


