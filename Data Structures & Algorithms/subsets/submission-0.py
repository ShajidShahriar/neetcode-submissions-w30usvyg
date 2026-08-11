from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        subset = []  # renamed to singular to avoid confusing local variable with function name
    
        def dfs(i: int):
            if i >= len(nums):
                res.append(subset.copy())
                return
            
            # Choice 1: Include nums[i]
            subset.append(nums[i])
            dfs(i + 1)
        
            # Choice 2: Exclude nums[i]
            subset.pop()
            dfs(i + 1)
            
        dfs(0)
        return res