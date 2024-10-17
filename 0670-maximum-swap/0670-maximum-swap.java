class Solution {
    public int maximumSwap(int num) {
        List<Integer> orig = new ArrayList<>();
        List<Integer> sorted = new ArrayList<>();
        while(num > 0) {
            orig.add(num % 10);
            sorted.add(num % 10);
            //System.out.println(num  % 10);
            num = (int) (num  / 10);

        }
        sorted.sort(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1 - o2;
            }
        });


        //System.out.println(orig);
        //System.out.println(sorted);
        for(int i= sorted.size() - 1; i >= 0;i--) {
            if(sorted.get(i) == orig.get(i)) {
                continue;
            } else {
                int newValue = sorted.get(i);
                int oldValue= orig.get(i);
                int idx = -1;
                for(int j= i- 1; j >= 0;j--) {
                    if(orig.get(j) == newValue) {
                        //orig.set(j, oldValue);
                        idx = j;
                        //break;
                    }
                }
                //System.out.println("idx = " + idx);
                if(idx >= 0) orig.set(idx, oldValue);
                orig.set(i, newValue);

                break;
            }
        }

        StringBuilder str = new StringBuilder();
        for(int i= sorted.size() - 1; i >= 0; i--) {
            str.append(orig.get(i));
        }
        //System.out.println(orig);

        //System.out.println(str.toString());
        return str.length() > 0  ? Integer.parseInt(str.toString()) : 0;

    }
}