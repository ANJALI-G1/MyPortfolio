// utils/generateSparkles.js
export const generateSparkles = (count = 30, seed = 42) => {
  let random = mulberry32(seed);
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: random() * 100,
    y: random() * 100,
    size: random() * 2 + 2,
    delay: random() * 1 +0.5,
    duration: random() * 0.8,
  }));
};

// Deterministic PRNG
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
