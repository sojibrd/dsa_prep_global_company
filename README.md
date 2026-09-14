# dsa_prep_global_company

FAANG-স্তরের DSA রাউন্ডের প্রস্তুতি, মোট ১৩৩ দিন। প্রথম ব্লকে রিমোটের ৫০টা প্রবলেম interview-এর পুরো ক্রমে, ঘড়ি ধরে। তারপর নতুন ৬০টা, বেশিরভাগ hard আর 🔥 Must-do, সব ১০ টপিক জুড়ে। শেষ দুই সপ্তাহ শুধু mock। সব ইংরেজিতে, শেখার বিজ্ঞান মেনে। ১১০টা শেষ হলে থামা।

এটা তিন পথের তৃতীয়টা: [লোকাল](https://sojibrd.github.io/dsa_prep_local_company/) → [রিমোট](https://sojibrd.github.io/dsa_prep_remote_company/) → গ্লোবাল। এই পথ রোডম্যাপের কোনো stage-এ নেই, এটা লক্ষ্য নয়, দিক। শুরুর তারিখ ⏳।

**লাইভ:** https://sojibrd.github.io/dsa_prep_global_company/

## Functional Requirement

- **আজ · Rail · দিন · ব্লক · ঝালাই · নিয়ম:** `dsa_prep_local_company`-এর মতোই।
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
| [docs/00-rules.md](docs/00-rules.md) | লক্ষ্য (১১০টা, ৩৫′), কখন শুরু ⏳, interview-এর বসার ৭ ধাপ, পুরো constraint টেবিল, mock-এর নিয়ম (সঙ্গী ⏳), ঝালাই, `learning_to_learn`-এর পাঁচ ডক, যা উপেক্ষা করবেন, দিন ১৩৩-এর পরে |
| [docs/01-remote-fifty-timed.md](docs/01-remote-fifty-timed.md) | দিন ০০১–০৩৫: রিমোটের ৫০টা, দিনে ২টা, interview-এর ৫ ধাপ, মিশিয়ে; পাঁচটা শনিবারের interview-ধাঁচ |
| [docs/02-depth-topics-1-5.md](docs/02-depth-topics-1-5.md) | দিন ০৩৬–০৬৩: টপিক ১–৫-এর ২০টা hard — Trapping Rain Water থেকে Max Path Sum |
| [docs/03-heaps-backtracking.md](docs/03-heaps-backtracking.md) | দিন ০৬৪–০৭৭: Heaps ৬, Backtracking ৪ |
| [docs/04-graphs.md](docs/04-graphs.md) | দিন ০৭৮–০৯১: cycle, topo, union find, bipartite, Dijkstra, Bellman-Ford ধাঁচ, MST, Word Ladder I/II, Bus Routes |
| [docs/05-dp-greedy-trie-design.md](docs/05-dp-greedy-trie-design.md) | দিন ০৯২–১১৯: DP ১৩, Greedy, Trie, LRU/LFU, Text Justification; দুর্বল ১০টার তালিকা |
| [docs/06-mock-and-stop.md](docs/06-mock-and-stop.md) | দিন ১২০–১৩৩: নতুন প্রবলেম নেই — পাঁচ mock, দুর্বল ১০, দুটো ৯০′ loop, থামা |
| [patterns/](patterns/) | ১০ টপিকের ৫১টা প্যাটার্ন, ইংরেজিতে |

## Progress key

`gdsa:v1:start` · `gdsa:v1:task` · `gdsa:v1:check` · `gdsa:v1:review` · `gdsa:v1:note`।

## চালানো

```bash
npm install
npm run dev
npm run build    # static export → out/
```
