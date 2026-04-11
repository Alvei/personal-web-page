import { getCollection } from "astro:content";

export type Post = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  coverImage?: string;
  draft: boolean;
};

function comparePosts(a: Post, b: Post) {
  return b.publishedAt.getTime() - a.publishedAt.getTime();
}

async function getPostEntries() {
  const entries = await getCollection("posts", ({ data }) => !data.draft);

  return entries
    .map((entry) => ({
      id: entry.id,
      slug: entry.slug,
      title: entry.data.title,
      summary: entry.data.summary,
      publishedAt: entry.data.publishedAt,
      updatedAt: entry.data.updatedAt,
      tags: entry.data.tags,
      coverImage: entry.data.coverImage,
      draft: entry.data.draft ?? false,
      entry
    }))
    .sort((a, b) =>
      comparePosts(
        {
          ...a,
          draft: false
        },
        {
          ...b,
          draft: false
        }
      )
    );
}

export async function getAllPosts() {
  const posts = await getPostEntries();
  return posts.map(({ entry: _entry, ...post }) => post);
}

export async function getLatestPosts(limit = 3) {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string) {
  const entries = await getPostEntries();
  return entries.find((post) => post.slug === slug);
}

export async function getRelatedPosts(slug: string, tags: string[], limit = 3) {
  const posts = await getAllPosts();

  return posts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      sharedTags: post.tags.filter((tag) => tags.includes(tag)).length
    }))
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort((a, b) => {
      if (b.sharedTags !== a.sharedTags) return b.sharedTags - a.sharedTags;
      return b.post.publishedAt.getTime() - a.post.publishedAt.getTime();
    })
    .slice(0, limit)
    .map(({ post }) => post);
}
