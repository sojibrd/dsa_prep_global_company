# ব্লক ৯ — DP, Greedy, Trie, Design

*দিন ১২৭–১৫৪ · knapsack · LCS · LIS · edit distance · interval · state machine · bitmask · greedy · trie · cache · mock #৫*

সবচেয়ে বড় ব্লক। DP-র প্রতিটা প্রবলেমে একই তিন প্রশ্ন, কোডের আগে: **state কী? transition কী? base case কী?** তারপর top-down memo, তারপর bottom-up, সময় থাকলে space কমানো। শেষ সপ্তাহে greedy, trie আর design — interview-এর "design X with O(1)" প্রশ্ন।

DP ধীরে বসে। প্রথম সপ্তাহে ৩০′-এ কোড না হওয়াটা স্বাভাবিক; state-টা ঠিক বলতে পারলেই সেদিনের জয়। 🧠 (Chunk the subject · Learning vs Winning)

> **ব্লক শেষে:** ২০টা, mock #৫, আর যেকোনো DP-তে তিন প্রশ্ন আগে লেখা হচ্ছে?

### দিন ১২৭ · Partition Equal Subset Sum

- [ ] ৩০′ DSA ৯১/১১০ — **Partition Equal Subset Sum** (LC 416 · ৯.২ 0/1 Knapsack) — তিন প্রশ্ন আগে; তারপর উল্টো লুপ কেন 🔁 🧠 (Chunk the subject · Deliberate practice)
- [ ] ১৫′ ইংরেজি — সোজা লুপ দিলে কী ভুল হয় — ছোট উদাহরণে হাতে, তারপর মুখে 🧠 (The power of senses)

> **দিন শেষে:** তিন প্রশ্ন আগে লেখা?

### দিন ১২৮ · Coin Change

- [ ] ৩০′ DSA ৯২/১১০ — **Coin Change** (LC 322 · ৯.৩ Unbounded Knapsack) — greedy কেন ভুল, counterexample আগে 🔁 🧠 (Einstellung)
- [ ] ১৫′ ইংরেজি — গতকালকের সাথে একটাই পার্থক্য — লুপের দিক; কেন 🧠 (Chunking)

> **দিন শেষে:** counterexample?

### দিন ১২৯ · Longest Common Subsequence

- [ ] ৩০′ DSA ৯৩/১১০ — **Longest Common Subsequence** (LC 1143 · ৯.৪ LCS) — কাগজে ৫×৩ টেবিল ভরে 🔁 🧠 (The power of senses)
- [ ] ১৫′ ইংরেজি — দুই row-এ space কমানো 🧠 (Concepts vs Facts)

> **দিন শেষে:** টেবিল হাতে ভরা?

### দিন ১৩০ · Longest Palindromic Subsequence

- [ ] ৩০′ DSA ৯৪/১১০ — **Longest Palindromic Subsequence** (LC 516 · ৯.৪ LCS) — LCS(s, reverse(s)), তারপর interval DP ভার্সনও 🔁 🧠 (Einstellung · Chunking)
- [ ] ১৫′ ইংরেজি — দুই পদ্ধতির state কীভাবে আলাদা 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই state?

### দিন ১৩১ · Longest Increasing Subsequence

- [ ] ৩০′ DSA ৯৫/১১০ — **Longest Increasing Subsequence** (LC 300 · ৯.৫ LIS) — O(n²) আগে, তারপর O(n log n) 🔁 🧠 (Deliberate practice · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — `tails` array-র মানে — আসল subsequence নয়, তবু কেন দৈর্ঘ্য ঠিক 🧠 (Feynman)

> **দিন শেষে:** `tails`-এর মানে বলা গেছে?

### দিন ১৩২ · সপ্তাহের পাঁচটা DP

- [ ] ১৫′ এই সপ্তাহের ৫টা DP — প্রতিটায় state · transition · base, না দেখে, জোরে; তারপর এক পাতায় পাঁচ সারি 🧠 (Test yourself · Chunking)

> **দিন শেষে:** পাঁচ সারির পাতা?

### দিন ১৩৩ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — state ভুল, না transition? মাথা ভার লাগছে? হাঁটতে বেরোন, ফোন ছাড়া — কোনো প্রবলেম নয় 🧠 (Feedback · Focus vs Diffuse)

> **দিন শেষে:** কোথায় আটকাচ্ছেন, লেখা?

### দিন ১৩৪ · Unique Paths

- [ ] ৩০′ DSA ৯৬/১১০ — **Unique Paths** (LC 62 · ৯.৮ Grid Paths) — ১৫′-এর লক্ষ্য; তারপর combinatorics ভার্সন মুখে 🔁 🧠 (Parkinson's law · Einstellung)
- [ ] ১৫′ ইংরেজি — `C(m+n−2, m−1)` কেন 🧠 (Feynman)

> **দিন শেষে:** ১৫′-এ?

### দিন ১৩৫ · House Robber III

- [ ] ৩০′ DSA ৯৭/১১০ — **House Robber III** (LC 337 · ৯.৭ House Robber) — tree DP; প্রতিটা নোড জোড়া ফেরত দেয় 🔁 🧠 (Chunking · Trunk based knowledge)
- [ ] ১৫′ ইংরেজি — memo map ভার্সন আর pair ভার্সন — কোনটা পরিষ্কার 🧠 (Einstellung)

> **দিন শেষে:** pair ভার্সন?

### দিন ১৩৬ · Edit Distance

- [ ] ৩০′ DSA ৯৮/১১০ — **Edit Distance** (LC 72 · ৯.৬ Edit Distance) — তিন অপারেশন = তিন দিক; কাগজে `horse`/`ros` 🔁 🧠 (The power of senses · The obstacle)
- [ ] ১৫′ ইংরেজি — কোন কোষ কোন অপারেশন — insert, delete, replace 🧠 (Concepts vs Facts)

> **দিন শেষে:** তিন দিকের মানে?

### দিন ১৩৭ · Best Time with Cooldown

- [ ] ৩০′ DSA ৯৯/১১০ — **Best Time to Buy and Sell Stock with Cooldown** (LC 309 · ৯.১০ State Machine DP) — state diagram আগে কাগজে 🔁 🧠 (The power of senses)
- [ ] ১৫′ ইংরেজি — fee থাকলে diagram-এ কী বদলায় 🧠 (Einstellung)

> **দিন শেষে:** diagram?

### দিন ১৩৮ · Partition to K Equal Sum Subsets

- [ ] ৩০′ DSA ১০০/১১০ — **Partition to K Equal Sum Subsets** (LC 698 · ৯.১১ Bitmask / Digit DP) — `n ≤ 16` দেখেই bitmask; আগে backtracking ভার্সন 🔁 🧠 (Everything is a game · Einstellung)
- [ ] ১৫′ ইংরেজি — constraint দেখে technique — N ≤ 20-এর নিয়ম 🧠 (Chunking)

> **দিন শেষে:** ১০০টা?

### দিন ১৩৯ · mock #৫

- [ ] ৪৫′ ⚑ mock — ব্লক ৯-এর DP থেকে একটা; প্রথম ৫′ শুধু state আর transition, জোরে; সঙ্গী থাকলে সে (⏳) 🧠 (Community · Everything is a game)
- [ ] ১৫′ মন্তব্য বা রেকর্ডিং — state আগে বলা হয়েছিল? একটা বদল 🧠 (Feedback)

> **দিন শেষে:** state আগে বলা?

### দিন ১৪০ · সপ্তাহের হিসাব

- [ ] ১০′ DP-র পাতায় পাঁচ সারি যোগ; কোন দুটো গুলিয়ে যায়। শেষ ১০টা বাকি — "প্রায় শেষ" অনুভূতিতে তাড়াহুড়ো নয় 🧠 (Chunking · Efficiency trumps grit)

> **দিন শেষে:** গুলিয়ে যাওয়া দুটো?

### দিন ১৪১ · Burst Balloons

- [ ] ৩০′ DSA ১০১/১১০ — **Burst Balloons** (LC 312 · ৯.৯ Interval DP) — "কোনটা আগে" নয়, "কোনটা শেষে" — উল্টো চিন্তা 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১৫′ ইংরেজি — কেন "প্রথমে কোনটা" ভাবলে subproblem স্বাধীন থাকে না 🧠 (Feynman)

> **দিন শেষে:** উল্টো চিন্তার কারণ?

### দিন ১৪২ · Regular Expression Matching

- [ ] ৩০′ DSA ১০২/১১০ — **Regular Expression Matching** (LC 10 · ৯.৬ Edit Distance) — `*`-এর দুই choice; recursion + memo আগে 🔁 🧠 (Learning vs Winning · Chunk the subject)
- [ ] ১৫′ ইংরেজি — `a*` খালি মেলানোর base case 🧠 (Everything is a game)

> **দিন শেষে:** `*`-এর দুই choice বলা গেছে?

### দিন ১৪৩ · Frog Jump

- [ ] ৩০′ DSA ১০৩/১১০ — **Frog Jump** (LC 403 · ৯.১ Fibonacci Style) — state দুই মাত্রার: (পাথর, শেষ লাফ) 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — কেন শুধু পাথর state হিসেবে যথেষ্ট নয় 🧠 (Concepts vs Facts)

> **দিন শেষে:** state-এর দ্বিতীয় মাত্রার কারণ?

### দিন ১৪৪ · Candy

- [ ] ৩০′ DSA ১০৪/১১০ — **Candy** (LC 135 · ১০.১ Greedy) — দুই পাস; কেন এক পাস যথেষ্ট নয় 🔁 🧠 (Einstellung)
- [ ] ১৫′ ইংরেজি — greedy আর DP — কখন কোনটা 🧠 (Chunking)

> **দিন শেষে:** এক পাস কেন ভাঙে?

### দিন ১৪৫ · Implement Trie

- [ ] ৩০′ DSA ১০৫/১১০ — **Implement Trie** (LC 208 · ১০.২ Trie) — ১৫′-এর লক্ষ্য; বাকি সময়ে delete মুখে 🔁 🧠 (Parkinson's law)
- [ ] ১৫′ ইংরেজি — Trie vs HashSet of prefixes — memory trade-off 🧠 (Concepts vs Facts)

> **দিন শেষে:** ১৫′-এ?

### দিন ১৪৬ · কম মনে থাকা hard

- [ ] ১৫′ Burst Balloons বা Regex, যেটা কম মনে আছে — ফাঁকা কাগজে শুধু state আর recurrence, ইংরেজিতে জোরে 🧠 (Test yourself · Deliberate practice)

> **দিন শেষে:** recurrence না দেখে?

### দিন ১৪৭ · সপ্তাহের হিসাব

- [ ] ১০′ ব্লক ১০-এর তালিকা হালনাগাদ — এ পর্যন্ত কোন ১০টা বারবার আটকায়; ২ মিনিটের রেকর্ডিং — DP-র তিন প্রশ্ন, যেকোনো প্রবলেমে 🧠 (Deliberate practice · Feynman)

> **দিন শেষে:** ১০টার তালিকা?

### দিন ১৪৮ · Word Search II

- [ ] ৩০′ DSA ১০৬/১১০ — **Word Search II** (LC 212 · ১০.২ Trie) — Word Search + Trie; pruning — পাওয়া শব্দ Trie থেকে মুছুন 🔁 🧠 (Chunking · Trunk based knowledge)
- [ ] ১৫′ ইংরেজি — Trie ছাড়া প্রতিটা শব্দে আলাদা DFS — complexity তুলনা 🧠 (Concepts vs Facts)

> **দিন শেষে:** pruning?

### দিন ১৪৯ · LRU Cache

- [ ] ৩০′ DSA ১০৭/১১০ — **LRU Cache** (LC 146 · ১০.৩ Design) — `Map` ভার্সন, তারপর doubly linked list ভার্সন নিজে 🔁 🧠 (Everything is a game · Test yourself)
- [ ] ১৫′ ইংরেজি — interviewer "no built-in ordered map" বললে — DLL-এর দুটো sentinel কেন 🧠 (Feynman)

> **দিন শেষে:** DLL ভার্সন?

### দিন ১৫০ · LFU Cache

- [ ] ৩০′ DSA ১০৮/১১০ — **LFU Cache** (LC 460 · ১০.৩ Design) — কঠিনতম design; data structure-এর ছবি আগে 🔁 🧠 (The power of senses · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — `minFreq` কখন রিসেট হয় 🧠 (Concepts vs Facts)

> **দিন শেষে:** ছবিটা?

### দিন ১৫১ · Construct Binary Tree — মিশিয়ে

- [ ] ৩০′ DSA ১০৯/১১০ · মিশ্র — **Construct Binary Tree from Preorder and Inorder Traversal** (LC 105) — প্যাটার্ন লেখা নেই; আগে নিজে বলুন 🔁 🧠 (Interleaving · Test yourself)
- [ ] ১৫′ ইংরেজি — inorder index-এর map কেন O(n²) থেকে O(n)-এ নামায় 🧠 (Concepts vs Facts)

> **দিন শেষে:** প্যাটার্ন টিকের আগে ঠিক?

### দিন ১৫২ · Text Justification — শেষ নতুন

- [ ] ৩০′ ⚑ DSA ১১০/১১০ — **Text Justification** (LC 68 · ১০.৩ Design) — algorithm নয়, খুঁতখুঁতে simulation; edge case আগে তালিকা করুন 🔁 🧠 (Everything is a game · Deliberate practice)
- [ ] ১৫′ ইংরেজি — ১১০টা শেষ। কোন ৩টা শেখার পরে সবচেয়ে বদলেছেন — রেকর্ড 🧠 (Compound learning · Feedback)

> **দিন শেষে:** ১১০টা শেষ?

### দিন ১৫৩ · পুরো পথ থেকে পাঁচটা

- [ ] ১৫′ ১১০টা থেকে চোখ বন্ধ করে ৫টা — pattern, approach, complexity, ইংরেজিতে জোরে 🧠 (Interleaving · Test yourself)

> **দিন শেষে:** পাঁচটার কয়টা ঠিক?

### দিন ১৫৪ · ব্লক ৯-এর হিসাব

- [ ] ১০′ ⚑ ব্লক ১০-এর তালিকা চূড়ান্ত — বারবার আটকানো ১০টা; এখন থেকে নতুন প্রবলেম নয়। ৫১টা প্যাটার্নের ঘর — মনে মনে হেঁটে সবগুলো 🧠 (Deliberate practice · 10,000 hours rule · Method of loci)

> **দিন শেষে:** ১০টার তালিকা চূড়ান্ত?
