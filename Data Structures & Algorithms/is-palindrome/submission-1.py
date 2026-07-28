class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned = "".join(c.lower() for c in s if c.isalnum())

        left = 0
        right = len(cleaned) - 1

        while left < right :
            if cleaned[left] != cleaned[right]:
                return False 
            
            left += 1
            right -=1

        return True
