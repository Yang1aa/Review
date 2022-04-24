var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  let ans = 0;
  let l = 0;
  let map = new Map();
  for (let r = 0; r < length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) l = map.get(s[r]) + 1;
    map.set(s[r], r);
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
console.log(lengthOfLongestSubstring('abcabcbb'));
