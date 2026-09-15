# ব্লক ৮ — Graphs

*দিন ১১৩–১২৬ · cycle · topological sort · union find · bipartite · Dijkstra · MST · hard BFS*

ব্লক ৫-এ শুধু BFS/DFS-এর ভিত্তি ছিল। এখানে বাকি সব: directed cycle, topo sort, union find, bipartite, Dijkstra, Bellman-Ford ধাঁচ, MST, আর implicit graph-এর hard BFS (Word Ladder, Bus Routes)।

graph প্রশ্নের অর্ধেক কাজ হলো **graph-টা দেখতে পাওয়া** — শব্দ কি নোড, রুট কি নোড? কোডের আগে কাগজে নোড আর edge। 🧠 (The power of senses · Trunk based knowledge)

> **ব্লক শেষে:** ১০টা, আর যেকোনো graph প্রশ্নে "নোড কী, edge কী" আগে বলা হচ্ছে?

### দিন ১১৩ · Course Schedule

- [ ] ৩০′ DSA ৮১/১১০ — **Course Schedule** (LC 207 · ৮.২ Cycle Detection) — তিন-রঙা DFS; adjacency list আগে কাগজে 🔁 🧠 (The power of senses · Deliberate practice)
- [ ] ১৫′ ইংরেজি — কেন দুই রঙ (visited) যথেষ্ট নয় — counterexample 🧠 (Einstellung)

> **দিন শেষে:** counterexample?

### দিন ১১৪ · Course Schedule II

- [ ] ৩০′ DSA ৮২/১১০ — **Course Schedule II** (LC 210 · ৮.৩ Topological Sort) — Kahn's; গতকালকের DFS দিয়েও order পাওয়া যায় — কীভাবে? 🔁 🧠 (Einstellung · Chunking)
- [ ] ১৫′ ইংরেজি — Kahn's আর DFS-postorder — কখন কোনটা 🧠 (Concepts vs Facts)

> **দিন শেষে:** দুই পদ্ধতি?

### দিন ১১৫ · Redundant Connection

- [ ] ৩০′ DSA ৮৩/১১০ — **Redundant Connection** (LC 684 · ৮.৪ Union Find) — union by rank যোগ করে 🔁 🧠 (Deliberate practice)
- [ ] ১৫′ ইংরেজি — path compression আর union by rank — কোনটা কী বাঁচায় 🧠 (Concepts vs Facts)

> **দিন শেষে:** union find স্মৃতি থেকে?

### দিন ১১৬ · Is Graph Bipartite?

- [ ] ৩০′ DSA ৮৪/১১০ — **Is Graph Bipartite?** (LC 785 · ৮.৫ Bipartite Check) — BFS, তারপর DFS; disconnected graph ভুলবেন না 🔁 🧠 (Everything is a game)
- [ ] ১৫′ ইংরেজি — union find দিয়েও হয় — কীভাবে 🧠 (Einstellung)

> **দিন শেষে:** disconnected-এর edge case?

### দিন ১১৭ · Network Delay Time

- [ ] ৩০′ DSA ৮৫/১১০ — **Network Delay Time** (LC 743 · ৮.৬ Dijkstra) — MinHeap স্মৃতি থেকে, তারপর Dijkstra 🔁 🧠 (Test yourself · Deliberate practice)
- [ ] ১৫′ ইংরেজি — কেন negative edge-এ Dijkstra ভাঙে 🧠 (Concepts vs Facts)

> **দিন শেষে:** negative edge-এর কারণ?

### দিন ১১৮ · graph মডেল করা

- [ ] ১৫′ এই সপ্তাহের ৫টা, না দেখে — প্রতিটায় শুধু "নোড কী, edge কী, কোন algorithm", ইংরেজিতে জোরে 🧠 (Test yourself · Everything is a game)

> **দিন শেষে:** পাঁচটার মডেল ঠিক?

### দিন ১১৯ · সপ্তাহের হিসাব

- [ ] ১০′ graph-এর ক্লু এক পাতায়: dependency → topo, "connected?" → union find, weighted → Dijkstra। রাতে বসা হচ্ছে? ঘুমের সময়ে প্রবলেম নয় 🧠 (Chunking · Sleep)

> **দিন শেষে:** ক্লুর পাতা?

### দিন ১২০ · Cheapest Flights Within K Stops

- [ ] ৩০′ DSA ৮৬/১১০ — **Cheapest Flights Within K Stops** (LC 787 · ৮.৬ Dijkstra) — কেন plain Dijkstra ভুল উত্তর দেয়, আগে উদাহরণ 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১৫′ ইংরেজি — Bellman-Ford-এর k+1 রাউন্ড — কেন কপি array লাগে 🧠 (Feynman)

> **দিন শেষে:** কপি array-এর কারণ?

### দিন ১২১ · Min Cost to Connect All Points

- [ ] ৩০′ DSA ৮৭/১১০ — **Min Cost to Connect All Points** (LC 1584 · ৮.৭ Minimum Spanning Tree) — Prim, তারপর Kruskal মুখে 🔁 🧠 (Einstellung)
- [ ] ১৫′ ইংরেজি — dense vs sparse graph — কোনটায় কোনটা 🧠 (Concepts vs Facts)

> **দিন শেষে:** Prim আর Kruskal-এর trade-off?

### দিন ১২২ · Word Ladder

- [ ] ৩০′ DSA ৮৮/১১০ — **Word Ladder** (LC 127 · ৮.১ BFS / DFS Traversal) — নোড কী, edge কী — আগে; তারপর wildcard pattern trick 🔁 🧠 (The obstacle · Learning vs Winning)
- [ ] ১৫′ ইংরেজি — bidirectional BFS কেন দ্রুত 🧠 (Einstellung)

> **দিন শেষে:** graph মডেল আগে বলা?

### দিন ১২৩ · Bus Routes

- [ ] ৩০′ DSA ৮৯/১১০ — **Bus Routes** (LC 815 · ৮.১ BFS / DFS Traversal) — স্টপ নয়, রুট-ই নোড; কেন? 🔁 🧠 (Einstellung · The obstacle)
- [ ] ১৫′ ইংরেজি — স্টপকে নোড ধরলে complexity কী হতো 🧠 (Concepts vs Facts)

> **দিন শেষে:** রুট-নোডের কারণ?

### দিন ১২৪ · Word Ladder II

- [ ] ৩০′ DSA ৯০/১১০ — **Word Ladder II** (LC 126 · ৮.১ BFS / DFS Traversal) — কঠিনতমের একটা; BFS-এ parent, তারপর DFS-এ path। ৩০′-এ approach হলেই ভালো 🔁 🧠 (Learning vs Winning · Failures don't count)
- [ ] ১৫′ ইংরেজি — কেন একই level-এর visited আলাদা করে মুছতে হয় 🧠 (Feynman)

> **দিন শেষে:** approach বলা গেছে?

### দিন ১২৫ · আটটা ব্লক থেকে পাঁচটা

- [ ] ১৫′ ব্লক ১–৮ থেকে চোখ বন্ধ করে ৫টা — pattern, approach, complexity, ইংরেজিতে জোরে 🧠 (Interleaving · Test yourself)

> **দিন শেষে:** পাঁচটার কয়টা ঠিক?

### দিন ১২৬ · ব্লক ৮-এর হিসাব

- [ ] ১০′ ব্লক ৮-এর হিসাব — ৯০/১১০; ঝালাইয়ে আটকানো ২টা ব্লক ১০-এর তালিকায়। সামনে DP — ২০টা, সবচেয়ে বড় ব্লক। শুধু পরের সোমবারের প্রবলেমটা দেখুন 🧠 (Deliberate practice · Long and short memory)

> **দিন শেষে:** ব্লক ৮ শেষ?
