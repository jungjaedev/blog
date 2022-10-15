import { PostItemProps } from 'types/posts'

const PostItem = ({post} : PostItemProps) => {
  const categoryClass = (category: string) => {
    if (category === "tech") return "text-[#FF5100]";
    else if (category === "design") return "text-[#0067a3]";
    else if (category === "etc") return "text-[#ff3399]";
  };
  return (
    <div className="w-full">
      <div className="mb-3 flex aspect-thumbnail w-full cursor-pointer items-center justify-center bg-[#D9D9D9]"
      >
        <img
          className="aspect-thumbnail cursor-pointer"
          src={post.thumbnail}
          alt="thumbnail"
        />
      </div>
      <div
        className="mb-2 h-[42px] cursor-pointer overflow-hidden truncate text-xl font-bold leading-[42px]"
      >{post.title}</div>
      <div
        className="line-clamp3 mb-3 h-[78px] w-full cursor-pointer font-normal leading-[26px] tracking-[-0.03em] text-[#525252]"
      >
        {post.content}
      </div>
      <div className="flex justify-between">
        <div className="leading-[26px] text-[#8C8C8C]">{post.date}</div>

        <div className={categoryClass(post.category)}>{post.category}</div>
      </div>
    </div>
  )
}

export default PostItem