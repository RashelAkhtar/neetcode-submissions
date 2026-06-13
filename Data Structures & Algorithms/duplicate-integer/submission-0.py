class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        d = {}
        set_ans = False

        for x in nums:
            d[x] = d.get(x, 0) + 1

        for x in d:
            if d[x] > 1:
                set_ans = True
                break
            else:
                set_ans = False
        
        if set_ans:
            return True
        else:
            return False