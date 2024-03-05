/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let arr = [];
    for(let ch of s) {
        if(arr.length == 0) {
            arr.push({
                count : 1,
                ch : ch
            });
        } else if(ch == arr[arr.length-1].ch) {
            arr[arr.length-1].count++;
        } else {
            arr.push({
                count : 1,
                ch : ch
            });
        }
    }
    //console.log(arr);
    let i = 0, j = arr.length-1;
    let del = 0;
    while(i < j) {
        if(arr[i].ch == arr[j].ch) {
            del = del + arr[i].count;
            del = del + arr[j].count;
            arr[i].count = 0;
            arr[j].count = 0;
            i++;
            j--;
        } else {
            break;
        }
    }
    //console.log(arr);
    if(i == j ) {
        return arr[i].count > 1 ? 0 : arr[i].count;
    }
    return s.length - del;
};