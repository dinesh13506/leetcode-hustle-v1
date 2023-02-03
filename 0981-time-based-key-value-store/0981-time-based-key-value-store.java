class TimeValue {
    public int timestamp;
    public String value;
    
    public  TimeValue(int timestamp, String value) {
        this.timestamp = timestamp;
        this.value = value;
    }
}

class TimeMap {

    HashMap<String, ArrayList<TimeValue> > map;
    public TimeMap() {
        map = new  HashMap<String, ArrayList<TimeValue>>();
    }
    
    public void set(String key, String value, int timestamp) {
        if(map.containsKey(key) == false) {
            map.put(key, new ArrayList<TimeValue>());
        }
        map.get(key).add(new TimeValue(timestamp, value));
    }
    
    public String get(String key, int timestamp) {
        String res = "";
        if(map.containsKey(key) == false) {
            return res;
        }
        ArrayList<TimeValue> al = map.get(key);
        // for(TimeValue tv: al) {
        //     if(tv.timestamp <= timestamp) {
        //         res = tv.value;
        //     }
        // }
        int start = 0, end = al.size() - 1;
        while(start <= end) {
            int mid = start + (end - start) / 2;
            if(al.get(mid).timestamp == timestamp) {
                return al.get(mid).value;
            }
            else if(al.get(mid).timestamp < timestamp) {
                res =  al.get(mid).value;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */