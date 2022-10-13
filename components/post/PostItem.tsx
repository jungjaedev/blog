import React from 'react'
import { PostItemProps } from 'types/posts'

const PostItem = ({post} : PostItemProps) => {
  console.log(post)
  return (
    <div>PostItem</div>
  )
}

export default PostItem