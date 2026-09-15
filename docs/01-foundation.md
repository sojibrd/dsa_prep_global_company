# ব্লক ১ — ভিত্তি

*দিন ০০১–০১৪ · Hashing · Two Pointers · Sliding Window · Binary Search · interview-এর পাঁচ ধাপ*

FAANG-এর DSA রাউন্ডের বড় অংশ এই চারটা প্যাটার্নের ওপর দাঁড়ায় — hashmap, two pointer, sliding window, binary search। প্রথম দুই সপ্তাহে দশটা প্রবলেম, দিনে একটা, পাশে প্যাটার্নের নাম লেখা। কিন্তু প্রথম দিন থেকেই interview-এর ক্রম: **clarify → brute force → optimize → code → test,** ইংরেজিতে জোরে, ৩০′-এ।

প্রথম সপ্তাহে পাঁচ ধাপ ৩০′-এ আঁটবে না — easy-তেও demo দেখতে হবে। এটাই স্বাভাবিক; ধাপের অভ্যাস আগে, গতি পরে। 🧠 (The first 20 hours · Everything is a game)

> **ব্লক শেষে:** ১০টা প্রবলেম, প্রতিটায় পাঁচ ধাপ, নোট ইংরেজিতে?

### দিন ০০১ · Two Sum

- [ ] ৩০′ DSA ১/১১০ — **Two Sum** (LC 1 · ১.৪ Hashing) — clarify-এর দুটো প্রশ্ন জোরে, brute force মুখে, তারপর hash map; শেষে নিজের কোড একটা ছোট উদাহরণে হাতে চালান 🔁 🧠 (The first 20 hours · Everything is a game)
- [ ] ১৫′ ইংরেজি — *"A simple approach is O(n²); a hash map gets it to O(n)."* — নিজের ভাষায়; নোটের দুই ঘর ইংরেজিতে 🧠 (Feynman)
- [ ] ৫′ একজনকে বলুন: *"১৬৮ দিনে ১১০টা — মাঝে একবার জিজ্ঞেস কোরো"* 🧠 (Stakes & Rewards · Community)

> **দিন শেষে:** পাঁচ ধাপ, অন্তত একবার?

### দিন ০০২ · Valid Anagram

- [ ] ৩০′ DSA ২/১১০ — **Valid Anagram** (LC 242 · ১.৪ Hashing) — sort করে একবার, count করে একবার; দুটোর complexity interviewer-কে বলার মতো করে 🔁 🧠 (Deliberate practice · Einstellung)
- [ ] ১৫′ ইংরেজি — follow-up: input Unicode হলে কী বদলায় 🧠 (Einstellung)

> **দিন শেষে:** দুটো পদ্ধতি আর follow-up?

### দিন ০০৩ · Valid Palindrome

- [ ] ৩০′ DSA ৩/১১০ — **Valid Palindrome** (LC 125 · ১.১ Two Pointers) — দুই pointer কাগজে এঁকে, তারপর বলতে বলতে কোড; test ধাপে খালি string আর শুধু চিহ্ন 🔁 🧠 (Deliberate practice · The power of senses)
- [ ] ১৫′ ইংরেজি — দুই প্রান্ত থেকে কেন, এক প্রান্ত থেকে কেন নয় 🧠 (Feynman)

> **দিন শেষে:** edge case দুটো চালানো?

### দিন ০০৪ · Two Sum II

- [ ] ৩০′ DSA ৪/১১০ — **Two Sum II (Sorted Array)** (LC 167 · ১.১ Two Pointers) — দিন ০০১-এর নোট **না** খুলে; আগে constraint থেকে complexity-র লক্ষ্য 🔁 🧠 (Test yourself · Deliberate practice)
- [ ] ১৫′ ইংরেজি — Two Sum আর Two Sum II: কেন sorted হলে hash map লাগে না, আর space-এ কী বাঁচে 🧠 (Concepts vs Facts)

> **দিন শেষে:** "sorted হলে two pointer" — এক লাইনে নোটে?

### দিন ০০৫ · প্রথম medium

- [ ] ৩০′ DSA ৫/১১০ — **3Sum** (LC 15 · ১.১ Two Pointers) — medium; ১০′ আটকালে উঠে হাঁটুন, ২০′-এ demo, পড়ে বন্ধ করে নিজে 🔁 🧠 (Focus vs Diffuse · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — আটকালে চুপ নয়: *"I'm stuck on duplicates; let me think about sorting first…"* — জোরে তিনবার 🧠 (Failures don't count · Everything is a game)

> **দিন শেষে:** 3Sum-এর মূল আইডিয়া ৩ লাইনে — demo দেখে থাকলেও?

### দিন ০০৬ · সপ্তাহের পাঁচটা, না দেখে

- [ ] ১০′ এই সপ্তাহের ৫টা প্রবলেমের নাম এলোমেলো — প্রতিটায় pattern, approach এক লাইনে, complexity, ইংরেজিতে জোরে, নোট বন্ধ 🧠 (Test yourself · Interleaving)
- [ ] ৫′ এক পাতায় chunk — *"this clue → this pattern"*: hashmap আর two pointer 🧠 (Chunking)

> **দিন শেষে:** ৫টার কয়টায় pattern না দেখে ঠিক?

### দিন ০০৭ · সপ্তাহের হিসাব

- [ ] ১০′ "Where I got stuck" পাশাপাশি — পাঁচ ধাপের কোনটায় সবচেয়ে বেশি আটকাচ্ছেন? পরের সপ্তাহের একটা ধাপ; কখন বসবেন, সংকেতটা এক লাইনে 🧠 (Deliberate practice revisited · Habits revisited)

> **দিন শেষে:** দুর্বল ধাপটা লেখা?

### দিন ০০৮ · Container With Most Water

- [ ] ৩০′ DSA ৬/১১০ — **Container With Most Water** (LC 11 · ১.১ Two Pointers) — বসার আগে এক লাইন: গত সপ্তাহের দুর্বল ধাপ; brute force O(n²) মুখে, তারপর উন্নতি 🔁 🧠 (Deliberate practice revisited · Everything is a game)
- [ ] ১৫′ ইংরেজি — কেন ছোট দিকের pointer সরালে উত্তর হারায় না — প্রমাণের মতো করে 🧠 (Feynman)

> **দিন শেষে:** যুক্তিটা বলা গেছে?

### দিন ০০৯ · Sliding window শুরু

- [ ] ৩০′ DSA ৭/১১০ — **Longest Substring Without Repeating Characters** (LC 3 · ১.২ Sliding Window) — জানালা কখন বাড়ে আর কখন ছোট হয়, কোডের আগে লিখুন 🔁 🧠 (Deliberate practice · Chunk the subject)
- [ ] ১৫′ ইংরেজি — *"The window grows when…, shrinks when…"*; follow-up: character set ছোট হলে map-এর বদলে কী? 🧠 (Feynman · Einstellung)

> **দিন শেষে:** দুই শর্ত আর follow-up?

### দিন ০১০ · Minimum Size Subarray Sum

- [ ] ৩০′ DSA ৮/১১০ — **Minimum Size Subarray Sum** (LC 209 · ১.২ Sliding Window) — আগের কোড দেখবেন না; negative সংখ্যা থাকলে কী ভাঙে, clarify-এ জিজ্ঞেস করুন 🔁 🧠 (Test yourself · Everything is a game)
- [ ] ১৫′ ইংরেজি — কাল আর আজকের জানালার পার্থক্য — কোনটায় সর্বোচ্চ, কোনটায় সর্বনিম্ন 🧠 (Concepts vs Facts)

> **দিন শেষে:** negative-এর প্রশ্ন clarify-এ এসেছিল?

### দিন ০১১ · Binary Search

- [ ] ৩০′ DSA ৯/১১০ — **Binary Search** (LC 704 · ২.১ Basic Binary Search) — টেমপ্লেট না দেখে, ৮′-এর লক্ষ্য; বাকি সময়ে off-by-one-এর test 🔁 🧠 (Test yourself · Parkinson's law)
- [ ] ১৫′ ইংরেজি — `lo <= hi` নাকি `lo < hi` — কেন; overflow-এর কথা interviewer তুললে কী বলবেন 🧠 (Concepts vs Facts)

> **দিন শেষে:** ৮′-এ, আর off-by-one-এর test?

### দিন ০১২ · Search Insert Position

- [ ] ৩০′ DSA ১০/১১০ — **Search Insert Position** (LC 35 · ২.১ Basic Binary Search) — কালকের টেমপ্লেট থেকে এক জায়গা বদল; কোথায়? 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — না পেলে `lo` কেন ঠিক ঢোকানোর জায়গায় থামে 🧠 (Feynman)

> **দিন শেষে:** ১০টা শেষ?

### দিন ০১৩ · দুই সপ্তাহের দশটা

- [ ] ১০′ দশটা প্রবলেমের নাম এলোমেলো — pattern আর complexity, ইংরেজিতে জোরে, নোট বন্ধ; সবচেয়ে কম মনে থাকা দুটো দাগান 🧠 (Test yourself · Interleaving)
- [ ] ৫′ chunk-এর পাতায় যোগ — sliding window আর binary search-এর ক্লু 🧠 (Chunking)

> **দিন শেষে:** দশটার কয়টায় pattern ঠিক?

### দিন ০১৪ · ব্লক ১-এর হিসাব

- [ ] ১০′ ব্লক ১-এর হিসাব — ১০টা; কয়টায় পাঁচ ধাপ পুরো, কয়টায় test বাদ গেছে; পরের সপ্তাহের একটা ধাপ। ছোট একটা পুরস্কার নিজেকে 🧠 (It's all in the frame · Stakes & Rewards)

> **দিন শেষে:** ব্লক ১-এর দশটা শেষ?
