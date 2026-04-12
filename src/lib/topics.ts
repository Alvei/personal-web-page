import type { Post } from "./posts";

export type Topic = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  tags: string[];
};

export const topics: Topic[] = [
  {
    slug: "ai-and-work",
    title: "AI and Work",
    description:
      "Essays on how AI is changing work design, judgment, and human leverage.",
    intro:
      "A cluster of essays about how AI is changing the shape of work itself: what becomes cheaper, what becomes more valuable, and where judgment still matters most.",
    tags: ["ai", "future-of-work"]
  },
  {
    slug: "ai-native-organizations",
    title: "AI-Native Organizations",
    description:
      "Writing on workflow redesign, operating models, and what it takes to become AI-native.",
    intro:
      "A set of posts about the organizational side of AI adoption: redesigning workflows, building the right operating habits, and moving beyond tool adoption toward a different way of working.",
    tags: ["ai", "future-of-work", "engineering"]
  },
  {
    slug: "learning-and-capability-building",
    title: "Learning and Capability Building",
    description:
      "Reflections on reskilling, adaptability, and learning how to work well with AI.",
    intro:
      "Essays focused on the human side of the transition: how people learn to work with AI, what new capabilities matter, and why adaptation compounds.",
    tags: ["learning", "future-of-work", "ai"]
  }
];

export function getTopicBySlug(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getPostsForTopic(posts: Post[], topic: Topic, limit?: number) {
  const ranked = posts
    .map((post) => ({
      post,
      sharedTags: post.tags.filter((tag) => topic.tags.includes(tag)).length
    }))
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort((a, b) => {
      if (b.sharedTags !== a.sharedTags) return b.sharedTags - a.sharedTags;
      return b.post.publishedAt.getTime() - a.post.publishedAt.getTime();
    })
    .map(({ post }) => post);

  return typeof limit === "number" ? ranked.slice(0, limit) : ranked;
}
