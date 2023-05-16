export const sortArray = (dataArray, key, order) => {
    const sortedUsers = [...dataArray].sort((a, b) => {
        let valueA = a[key]
        let valueB = b[key]
        if (typeof a[key] === 'boolean') {
            valueA = a[key].toString();
            valueB = b[key].toString();
        }
        const elementA = valueA.toLowerCase();
        const elementB = valueB.toLowerCase();
        if (order === "ascending") {
            if (elementA < elementB) {
                return -1;
            }
            if (elementA > elementB) {
                return 1;
            }
        } else if (order === "descending") {
            if (elementA > elementB) {
                return -1;
            }
            if (elementA < elementB) {
                return 1;
            }
        }
        return 0;
    });
    return sortedUsers;
}