export const sortByKeyAlphabet = (dataArray, key, order) => {
    const sortedArray = [...dataArray].sort((a, b) => {
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
    return sortedArray;
}

export const sortByKeyLength = (dataArray, key, order) => {
    const sortedArray = [...dataArray].sort((a, b) => {
        const keyALength = a[key].length;
        const keyBLength = b[key].length;

        if (order === "ascending") {
            if (keyALength < keyBLength) {
                return -1;
            }
            if (keyALength > keyBLength) {
                return 1;
            }
        } else if (order === "descending") {
            if (keyALength > keyBLength) {
                return -1;
            }
            if (keyALength < keyBLength) {
                return 1;
            }
        }
        return 0;
    });
    return sortedArray;
}