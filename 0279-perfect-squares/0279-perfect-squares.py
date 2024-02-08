class Solution:
    def numSquares(self, n: int) -> int:
        squares = []

        for i in range(1,int(sqrt(n))+1):
            squares.append(i*i)

        dp = [float('inf')]*(n+1)
        dp[0]=0
        dp[1]=1

        for i in range(2,n+1):
            for s in squares:
                if s==i:
                    dp[i]=1
                elif s<i:
                    dp[i]=min(dp[i],dp[i-s]+dp[s])
        
        return dp[-1]
        