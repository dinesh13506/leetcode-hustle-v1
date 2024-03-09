/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
   let set = new Set();
   for(let num of nums1) {
      set.add(num);
   }
   for(let num of nums2) {
       if(set.has(num)) return num;
   }
   return -1;
};