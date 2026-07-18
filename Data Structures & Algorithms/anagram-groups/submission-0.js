class Solution {
    groupAnagrams(strs) {
        let map = new Map();

        for (let i of strs) {
            let count = new Array(26).fill(0)
            for (let j of i) {
                count[j.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(",");
            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(i);
            
        }
        return [...map.values()];

    }
}
