from collections import deque
from typing import List

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        q = deque()
        fresh = 0

        def addOrange(r, c):
            if r < 0 or r >= ROWS or c < 0 or c >= COLS or grid[r][c] != 1:
                return False

            grid[r][c] = 2
            q.append((r, c))
            return True

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 2:
                    q.append((r, c))
                elif grid[r][c] == 1:
                    fresh += 1

        minutes = 0

        while q and fresh > 0:
            for _ in range(len(q)):
                r, c = q.popleft()

                if addOrange(r + 1, c):
                    fresh -= 1

                if addOrange(r - 1, c):
                    fresh -= 1

                if addOrange(r, c + 1):
                    fresh -= 1

                if addOrange(r, c - 1):
                    fresh -= 1

            minutes += 1

        return minutes if fresh == 0 else -1