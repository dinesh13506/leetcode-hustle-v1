class Solution {
    public List<List<Integer>> generate(int numRows) {

        List<List<Integer>> result = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();
        temp.add(1);
        if(numRows == 1) {
            result.add(temp);
            return result;
        }
        result.add(temp);
        for(int i = 2; i <= numRows; i++) {
            List<Integer> newTemp = new ArrayList<>();
            for(int j = 0; j < temp.size(); j++) {
                if(j == 0) {
                    newTemp.add(temp.get(j));
                    continue;
                } else {
                    int sum = temp.get(j) + temp.get(j-1);
                    newTemp.add(sum);
                }
            }
            newTemp.add(1);
            result.add(newTemp);
            temp = newTemp;
        }
        return result;
    }
}