# ব্লক ৫ — DP, Greedy, Trie, Design

*দিন ০৯২–১১৯ · knapsack · LCS · LIS · edit distance · interval · state machine · bitmask · greedy · trie · cache*

সবচেয়ে বড় ব্লক। DP-র প্রতিটা প্রবলেমে একই তিন প্রশ্ন, কোডের আগে: **state কী? transition কী? base case কী?** তারপর top-down memo, তারপর bottom-up, সময় থাকলে space কমানো। শেষ সপ্তাহে greedy, trie আর design — interview-এর "design X with O(1)" প্রশ্ন।

DP ধীরে বসে। প্রথম সপ্তাহে ৩৫′-এ কোড না হওয়াটা স্বাভাবিক; state-টা ঠিক বলতে পারলেই সেদিনের জয়। 🧠 (Chunk the subject · Learning vs Winning)

> **ব্লক শেষে:** ২০টা, চার mock, আর যেকোনো DP-তে তিন প্রশ্ন আগে লেখা হচ্ছে?

### দিন ০৯২ · Partition Equal Subset Sum

- [ ] ৪৫′ DSA ৯১/১১০ — **Partition Equal Subset Sum** (LC 416 · ৯.২ 0/1 Knapsack) — তিন প্রশ্ন আগে; তারপর উল্টো লুপ কেন 🔁 🧠 (Chunk the subject · Deliberate practice)
- [ ] ১০′ সোজা লুপ দিলে কী ভুল হয় — ছোট উদাহরণে হাতে 🧠 (The power of senses)

> **দিন শেষে:** তিন প্রশ্ন আগে লেখা?

### দিন ০৯৩ · Coin Change

- [ ] ৪৫′ DSA ৯২/১১০ — **Coin Change** (LC 322 · ৯.৩ Unbounded Knapsack) — greedy কেন ভুল, counterexample আগে 🔁 🧠 (Einstellung)
- [ ] ১০′ গতকালকের সাথে একটাই পার্থক্য — লুপের দিক; কেন 🧠 (Chunking)

> **দিন শেষে:** counterexample?

### দিন ০৯৪ · Longest Common Subsequence

- [ ] ৪৫′ DSA ৯৩/১১০ — **Longest Common Subsequence** (LC 1143 · ৯.৪ LCS) — কাগজে ৫×৩ টেবিল ভরে 🔁 🧠 (The power of senses)
- [ ] ১০′ দুই row-এ space কমানো — মুখে 🧠 (Concepts vs Facts)

> **দিন শেষে:** টেবিল হাতে ভরা?

### দিন ০৯৫ · Longest Palindromic Subsequence

- [ ] ৪৫′ DSA ৯৪/১১০ — **Longest Palindromic Subsequence** (LC 516 · ৯.৪ LCS) — LCS(s, reverse(s)), তারপর interval DP ভার্সনও 🔁 🧠 (Einstellung · Chunking)
- [ ] ১০′ দুই পদ্ধতির state কীভাবে আলাদা 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই state?

### দিন ০৯৬ · Longest Increasing Subsequence

- [ ] ৪৫′ DSA ৯৫/১১০ — **Longest Increasing Subsequence** (LC 300 · ৯.৫ LIS) — O(n²) আগে, তারপর O(n log n) 🔁 🧠 (Deliberate practice · Learning vs Winning)
- [ ] ১০′ `tails` array-র মানে — আসল subsequence নয়, তবু কেন দৈর্ঘ্য ঠিক 🧠 (Feynman)

> **দিন শেষে:** `tails`-এর মানে বলা গেছে?

### দিন ০৯৭ · mock — DP

- [ ] ৪৫′ ⚑ mock — এই সপ্তাহের একটা DP; প্রথম ৫′ শুধু state আর transition, জোরে 🧠 (Everything is a game · Deep work)
- [ ] ১০′ রেকর্ডিং 🧠 (Feedback)

> **দিন শেষে:** state আগে বলা?

### দিন ০৯৮ · সপ্তাহের হিসাব

- [ ] ১০′ DP-র এক পাতা: প্রতিটা প্রবলেমে state · transition · base, পাঁচ সারি 🧠 (Chunking)
- [ ] ১০′ মাথা ভার লাগছে? হাঁটতে বেরোন, ফোন ছাড়া — কোনো প্রবলেম নয় 🧠 (Focus vs Diffuse · Be bored)

> **দিন শেষে:** পাঁচ সারির পাতা?

### দিন ০৯৯ · Unique Paths

- [ ] ৪৫′ DSA ৯৬/১১০ — **Unique Paths** (LC 62 · ৯.৮ Grid Paths) — ১৫′-এর লক্ষ্য; তারপর combinatorics ভার্সন মুখে 🔁 🧠 (Parkinson's law · Einstellung)
- [ ] ১০′ `C(m+n−2, m−1)` কেন 🧠 (Feynman)

> **দিন শেষে:** ১৫′-এ?

### দিন ১০০ · House Robber III

- [ ] ৪৫′ DSA ৯৭/১১০ — **House Robber III** (LC 337 · ৯.৭ House Robber) — tree DP; প্রতিটা নোড জোড়া ফেরত দেয় 🔁 🧠 (Chunking · Trunk based knowledge)
- [ ] ১০′ memo map ভার্সন আর pair ভার্সন — কোনটা পরিষ্কার 🧠 (Einstellung)

> **দিন শেষে:** pair ভার্সন?

### দিন ১০১ · Edit Distance

- [ ] ৪৫′ DSA ৯৮/১১০ — **Edit Distance** (LC 72 · ৯.৬ Edit Distance) — তিন অপারেশন = তিন দিক; কাগজে `horse`/`ros` 🔁 🧠 (The power of senses · The obstacle)
- [ ] ১০′ কোন কোষ কোন অপারেশন — insert, delete, replace 🧠 (Concepts vs Facts)

> **দিন শেষে:** তিন দিকের মানে?

### দিন ১০২ · Best Time with Cooldown

- [ ] ৪৫′ DSA ৯৯/১১০ — **Best Time to Buy and Sell Stock with Cooldown** (LC 309 · ৯.১০ State Machine DP) — state diagram আগে কাগজে 🔁 🧠 (The power of senses)
- [ ] ১০′ fee থাকলে diagram-এ কী বদলায় 🧠 (Einstellung)

> **দিন শেষে:** diagram?

### দিন ১০৩ · Partition to K Equal Sum Subsets

- [ ] ৪৫′ DSA ১০০/১১০ — **Partition to K Equal Sum Subsets** (LC 698 · ৯.১১ Bitmask / Digit DP) — `n ≤ 16` দেখেই bitmask; আগে backtracking ভার্সন 🔁 🧠 (Everything is a game · Einstellung)
- [ ] ১০′ constraint দেখে technique — N ≤ 20-এর নিয়ম 🧠 (Chunking)

> **দিন শেষে:** ১০০টা?

### দিন ১০৪ · mock — DP মিশিয়ে

- [ ] ৪৫′ ⚑ mock — ব্লক ৫-এর ১০টা থেকে একটা; সঙ্গী থাকলে সে (⏳) 🧠 (Community · Interleaving)
- [ ] ১০′ মন্তব্য বা রেকর্ডিং 🧠 (Feedback)

> **দিন শেষে:** মন্তব্য?

### দিন ১০৫ · সপ্তাহের হিসাব

- [ ] ১০′ DP-র পাতায় পাঁচ সারি যোগ; কোন দুটো গুলিয়ে যায় 🧠 (Chunking · Feedback)
- [ ] ১০′ শেষ ১০টা বাকি — "প্রায় শেষ" অনুভূতিতে তাড়াহুড়ো নয় 🧠 (Efficiency trumps grit)

> **দিন শেষে:** গুলিয়ে যাওয়া দুটো?

### দিন ১০৬ · Burst Balloons

- [ ] ৪৫′ DSA ১০১/১১০ — **Burst Balloons** (LC 312 · ৯.৯ Interval DP) — "কোনটা আগে" নয়, "কোনটা শেষে" — উল্টো চিন্তা 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১০′ কেন "প্রথমে কোনটা" ভাবলে subproblem স্বাধীন থাকে না 🧠 (Feynman)

> **দিন শেষে:** উল্টো চিন্তার কারণ?

### দিন ১০৭ · Regular Expression Matching

- [ ] ৪৫′ DSA ১০২/১১০ — **Regular Expression Matching** (LC 10 · ৯.৬ Edit Distance) — `*`-এর দুই choice; recursion + memo আগে 🔁 🧠 (Learning vs Winning · Chunk the subject)
- [ ] ১০′ `a*` খালি মেলানোর base case 🧠 (Everything is a game)

> **দিন শেষে:** `*`-এর দুই choice বলা গেছে?

### দিন ১০৮ · Frog Jump

- [ ] ৪৫′ DSA ১০৩/১১০ — **Frog Jump** (LC 403 · ৯.১ Fibonacci Style) — state দুই মাত্রার: (পাথর, শেষ লাফ) 🔁 🧠 (Deliberate practice)
- [ ] ১০′ কেন শুধু পাথর state হিসেবে যথেষ্ট নয় 🧠 (Concepts vs Facts)

> **দিন শেষে:** state-এর দ্বিতীয় মাত্রার কারণ?

### দিন ১০৯ · Candy

- [ ] ৪৫′ DSA ১০৪/১১০ — **Candy** (LC 135 · ১০.১ Greedy) — দুই পাস; কেন এক পাস যথেষ্ট নয় 🔁 🧠 (Einstellung)
- [ ] ১০′ greedy আর DP — কখন কোনটা, এক পাতায় 🧠 (Chunking)

> **দিন শেষে:** এক পাস কেন ভাঙে?

### দিন ১১০ · Implement Trie

- [ ] ৪৫′ DSA ১০৫/১১০ — **Implement Trie** (LC 208 · ১০.২ Trie) — ১৫′-এর লক্ষ্য; বাকি সময়ে delete মুখে 🔁 🧠 (Parkinson's law)
- [ ] ১০′ Trie vs HashSet of prefixes — memory trade-off 🧠 (Concepts vs Facts)

> **দিন শেষে:** ১৫′-এ?

### দিন ১১১ · mock

- [ ] ৪৫′ ⚑ mock — Burst Balloons বা Regex, যেটা কম মনে আছে; রেকর্ড 🧠 (Test yourself · Deliberate practice)
- [ ] ১০′ রেকর্ডিং 🧠 (Feedback)

> **দিন শেষে:** রেকর্ডিং শুনেছেন?

### দিন ১১২ · সপ্তাহের হিসাব

- [ ] ১০′ ব্লক ৬-এর তালিকা হালনাগাদ — এ পর্যন্ত কোন ১০টা বারবার আটকায় 🧠 (Deliberate practice)
- [ ] ১০′ ২ মিনিটের রেকর্ডিং — DP-র তিন প্রশ্ন, যেকোনো প্রবলেমে 🧠 (Feynman)

> **দিন শেষে:** ১০টার তালিকা?

### দিন ১১৩ · Word Search II

- [ ] ৪৫′ DSA ১০৬/১১০ — **Word Search II** (LC 212 · ১০.২ Trie) — Word Search + Trie; pruning — পাওয়া শব্দ Trie থেকে মুছুন 🔁 🧠 (Chunking · Trunk based knowledge)
- [ ] ১০′ Trie ছাড়া প্রতিটা শব্দে আলাদা DFS — complexity তুলনা 🧠 (Concepts vs Facts)

> **দিন শেষে:** pruning?

### দিন ১১৪ · LRU Cache

- [ ] ৪৫′ DSA ১০৭/১১০ — **LRU Cache** (LC 146 · ১০.৩ Design) — `Map` ভার্সন, তারপর doubly linked list ভার্সন নিজে 🔁 🧠 (Everything is a game · Test yourself)
- [ ] ১০′ interviewer "no built-in ordered map" বললে — DLL-এর দুটো sentinel কেন 🧠 (Feynman)

> **দিন শেষে:** DLL ভার্সন?

### দিন ১১৫ · LFU Cache

- [ ] ৪৫′ DSA ১০৮/১১০ — **LFU Cache** (LC 460 · ১০.৩ Design) — কঠিনতম design; data structure-এর ছবি আগে 🔁 🧠 (The power of senses · Learning vs Winning)
- [ ] ১০′ `minFreq` কখন রিসেট হয় 🧠 (Concepts vs Facts)

> **দিন শেষে:** ছবিটা?

### দিন ১১৬ · Construct Binary Tree — মিশিয়ে

- [ ] ৪৫′ DSA ১০৯/১১০ · মিশ্র — **Construct Binary Tree from Preorder and Inorder Traversal** (LC 105) — প্যাটার্ন লেখা নেই; আগে নিজে বলুন 🔁 🧠 (Interleaving · Test yourself)
- [ ] ১০′ inorder index-এর map কেন O(n²) থেকে O(n)-এ নামায় 🧠 (Concepts vs Facts)

> **দিন শেষে:** প্যাটার্ন টিকের আগে ঠিক?

### দিন ১১৭ · Text Justification — শেষ নতুন

- [ ] ৪৫′ ⚑ DSA ১১০/১১০ — **Text Justification** (LC 68 · ১০.৩ Design) — algorithm নয়, খুঁতখুঁতে simulation; edge case আগে তালিকা করুন 🔁 🧠 (Everything is a game · Deliberate practice)
- [ ] ১০′ ১১০টা শেষ। কোন ৩টা শেখার পরে সবচেয়ে বদলেছেন — রেকর্ড 🧠 (Compound learning · Feedback)

> **দিন শেষে:** ১১০টা শেষ?

### দিন ১১৮ · mock — পুরো পথ

- [ ] ৪৫′ ⚑ mock — ১১০টা থেকে চোখ বন্ধ করে একটা; সঙ্গী থাকলে সে (⏳) 🧠 (Interleaving · Community)
- [ ] ১০′ মন্তব্য বা রেকর্ডিং 🧠 (Feedback)

> **দিন শেষে:** মন্তব্য?

### দিন ১১৯ · ব্লক ৫-এর হিসাব

- [ ] ১৫′ ⚑ ব্লক ৬-এর তালিকা চূড়ান্ত — বারবার আটকানো ১০টা; এখন থেকে নতুন প্রবলেম নয় 🧠 (Deliberate practice · 10,000 hours rule)
- [ ] ১০′ ৫১টা প্যাটার্নের ঘর — মনে মনে হেঁটে সবগুলো 🧠 (Method of loci)

> **দিন শেষে:** ১০টার তালিকা চূড়ান্ত?
