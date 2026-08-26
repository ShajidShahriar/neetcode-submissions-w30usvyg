from collections import defaultdict

class Solution:
    def findRedundantConnection(self, edges):
        graph = defaultdict(list)

        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()
        parent = {}
        cycle_edges = set()

        def dfs(node, par):
            visited.add(node)

            for nei in graph[node]:

                if nei == par:
                    continue

                # Found a cycle
                if nei in visited:
                    cycle_edges.add((node, nei))
                    cycle_edges.add((nei, node))

                    # Walk backwards using parent
                    cur = node

                    while cur != nei:
                        p = parent[cur]
                        cycle_edges.add((cur, p))
                        cycle_edges.add((p, cur))
                        cur = p

                    return True

                parent[nei] = node

                if dfs(nei, node):
                    return True

            return False

        # Find the cycle
        for node in range(1, len(edges) + 1):
            if node not in visited:
                if dfs(node, -1):
                    break

        # Reverse order → first cycle edge is the answer
        for u, v in reversed(edges):
            if (u, v) in cycle_edges:
                return [u, v]