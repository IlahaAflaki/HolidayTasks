function Second_Function(array) {
    let sum = 0;
    let counter = 0;
    let medium;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        counter++;
    }
    medium = sum / counter;
    return medium;
}