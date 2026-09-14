/**
 * সাইটের পরিচয় আর এই পথের সেটিং — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * তিনটা পথের (লোকাল · রিমোট · গ্লোবাল) কোড একই; পার্থক্য শুধু এই ফাইল,
 * `next.config.ts`-এর basePath আর `docs/` + `patterns/`-এর কনটেন্ট।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
  showMustDo: boolean;
  noteLabels: { solution: string; stuck: string };
} = {
  title: "গ্লোবাল কোম্পানির DSA",
  short: "গ্লোবাল DSA",
  emoji: "🌍",
  description:
    "FAANG-স্তরের DSA রাউন্ডের জন্য ১১০টা প্রবলেম — রিমোটের ৫০টা ঘড়ি ধরে, সব ১০ টপিক, hard আর mock, learning to learn-এর নীতিতে।",
  /** localStorage key-এর prefix — তিন পথের progress আলাদা থাকে */
  storagePrefix: "gdsa",
  /** এই পথ কোনো stage-এ নেই — প্রস্তাব নেই, আজকের তারিখ দেখায় */
  suggestedStart: null,
  /** 🔥 Must-do ট্যাগ FAANG-এর frequency থেকে — এই পথেই ঠিক ছাঁকনি */
  showMustDo: true,
  noteLabels: {
    solution: "My solution — মূল আইডিয়া ২–৩ লাইনে, ইংরেজিতে",
    stuck: "Where I got stuck — কোন trap, ইংরেজিতে",
  },
};
