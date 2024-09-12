
function getCountMap(input : string) : number[] {
    let count = new Array(26);
    count.fill(0);
    let i : number = 0;
    let n : number = input.length;
    while(i < n) {
        count[input.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        i++;
    }
    return count;
}

function countConsistentStrings(allowed: string, words: string[]): number {
    
    let count : number[] = getCountMap(allowed);
    //console.log(count)
    let ans : number = 0;
    
    for(let i = 0; i < words.length ; i++) {
        let temp = getCountMap(words[i]);
        //console.log(temp)
        ans++;
        for(let i = 0; i < 26; i++) {
            if(temp[i] && count[i] != temp[i]) {
                ans--;
                break;
            }
        }
    }
    
    return ans;

};