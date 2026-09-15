# dsa_prep_global_company

FAANG-স্তরের DSA রাউন্ডের প্রস্তুতি: ১৬৮ দিনে ১১০টা প্রবলেম, দিনে একটা, প্রথম দিন থেকে interview-এর পাঁচ ধাপে (clarify → brute force → optimize → code → test), ইংরেজিতে জোরে। প্রথম ৭০ দিন টপিক ১–৫-এর ভিত্তি, Heaps, Graph আর সহজ DP মিলিয়ে ৫০টা। তারপর নতুন ৬০টা, বেশিরভাগ hard আর 🔥 Must-do, সব ১০ টপিক জুড়ে। মাসে একবার শনিবারে mock, শেষ দুই সপ্তাহে নতুন প্রবলেম নেই। শেখার বিজ্ঞান মেনে; ১১০টা শেষ হলে থামা।

এটা **স্বাধীন পথ** — আগে অন্য কোনো DSA সাইট লাগে না, শূন্য থেকে শুরু। [লোকাল](https://sojibrd.github.io/dsa_prep_local_company/) আর [রিমোট](https://sojibrd.github.io/dsa_prep_remote_company/) আলাদা সাইট; প্রবলেমগুলো একটার ভেতরে আরেকটা (রিমোটের ৫০টা এখানকার প্রথম ৫০টা), কিন্তু কোনোটা আরেকটার পরে চালাতে হয় না। এই পথ রোডম্যাপের কোনো stage-এ নেই, এটা লক্ষ্য নয়, দিক। শুরুর তারিখ ⏳।

**লাইভ:** https://sojibrd.github.io/dsa_prep_global_company/

## Functional Requirement

- **আজ · Rail · দিন · ব্লক · ঝালাই · নিয়ম:** `dsa_prep_local_company`-এর মতোই। Rail-এ ১০টা ব্লক।
- **প্যাটার্ন:** ৫১টা, ইংরেজিতে। 🔥 Must-do chip দেখায়, কারণ এই পথেই ঐ ছাঁচ ঠিক কাজ করে। plan-এ থাকা demo-প্রবলেমের নোট আর দিনের লিংকও দেখায়।
- **টপিক ৬ (Heaps) নতুন লেখা।** `dsa_prep`-এ এটা শুধু একটা ফাঁকা লিংক ছিল। ৪টা প্যাটার্ন: Top K, K-way Merge, Two Heaps, Heap + Greedy। 6.1-এর demo-তে JS-এর `MinHeap` class আছে, 6.x আর 8.6 সেটাই ব্যবহার করে।

## Non-Functional Requirement

- **কোড `dsa_prep_local_company`-এর হুবহু।** পার্থক্য শুধু `app/lib/site.ts` (prefix `gdsa`, Must-do চালু), basePath আর কনটেন্টে।
- **`patterns/` ইংরেজি প্যাটার্ন ফাইলের মূল কপি।** `dsa_prep_remote_company/patterns/` এখান থেকে নেওয়া অংশ। বদল হলে আগে এখানে, তারপর রিমোটে কপি।
- সত্যের উৎস `docs/` আর `patterns/`। `(LC n)` যদি `patterns/`-এ না মেলে, build ভাঙে। ফাইলে তারিখ নেই।
- Static export → GitHub Pages। Progress শুধু `localStorage`-এ, একমাত্র `useProgress.ts` দিয়ে। Theme contract মানা হয়, সাইট dark-only।

## ডক ইনডেক্স

| ফাইল | Gist |
|---|---|
| [docs/00-rules.md](docs/00-rules.md) | লক্ষ্য (১১০টা, ৩০′), স্বাধীন পথ, কখন শুরু ⏳, সপ্তাহের ছন্দ, interview-এর বসার ৭ ধাপ, পুরো constraint টেবিল, মাসের mock (সঙ্গী ⏳), ঝালাই, `learning_to_learn`-এর পাঁচ ডক, যা উপেক্ষা করবেন, দিন ১৬৮-এর পরে |
| [docs/01-foundation.md](docs/01-foundation.md) | দিন ০০১–০১৪: Hashing, Two Pointers, Sliding Window, Binary Search — ১০টা, পাঁচ ধাপে |
| [docs/02-lists-stacks-trees.md](docs/02-lists-stacks-trees.md) | দিন ০১৫–০২৮: rotated, binary search on answer, linked list, stack, tree — ১০টা; mock #১ |
| [docs/03-mixed.md](docs/03-mixed.md) | দিন ০২৯–০৪২: টপিক ১–৫ মিশিয়ে, প্যাটার্ন লেখা নেই — ১০টা |
| [docs/04-wider-base.md](docs/04-wider-base.md) | দিন ০৪৩–০৫৬: Merge Intervals, Kadane, Prefix Sum, Min Stack, Validate BST, LCA, প্রথম heap — ১০টা; mock #২ |
| [docs/05-heaps-graphs-dp.md](docs/05-heaps-graphs-dp.md) | দিন ০৫৭–০৭০: Top K ×৩, Graph BFS/DFS ×৪, সহজ DP ×৩ |
| [docs/06-depth-topics-1-5.md](docs/06-depth-topics-1-5.md) | দিন ০৭১–০৯৮: টপিক ১–৫-এর ২০টা hard — Trapping Rain Water থেকে Max Path Sum; mock #৩ |
| [docs/07-heaps-backtracking.md](docs/07-heaps-backtracking.md) | দিন ০৯৯–১১২: Heaps ৬, Backtracking ৪; mock #৪ |
| [docs/08-graphs.md](docs/08-graphs.md) | দিন ১১৩–১২৬: cycle, topo, union find, bipartite, Dijkstra, Bellman-Ford ধাঁচ, MST, Word Ladder I/II, Bus Routes |
| [docs/09-dp-greedy-trie-design.md](docs/09-dp-greedy-trie-design.md) | দিন ১২৭–১৫৪: DP ১৩, Greedy, Trie, LRU/LFU, Text Justification; mock #৫, দুর্বল ১০টার তালিকা |
| [docs/10-mock-and-stop.md](docs/10-mock-and-stop.md) | দিন ১৫৫–১৬৮: নতুন প্রবলেম নেই — দুর্বল ১০, মুখে বলা, দুটো mock, থামা |
| [patterns/](patterns/) | ১০ টপিকের ৫১টা প্যাটার্ন, ইংরেজিতে |

## Progress key

`gdsa:v1:start` · `gdsa:v1:task` · `gdsa:v1:check` · `gdsa:v1:review` · `gdsa:v1:note`।

## চালানো

```bash
npm install
npm run dev
npm run build    # static export → out/
```
