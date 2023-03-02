
class minheap {
    
    constructor() {
        this.list = []
    }
    
    size = () => {
        return this.list.length
    }
    
    swap = (i,j) => {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }
    
    heapify = (i) => {
        let len = this.size()
        let left = (2*i) + 1
        let right = ( 2*i) + 2
        let smallest = i
        
        if( left < len && this.list[left] < this.list[smallest]){
            smallest = left
        }
        
        if( right < len && this.list[right] < this.list[smallest]) {
            smallest = right
        }
        
        if( smallest !=i ) {
            this.swap(i,smallest)
            this.heapify(smallest)
        }
    }
    
    insert = ( num ) => {
        let len = this.size()
        
        if( len == 0 ) {
            this.list.push(num)
        }
        else {
            this.list.push(num)
            
            for( let i = parseInt(this.size()/2) - 1; i>=0; i--) {
                this.heapify(i)
            }
        }
    }
    
    buildheap = (arr) => {
        
        for( let num of arr) {
            this.list.push(num)
        }
        for( let i = parseInt(this.size()/2) - 1; i>=0; i--) {
                this.heapify(i)
        }
    }
    
    extractMin = () => {
        let min = this.list[0]
        this.swap(0, this.size()-1)
        this.list.pop()
        this.heapify(0)
        return min
    }
    
    getSortedList = () => {
        return this.list
    }
}



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    let mh = new minheap()
    mh.buildheap(nums)
    
    let len = nums.length
    for( let i=0; i<len;i++) {
        nums[i] = mh.extractMin()
    }
    
    return nums
    
    
};