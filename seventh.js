function Seventh_Function(array1, array2) {
    let Avarage_array = [];
    for (let i = 0; i < array1.length; i++) {
        const includesValue = array2.some(element => {
            return element.toLowerCase() === array1[i].toLowerCase();
        });
        if (includesValue) {
            Avarage_array.push(array1[i]);
        }
    }
    return Avarage_array;
}