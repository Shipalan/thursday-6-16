// Write your solution below:


function sorter(str) {
    let s = [];
    let m = [];
    let l = [];

    for (let i=0; i<str.length; i++){
        if (str[i] === 's'){
            s.push(str[i])
        } else if (str[i] === 'm'){
            m.push(str[i])
        } else if (str[i] === 'l'){
            l.push(str[i])
        } 
    }
    let newArr = s.concat(m.concat(l)).join('');
    return newArr

}
console.log(sorter('slsmmsllsmsmlmsls'))



//---------------------------------------Short hand ----------------------------------------------------------------


function tShirtSorter(shirts){
    return shirts.split('').sort().reverse().join('');
}

console.log(tShirtSorter('slsmmsllsmsmlmsls'))
