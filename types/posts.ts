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
  frontMatter: {[key:string]:string};
}

export interface Posts {
  posts: Post[];
  type?: string;
}

export interface BlogPageProps {
  frontMatter: { [key: string]: string },
  content: string,
}

export interface PostItemProps {
  post: frontMatterProps;
}