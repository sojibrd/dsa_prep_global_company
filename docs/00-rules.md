# নিয়ম — গ্লোবাল কোম্পানির DSA

*১৩৩ দিন · রিমোটের ৫০টা ঘড়ি ধরে + নতুন ৬০টা · সব ১০ টপিক · mock*

## লক্ষ্য

> **১৩৩ দিনে ১১০টা প্রবলেম, ৩৫′ ঘড়িতে, ইংরেজিতে জোরে ভেবে — সব ১০ টপিক, hard প্রবলেমসহ, আর শেষ দুই সপ্তাহ mock।**

FAANG-এ DSA ছাঁকনি নয়, **নির্ণায়ক।** ৪–৫টা রাউন্ড, প্রতিটায় ৪৫ মিনিটে একটা বা দুটো প্রবলেম, আর সারাক্ষণ একজন মানুষ শুনছেন আপনি কীভাবে ভাবছেন। সঠিক উত্তর অর্ধেক নম্বর; বাকি অর্ধেক — প্রশ্ন করা, trade-off বলা, নিজের কোড নিজে test করা। 🧠 (Everything is a game · Skill stacking)

## সত্যের উৎস

1. `legacy_and_wisdom/docs/ASSUMPTIONS.md`
2. `brainstorming/` — `dsa-prep-how-many-paths.md`, `dsa-prep-what-works-for-faang.md`, `after-joining/11-next-jump.md`
3. `dsa_prep_remote_company/` — এই পথের ব্লক ১-এর ৫০টা ওখানকার হুবহু
4. এই ফোল্ডার — `docs/` আর `patterns/` (৫১টা প্যাটার্ন, ইংরেজিতে; টপিক ৬ নতুন লেখা, `dsa_prep`-এ ওটা ফাঁকা লিংক ছিল)

**কখন:** এই পথ রোডম্যাপের কোনো stage-এ **নেই** — "লক্ষ্য নয়, দিক"। চাকরি থাকা অবস্থায় সুযোগ এলে তখন। শুরুর তারিখ ⏳ আপনার উত্তর বাকি। **রিমোটের ৫০টা শেষ না করে এই পথ নয়।**

## কীভাবে পড়বেন

- ১৩৩ দিন, ৬টা ব্লক। প্রতিটা দিনে কয়েকটা `- [ ]` কাজ, শেষে **দিন শেষে** প্রশ্ন।
- `(LC 15)` — প্যাটার্ন লেখা নেই: আগে নিজে নাম বলুন। ব্লক ১ পুরোটা এভাবে। 🧠 (Interleaving)
- `(LC 42 · ১.১ …)` — নতুন প্রবলেম, প্যাটার্ন লেখা।
- 🔥 Must-do — প্যাটার্নের পাতায় দেখায়; company-frequency ডেটা থেকে, **এই পথেই** ঠিক ছাঁকনি।
- 🧠, 🔁, ⚑ — আগের দুই পথের মতো। ⏳ = আপনার উত্তর বাকি।

## "আজ" মানে ক্যালেন্ডারের আজ

ফাইলে শুধু দিনের নম্বর; শুরুর তারিখ সাইটে একবার। plan পেছায় না, বাদ পড়া দিন ফেরে না, শুধু ⚑ জমে থাকে।

---

## সপ্তাহের ছন্দ

সপ্তাহে কত ঘণ্টা ⏳ — এই plan **৭ ঘণ্টা**-র হিসাবে, ~৬ ঘণ্টা DSA।

| দিন | ব্লক ১ | ব্লক ২–৫ | ব্লক ৬ | সময় |
|---|---|---|---|---|
| সোম–শুক্র | পুরনো ২টা, ২০′ করে | নতুন ১টা, ৩৫′ + ১০′ নোট | mock বা দুর্বলতম প্যাটার্ন | ৫০–৫৫′ |
| শনি | ⚑ ৪৫′ interview-এর মতো একটা | ⚑ ৪৫′ mock — এই ব্লকের hard | ⚑ ৯০′ পুরো loop | ৪৫–৯০′ |
| রবি | সপ্তাহের হিসাব + রেকর্ডিং | একই | একই | ২০′ |

🧠 (System vs goal · It pays to be not busy)

---

## Interview-এর বসা — ৩৫′

FAANG interviewer যে ক্রমে শোনেন, সেই ক্রমে অনুশীলন:

1. **Clarify (৩′)** — ইংরেজিতে জোরে দুটো প্রশ্ন: input খালি হতে পারে? duplicate? কত বড়? constraint দেখে complexity-র লক্ষ্য। 🧠 (Everything is a game)
2. **Brute force (২′)** — সহজ সমাধান আর তার complexity মুখে, কোড নয়।
3. **Optimize (৫′)** — কোন ক্লু দেখে কোন প্যাটার্ন; approach এক বাক্যে। 🧠 (Chunking · Trunk based knowledge)
4. **Code (২০′)** — জোরে বলতে বলতে। সাদা editor, AI বন্ধ। 🧠 (Test yourself · Deep work)
5. **Test (৫′)** — নিজের কোড একটা ছোট উদাহরণে হাতে চালান, তারপর edge case। interviewer বলার আগে নিজে bug ধরা = নম্বর।
6. **৩৫′ পেরোলে থামুন।** সমাধান দেখুন, বন্ধ করুন, নোটে "Where I got stuck", কাল ঝালাইয়ে ফাঁকা editor। 🧠 (Have an endpoint · Failures don't count)
7. **পরে এক মিনিট:** আরেকভাবে হয়? interviewer-এর follow-up প্রায় সবসময় এটাই। 🧠 (Einstellung)

**আটকালে চুপ নয়:** *"I'm considering two approaches — a heap and sorting. Let me think about which one fits the constraint."* ভুল দিকে গিয়েও জোরে ভাবা চুপ থাকার চেয়ে বেশি নম্বর পায়।

## Constraint পড়া

| দেখলে | ভাবুন |
|---|---|
| N ≤ 20 | brute force / **backtracking** / bitmask DP |
| N ≤ 100 | O(n³) চলতে পারে |
| N ≤ 1,000 | O(n²) — **DP টেবিল**, pair comparison |
| N ≤ 10⁵ | O(n log n) বা O(n) — sort / heap / hashmap / prefix |
| N ≤ 10⁶ | O(n) one-pass, memory-ও খেয়াল |
| Sorted input | **binary search** / **two pointers** |
| অনেক range query | **prefix sum** (static) / segment tree (update সহ) |
| Weighted graph + shortest | **Dijkstra** |
| Unweighted shortest path | **BFS** |
| Top K / Kth | **heap** (Kth হলে quickselect-ও) |
| সব possibility / combination | **backtracking** |
| min/max over choices, "number of ways" | **DP** |

## Mock

- **শনিবার (ব্লক ১–৫):** ৪৫′, একটা প্রবলেম — এই ব্লকের hard থেকে, আগে না দেখে। রেকর্ড চালু। শেষে রেকর্ডিং থেকে তিনটা জিনিস: কোথায় চুপ হলেন, কোথায় clarify বাদ গেল, test করেছেন কি না। 🧠 (Feedback)
- **সঙ্গী:** ৬ মাসের plan-এর mock-এর সঙ্গী, বা ⏳ অন্য কেউ — সপ্তাহে একবার সে interviewer হবে, আপনি candidate; পরের সপ্তাহে উল্টো। interviewer হওয়াও অনুশীলন — ভালো উত্তর কেমন শোনায়, বোঝা যায়। 🧠 (Community)
- **ব্লক ৬:** সপ্তাহে তিনটা mock, আর শনিবারে ৯০′-এর পুরো loop — দুটো প্রবলেম পরপর, মাঝে ৫′।

## ঝালাই

- 🔁 কাজে টিক দিলে আসল তারিখ থেকে ১ → ৩ → ৭ → ২১ দিন। 🧠 (Spaced repetition revisited)
- ঝালাই = ফাঁকা editor, **১৫′,** ইংরেজিতে জোরে। hard-এ ১৫′-এ কোড না হলে শুধু approach বলুন — সেটাও ঝালাই।
- এক দিনে অনেক জমলে Must-do আর hard আগে।

## প্যাটার্নের পাতা

ক্লু আগে, demo ভাঁজ করা, তারপর প্রবলেম — 🔥 Must-do চিহ্নসহ। প্রবলেমের তালিকার বাইরের প্রবলেমগুলো (demo-র মতো) plan-এ আছে; পাতার "Demo" সারিতে নোট আর দিনের লিংক। 🧠 (Trunk based knowledge)

---

## `learning_to_learn` — কোনটা কোথায়

| ডক | এই plan-এ যেভাবে |
|---|---|
| **Principle** | Learning vs Winning — hard প্রবলেম বেছে নেওয়া। The obstacle — ব্লক ২-এর hard। The dip — ব্লক ৩–৪, সবচেয়ে লম্বা মাঝখান। Compound learning — ১৩৩ দিন। Failures don't count — mock-এর রেকর্ডিং। It's all in the frame, Choice vs Chore — রবিবারের হিসাব। Pareto — Must-do আগে। Skill stacking — DSA + ইংরেজি + system design। Productivity time, What is success?, Happiness factors, Self learning paradigm — ব্লকের শুরু আর থামার দিনে। |
| **Lies** | 10,000 hours rule — ১১০-এ থামা। Follow your passion — hard ভালো লাগার অপেক্ষা নয়। You can avoid risk — "আরও প্রস্তুত হয়ে" নয়। Trust this one person — একটা "Blind 75" তালিকার অন্ধ অনুসরণ নয়। |
| **Pillars** | Everything is a game — interview-এর ৬ ধাপ। Feynman — ইংরেজিতে ৩ লাইন। Trunk based knowledge — ৫১টা প্যাটার্ন। Efficiency trumps grit — ৩৫′-এ থামা। |
| **Science** | Focus vs Diffuse, Be bored, Sleep, Brain training, Feedback, Procrastination, Long and short memory, Active learning, Motivation, Goals, It pays to be not busy, Chunking, Deliberate practice, Spaced repetition, Energy saving with habits, Be adventurous, Have an endpoint — দিনের 🧠 chip-এ। |
| **Techniques** | Pomodoro, Deep work, Parkinson's law — ৩৫′। Chunk the subject — এক ব্লক এক বিষয়। Interleaving — ব্লক ১ আর mock। Einstellung — follow-up। Community — mock-এর সঙ্গী। Method of loci — ৫১টা প্যাটার্নের ঘর। The power of senses — কাগজে DP টেবিল। Create a roadmap, Deliberate practice revisited, Spaced repetition revisited, Habits revisited, System vs goal, Pareto principle revisited, Stakes & Rewards, Concepts vs Facts, Test yourself, The first 20 hours — দিনের কাজে। |

---

## যা উপেক্ষা করবেন

- **Simulation আর animation** — interview-তে animation দেখে কেউ পাস করে না।
- **টপিকের ক্রমে একটানা** — ব্লকের ভেতরে প্যাটার্ন লেখা থাকে, কিন্তু শনিবারের mock সবসময় মিশিয়ে।
- **বাংলা ক্লু** — এই পথে সব ইংরেজিতে।
- **পরিশিষ্টের টপিক** — segment tree, KMP, Manacher — interview-তে কম আসে; ১১০-এর পরে, দরকার হলে।

## যা করবেন না

- **১১০টার পরে নতুন নয়।** আরও প্রবলেম নয়, আরও mock। 🧠 (10,000 hours rule)
- **Must-do বাদ দিয়ে Bonus নয়।**
- **mock এড়িয়ে একা প্রবলেম নয়।** একা পারা আর কারও সামনে পারা আলাদা দক্ষতা।
- **DSA-র অপেক্ষায় system design আর behavioural বন্ধ নয়** — ওগুলো অন্য প্রজেক্টে, সমান্তরালে।
- **এই সাইটে নতুন ফিচার নয়।**

## দিন ১৩৩-এর পরে

- সোম–শুক্রের DSA সময় = আজকের ঝালাই, আর সপ্তাহে একটা mock — interview-এর তারিখ না আসা পর্যন্ত।
- interview-এর দুই সপ্তাহ আগে: ব্লক ৬ আবার, নতুন প্রবলেম নয়।
- প্রতিটা আসল interview-এর পরে ৫ লাইন: কী প্রশ্ন, কোথায় আটকালেন, পরের বার কী আলাদা। এই নোটগুলোই আসল সিলেবাস। 🧠 (Feedback · Failures don't count)
