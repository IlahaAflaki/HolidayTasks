function Fourth_Function(array) {
    let median = Second_Function(array);
    console.log(median);
    let array_of_bigs = [];
    for (let i = 0; i < array.length; i++) {
        if (median < array[i]) {
            array_of_bigs.push(array[i]);
        }
    }
    return array_of_bigs;
}