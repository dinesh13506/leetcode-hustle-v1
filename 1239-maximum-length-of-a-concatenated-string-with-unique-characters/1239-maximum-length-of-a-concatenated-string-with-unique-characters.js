/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let maxLength = [0];
    backTrack(arr, "", 0, maxLength);
    return maxLength[0];
};

function backTrack(arr, current, start, maxLength) {
    if (maxLength[0] < current.length) {
        maxLength[0] = current.length;
    }

    for (let i = start; i < arr.length; i++) {
        if (!isValid(current, arr[i])) {
            continue;
        }

        backTrack(arr, current + arr[i], i + 1, maxLength);
    }
}

function isValid(currentString, newString) {
    const charSet = new Set();

    for (let ch of newString) {
        if (charSet.has(ch)) {
            return false;
        }

        charSet.add(ch);

        if (currentString.includes(ch)) {
            return false;
        }
    }

    return true;
}