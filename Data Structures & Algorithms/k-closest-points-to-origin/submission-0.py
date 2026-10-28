import heapq
from typing import List

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        max_heap = []
        
        for x, y in points:
            dist = x * x + y * y
            
            if len(max_heap) < k:
                heapq.heappush(max_heap, (-dist, x, y))
            else:
                if -dist > max_heap[0][0]:
                    heapq.heappushpop(max_heap, (-dist, x, y))
                    
        return [[x, y] for _, x, y in max_heap]