function Sixth_Function(array) {
    let new_Arr = [];
    for (let i = array.length - 1; i >= 0; i++) {
        new_Arr.push(array[i]);
    }
    return new_Arr;
}