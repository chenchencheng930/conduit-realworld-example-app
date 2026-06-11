export default function wordCounter(text) {
  if (!text) return 0;
  // Strip HTML tags first
  const stripped = text.replace(/<[^>]*>/g, "");
  // Match Chinese characters (CJK unified ideographs) or English words
  const matches = stripped.match(/[\u4e00-\u9fff\uf900-\ufaff]|\b[a-zA-Z]+(?:'[a-zA-Z]+)?\b/g);
  return matches ? matches.length : 0;
}
