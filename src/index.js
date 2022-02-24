module.exports = function check(str, bracketsConfig) {

  let stack = [];
  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i].indexOf() === 0) {
      stack.push(str[i])
      return
    }
    let last = bracketsConfig.find(bracket=> stack[stack.length - 1] === bracket[0])
    last = last && last[1]
  
    if (str[i] !== last) {
      stack.push(str[i])
    }else{
      stack.pop()
    }
  }

  return stack.length === 0;
};