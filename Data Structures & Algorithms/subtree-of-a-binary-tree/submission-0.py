class Solution:
    def isSubtree(self, root, subRoot):

        def isSameTree(p, q):
            
            if not p and not q :
                return True
            if not p or not q :
                return False 
            if p and q and p.val != q.val:
                return False 

            return (
                isSameTree(p.left, q.left)
                and
                isSameTree(p.right, q.right)
            )

        if not root:
            return False

        if isSameTree(root, subRoot):
            return True

        left = self.isSubtree(root.left, subRoot)
        right = self.isSubtree(root.right, subRoot)

        return left or right