/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    const totalPersons = times.length;
    let availableChairs = new PriorityQueue({ compare : (a, b) => {
       return a - b;
    }});
    let allocatedChairs = new PriorityQueue({compare : (a, b) => {
        if(a[1] == b[1]) {
            return a[2] - b[2];
        }
        return a[1] - b[1];
     }});
    //init
    for(let i = 0; i < totalPersons; i++) {
        availableChairs.enqueue(i);
    }
    times.map((value,index) => {
        return value.push(index);
    })
    
    times.sort((a,b) => {
        let inTime1 = a[0], inTime2 = b[0];
        if(inTime1 == inTime2) {
            let outTime1 = a[0], outTime2 = b[0];
            return outTime1 - outTime2;
        }
        return inTime1 - inTime2;
    });
    //console.log(times);
    for(let i = 0; i < totalPersons; i++) {
        let inTime = times[i][0], outTime = times[i][1];
        while(allocatedChairs.size() && allocatedChairs.front()[1] <= inTime) {
            let chair = allocatedChairs.front()[3];
            allocatedChairs.dequeue();
            availableChairs.enqueue(chair);
        }
        let chair = availableChairs.dequeue();
        times[i].push(chair);
        allocatedChairs.enqueue(times[i]);
    }
    for(let i = 0; i < totalPersons; i++) {
        if(times[i][2] == targetFriend) {
            return times[i][3];
        }
    }

    //console.log(times);
    return 0;
};