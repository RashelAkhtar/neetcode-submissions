class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        d = {}

        for x in nums:
            d[x] = d.get(x, 0) + 1

        for x in d:
            if d[x] > 1:
                return True
        return False