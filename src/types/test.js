function nearestValue(values, search) {
    if (values.includes(search)) {
        return values[values.indexOf(search)];
    }
    return 1;
}
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));
