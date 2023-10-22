let arr_r = [12, 4, 50, 1, 0, 18, 40]
for (let i = 0; i < arr_r.length; i++) {
    if (arr_r[i] == 0){
        console.log('True')
    }
}


let arr_text =  ['yes', 'hello', 'no', 'easycode', 'what']
for (let i = 0; i < arr_text.length; i++) {
    if (arr_text[i].length < 3){
        console.log('False')
    }
    else if (arr_text[i].length > 3){
        console.log('True')
    }
}


arr_st = ['I','am','a','fornt-end','developer']
arr_st.sort(function(a, b){
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return b.length - a.length;
});
console.log(arr_st)
arr_st.sort(function(a, b){
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return a.length - b.length;
});
console.log(arr_st)


let arr_arr =  [1, 2, 3, 4, 5]
arr_arr.splice(1, 2)
console.log(arr_arr)


let arr_a = [1, 2, 3, 4, 5]
arr_a.pop()
arr_a.splice(0, 1)
let empty_arr = [...arr_a]
console.log(empty_arr)


let arr_rr = [1, 2, 3, 4, 5]
arr_rr.splice(3, 0, 'a', 'b', 'c')
console.log(arr_rr)


let arr = [1, 2, 3, 4, 5]
arr.splice(1, 0, 'a', 'b')
arr.splice(6, 0, 'c')
arr.push('e')
console.log(arr)


let str = '123456'
let reverse = str.split('').reverse().join('');
console.log(reverse);