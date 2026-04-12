---
title: "Code is cheap. Integration is not."
slug: "code-is-cheap-integration-is-not"
publishedAt: 2026-04-11
summary: "AI has made code generation cheaper, but the real bottleneck is increasingly the ability to integrate software into production systems responsibly."
tags:
  - ai
  - software
  - engineering
---

One of the clearest things AI has changed in software is the cost of producing code.

It is now much easier to generate an implementation, explore multiple paths, scaffold tests, or build a quick internal tool that might not have justified the effort before. That is real progress. It changes the economics of experimentation, and it changes the threshold for what feels worth trying.

Simon Willison captures this well in his essay [Writing code is cheap now](https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/). The part that stayed with me is not just that code generation has become cheaper. It is that many of our instincts as engineers were built in a world where writing code was expensive, and that world is changing quickly.

Andrej Karpathy makes a related point in his recent [No Priors interview](https://www.youtube.com/watch?v=kwSVtQ7dziU): the bottleneck is moving away from typing and toward orchestration, instruction quality, supervision, and loop management. That feels right to me. It also points to the other half of the story. If more implementation can be delegated, then more value shifts to everything required to make that delegated work usable in the real world.

I think there is another side to this shift that matters just as much.

In fact, I increasingly think AI is making two sets of constraints more visible at once: the upstream bottlenecks involved in defining, structuring, and specifying the right work, and the downstream bottlenecks involved in integrating what gets produced into real systems. This blog is about the second one.

AI has lowered the cost of producing software artifacts. It has not yet lowered the cost of fitting those artifacts into real production systems. It has not removed the need for observability, reliability, security, or clear boundaries between components. And it has definitely not eliminated the work of deciding what should actually become part of a production environment. It may even make ownership more fragile. When code is produced faster than it is understood, teams can end up with software that technically belongs to everyone but is functionally owned by no one, especially when a customer issue or production incident forces someone to take responsibility.

That is why I think we now have a real bottleneck downstream.

Teams can now generate more code than they can responsibly absorb. They can produce more experiments, more prototypes, more partial implementations, and more candidate solutions. But the hard part is still what happens next. Does this code fit the system? Does someone own it? Can it be monitored, supported, and safely changed later? Does it align with existing patterns, or does it quietly increase long-term complexity?

Those questions matter more, not less, in a world where code is abundant.

And the more I look at this, the more I think “integration” is doing a lot of work as a word.

What I really mean is **production absorption capacity**. It is the ability of a team to take a generated artifact and make it legible, testable, operable, and trustworthy inside a larger system. It is not just whether the code runs. It is whether the surrounding organization and systems can absorb the change without creating fragility somewhere else.

In some ways, AI makes old engineering disciplines newly important. Modularity matters more when there is more code to integrate. Interfaces matter more when more components can be generated quickly. Testing and observability matter more when the volume of possible change goes up. Clear ownership matters more when it becomes easier to create software than to maintain it.

That is also why I do not think this is only a software engineering story. In a broader sense, the same pattern shows up across AI adoption. The constraint is often no longer raw capability. It is workflow visibility, evaluation discipline, and system readiness. Before teams can redesign work well, they usually have to make the work visible enough to understand where AI actually helps and where the real bottlenecks still sit. And once they deploy AI into a live workflow, they **need something closer to operational discipline than experimentation alone**. They need monitoring, feedback loops, and clear criteria for whether the system is actually performing well.

AI can absolutely help here too. It can assist with anomaly detection, log triage, test generation, evaluation, and even the first pass of incident analysis. But that is a different kind of contribution. It is less about generating another artifact and more about strengthening the control system around the artifact. In other words, AI may help increase integration capacity, but it does not remove the need for judgment about what signals matter, what failure modes are acceptable, and when a human needs to step in.

This is why I suspect many teams will confuse output with progress in the next few months.

They will see more code being produced and assume they are moving faster. Sometimes they will be. But in many cases, they will simply be generating change faster than the organization can absorb it. And when that happens, the constraint is no longer coding capacity. It is integration capacity.

That changes what good engineering leadership looks like as well. The goal is not just to help teams generate more code. It is to help them integrate the right code well. That means keeping standards clear, systems legible, ownership explicit, and the path to production disciplined enough that increased velocity does not create hidden fragility. In a world of coding agents, that probably means engineers spend relatively less time on first-pass implementation and relatively more time on architecture, review, evaluation, and operational judgment.

AI absolutely makes software easier to create.

What it does not yet do is make software easy to absorb.

And that may turn out to be one of the most important engineering truths of this next phase: the future advantage will not come from generating the most code. It will come from integrating the right code well to help deliver customer outcomes in production.

That is the downstream side of the story.

**The upstream side is different, but just as important.** As code gets cheaper to produce, the value of clear thinking, context, specification, and problem framing rises with it. If this essay is about why integration becomes the bottleneck after generation, the next one should be about why good inputs are becoming the bottleneck before it.

This essay is part of the [AI-Native Organizations](/topics/ai-native-organizations/) thread.
