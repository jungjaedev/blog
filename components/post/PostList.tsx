import Link from 'next/link'
import { Posts } from "types/posts";
import PostItem from 'components/post/PostItem'

export const PostList = ({posts} : Posts) => {
  return (
    <main>
      <div className="mx-auto grid max-w-[768px] gap-y-4 px-4 pb-[100px] md:max-w-[1080px] md:grid-cols-3 md:gap-x-6 md:gap-y-[30px]">
        {posts.map((post, i) => {
          if (!post.slug) return <div key={i}>Post missing</div>
          return (
            <Link key={i} href={`/blog/${post.slug}`}>
              <a>
                <PostItem post={post.frontMatter} />
              </a>
            </Link>
          );
        })}
      </div>
    </main>
  )
}
