# ব্লক ৫ — Heaps, Graph, সহজ DP

*দিন ০৫৭–০৭০ · Top K · Graph-এর BFS/DFS · DP-র প্রথম তিন ধাপ*

তিনটা নতুন জগতের দরজা: **Heaps**, **Graph-এর BFS/DFS**, আর **সহজ DP**। এখানে শুধু ভিত্তি — গভীরতা আসবে ব্লক ৭–৯-এ। ব্লক শেষে ৫০টা; তারপর নতুন ৬০টা, বেশিরভাগ hard।

DP-তে প্রথম দিন থেকেই তিন প্রশ্ন, কোডের আগে: **state কী? transition কী? base case কী?** 🧠 (Chunk the subject · The first 20 hours)

> **ব্লক শেষে:** ৫০টা, আর কোন ৫টা এখনো ৩০′ পেরোয় — তালিকা লেখা?

### দিন ০৫৭ · Top K Frequent

- [ ] ৩০′ DSA ৪১/১১০ — **Top K Frequent Elements** (LC 347 · ৬.১ Top K Elements) — MinHeap স্মৃতি থেকে ৫′-এ, তারপর প্রবলেম 🔁 🧠 (Test yourself · Deliberate practice)
- [ ] ১৫′ ইংরেজি — heap vs bucket sort — *"If k is close to n, I'd rather…"* 🧠 (Einstellung)

> **দিন শেষে:** MinHeap ৫′-এ?

### দিন ০৫৮ · K Closest Points

- [ ] ৩০′ DSA ৪২/১১০ — **K Closest Points to Origin** (LC 973 · ৬.১ Top K Elements) — size k-এর max-heap 🔁 🧠 (Deliberate practice · Chunking)
- [ ] ১৫′ ইংরেজি — follow-up: points যদি stream-এ আসে? 🧠 (Einstellung)

> **দিন শেষে:** stream-এর উত্তর?

### দিন ০৫৯ · Last Stone Weight

- [ ] ৩০′ DSA ৪৩/১১০ — **Last Stone Weight** (LC 1046 · ৬.১ Top K Elements) — ১০′-এর লক্ষ্য; বাকি সময়ে এ পর্যন্ত সবচেয়ে ধীর প্রবলেমটা, ফাঁকা editor 🔁 🧠 (Parkinson's law · Deliberate practice)
- [ ] ১৫′ ইংরেজি — তিনটা heap প্রবলেমের ক্লু — "k largest / closest / simulate" 🧠 (Chunking)

> **দিন শেষে:** ১০′-এ?

### দিন ০৬০ · Flood Fill

- [ ] ৩০′ DSA ৪৪/১১০ — **Flood Fill** (LC 733 · ৮.১ BFS / DFS Traversal) — প্রথম graph; recursion আর queue, দুটো 🔁 🧠 (The first 20 hours · Einstellung)
- [ ] ১৫′ ইংরেজি — বড় grid-এ recursion-এর stack overflow — কী করবেন; নতুন রং পুরনোর সমান হলে? 🧠 (Everything is a game)

> **দিন শেষে:** iterative বিকল্প আর edge case?

### দিন ০৬১ · Number of Islands

- [ ] ৩০′ DSA ৪৫/১১০ — **Number of Islands** (LC 200 · ৮.১ BFS / DFS Traversal) — গতকালকের flood fill-ই ভেতরে; clarify: grid বদলানো চলবে? 🔁 🧠 (Chunking · Everything is a game)
- [ ] ১৫′ ইংরেজি — *"Each land cell is visited once because…"* 🧠 (Feynman)

> **দিন শেষে:** flood fill-এর সাথে মিলটা দেখা গেছে?

### দিন ০৬২ · সপ্তাহের পাঁচটা

- [ ] ১৫′ এই সপ্তাহের ৫টা এলোমেলো — pattern, approach, complexity, ইংরেজিতে জোরে; তারপর ২ মিনিটের রেকর্ডিং — heap কী, কেন O(log n), না দেখে 🧠 (Test yourself · Feedback)

> **দিন শেষে:** রেকর্ডিং শুনেছেন?

### দিন ০৬৩ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — graph-এ visited ভুলে যাওয়া? এক লাইনে পরের সপ্তাহের দুর্বলতা 🧠 (Deliberate practice revisited)

> **দিন শেষে:** দুর্বলতা লেখা?

### দিন ০৬৪ · Rotting Oranges

- [ ] ৩০′ DSA ৪৬/১১০ — **Rotting Oranges** (LC 994 · ৮.১ BFS / DFS Traversal) — multi-source BFS; ১০′ আটকালে হাঁটুন, টাইমার চলুক 🔁 🧠 (Focus vs Diffuse · The obstacle)
- [ ] ১৫′ ইংরেজি — BFS-এর level = মিনিট — কেন; কোনো কমলা না পচলে কী ফেরত 🧠 (Concepts vs Facts)

> **দিন শেষে:** -1-এর edge case?

### দিন ০৬৫ · Clone Graph

- [ ] ৩০′ DSA ৪৭/১১০ — **Clone Graph** (LC 133 · ৮.১ BFS / DFS Traversal) 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — map কেন দুটো কাজ করে — visited আর old→new 🧠 (Feynman)

> **দিন শেষে:** cycle-ওয়ালা graph-এ চলেছে?

### দিন ০৬৬ · Climbing Stairs

- [ ] ৩০′ DSA ৪৮/১১০ — **Climbing Stairs** (LC 70 · ৯.১ Fibonacci Style) — প্রথম DP; recursion → memo → O(1), তিন ধাপ জোরে 🔁 🧠 (The first 20 hours · Chunk the subject)
- [ ] ১৫′ ইংরেজি — state, transition, base case — তিন বাক্যে 🧠 (Concepts vs Facts)

> **দিন শেষে:** তিনটা ভার্সনই লেখা?

### দিন ০৬৭ · House Robber

- [ ] ৩০′ DSA ৪৯/১১০ — **House Robber** (LC 198 · ৯.৭ House Robber) — আগে state, transition, base case — কোডের আগে 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — Climbing Stairs আর এটার মিল; follow-up: বাড়িগুলো গোল হলে? 🧠 (Chunking · Einstellung)

> **দিন শেষে:** তিন প্রশ্ন কোডের আগে লেখা?

### দিন ০৬৮ · Minimum Path Sum

- [ ] ৩০′ ⚑ DSA ৫০/১১০ — **Minimum Path Sum** (LC 64 · ৯.৮ Grid Paths) — কাগজে ৩×৩ টেবিল ভরে তারপর কোড; এক row-এ নামাতে পারেন? 🔁 🧠 (The power of senses · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — 2D থেকে 1D-তে নামানো — কেন চলে 🧠 (Concepts vs Facts)

> **দিন শেষে:** ৫০টা শেষ?

### দিন ০৬৯ · পঞ্চাশটা থেকে পাঁচটা

- [ ] ১৫′ ৫০টা থেকে চোখ বন্ধ করে ৫টা, প্রতিটা আলাদা টপিক — pattern, approach, complexity, ইংরেজিতে জোরে 🧠 (Test yourself · Interleaving)

> **দিন শেষে:** পাঁচটার কয়টা ঠিক?

### দিন ০৭০ · ব্লক ৫-এর হিসাব

- [ ] ১০′ ব্লক ৫-এর হিসাব — ৫০টা, দুই mock; কোন ৫টা এখনো ৩০′ পেরোয় — তালিকা, ব্লক ১০-এর জন্য রাখুন। সামনে নতুন ৬০টা, প্রথমটা Trapping Rain Water। ছোট একটা পুরস্কার 🧠 (Create a roadmap · Stakes & Rewards)

> **দিন শেষে:** ব্লক ৫ শেষ, ৫টার তালিকা?
