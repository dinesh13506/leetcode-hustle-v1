class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0, totalCost = 0, totalStations = gas.length;
        for(int g : gas) totalGas += g;
        for(int c : cost) totalCost += c;
        
        if(totalCost > totalGas) return -1;
        int startPos = 0;
        int total = 0;
        for(int i = 0; i < totalStations; i++) {
            if(total < 0) {
                startPos = i;
                total = gas[i] - cost[i];
            } else {
                total += gas[i] - cost[i];
            }
        }
        return startPos;
        
    }
}