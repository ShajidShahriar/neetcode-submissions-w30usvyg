from collections import Counter , deque 
 
import heapq
from typing import List
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        
        freq = Counter(tasks)
        max_heap = [-count for count in freq.values()]
        heapq.heapify(max_heap)
        cooldown = deque()
        time = 0 


        while max_heap or cooldown:
            time += 1 
            if max_heap:
                count = 1 + heapq.heappop(max_heap) 
                if count :
                    cooldown.append([count , time + n])
            if cooldown and cooldown[0][1] == time :
                heapq.heappush(max_heap , cooldown.popleft()[0])

        return time 


                
        