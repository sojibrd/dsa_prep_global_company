# ব্লক ৭ — Heaps ও Backtracking

*দিন ০৯৯–১১২ · k-way merge · two heaps · heap + greedy · subsets · board · grid · mock #৪*

দুটো নতুন জগৎ। **Heaps** — "সবচেয়ে ভালোটা এখন কোনটা" প্রশ্নকে সস্তা করে: k-way merge, দুই heap-এ median, greedy scheduling। **Backtracking** — choose → explore → undo, যখন উত্তর নিজেই exponential।

নতুন, তাই প্যাটার্ন লেখা থাকে; প্রথম দিনেই demo খুললে ক্ষতি নেই, কিন্তু আগে ১৫′ নিজে। 🧠 (The first 20 hours · Chunk the subject)

> **ব্লক শেষে:** ১০টা, mock #৪, আর backtracking-এর টেমপ্লেট স্মৃতি থেকে?

### দিন ০৯৯ · Merge k Sorted Lists

- [ ] ৩০′ DSA ৭১/১১০ — **Merge k Sorted Lists** (LC 23 · ৬.২ K-way Merge) — heap আর divide-and-conquer, দুটোর complexity মুখে 🔁 🧠 (Einstellung · Deliberate practice)
- [ ] ১৫′ ইংরেজি — কেন O(N log k), O(N log N) নয় 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই পদ্ধতির complexity?

### দিন ১০০ · Kth Smallest in Sorted Matrix

- [ ] ৩০′ DSA ৭২/১১০ — **Kth Smallest Element in a Sorted Matrix** (LC 378 · ৬.২ K-way Merge) — heap, তারপর value-তে binary search 🔁 🧠 (Einstellung · Chunking)
- [ ] ১৫′ ইংরেজি — "binary search on the value" — Koko আর Split Array-র সাথে মিল 🧠 (Trunk based knowledge)

> **দিন শেষে:** তিনটা প্রবলেমের মিল দেখা গেছে?

### দিন ১০১ · Find Median from Data Stream

- [ ] ৩০′ DSA ৭৩/১১০ — **Find Median from Data Stream** (LC 295 · ৬.৩ Two Heaps) — design: interface আর invariant আগে বলুন 🔁 🧠 (Everything is a game)
- [ ] ১৫′ ইংরেজি — follow-up: সব সংখ্যা ০–১০০-এর মধ্যে হলে? 🧠 (Einstellung)

> **দিন শেষে:** follow-up-এর উত্তর?

### দিন ১০২ · Task Scheduler

- [ ] ৩০′ DSA ৭৪/১১০ — **Task Scheduler** (LC 621 · ৬.৪ Heap + Greedy Scheduling) — heap simulation, তারপর counting formula 🔁 🧠 (Einstellung · Concepts vs Facts)
- [ ] ১৫′ ইংরেজি — formula-টা কাগজে ছবি এঁকে, তারপর মুখে প্রমাণ 🧠 (The power of senses)

> **দিন শেষে:** formula-র ছবি?

### দিন ১০৩ · Reorganize String

- [ ] ৩০′ DSA ৭৫/১১০ — **Reorganize String** (LC 767 · ৬.৪ Heap + Greedy Scheduling) — কখন অসম্ভব, আগে শর্ত 🔁 🧠 (Everything is a game)
- [ ] ১৫′ ইংরেজি — Task Scheduler-এর সাথে মিল আর অমিল 🧠 (Chunking)

> **দিন শেষে:** অসম্ভবের শর্ত?

### দিন ১০৪ · heap-এর এক পাতা

- [ ] ১৫′ চার heap প্যাটার্নের ক্লু এক পাতায়: top-K · k-way · two heaps · greedy; তারপর জোরে — interviewer-কে heap-এর interface কীভাবে বলবেন 🧠 (Chunking · Everything is a game)

> **দিন শেষে:** এক পাতার ক্লু?

### দিন ১০৫ · সপ্তাহের হিসাব

- [ ] ১০′ ব্লক ৬–৮ সবচেয়ে লম্বা মাঝখান — পরের সপ্তাহের সংকেত আর সময় ঠিক আছে? "Where I got stuck" থেকে একটা দুর্বলতা 🧠 (The dip · Habits revisited)

> **দিন শেষে:** সংকেত আর দুর্বলতা লেখা?

### দিন ১০৬ · Minimum Number of Refueling Stops

- [ ] ৩০′ DSA ৭৬/১১০ — **Minimum Number of Refueling Stops** (LC 871 · ৬.৪ Heap + Greedy Scheduling) — DP ভার্সন O(n²) আগে বলুন, তারপর heap 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১৫′ ইংরেজি — "পাম্প পার হয়ে পরে সিদ্ধান্ত" — কেন বৈধ 🧠 (Feynman)

> **দিন শেষে:** যুক্তিটা বলা গেছে?

### দিন ১০৭ · Subsets

- [ ] ৩০′ DSA ৭৭/১১০ — **Subsets** (LC 78 · ৭.১ Subsets / Permutations) — backtracking আর bitmask, দুটো 🔁 🧠 (The first 20 hours · Einstellung)
- [ ] ১৫′ ইংরেজি — `[1,2,3]`-এর recursion tree কাগজে, তারপর মুখে বর্ণনা 🧠 (The power of senses)

> **দিন শেষে:** recursion tree?

### দিন ১০৮ · Permutations

- [ ] ৩০′ DSA ৭৮/১১০ — **Permutations** (LC 46 · ৭.১ Subsets / Permutations) — used[] আর swap, দুটো 🔁 🧠 (Chunking)
- [ ] ১৫′ ইংরেজি — Subsets আর Permutations — টেমপ্লেটে ঠিক কোথায় পার্থক্য 🧠 (Concepts vs Facts)

> **দিন শেষে:** এক লাইনের পার্থক্য?

### দিন ১০৯ · Word Search

- [ ] ৩০′ DSA ৭৯/১১০ — **Word Search** (LC 79 · ৭.৩ Word Search) — pruning: কী দেখে আগে থামবেন 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — complexity O(m·n·4^L) কেন — interviewer জিজ্ঞেস করবেই 🧠 (Feynman)

> **দিন শেষে:** complexity-র ব্যাখ্যা?

### দিন ১১০ · N-Queens

- [ ] ৩০′ DSA ৮০/১১০ — **N-Queens** (LC 51 · ৭.২ N-Queens) — diagonal-এর `row−col`, `row+col` — কাগজে ৪×৪ 🔁 🧠 (The power of senses · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — backtracking-এর টেমপ্লেট স্মৃতি থেকে — choose, explore, undo 🧠 (Test yourself)

> **দিন শেষে:** টেমপ্লেট না দেখে?

### দিন ১১১ · mock #৪

- [ ] ৪৫′ ⚑ mock — ব্লক ১–৭ থেকে চোখ বন্ধ করে একটা; সঙ্গী থাকলে সে (⏳), না থাকলে রেকর্ড 🧠 (Interleaving · Community)
- [ ] ১৫′ কোন প্যাটার্ন — চিনতে কত সময় লাগল; মন্তব্য বা রেকর্ডিং থেকে একটা বদল 🧠 (Feedback)

> **দিন শেষে:** চিনতে কত মিনিট?

### দিন ১১২ · ব্লক ৭-এর হিসাব

- [ ] ১০′ ব্লক ৭-এর হিসাব — ৮০/১১০; ঝালাইয়ে বারবার আটকানো ২টা ব্লক ১০-এর তালিকায়। প্যাটার্নের ঘর — নতুন ১০টা কোথায় বসল, মনে মনে হেঁটে 🧠 (Deliberate practice · Method of loci)

> **দিন শেষে:** ব্লক ৭ শেষ?
