# ব্লক ৬ — টপিক ১–৫-এর গভীরতা

*দিন ০৭১–০৯৮ · hard প্রবলেম · Arrays থেকে Trees · mock #৩*

চেনা পাঁচ টপিক, এবার FAANG-এর উচ্চতায়: Trapping Rain Water, Minimum Window Substring, Median of Two Sorted Arrays, Reverse Nodes in k-Group, Largest Rectangle, Serialize Tree, Maximum Path Sum। বেশিরভাগ hard, প্রায় সব 🔥 Must-do।

প্রতিটা নতুন প্রবলেমে **৩০′ টাইমার,** interview-এর পাঁচ ধাপ, তারপর ১৫′ ইংরেজিতে ব্যাখ্যা। hard-এ ৩০′-এ কোড না হওয়াটাই স্বাভাবিক — approach পর্যন্ত বলুন, demo খুলুন, বন্ধ করুন, কাল ঝালাইয়ে। 🧠 (Learning vs Winning · The obstacle)

> **ব্লক শেষে:** ২০টা নতুন, mock #৩, আর hard-এ অন্তত approach ৩০′-এর মধ্যে আসছে?

### দিন ০৭১ · Trapping Rain Water

- [ ] ৩০′ DSA ৫১/১১০ — **Trapping Rain Water** (LC 42 · ১.১ Two Pointers) — পাঁচ ধাপ; prefix-max array ভার্সন আগে, তারপর O(1) space 🔁 🧠 (Deliberate practice · Einstellung)
- [ ] ১৫′ ইংরেজি — *"The water at i is bounded by the smaller of the two maxima, so…"* 🧠 (Feynman)

> **দিন শেষে:** দুই ভার্সন?

### দিন ০৭২ · Sort Colors

- [ ] ৩০′ DSA ৫২/১১০ — **Sort Colors** (LC 75 · ১.১ Two Pointers) — ১৫′-এর লক্ষ্য; তিন pointer-এর invariant আগে লিখে 🔁 🧠 (Concepts vs Facts)
- [ ] ১৫′ ইংরেজি — invariant: `[0,low)`, `[low,mid)`, `(high,n)` — প্রতিটা কী ধরে 🧠 (Feynman)

> **দিন শেষে:** invariant লেখা?

### দিন ০৭৩ · Minimum Window Substring

- [ ] ৩০′ DSA ৫৩/১১০ — **Minimum Window Substring** (LC 76 · ১.২ Sliding Window) — ১০′ আটকালে উঠে হাঁটুন, টাইমার চলুক 🔁 🧠 (Focus vs Diffuse · The obstacle)
- [ ] ১৫′ ইংরেজি — `missing` counter কেন map গোনার চেয়ে ভালো 🧠 (Concepts vs Facts)

> **দিন শেষে:** ৩০′-এ approach অন্তত?

### দিন ০৭৪ · Find All Anagrams

- [ ] ৩০′ DSA ৫৪/১১০ — **Find All Anagrams in a String** (LC 438 · ১.২ Sliding Window) — fixed window; ২০′-এর লক্ষ্য 🔁 🧠 (Chunking)
- [ ] ১৫′ ইংরেজি — fixed আর variable window — পার্থক্য এক টেবিলে, তারপর জোরে 🧠 (Chunk the subject)

> **দিন শেষে:** টেবিলটা?

### দিন ০৭৫ · Longest Consecutive Sequence

- [ ] ৩০′ DSA ৫৫/১১০ — **Longest Consecutive Sequence** (LC 128 · ১.৪ Hashing) — sort করা O(n log n) আগে বলুন, তারপর O(n) 🔁 🧠 (Everything is a game)
- [ ] ১৫′ ইংরেজি — কেন O(n) — প্রতিটা সংখ্যা কয়বার ছোঁয়া হয়, প্রমাণ 🧠 (Feynman)

> **দিন শেষে:** O(n)-এর যুক্তি?

### দিন ০৭৬ · সপ্তাহের পাঁচটা hard

- [ ] ১৫′ এই সপ্তাহের ৫টা, না দেখে — প্রতিটায় clarify-এর একটা প্রশ্ন, approach এক লাইনে, complexity, ইংরেজিতে জোরে 🧠 (Test yourself · Everything is a game)

> **দিন শেষে:** পাঁচটার কয়টা ঠিক?

### দিন ০৭৭ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — hard-এ কোথায় সময় যাচ্ছে: idea, না code? ব্লকের বাকি ১৫টা দেখে মন খারাপ? ১৫ নয়, শুধু কালকেরটা 🧠 (Deliberate practice revisited · Long and short memory)

> **দিন শেষে:** সময় কোথায় যাচ্ছে, লেখা?

### দিন ০৭৮ · First Missing Positive

- [ ] ৩০′ DSA ৫৬/১১০ — **First Missing Positive** (LC 41 · ১.৪ Hashing) — O(n) space আগে, তারপর index-as-hash 🔁 🧠 (Einstellung · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — কেন উত্তর `[1, n+1]`-এর মধ্যে — এক বাক্যে 🧠 (Concepts vs Facts)

> **দিন শেষে:** O(1) space ভার্সন?

### দিন ০৭৯ · Non-overlapping Intervals

- [ ] ৩০′ DSA ৫৭/১১০ — **Non-overlapping Intervals** (LC 435 · ১.৫ Merge Intervals) — কেন end দিয়ে sort, start নয় — counterexample আগে 🔁 🧠 (Einstellung)
- [ ] ১৫′ ইংরেজি — greedy-র প্রমাণ: exchange argument 🧠 (Feynman)

> **দিন শেষে:** counterexample নিজে বানিয়েছেন?

### দিন ০৮০ · Maximum Product Subarray

- [ ] ৩০′ DSA ৫৮/১১০ — **Maximum Product Subarray** (LC 152 · ১.৬ Kadane's Algorithm) — Kadane-এ কী বদলায়, আগে বলুন 🔁 🧠 (Chunking)
- [ ] ১৫′ ইংরেজি — zero থাকলে কী হয়, আর min-max দুটোই কেন রাখতে হয় 🧠 (Everything is a game)

> **দিন শেষে:** min আর max দুটোই রাখার কারণ?

### দিন ০৮১ · Spiral Matrix

- [ ] ৩০′ DSA ৫৯/১১০ — **Spiral Matrix** (LC 54 · ১.৭ Matrix Traversal) — simulation; কাগজে ৩×৪ এঁকে বাউন্ডারি 🔁 🧠 (The power of senses)
- [ ] ১৫′ ইংরেজি — single row / single column-এ কী ভাঙে 🧠 (Everything is a game)

> **দিন শেষে:** ৩×১ আর ১×৩-এ চলেছে?

### দিন ০৮২ · Koko Eating Bananas

- [ ] ৩০′ DSA ৬০/১১০ — **Koko Eating Bananas** (LC 875 · ২.২ Binary Search on Answer) — ১৫′-এর লক্ষ্য; Capacity to Ship-এর সাথে একই ছাঁচ 🔁 🧠 (Chunking · Parkinson's law)
- [ ] ১৫′ ইংরেজি — "monotonic feasibility" — যেকোনো প্রবলেমে কীভাবে চিনবেন 🧠 (Trunk based knowledge)

> **দিন শেষে:** ১৫′-এ?

### দিন ০৮৩ · mock #৩

- [ ] ৪৫′ ⚑ mock — এই ব্লকের একটা hard, না দেখে; সঙ্গী থাকলে সে interviewer (⏳), না থাকলে রেকর্ড; পাঁচ ধাপ 🧠 (Community · Everything is a game)
- [ ] ১৫′ রেকর্ডিং বা সঙ্গীর মন্তব্য — clarify আর test হয়েছিল? একটা বদল 🧠 (Feedback)

> **দিন শেষে:** একটা বদল লেখা?

### দিন ০৮৪ · সপ্তাহের হিসাব

- [ ] ১০′ hard-এর ক্লু এক পাতায়, ইংরেজিতে। কোনো কাজ বাদ পড়েছে? ঘুম কেটে পূরণ নয় — পরের সপ্তাহে ছন্দে ফেরা 🧠 (Chunking · Sleep)

> **দিন শেষে:** ক্লুর পাতা?

### দিন ০৮৫ · Split Array Largest Sum

- [ ] ৩০′ DSA ৬১/১১০ — **Split Array Largest Sum** (LC 410 · ২.৩ Allocation Problems) — binary search on answer, তৃতীয়বার; DP ভার্সনের কথাও মুখে 🔁 🧠 (Einstellung · Chunking)
- [ ] ১৫′ ইংরেজি — কোনটা কখন — binary search না DP 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই পদ্ধতির trade-off?

### দিন ০৮৬ · Median of Two Sorted Arrays

- [ ] ৩০′ DSA ৬২/১১০ — **Median of Two Sorted Arrays** (LC 4 · ২.১ Basic Binary Search) — কঠিনতমের একটা; merge ভার্সন O(m+n) আগে বলুন 🔁 🧠 (The obstacle · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — partition-এর শর্ত, কাগজে দুটো array এঁকে তারপর মুখে 🧠 (The power of senses)

> **দিন শেষে:** partition-এর শর্ত বলা গেছে, কোড না হলেও?

### দিন ০৮৭ · Linked List Cycle II

- [ ] ৩০′ DSA ৬৩/১১০ — **Linked List Cycle II** (LC 142 · ৩.১ Fast & Slow Pointers) — গণিতটা কাগজে, তারপর কোড 🔁 🧠 (Concepts vs Facts)
- [ ] ১৫′ ইংরেজি — *"The distance from head to the start equals…"* 🧠 (Feynman)

> **দিন শেষে:** গণিতটা বলা গেছে?

### দিন ০৮৮ · Reorder List

- [ ] ৩০′ DSA ৬৪/১১০ — **Reorder List** (LC 143 · ৩.৩ In-Place Reversal) — তিন প্যাটার্ন একসাথে: middle + reverse + merge 🔁 🧠 (Chunking · Trunk based knowledge)
- [ ] ১৫′ ইংরেজি — তিনটা helper function-এর নাম আর signature আগে — interview-তে এভাবে ভাগ করা নম্বর পায় 🧠 (Everything is a game)

> **দিন শেষে:** helper-এ ভাগ করে লেখা?

### দিন ০৮৯ · Reverse Nodes in k-Group

- [ ] ৩০′ DSA ৬৫/১১০ — **Reverse Nodes in k-Group** (LC 25 · ৩.৩ In-Place Reversal) — iterative O(1) space ভার্সন লক্ষ্য 🔁 🧠 (Learning vs Winning)
- [ ] ১৫′ ইংরেজি — recursive আর iterative — space-এর পার্থক্য 🧠 (Concepts vs Facts)

> **দিন শেষে:** iterative?

### দিন ০৯০ · কম মনে থাকা hard

- [ ] ১৫′ Median বা k-Group, যেটা কম মনে আছে — ফাঁকা কাগজে শুধু approach আর মূল শর্ত, ইংরেজিতে জোরে 🧠 (Test yourself · Deliberate practice)

> **দিন শেষে:** approach না দেখে?

### দিন ০৯১ · সপ্তাহের হিসাব

- [ ] ১০′ মাঝপথ — ৬৫/১১০। উৎসাহ কম? এটা dip, আর আগে থেকেই জানা ছিল। "পারি না" নয়, "এখনো hard-এ ৫০%"; ২ মিনিটের রেকর্ডিং — এই সপ্তাহের একটা, না দেখে 🧠 (The dip · It's all in the frame)

> **দিন শেষে:** dip-এর বাক্যটা লেখা?

### দিন ০৯২ · Largest Rectangle in Histogram

- [ ] ৩০′ DSA ৬৬/১১০ — **Largest Rectangle in Histogram** (LC 84 · ৪.১ Monotonic Stack) — প্রতিটা bar-এর বাম-ডান সীমা আগে কাগজে 🔁 🧠 (The power of senses · The obstacle)
- [ ] ১৫′ ইংরেজি — sentinel কেন লাগে 🧠 (Concepts vs Facts)

> **দিন শেষে:** sentinel-এর কারণ?

### দিন ০৯৩ · Longest Valid Parentheses

- [ ] ৩০′ DSA ৬৭/১১০ — **Longest Valid Parentheses** (LC 32 · ৪.২ Expression Evaluation) — stack আর দুই-পাস counter, দুটো 🔁 🧠 (Einstellung)
- [ ] ১৫′ ইংরেজি — দুই-পাস কেন দুদিক থেকে লাগে 🧠 (Feynman)

> **দিন শেষে:** দুই পদ্ধতি?

### দিন ০৯৪ · Sliding Window Maximum

- [ ] ৩০′ DSA ৬৮/১১০ — **Sliding Window Maximum** (LC 239 · ৪.৪ Sliding Window Maximum) — heap আগে (O(n log k)), তারপর deque 🔁 🧠 (Einstellung · Chunking)
- [ ] ১৫′ ইংরেজি — JS-এ `shift()` O(n) — interview-তে কীভাবে বলবেন 🧠 (Everything is a game)

> **দিন শেষে:** heap আর deque দুটোই?

### দিন ০৯৫ · Serialize and Deserialize Binary Tree

- [ ] ৩০′ DSA ৬৯/১১০ — **Serialize and Deserialize Binary Tree** (LC 297 · ৫.১ Tree Traversal) — format আগে interviewer-এর সাথে ঠিক করার মতো বলুন 🔁 🧠 (Everything is a game)
- [ ] ১৫′ ইংরেজি — BFS আর preorder — কোন format কেন 🧠 (Concepts vs Facts)

> **দিন শেষে:** format-এর সিদ্ধান্ত বলা গেছে?

### দিন ০৯৬ · Binary Tree Maximum Path Sum

- [ ] ৩০′ ⚑ DSA ৭০/১১০ — **Binary Tree Maximum Path Sum** (LC 124 · ৫.৩ Path Sum) — "যা ফেরত দিই" আর "যা দিয়ে উত্তর আপডেট" আলাদা; Diameter-এর বড় ভাই 🔁 🧠 (Chunking · Trunk based knowledge)
- [ ] ১৫′ ইংরেজি — *"Return one side, update with both sides"* — ব্যাখ্যা 🧠 (Feynman)

> **দিন শেষে:** ৭০টা শেষ?

### দিন ০৯৭ · ব্লকের বিশটা থেকে পাঁচটা

- [ ] ১৫′ ব্লক ৬-এর ২০টা থেকে চোখ বন্ধ করে ৫টা — approach আর complexity, ইংরেজিতে জোরে; কোনটায় approach-ই আসেনি 🧠 (Interleaving · Test yourself)

> **দিন শেষে:** পাঁচটার কয়টায় approach?

### দিন ০৯৮ · ব্লক ৬-এর হিসাব

- [ ] ১০′ ব্লক ৬-এর হিসাব — ২০টা hard; কোন ৩টা ঝালাইয়ে বারবার "আটকে গেছি"? ওগুলো ব্লক ১০-এর তালিকায়। আর একটা ফাঁকা সন্ধ্যা — কোনো DSA নয় 🧠 (Deliberate practice · It pays to be not busy)

> **দিন শেষে:** ব্লক ১০-এর তালিকায় ৩টা?
