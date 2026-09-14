# ব্লক ৪ — Graphs

*দিন ০৭৮–০৯১ · cycle · topological sort · union find · bipartite · Dijkstra · MST · hard BFS*

রিমোটে শুধু BFS/DFS-এর ভিত্তি ছিল। এখানে বাকি সব: directed cycle, topo sort, union find, bipartite, Dijkstra, Bellman-Ford ধাঁচ, MST, আর implicit graph-এর hard BFS (Word Ladder, Bus Routes)।

graph প্রশ্নের অর্ধেক কাজ হলো **graph-টা দেখতে পাওয়া** — শব্দ কি নোড, রুট কি নোড? কোডের আগে কাগজে নোড আর edge। 🧠 (The power of senses · Trunk based knowledge)

> **ব্লক শেষে:** ১০টা, দুই mock, আর যেকোনো graph প্রশ্নে "নোড কী, edge কী" আগে বলা হচ্ছে?

### দিন ০৭৮ · Course Schedule

- [ ] ৪৫′ DSA ৮১/১১০ — **Course Schedule** (LC 207 · ৮.২ Cycle Detection) — তিন-রঙা DFS; adjacency list আগে কাগজে 🔁 🧠 (The power of senses · Deliberate practice)
- [ ] ১০′ কেন দুই রঙ (visited) যথেষ্ট নয় — counterexample 🧠 (Einstellung)

> **দিন শেষে:** counterexample?

### দিন ০৭৯ · Course Schedule II

- [ ] ৪৫′ DSA ৮২/১১০ — **Course Schedule II** (LC 210 · ৮.৩ Topological Sort) — Kahn's; গতকালকের DFS দিয়েও order পাওয়া যায় — কীভাবে? 🔁 🧠 (Einstellung · Chunking)
- [ ] ১০′ Kahn's আর DFS-postorder — কখন কোনটা 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই পদ্ধতি?

### দিন ০৮০ · Redundant Connection

- [ ] ৪৫′ DSA ৮৩/১১০ — **Redundant Connection** (LC 684 · ৮.৪ Union Find) — union by rank যোগ করে 🔁 🧠 (Deliberate practice)
- [ ] ১০′ path compression আর union by rank — কোনটা কী বাঁচায় 🧠 (Concepts vs Facts)

> **দিন শেষে:** union find স্মৃতি থেকে?

### দিন ০৮১ · Is Graph Bipartite?

- [ ] ৪৫′ DSA ৮৪/১১০ — **Is Graph Bipartite?** (LC 785 · ৮.৫ Bipartite Check) — BFS, তারপর DFS; disconnected graph ভুলবেন না 🔁 🧠 (Everything is a game)
- [ ] ১০′ union find দিয়েও হয় — কীভাবে, মুখে 🧠 (Einstellung)

> **দিন শেষে:** disconnected-এর edge case?

### দিন ০৮২ · Network Delay Time

- [ ] ৪৫′ DSA ৮৫/১১০ — **Network Delay Time** (LC 743 · ৮.৬ Dijkstra) — MinHeap স্মৃতি থেকে, তারপর Dijkstra 🔁 🧠 (Test yourself · Deliberate practice)
- [ ] ১০′ কেন negative edge-এ Dijkstra ভাঙে 🧠 (Concepts vs Facts)

> **দিন শেষে:** negative edge-এর কারণ?

### দিন ০৮৩ · mock — graph

- [ ] ৪৫′ ⚑ mock — এই সপ্তাহের একটা; প্রথম ৫′ শুধু graph মডেল করা, জোরে 🧠 (Everything is a game · Deep work)
- [ ] ১০′ রেকর্ডিং 🧠 (Feedback)

> **দিন শেষে:** মডেলিং আগে হয়েছিল?

### দিন ০৮৪ · সপ্তাহের হিসাব

- [ ] ১০′ graph-এর ক্লু এক পাতায়: dependency → topo, "connected?" → union find, weighted → Dijkstra 🧠 (Chunking)
- [ ] ১০′ রাতে বসা হচ্ছে? ঘুমের সময়ে প্রবলেম নয় 🧠 (Sleep · Happiness factors)

> **দিন শেষে:** ক্লুর পাতা?

### দিন ০৮৫ · Cheapest Flights Within K Stops

- [ ] ৪৫′ DSA ৮৬/১১০ — **Cheapest Flights Within K Stops** (LC 787 · ৮.৬ Dijkstra) — কেন plain Dijkstra ভুল উত্তর দেয়, আগে উদাহরণ 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১০′ Bellman-Ford-এর k+1 রাউন্ড — কেন কপি array লাগে 🧠 (Feynman)

> **দিন শেষে:** কপি array-এর কারণ?

### দিন ০৮৬ · Min Cost to Connect All Points

- [ ] ৪৫′ DSA ৮৭/১১০ — **Min Cost to Connect All Points** (LC 1584 · ৮.৭ Minimum Spanning Tree) — Prim, তারপর Kruskal মুখে 🔁 🧠 (Einstellung)
- [ ] ১০′ dense vs sparse graph — কোনটায় কোনটা 🧠 (Concepts vs Facts)

> **দিন শেষে:** Prim আর Kruskal-এর trade-off?

### দিন ০৮৭ · Word Ladder

- [ ] ৪৫′ DSA ৮৮/১১০ — **Word Ladder** (LC 127 · ৮.১ BFS / DFS Traversal) — নোড কী, edge কী — আগে; তারপর wildcard pattern trick 🔁 🧠 (The obstacle · Learning vs Winning)
- [ ] ১০′ bidirectional BFS কেন দ্রুত — মুখে 🧠 (Einstellung)

> **দিন শেষে:** graph মডেল আগে বলা?

### দিন ০৮৮ · Bus Routes

- [ ] ৪৫′ DSA ৮৯/১১০ — **Bus Routes** (LC 815 · ৮.১ BFS / DFS Traversal) — স্টপ নয়, রুট-ই নোড; কেন? 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১০′ স্টপকে নোড ধরলে complexity কী হতো 🧠 (Concepts vs Facts)

> **দিন শেষে:** রুট-নোডের কারণ?

### দিন ০৮৯ · Word Ladder II

- [ ] ৪৫′ DSA ৯০/১১০ — **Word Ladder II** (LC 126 · ৮.১ BFS / DFS Traversal) — কঠিনতমের একটা; BFS-এ parent, তারপর DFS-এ path। ৩৫′-এ approach হলেই ভালো 🔁 🧠 (Learning vs Winning · Failures don't count)
- [ ] ১০′ কেন একই level-এর visited আলাদা করে মুছতে হয় 🧠 (Feynman)

> **দিন শেষে:** approach বলা গেছে?

### দিন ০৯০ · mock — মিশিয়ে

- [ ] ৪৫′ ⚑ mock — ব্লক ১–৪ থেকে একটা; সঙ্গী থাকলে সে (⏳) 🧠 (Interleaving · Community)
- [ ] ১০′ সঙ্গীর মন্তব্য বা রেকর্ডিং 🧠 (Feedback)

> **দিন শেষে:** মন্তব্য লেখা?

### দিন ০৯১ · ব্লক ৪-এর হিসাব

- [ ] ১৫′ ব্লক ৪-এর হিসাব — ৯০/১১০; ঝালাইয়ে আটকানো ২টা ব্লক ৬-এর তালিকায় 🧠 (Deliberate practice)
- [ ] ১০′ সামনে DP — ২০টা, সবচেয়ে বড় ব্লক। শুধু পরের সোমবারের প্রবলেমটা দেখুন 🧠 (Long and short memory · Create a roadmap)

> **দিন শেষে:** ব্লক ৪ শেষ?
