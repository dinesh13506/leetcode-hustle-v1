
var MyQueue = function() {
    this.stack = [];
    this.start = -1;
    this.end = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
    if(this.start < 0) this.start++;
    this.end++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack[this.start++];
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.start];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.start > this.end || this.start == -1) return true;
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */