import { Posts } from "types/posts";
import { useRouter } from "next/router";
import PostItem from 'components/post/PostItem'

export const PostList = ({posts} : Posts) => {
  const router = useRouter();
  return (
    <main>
      <div className="mx-auto grid max-w-[768px] gap-y-4 px-4 pb-[100px] md:max-w-[1080px] md:grid-cols-3 md:gap-x-6 md:gap-y-[30px]">
        {posts.map((post) => {
          return (
            <div onClick={() => router.push(`/blog/${post.slug}`)} key={post.slug}>
              <PostItem post={post.frontMatter} />
            </div>
          )
        })}
      </div>
    </main>
  )
}
