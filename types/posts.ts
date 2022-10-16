export interface frontMatterProps {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  slogan?: string;
  thumbnail?: string;
  tags?: string;
  fileName?: string;
}

export interface Post {
  slug?: string;
  frontMatter: frontMatterProps;
}

export interface Posts {
  posts: Post[];
  type?: string;
}

export interface PostItemProps {
  post: frontMatterProps;
}