function Nineth_Function(str) {
    return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    });
}

console.log(Nine_Func("Hello world"))