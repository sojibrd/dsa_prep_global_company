# ব্লক ৪ — ভিত্তি ছড়ানো

*দিন ০৪৩–০৫৬ · টপিক ১–৫-এর বাকি ভিত্তি · প্রথম heap · mock #২*

প্রথম ৩০টা যেখানে ছোঁয়নি — merge intervals, Kadane, prefix sum, dummy node, min stack, BST validation, LCA — সেগুলো এখানে, আর শেষে প্রথম heap। প্রতিটা নতুন প্যাটার্ন, তাই নাম লেখা থাকে। পরের ব্লকগুলোর hard প্রবলেম এই ভিত্তির ওপর দাঁড়াবে।

আগে ক্লু পড়ুন, demo বন্ধ; ২০′-এ না হলে demo, পড়ে বন্ধ করে নিজে। দিন ০৫৫-এ mock #২। 🧠 (Deliberate practice · Trunk based knowledge)

> **ব্লক শেষে:** ১০টা নতুন, mock #২, আর MinHeap স্মৃতি থেকে লেখা যায়?

### দিন ০৪৩ · Merge Intervals

- [ ] ৩০′ DSA ৩১/১১০ — **Merge Intervals** (LC 56 · ১.৫ Merge Intervals) — ক্লু পড়ে টাইমার, পাঁচ ধাপ 🔁 🧠 (Deliberate practice · Test yourself)
- [ ] ১৫′ ইংরেজি — কেন আগে sort, আর sort-এর খরচ complexity-তে কোথায় 🧠 (Feynman)

> **দিন শেষে:** ৩০′-এ চলেছে?

### দিন ০৪৪ · Maximum Subarray

- [ ] ৩০′ DSA ৩২/১১০ — **Maximum Subarray** (LC 53 · ১.৬ Kadane's Algorithm) — তারপর divide-and-conquer ভার্সন মুখে 🔁 🧠 (Einstellung)
- [ ] ১৫′ ইংরেজি — *"At each index we either extend or restart, because…"*; সব সংখ্যা negative হলে? 🧠 (Concepts vs Facts · Everything is a game)

> **দিন শেষে:** সব-negative-এর test?

### দিন ০৪৫ · Subarray Sum Equals K

- [ ] ৩০′ DSA ৩৩/১১০ — **Subarray Sum Equals K** (LC 560 · ১.৩ Prefix Sum) — negative থাকলে sliding window কেন ভাঙে, আগে constraint থেকে বলুন 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১৫′ ইংরেজি — `seen.set(0, 1)` কেন 🧠 (Feynman)

> **দিন শেষে:** খালি prefix-এর কারণটা লেখা?

### দিন ০৪৬ · Longest Repeating Character Replacement

- [ ] ৩০′ DSA ৩৪/১১০ — **Longest Repeating Character Replacement** (LC 424 · ১.২ Sliding Window) — চেনা প্যাটার্ন, কঠিন শর্ত 🔁 🧠 (Learning vs Winning · The obstacle)
- [ ] ১৫′ ইংরেজি — *"The window is valid while length − maxCount ≤ k, because…"* 🧠 (Feynman)

> **দিন শেষে:** শর্তের কারণটা বলা গেছে?

### দিন ০৪৭ · Merge Two Sorted Lists

- [ ] ৩০′ DSA ৩৫/১১০ — **Merge Two Sorted Lists** (LC 21 · ৩.২ Dummy Node Technique) — ১০′-এর লক্ষ্য; বাকি সময়ে recursive ভার্সন 🔁 🧠 (Parkinson's law · Einstellung)
- [ ] ১৫′ ইংরেজি — dummy ছাড়া আর dummy দিয়ে — কোনটা interview-তে কম bug-প্রবণ, কেন 🧠 (Concepts vs Facts)

> **দিন শেষে:** ১০′-এ?

### দিন ০৪৮ · আটটা, মিশিয়ে

- [ ] ১৫′ এই সপ্তাহের ৫টা + ব্লক ৩-এর ৩টা এলোমেলো — pattern আর complexity, ইংরেজিতে জোরে; নতুন প্যাটার্নগুলো chunk-এর পাতায় 🧠 (Test yourself · Chunking)

> **দিন শেষে:** আটটার কয়টা ঠিক?

### দিন ০৪৯ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — এই সপ্তাহে কোন প্যাটার্ন নতুন লাগল; তারপর ২ মিনিটের রেকর্ডিং — Kadane বা prefix sum, না দেখে 🧠 (Feedback · Test yourself)

> **দিন শেষে:** রেকর্ডিং শুনেছেন?

### দিন ০৫০ · Min Stack

- [ ] ৩০′ DSA ৩৬/১১০ — **Min Stack** (LC 155 · ৪.৩ Design Problems) — design: interface আর invariant আগে বলুন, তারপর কোড 🔁 🧠 (Everything is a game)
- [ ] ১৫′ ইংরেজি — দুই stack ভার্সন আর pair ভার্সন — কোনটা কেন 🧠 (Einstellung)

> **দিন শেষে:** interface আগে বলা হয়েছিল?

### দিন ০৫১ · Search in Rotated Sorted Array

- [ ] ৩০′ DSA ৩৭/১১০ — **Search in Rotated Sorted Array** (LC 33 · ২.৪ Bitonic / Rotated Array) — কাগজে তিনটা rotation এঁকে 🔁 🧠 (The power of senses · Deliberate practice)
- [ ] ১৫′ ইংরেজি — follow-up: duplicate থাকলে কেন ভাঙে, আর worst case কী হয় 🧠 (Everything is a game)

> **দিন শেষে:** duplicate-এর follow-up উত্তর?

### দিন ০৫২ · Validate BST

- [ ] ৩০′ DSA ৩৮/১১০ — **Validate Binary Search Tree** (LC 98 · ৫.৪ Validation & Properties) — inorder দিয়ে একবার, range দিয়ে একবার; parent-child তুলনা কেন ভুল, আগে counterexample 🔁 🧠 (Einstellung · Concepts vs Facts)
- [ ] ১৫′ ইংরেজি — দুই পদ্ধতির trade-off — follow-up প্রশ্নের উত্তরের মতো করে 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই পদ্ধতির trade-off বলা গেছে?

### দিন ০৫৩ · Lowest Common Ancestor

- [ ] ৩০′ DSA ৩৯/১১০ — **Lowest Common Ancestor of a Binary Tree** (LC 236 · ৫.৫ Lowest Common Ancestor) 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — recursion কী ফেরত দেয় — এক বাক্যে; BST হলে কী সহজ হয় 🧠 (Concepts vs Facts · Einstellung)

> **দিন শেষে:** ফেরত মানটা এক বাক্যে?

### দিন ০৫৪ · প্রথম heap

- [ ] ৩০′ DSA ৪০/১১০ — **Kth Largest Element in an Array** (LC 215 · ৬.১ Top K Elements) — JS-এ heap নেই; আজ MinHeap class নিজে লিখুন, তারপর প্রবলেম; quickselect-এর ধারণা মুখে 🔁 🧠 (The first 20 hours · Einstellung)
- [ ] ১৫′ ইংরেজি — interview-তে: *"I'll assume a priority queue with push/pop in log n"*; quickselect-এর average আর worst case কেন আলাদা 🧠 (Everything is a game · Concepts vs Facts)

> **দিন শেষে:** MinHeap চলেছে?

### দিন ০৫৫ · mock #২

- [ ] ৪৫′ ⚑ mock — এই ব্লকের একটা, আগে না দেখে; সঙ্গী থাকলে সে interviewer (⏳), না থাকলে রেকর্ড 🧠 (Community · Everything is a game)
- [ ] ১৫′ mock #১-এর রেকর্ডিং আর আজকেরটা পাশাপাশি — চুপ কমেছে? একটা জিনিস পরের mock-এ বদলাবেন 🧠 (Feedback · Compound learning)

> **দিন শেষে:** একটা বদল লেখা?

### দিন ০৫৬ · ব্লক ৪-এর হিসাব

- [ ] ১০′ MinHeap স্মৃতি থেকে, ১০′ টাইমার — পরের ব্লকে রোজ লাগবে; তারপর এক লাইনে: কোন প্যাটার্ন এখনো ঘোলা 🔁 🧠 (Test yourself · It's all in the frame)

> **দিন শেষে:** ৪০টা, আর MinHeap না দেখে?
