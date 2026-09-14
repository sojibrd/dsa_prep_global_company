# ব্লক ২ — টপিক ১–৫-এর গভীরতা

*দিন ০৩৬–০৬৩ · hard প্রবলেম · Arrays থেকে Trees · দিনে ১টা নতুন*

চেনা পাঁচ টপিক, এবার FAANG-এর উচ্চতায়: Trapping Rain Water, Minimum Window Substring, Median of Two Sorted Arrays, Reverse Nodes in k-Group, Largest Rectangle, Serialize Tree, Maximum Path Sum। বেশিরভাগ hard, প্রায় সব 🔥 Must-do।

প্রতিটা নতুন প্রবলেমে **৩৫′ টাইমার,** interview-এর পাঁচ ধাপ, তারপর ১০′ নোট। hard-এ ৩৫′-এ না হওয়াটাই স্বাভাবিক — demo খুলুন, বন্ধ করুন, কাল ঝালাইয়ে। 🧠 (Learning vs Winning · The obstacle)

> **ব্লক শেষে:** ২০টা নতুন, চার শনিবারের mock, আর hard-এ অন্তত approach ৩৫′-এর মধ্যে আসছে?

### দিন ০৩৬ · Trapping Rain Water

- [ ] ৪৫′ DSA ৫১/১১০ — **Trapping Rain Water** (LC 42 · ১.১ Two Pointers) — ৩৫′, পাঁচ ধাপ; prefix-max array ভার্সন আগে, তারপর O(1) space 🔁 🧠 (Deliberate practice · Einstellung)
- [ ] ১০′ *"The water at i is bounded by the smaller of the two maxima, so…"* 🧠 (Feynman)

> **দিন শেষে:** দুই ভার্সন?

### দিন ০৩৭ · Sort Colors

- [ ] ৪৫′ DSA ৫২/১১০ — **Sort Colors** (LC 75 · ১.১ Two Pointers) — ১৫′-এর লক্ষ্য; তিন pointer-এর invariant আগে লিখে 🔁 🧠 (Concepts vs Facts)
- [ ] ১০′ invariant: `[0,low)`, `[low,mid)`, `(high,n)` — প্রতিটা কী ধরে 🧠 (Feynman)

> **দিন শেষে:** invariant লেখা?

### দিন ০৩৮ · Minimum Window Substring

- [ ] ৪৫′ DSA ৫৩/১১০ — **Minimum Window Substring** (LC 76 · ১.২ Sliding Window) — ১০′ আটকালে উঠে হাঁটুন, টাইমার চলুক 🔁 🧠 (Focus vs Diffuse · The obstacle)
- [ ] ১০′ `missing` counter কেন map গোনার চেয়ে ভালো 🧠 (Concepts vs Facts)

> **দিন শেষে:** ৩৫′-এ approach অন্তত?

### দিন ০৩৯ · Find All Anagrams

- [ ] ৪৫′ DSA ৫৪/১১০ — **Find All Anagrams in a String** (LC 438 · ১.২ Sliding Window) — fixed window; ২০′-এর লক্ষ্য 🔁 🧠 (Chunking)
- [ ] ১০′ fixed আর variable window — এক টেবিলে পার্থক্য 🧠 (Chunk the subject)

> **দিন শেষে:** টেবিলটা?

### দিন ০৪০ · Longest Consecutive Sequence

- [ ] ৪৫′ DSA ৫৫/১১০ — **Longest Consecutive Sequence** (LC 128 · ১.৪ Hashing) — sort করা O(n log n) আগে বলুন, তারপর O(n) 🔁 🧠 (Everything is a game)
- [ ] ১০′ কেন O(n) — প্রতিটা সংখ্যা কয়বার ছোঁয়া হয়, প্রমাণ 🧠 (Feynman)

> **দিন শেষে:** O(n)-এর যুক্তি?

### দিন ০৪১ · mock — এই সপ্তাহ

- [ ] ৪৫′ ⚑ mock — এই সপ্তাহের একটা hard, না দেখে; রেকর্ড চালু, পাঁচ ধাপ 🧠 (Everything is a game · Deep work)
- [ ] ১০′ রেকর্ডিং: clarify, test — দুটো ধাপ হয়েছিল? 🧠 (Feedback)

> **দিন শেষে:** দুই ধাপ?

### দিন ০৪২ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — hard-এ কোথায় সময় যাচ্ছে: idea, না code? 🧠 (Deliberate practice revisited)
- [ ] ১০′ ব্লক ২-এর বাকি ১৫টা দেখে মন খারাপ? ১৫ নয়, শুধু কালকেরটা 🧠 (Long and short memory · Choice vs Chore)

> **দিন শেষে:** সময় কোথায় যাচ্ছে, লেখা?

### দিন ০৪৩ · First Missing Positive

- [ ] ৪৫′ DSA ৫৬/১১০ — **First Missing Positive** (LC 41 · ১.৪ Hashing) — O(n) space আগে, তারপর index-as-hash 🔁 🧠 (Einstellung · Learning vs Winning)
- [ ] ১০′ কেন উত্তর `[1, n+1]`-এর মধ্যে — এক বাক্যে 🧠 (Concepts vs Facts)

> **দিন শেষে:** O(1) space ভার্সন?

### দিন ০৪৪ · Non-overlapping Intervals

- [ ] ৪৫′ DSA ৫৭/১১০ — **Non-overlapping Intervals** (LC 435 · ১.৫ Merge Intervals) — কেন end দিয়ে sort, start নয় — counterexample আগে 🔁 🧠 (Einstellung)
- [ ] ১০′ greedy-র প্রমাণ: exchange argument, ইংরেজিতে 🧠 (Feynman)

> **দিন শেষে:** counterexample নিজে বানিয়েছেন?

### দিন ০৪৫ · Maximum Product Subarray

- [ ] ৪৫′ DSA ৫৮/১১০ — **Maximum Product Subarray** (LC 152 · ১.৬ Kadane's Algorithm) — Kadane-এ কী বদলায়, আগে বলুন 🔁 🧠 (Chunking)
- [ ] ১০′ zero থাকলে কী হয় — edge case 🧠 (Everything is a game)

> **দিন শেষে:** min আর max দুটোই রাখার কারণ?

### দিন ০৪৬ · Spiral Matrix

- [ ] ৪৫′ DSA ৫৯/১১০ — **Spiral Matrix** (LC 54 · ১.৭ Matrix Traversal) — simulation; কাগজে ৩×৪ এঁকে বাউন্ডারি 🔁 🧠 (The power of senses)
- [ ] ১০′ single row / single column-এ কী ভাঙে 🧠 (Everything is a game)

> **দিন শেষে:** ৩×১ আর ১×৩-এ চলেছে?

### দিন ০৪৭ · Koko Eating Bananas

- [ ] ৪৫′ DSA ৬০/১১০ — **Koko Eating Bananas** (LC 875 · ২.২ Binary Search on Answer) — ১৫′-এর লক্ষ্য; Capacity to Ship-এর সাথে একই ছাঁচ 🔁 🧠 (Chunking · Parkinson's law)
- [ ] ১০′ "monotonic feasibility" — যেকোনো প্রবলেমে কীভাবে চিনবেন 🧠 (Trunk based knowledge)

> **দিন শেষে:** ১৫′-এ?

### দিন ০৪৮ · mock — হাত মিশিয়ে

- [ ] ৪৫′ ⚑ mock — এই সপ্তাহের একটা hard; সঙ্গী থাকলে সে interviewer (⏳) 🧠 (Community · Everything is a game)
- [ ] ১০′ সঙ্গীর মন্তব্য বা রেকর্ডিং — একটা বদল 🧠 (Feedback)

> **দিন শেষে:** একটা বদল লেখা?

### দিন ০৪৯ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — hard-এর ক্লু এক পাতায়, ইংরেজিতে 🧠 (Chunking)
- [ ] ১০′ কোনো কাজ বাদ পড়েছে? ঘুম কেটে পূরণ নয় — পরের সপ্তাহে ছন্দে ফেরা 🧠 (Sleep · Efficiency trumps grit)

> **দিন শেষে:** ক্লুর পাতা?

### দিন ০৫০ · Split Array Largest Sum

- [ ] ৪৫′ DSA ৬১/১১০ — **Split Array Largest Sum** (LC 410 · ২.৩ Allocation Problems) — binary search on answer, তৃতীয়বার; DP ভার্সনের কথাও মুখে 🔁 🧠 (Einstellung · Chunking)
- [ ] ১০′ কোনটা কখন — binary search না DP 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই পদ্ধতির trade-off?

### দিন ০৫১ · Median of Two Sorted Arrays

- [ ] ৪৫′ DSA ৬২/১১০ — **Median of Two Sorted Arrays** (LC 4 · ২.১ Basic Binary Search) — কঠিনতমের একটা; merge ভার্সন O(m+n) আগে বলুন 🔁 🧠 (The obstacle · Learning vs Winning)
- [ ] ১০′ partition-এর শর্ত কাগজে দুটো array এঁকে 🧠 (The power of senses)

> **দিন শেষে:** partition-এর শর্ত বলা গেছে, কোড না হলেও?

### দিন ০৫২ · Linked List Cycle II

- [ ] ৪৫′ DSA ৬৩/১১০ — **Linked List Cycle II** (LC 142 · ৩.১ Fast & Slow Pointers) — গণিতটা কাগজে, তারপর কোড 🔁 🧠 (Concepts vs Facts)
- [ ] ১০′ *"The distance from head to the start equals…"* 🧠 (Feynman)

> **দিন শেষে:** গণিতটা বলা গেছে?

### দিন ০৫৩ · Reorder List

- [ ] ৪৫′ DSA ৬৪/১১০ — **Reorder List** (LC 143 · ৩.৩ In-Place Reversal) — তিন প্যাটার্ন একসাথে: middle + reverse + merge 🔁 🧠 (Chunking · Trunk based knowledge)
- [ ] ১০′ তিনটা helper function-এর নাম আর signature আগে — interview-তে এভাবে ভাগ করা নম্বর পায় 🧠 (Everything is a game)

> **দিন শেষে:** helper-এ ভাগ করে লেখা?

### দিন ০৫৪ · Reverse Nodes in k-Group

- [ ] ৪৫′ DSA ৬৫/১১০ — **Reverse Nodes in k-Group** (LC 25 · ৩.৩ In-Place Reversal) — iterative O(1) space ভার্সন লক্ষ্য 🔁 🧠 (Learning vs Winning)
- [ ] ১০′ recursive আর iterative — space-এর পার্থক্য 🧠 (Concepts vs Facts)

> **দিন শেষে:** iterative?

### দিন ০৫৫ · mock

- [ ] ৪৫′ ⚑ mock — Median বা k-Group, যেটা কম মনে আছে; রেকর্ড 🧠 (Test yourself · Deliberate practice)
- [ ] ১০′ রেকর্ডিং — কোথায় চুপ 🧠 (Feedback)

> **দিন শেষে:** রেকর্ডিং শুনেছেন?

### দিন ০৫৬ · সপ্তাহের হিসাব

- [ ] ১০′ মাঝপথ — ৬৫/১১০। উৎসাহ কম? এটা dip, আর আগে থেকেই জানা ছিল। "পারি না" নয়, "এখনো hard-এ ৫০%" 🧠 (The dip · It's all in the frame)
- [ ] ১০′ ২ মিনিটের রেকর্ডিং — এই সপ্তাহের একটা, না দেখে 🧠 (Test yourself)

> **দিন শেষে:** dip-এর বাক্যটা লেখা?

### দিন ০৫৭ · Largest Rectangle in Histogram

- [ ] ৪৫′ DSA ৬৬/১১০ — **Largest Rectangle in Histogram** (LC 84 · ৪.১ Monotonic Stack) — প্রতিটা bar-এর বাম-ডান সীমা আগে কাগজে 🔁 🧠 (The power of senses · The obstacle)
- [ ] ১০′ sentinel কেন লাগে 🧠 (Concepts vs Facts)

> **দিন শেষে:** sentinel-এর কারণ?

### দিন ০৫৮ · Longest Valid Parentheses

- [ ] ৪৫′ DSA ৬৭/১১০ — **Longest Valid Parentheses** (LC 32 · ৪.২ Expression Evaluation) — stack আর দুই-পাস counter, দুটো 🔁 🧠 (Einstellung)
- [ ] ১০′ দুই-পাস কেন দুদিক থেকে লাগে 🧠 (Feynman)

> **দিন শেষে:** দুই পদ্ধতি?

### দিন ০৫৯ · Sliding Window Maximum

- [ ] ৪৫′ DSA ৬৮/১১০ — **Sliding Window Maximum** (LC 239 · ৪.৪ Sliding Window Maximum) — heap আগে (O(n log k)), তারপর deque 🔁 🧠 (Einstellung · Chunking)
- [ ] ১০′ JS-এ `shift()` O(n) — interview-তে কীভাবে বলবেন 🧠 (Everything is a game)

> **দিন শেষে:** heap আর deque দুটোই?

### দিন ০৬০ · Serialize and Deserialize Binary Tree

- [ ] ৪৫′ DSA ৬৯/১১০ — **Serialize and Deserialize Binary Tree** (LC 297 · ৫.১ Tree Traversal) — format আগে interviewer-এর সাথে ঠিক করার মতো বলুন 🔁 🧠 (Everything is a game)
- [ ] ১০′ BFS আর preorder — কোন format কেন 🧠 (Concepts vs Facts)

> **দিন শেষে:** format-এর সিদ্ধান্ত বলা গেছে?

### দিন ০৬১ · Binary Tree Maximum Path Sum

- [ ] ৪৫′ ⚑ DSA ৭০/১১০ — **Binary Tree Maximum Path Sum** (LC 124 · ৫.৩ Path Sum) — "যা ফেরত দিই" আর "যা দিয়ে উত্তর আপডেট" আলাদা; Diameter-এর বড় ভাই 🔁 🧠 (Chunking · Trunk based knowledge)
- [ ] ১০′ *"Return one side, update with both sides"* — ব্যাখ্যা 🧠 (Feynman)

> **দিন শেষে:** ৭০টা শেষ?

### দিন ০৬২ · mock — পুরো ব্লক

- [ ] ৪৫′ ⚑ mock — ব্লক ২-এর ২০টা থেকে চোখ বন্ধ করে একটা; সঙ্গী থাকলে সে (⏳) 🧠 (Interleaving · Community)
- [ ] ১০′ চার mock পাশাপাশি — কী বদলেছে 🧠 (Feedback · Compound learning)

> **দিন শেষে:** কী বদলেছে, এক লাইনে?

### দিন ০৬৩ · ব্লক ২-এর হিসাব

- [ ] ১৫′ ব্লক ২-এর হিসাব — ২০টা hard; কোন ৩টা ঝালাইয়ে বারবার "আটকে গেছি"? ওগুলো ব্লক ৬-এর তালিকায় 🧠 (Deliberate practice · It's all in the frame)
- [ ] ১০′ ছোট একটা পুরস্কার, আর একটা ফাঁকা সন্ধ্যা — কোনো DSA নয় 🧠 (It pays to be not busy · Stakes & Rewards)

> **দিন শেষে:** ব্লক ৬-এর তালিকায় ৩টা?
