class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let map1 = new Map();
        let map2 = new Map();

        for (let i of s) {
            map1.set(i, (map1.get(i) || 0) + 1);
        }

        for (let i of t) {
            map2.set(i, (map2.get(i) || 0) + 1);
        }

        for (let [key, value] of map1) {
            if (!map2.has(key) || map2.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}
