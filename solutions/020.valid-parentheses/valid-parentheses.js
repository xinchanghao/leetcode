/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     var stack = [],
        map = {
            ['(']: ')',
            ['[']: ']',
            ['{']: '}'
        };
    for (var i = 0; i < s.length; i++) {
        if (!stack.length) {
            stack.push(s[i]);
        } else if (s[i] === map[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return !stack.length;
};