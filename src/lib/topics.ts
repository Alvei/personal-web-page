import type { Post } from "./posts";

export type Topic = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  tags: string[];
  postSlugs: string[];
};

export const topics: Topic[] = [
  {
    slug: "ai-and-work",
    title: "AI and Work",
    description:
      "Essays on how AI is changing work design, judgment, and human leverage.",
    intro:
      "A cluster of essays about how AI is changing the shape of work itself: what becomes cheaper, what becomes more valuable, and where judgment still matters most.",
    tags: ["ai", "future-of-work"],
    postSlugs: [
      "the-future-of-software-is-not-less-human",
      "ai-readiness-is-not-just-about-workflows",
      "what-it-really-means-to-become-ai-native"
    ]
  },
  {
    slug: "ai-native-organizations",
    title: "AI-Native Organizations",
    description:
      "Writing on workflow redesign, operating models, and what it takes to become AI-native.",
    intro:
      "A set of posts about the organizational side of AI adoption: redesigning workflows, building the right operating habits, and moving beyond tool adoption toward a different way of working.",
    tags: ["ai", "future-of-work", "engineering"],
    postSlugs: [
      "what-it-really-means-to-become-ai-native",
      "ai-readiness-is-not-just-about-workflows",
      "code-is-cheap-integration-is-not"
    ]
  },
  {
    slug: "learning-and-capability-building",
    title: "Learning and Capability Building",
    description:
      "Reflections on reskilling, adaptability, and learning how to work well with AI.",
    intro:
      "Essays focused on the human side of the transition: how people learn to work with AI, what new capabilities matter, and why adaptation compounds.",
    tags: ["learning", "future-of-work", "ai"],
    postSlugs: [
      "why-karpathys-microgpt-stuck-with-me",
      "ai-readiness-is-not-just-about-workflows",
      "what-it-really-means-to-become-ai-native"
    ]
  }
];

export function getTopicBySlug(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getPostsForTopic(posts: Post[], topic: Topic, limit?: number) {
  const ranked = topic.postSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is Post => Boolean(post));

  return typeof limit === "number" ? ranked.slice(0, limit) : ranked;
}
