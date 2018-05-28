/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let array = []
    backtrack('', 0, 0, n)
    return array;

    function backtrack(str, open, close, n){
        if(str.length === n*2){
          array.push(str)
          return
        }
        if(open < n){ // 试探
          backtrack(str + '(', open+1, close, n)
        }
        if(close < open){ // 上一个试探直到走不通，就会回到这里继续
          backtrack(str + ')', open, close+1, n)
        }
    }
};