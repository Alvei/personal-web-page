---
title: "Code is cheap. Context is not."
slug: "code-is-cheap-context-is-not"
publishedAt: 2026-04-16
summary: "AI can generate more code and artifacts than ever, but the harder upstream bottleneck is often defining the right problem, context, and constraints in the first place."
tags:
  - ai
  - future-of-work
  - product
---

In the last essay, I argued that one of the biggest AI bottlenecks now sits downstream.

If code is getting cheaper to produce, then the hard part increasingly becomes integration: making software legible, reliable, testable, observable, and safe enough to absorb into a real production system.

I still think that is true.

But there is another bottleneck that shows up even earlier.

It happens before the code is written.

It happens when someone has to decide what actually needs to be built, what success looks like, what context matters, where the workflow begins and ends, and which constraints are real versus assumed.

**Code is cheap. Context is not.**

AI is making it dramatically easier to generate candidate solutions. It can produce interfaces, tests, refactors, scripts, prototypes, and even full implementations at a speed that would have seemed improbable not long ago.

But none of that means the problem itself has become clear.

If anything, the opposite may be happening.

When execution gets cheaper, ambiguity gets more expensive.

A vague request that once produced a slow but manageable amount of wasted work can now produce a large volume of plausible but misaligned output. A poorly framed task can generate pages of competent-looking code without actually solving the right problem. A team that does not understand its own workflow can automate the visible steps while leaving the real bottlenecks untouched.

That is why I think the upstream bottleneck is becoming more important.

Before we ask whether AI can build something, we increasingly have to ask whether we have described the work clearly enough for a system to build the right thing in the first place.

**That starts with context.**

I do not mean context only in the prompt-engineering sense, though that matters. I mean context in the broader organizational sense: goals, constraints, standards, edge cases, customer reality, system boundaries, and the messy facts about how work actually gets done.

This is one reason I keep coming back to the idea of visibility.

Microsoft recently made a point I think more companies will need to absorb in [Three things frontier firms understand about AI](https://www.microsoft.com/en-us/worklab/three-things-frontier-firms-understand-about-ai-and-you-should-too): redesigning with AI starts by understanding how work actually happens. That sounds almost obvious, but in practice many workflows are still surprisingly invisible. The handoffs live in meetings, inboxes, workarounds, tribal knowledge, and undocumented exceptions. If that underlying process is unclear, AI does not remove the ambiguity. It often amplifies it.

This is also why I think product and design judgment may become more valuable in the AI era, not less.

Marty Cagan and Bob Baxley recently argued in [Product, Design and AI](https://www.svpg.com/product-design-and-ai/) that AI increases the importance of strong product managers and product designers because teams still need people who can judge value, viability, and experience quality. That feels exactly right to me. If AI expands the space of possible solutions, then the ability to define the right problem becomes even more important.

Chris Jones makes a related point from the stakeholder side in [Stakeholders and the Product Model](https://www.svpg.com/stakeholders-and-the-product-model/). The job of leaders and business partners is not simply to hand over features to build. It is to provide context, frame the request as a problem, define success criteria, and give product teams access to customers, users, and data. In an AI environment, that distinction matters even more. Faster generation makes it easier to rush into delivery before the problem has been framed properly.

That is why I do not think the upstream bottleneck is only about prompting better.

**It is also about writing better problem statements.**

Intercom had a useful way of expressing this in [7 proven techniques for writing a great problem statement](https://www.intercom.com/blog/7-techniques-for-problem-statements/): ambiguous words like "slow" or "confusing" often feel concrete, but they are not. They have to be translated into observable user failures before a team can solve them well. That discipline becomes more valuable when AI can generate polished output from vague instructions. The system can now run far ahead of the team’s actual understanding.

That same issue shows up at the level of building with agents. Boris Cherny, the creator of Claude Code, has described on [X](https://x.com/bcherny/status/2038454353787519164) a workflow that starts with planning, then separates work into parallel streams, and only then pushes execution through multiple agent sessions. The interesting part is not just the number of agents. It is the prior structure. Parallelism works when the work is partitioned clearly. Verification works when the task and constraints were specified well enough up front. Even in a highly agentic workflow, the bottleneck is still often the human ability to define the job clearly before the system runs.

Andrej Karpathy has been circling a similar idea in a more builder-oriented way, especially in his [No Priors interview](https://www.youtube.com/watch?v=kwSVtQ7dziU). If the human bottleneck is shifting away from typing and toward orchestration, then the leverage point also shifts. More value moves into decomposition, specification, memory, loop design, and judgment about what should happen next. The bottleneck is not simply writing less code by hand. It is learning how to direct increasingly capable systems toward the right objective.

That also connects to something I have written about in a different context in [How to master the seven-step problem-solving process](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/how-to-master-the-seven-step-problem-solving-process): good problem solving starts with precise problem definition, then decomposition, iteration, and synthesis. That discipline matters even more in an AI environment, because vague framing no longer just wastes a few meetings. It can now generate a great deal of credible but misdirected work.

**That has real implications for how teams work.**

In a world where code is expensive, you can often get away with fuzzy intent for longer because execution itself is slow. The system naturally forces more discussion before too much gets built.

In a world where code is cheap, that safeguard weakens.

*Now a vague idea can become a fully formed artifact before the team has really aligned on the problem.* And because the output looks polished, it can create the illusion of clarity where clarity does not yet exist.

That is dangerous in a subtle way.

Teams can start confusing generation with understanding.

They can believe they are moving faster because more artifacts are appearing. But if those artifacts were built on weak context, unclear constraints, or shallow understanding of the workflow, then speed may just be producing more rework earlier.

**That is why I think context is becoming a kind of infrastructure.**

The organizations that get the most from AI will not only have access to stronger models. They will be better at making the work itself legible. They will know how to expose the hidden steps in a process, define the standards clearly, surface the edge cases, and give both humans and machines enough structure to act well.

In that sense, design is not decorative here. It is strategic. As I argued years ago in [What every executive needs to know about design](https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/what-every-executive-needs-to-know-about-design), it is the discipline that turns observation into useful constraints, and useful constraints into systems that actually serve people well.

**This is not just a technical capability.**

It is a managerial one. It is an operational one. It is also a strategic one.

Because before AI can reliably compress execution, someone has to define what deserves execution.

That is where I think the upstream bottleneck really lives.

It lives in problem framing.

It lives in deciding what the actual job is.

It lives in identifying what information is missing.

It lives in choosing which constraints are fixed and which are habits.

It lives in specifying success well enough that a human or an AI system can recognize it.

Seen that way, the future skill is not just prompting.

It is specification.

Not specification in the narrow sense of writing a software requirements document, but in the broader sense of making intent clear enough that a capable system can act without drifting.

That is also why I do not think the upstream and downstream bottlenecks are really separate stories.

They reinforce each other.

If the task is poorly framed upstream, integration becomes harder downstream. If the workflow is invisible upstream, monitoring gets noisier downstream. If ownership is blurry upstream, reliability becomes harder to defend downstream.

So if the first essay in this pair was about why the hard part comes after generation, this one is about why the hard part often begins before generation. It sits directly alongside [Code is cheap. Integration is not.](/posts/code-is-cheap-integration-is-not/).

Code is cheap.

But clear thinking is not.

Legible workflows are not.

Shared context is not.

And in a world where intelligence is increasingly abundant, those may become some of the scarcest advantages of all.

This essay is part of the [AI-Native Organizations](/topics/ai-native-organizations/) thread.
