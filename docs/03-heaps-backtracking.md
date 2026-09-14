# ব্লক ৩ — Heaps ও Backtracking

*দিন ০৬৪–০৭৭ · k-way merge · two heaps · heap + greedy · subsets · board · grid*

দুটো নতুন জগৎ। **Heaps** — "সবচেয়ে ভালোটা এখন কোনটা" প্রশ্নকে সস্তা করে: k-way merge, দুই heap-এ median, greedy scheduling। **Backtracking** — choose → explore → undo, যখন উত্তর নিজেই exponential।

নতুন, তাই প্যাটার্ন লেখা থাকে; প্রথম দিনেই demo খুললে ক্ষতি নেই, কিন্তু আগে ১৫′ নিজে। 🧠 (The first 20 hours · Chunk the subject)

> **ব্লক শেষে:** ১০টা, দুই mock, আর backtracking-এর টেমপ্লেট স্মৃতি থেকে?

### দিন ০৬৪ · Merge k Sorted Lists

- [ ] ৪৫′ DSA ৭১/১১০ — **Merge k Sorted Lists** (LC 23 · ৬.২ K-way Merge) — heap আর divide-and-conquer, দুটোর complexity মুখে 🔁 🧠 (Einstellung · Deliberate practice)
- [ ] ১০′ কেন O(N log k), O(N log N) নয় 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই পদ্ধতির complexity?

### দিন ০৬৫ · Kth Smallest in Sorted Matrix

- [ ] ৪৫′ DSA ৭২/১১০ — **Kth Smallest Element in a Sorted Matrix** (LC 378 · ৬.২ K-way Merge) — heap, তারপর value-তে binary search 🔁 🧠 (Einstellung · Chunking)
- [ ] ১০′ "binary search on the value" — Koko আর Split Array-র সাথে মিল 🧠 (Trunk based knowledge)

> **দিন শেষে:** তিনটা প্রবলেমের মিল দেখা গেছে?

### দিন ০৬৬ · Find Median from Data Stream

- [ ] ৪৫′ DSA ৭৩/১১০ — **Find Median from Data Stream** (LC 295 · ৬.৩ Two Heaps) — design: interface আর invariant আগে বলুন 🔁 🧠 (Everything is a game)
- [ ] ১০′ follow-up: সব সংখ্যা ০–১০০-এর মধ্যে হলে? 🧠 (Einstellung)

> **দিন শেষে:** follow-up-এর উত্তর?

### দিন ০৬৭ · Task Scheduler

- [ ] ৪৫′ DSA ৭৪/১১০ — **Task Scheduler** (LC 621 · ৬.৪ Heap + Greedy Scheduling) — heap simulation, তারপর counting formula 🔁 🧠 (Einstellung · Concepts vs Facts)
- [ ] ১০′ formula-টা কাগজে ছবি এঁকে প্রমাণ 🧠 (The power of senses)

> **দিন শেষে:** formula-র ছবি?

### দিন ০৬৮ · Reorganize String

- [ ] ৪৫′ DSA ৭৫/১১০ — **Reorganize String** (LC 767 · ৬.৪ Heap + Greedy Scheduling) — কখন অসম্ভব, আগে শর্ত 🔁 🧠 (Everything is a game)
- [ ] ১০′ Task Scheduler-এর সাথে মিল আর অমিল 🧠 (Chunking)

> **দিন শেষে:** অসম্ভবের শর্ত?

### দিন ০৬৯ · mock — heap

- [ ] ৪৫′ ⚑ mock — এই সপ্তাহের একটা, রেকর্ড; heap-এর interface interviewer-কে কীভাবে বলবেন সেটাসহ 🧠 (Everything is a game · Deep work)
- [ ] ১০′ রেকর্ডিং 🧠 (Feedback)

> **দিন শেষে:** রেকর্ডিং শুনেছেন?

### দিন ০৭০ · সপ্তাহের হিসাব

- [ ] ১০′ চার heap প্যাটার্নের ক্লু এক পাতায়: top-K · k-way · two heaps · greedy 🧠 (Chunking · Create a roadmap)
- [ ] ১০′ ব্লক ৩–৪ সবচেয়ে লম্বা মাঝখান — পরের সপ্তাহের সংকেত আর সময় ঠিক আছে? 🧠 (The dip · Habits revisited)

> **দিন শেষে:** এক পাতার ক্লু?

### দিন ০৭১ · Minimum Number of Refueling Stops

- [ ] ৪৫′ DSA ৭৬/১১০ — **Minimum Number of Refueling Stops** (LC 871 · ৬.৪ Heap + Greedy Scheduling) — DP ভার্সন O(n²) আগে বলুন, তারপর heap 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১০′ "পেট্রোল পাম্প পার হয়ে পরে সিদ্ধান্ত" — কেন বৈধ 🧠 (Feynman)

> **দিন শেষে:** যুক্তিটা বলা গেছে?

### দিন ০৭২ · Subsets

- [ ] ৪৫′ DSA ৭৭/১১০ — **Subsets** (LC 78 · ৭.১ Subsets / Permutations) — backtracking আর bitmask, দুটো 🔁 🧠 (The first 20 hours · Einstellung)
- [ ] ১০′ recursion tree কাগজে, `[1,2,3]`-এর জন্য 🧠 (The power of senses)

> **দিন শেষে:** recursion tree?

### দিন ০৭৩ · Permutations

- [ ] ৪৫′ DSA ৭৮/১১০ — **Permutations** (LC 46 · ৭.১ Subsets / Permutations) — used[] আর swap, দুটো 🔁 🧠 (Chunking)
- [ ] ১০′ Subsets আর Permutations — টেমপ্লেটে ঠিক কোথায় পার্থক্য 🧠 (Concepts vs Facts)

> **দিন শেষে:** এক লাইনের পার্থক্য?

### দিন ০৭৪ · Word Search

- [ ] ৪৫′ DSA ৭৯/১১০ — **Word Search** (LC 79 · ৭.৩ Word Search) — pruning: কী দেখে আগে থামবেন 🔁 🧠 (Deliberate practice)
- [ ] ১০′ complexity O(m·n·4^L) কেন — interviewer জিজ্ঞেস করবেই 🧠 (Feynman)

> **দিন শেষে:** complexity-র ব্যাখ্যা?

### দিন ০৭৫ · N-Queens

- [ ] ৪৫′ DSA ৮০/১১০ — **N-Queens** (LC 51 · ৭.২ N-Queens) — diagonal-এর `row−col`, `row+col` — কাগজে ৪×৪ 🔁 🧠 (The power of senses · Learning vs Winning)
- [ ] ১০′ backtracking-এর টেমপ্লেট স্মৃতি থেকে — choose, explore, undo 🧠 (Test yourself)

> **দিন শেষে:** টেমপ্লেট না দেখে?

### দিন ০৭৬ · mock — মিশিয়ে

- [ ] ৪৫′ ⚑ mock — ব্লক ১–৩ থেকে চোখ বন্ধ করে একটা; সঙ্গী থাকলে সে (⏳) 🧠 (Interleaving · Community)
- [ ] ১০′ কোন প্যাটার্ন — চিনতে কত সময় লাগল 🧠 (Feedback)

> **দিন শেষে:** চিনতে কত মিনিট?

### দিন ০৭৭ · ব্লক ৩-এর হিসাব

- [ ] ১৫′ ব্লক ৩-এর হিসাব — ৮০/১১০; ঝালাইয়ে বারবার আটকানো ২টা ব্লক ৬-এর তালিকায় 🧠 (Deliberate practice · It's all in the frame)
- [ ] ১০′ ৫৪টা প্যাটার্নের ঘর — নতুন ১০টা কোথায় বসল, মনে মনে হেঁটে 🧠 (Method of loci)

> **দিন শেষে:** ব্লক ৩ শেষ?
