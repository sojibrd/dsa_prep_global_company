# ব্লক ২ — List, Stack, Tree

*দিন ০১৫–০২৮ · Binary Search-এর বাকিটা · Linked List · Stack & Queue · Tree · mock #১*

আরও দশটা, এখনো প্যাটার্নের নাম পাশে লেখা — rotated array, binary search on answer, linked list-এর তিন কৌশল, stack, আর tree-র recursion। ব্লক শেষে টপিক ১–৫-এর **ভিত্তি** শেষ: ২০টা।

দিন ০২৭-এ প্রথম **mock** — ৪৫′, একটা প্রবলেম, রেকর্ড চালু। সপ্তাহ ৪-এ উৎসাহ কমবে — নতুনত্ব শেষ, অথচ এখনো "পারি" মনে হয় না। এটা dip, ভুল পথ নয়। 🧠 (The dip · System vs goal)

> **ব্লক শেষে:** ২০টা প্রবলেম, পাঁচ ধাপ, আর mock #১-এর রেকর্ডিং শোনা?

### দিন ০১৫ · Rotated array

- [ ] ৩০′ DSA ১১/১১০ — **Find Minimum in Rotated Sorted Array** (LC 153 · ২.৪ Bitonic / Rotated Array) — কাগজে তিনটা rotation এঁকে তারপর কোড; test-এ rotation না থাকার ঘটনা 🔁 🧠 (Deliberate practice · The power of senses)
- [ ] ১৫′ ইংরেজি — *"One half is always sorted, so…"* 🧠 (Feynman)

> **দিন শেষে:** rotation-ছাড়া array-তে চলেছে?

### দিন ০১৬ · Binary search on answer

- [ ] ৩০′ DSA ১২/১১০ — **Capacity to Ship Packages Within D Days** (LC 1011 · ২.২ Binary Search on Answer) — উত্তরের পরিসর আর "এই capacity-তে হয় কি" আলাদা function 🔁 🧠 (Learning vs Winning · The obstacle)
- [ ] ১৫′ ইংরেজি — "monotonic feasibility" — কেন binary search চলে, ৩ বাক্যে 🧠 (Feynman · Trunk based knowledge)

> **দিন শেষে:** "হয় কি না" function আলাদা?

### দিন ০১৭ · Reverse Linked List

- [ ] ৩০′ DSA ১৩/১১০ — **Reverse Linked List** (LC 206 · ৩.৩ In-Place Reversal) — iterative ১০′-এ, তারপর recursive ভার্সন 🔁 🧠 (Test yourself · Einstellung)
- [ ] ১৫′ ইংরেজি — recursive ভার্সনের space কেন O(n) — interviewer জিজ্ঞেস করবেই 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই ভার্সন?

### দিন ০১৮ · Middle of the Linked List

- [ ] ৩০′ DSA ১৪/১১০ — **Middle of the Linked List** (LC 876 · ৩.১ Fast & Slow Pointers) — ৮′-এর লক্ষ্য; বাকি সময়ে জোড় আর বিজোড় দৈর্ঘ্য হাতে চালান 🔁 🧠 (Parkinson's law · Deliberate practice)
- [ ] ১৫′ ইংরেজি — clarify: জোড় দৈর্ঘ্যে কোন মাঝখান চাই — এই প্রশ্নটা কেন আগে 🧠 (Everything is a game)

> **দিন শেষে:** ৮′-এ?

### দিন ০১৯ · Linked List Cycle

- [ ] ৩০′ DSA ১৫/১১০ — **Linked List Cycle** (LC 141 · ৩.১ Fast & Slow Pointers) — hash set আর দুই pointer; তারপর cycle-এর শুরু কীভাবে পাবেন, মুখে 🔁 🧠 (Deliberate practice · Einstellung)
- [ ] ১৫′ ইংরেজি — *"Floyd's algorithm works because…"* 🧠 (Feynman)

> **দিন শেষে:** cycle-এর শুরু মুখে বলা গেছে?

### দিন ০২০ · সাতটা, না দেখে

- [ ] ১০′ এই সপ্তাহের ৫টা + ব্লক ১-এর ২টা এলোমেলো — pattern, complexity, ইংরেজিতে জোরে, নোট বন্ধ 🧠 (Test yourself · Interleaving)
- [ ] ৫′ chunk-এর পাতায় — "list-এ মাঝখান বা cycle → fast & slow", "উল্টানো → তিন pointer" 🧠 (Chunking)

> **দিন শেষে:** সাতটার কয়টায় pattern ঠিক?

### দিন ০২১ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" — পাঁচ ধাপের কোনটা বাদ যাচ্ছে? "আমি পারি না" নয়, "এখনো ___ ধাপে"। ঘুম কেমন যাচ্ছে, এক লাইন 🧠 (It's all in the frame · Sleep)

> **দিন শেষে:** দুর্বলতা লেখা?

### দিন ০২২ · Remove Nth Node

- [ ] ৩০′ DSA ১৬/১১০ — **Remove Nth Node From End of List** (LC 19 · ৩.১ Fast & Slow Pointers) — এক পাসে; clarify: n সবসময় বৈধ? 🔁 🧠 (Everything is a game · Deliberate practice)
- [ ] ১৫′ ইংরেজি — dummy node কেন — head মুছলে কী হয় 🧠 (Feynman)

> **দিন শেষে:** head মোছার test?

### দিন ০২৩ · Valid Parentheses

- [ ] ৩০′ DSA ১৭/১১০ — **Valid Parentheses** (LC 20 · ৪.২ Expression Evaluation / Parentheses) — ৮′-এর লক্ষ্য; বাকি সময়ে test-এর তালিকা: খালি, বিজোড়, শুধু খোলা 🔁 🧠 (Parkinson's law · Everything is a game)
- [ ] ১৫′ ইংরেজি — সহজ প্রবলেমে interviewer কী দেখেন — ৩টা জিনিস 🧠 (Everything is a game)

> **দিন শেষে:** test-এর তালিকা?

### দিন ০২৪ · Queue using Stacks

- [ ] ৩০′ DSA ১৮/১১০ — **Implement Queue using Stacks** (LC 232 · ৪.৩ Design Problems) — design: interface আগে বলুন, তারপর কোড 🔁 🧠 (Everything is a game)
- [ ] ১৫′ ইংরেজি — amortized analysis — interviewer জিজ্ঞেস করলে কীভাবে বলবেন 🧠 (Feynman)

> **দিন শেষে:** amortized-এর ব্যাখ্যা?

### দিন ০২৫ · Maximum Depth

- [ ] ৩০′ DSA ১৯/১১০ — **Maximum Depth of Binary Tree** (LC 104 · ৫.১ Tree Traversal) — recursion আর BFS; বাকি সময়ে এ পর্যন্ত যেটা সবচেয়ে ধীর, ফাঁকা editor 🔁 🧠 (Deliberate practice · Einstellung)
- [ ] ১৫′ ইংরেজি — recursion-এর stack overflow — খুব গভীর tree-তে কী করবেন 🧠 (Concepts vs Facts)

> **দিন শেষে:** iterative বিকল্প বলা গেছে?

### দিন ০২৬ · ২০টা, ভিত্তি শেষ

- [ ] ৩০′ ⚑ DSA ২০/১১০ — **Invert Binary Tree** (LC 226 · ৫.৪ Validation & Properties) — recursive আর iterative 🔁 🧠 (Deliberate practice · Compound learning)
- [ ] ১৫′ ইংরেজি — পাঁচ টপিকের প্রতিটা এক বাক্যে: কখন এই pattern লাগে 🧠 (Chunk the subject)

> **দিন শেষে:** টপিক ১–৫-এর ভিত্তি — ২০টা শেষ?

### দিন ০২৭ · mock #১

- [ ] ৪৫′ ⚑ mock — ২০টা থেকে চোখ বন্ধ করে একটা, রেকর্ড চালু, ৪৫′-এর ঘড়ি, পাঁচ ধাপ জোরে; শেষে follow-up নিজেকে: *"can you do better on space?"* সঙ্গী থাকলে সে প্রশ্ন করবে (⏳) 🧠 (Everything is a game · Deep work)
- [ ] ১৫′ রেকর্ডিং — কোথায় চুপ হলেন, তিনটা জায়গা; clarify আর test হয়েছিল? 🧠 (Feedback)

> **দিন শেষে:** রেকর্ডিংয়ের তিনটা চুপের জায়গা লেখা?

### দিন ০২৮ · ব্লক ২-এর হিসাব

- [ ] ১০′ ব্লক ২-এর হিসাব — ২০টা, mock #১; পরের সপ্তাহে কোন ধাপ। এবার থেকে প্যাটার্নের নাম আর লেখা থাকবে না — নিজে বলতে হবে 🧠 (It's all in the frame · Feedback)

> **দিন শেষে:** ব্লক ২ শেষ — ২০টা?
