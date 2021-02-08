function filterArr(arr, numM) {
    var arrSub = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= numM) {
            arrSub[j] = arr[i];
            j++;
        }
    }
    return arrSub;
}

function deduArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) != i) {
            var j = arr.lastIndexOf(arr[i]);
            do {
                arr[j] = arr[j + 1];
                j++;
            } while (j < arr.length - 1)
            arr.length--;
            i--;
        }
    }
    return arr;
}

function numWord(str) {
    var index = str.indexOf('o');
    while (index !== -1) {
        console.log(index);
        index = str.indexOf('o', index + 1);
    }
}

// Control panel
//console.log(filterArr([1500, 1200, 2000, 2100, 1800], 2000));
//console.log(deduArr(['c', 'a', 'z', 'a', 'x', 'c', 'b', 'c']));
//numWord('ascdsovososafaosodobo');
