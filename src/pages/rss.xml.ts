import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return rss({
    title: "Hugo Sarrazin",
    description: "Notes on AI, learning, and the future of work.",
    site: context.site ?? "https://example.com",
    items: posts
      .sort(
        (a, b) =>
          b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
      )
      .map((post) => ({
        title: post.data.title,
        description: post.data.summary,
        pubDate: post.data.publishedAt,
        link: `/posts/${post.slug}/`
      }))
  });
}
