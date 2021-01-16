module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let bracket of str) {
      let config = bracketsConfig.find(x => x.findIndex(y => y === bracket) !== -1);
      if (!config) {
        return false;
      }
      if (config[0] === config[1]) {
        if (stack[stack.length - 1] === bracket) {
          stack.pop();
        } else {
          stack.push(bracket);
        }
      } else {
        if (config[0] === bracket) {
          stack.push(bracket);
        } else {
          if (stack[stack.length - 1] !== config[0]) {
            return false;
          } else {
            stack.pop();
          }
        }
      }
    }
    return stack.length === 0;
  }

