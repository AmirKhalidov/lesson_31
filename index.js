// TASK 1
function properSpelling(arr) {
    const properSpelling = [];
    for (const string of arr) {
        properSpelling.push(
            string[0].toUpperCase() + string.slice(1).toLowerCase()
        );
    }

    return properSpelling;
}

// properSpelling(['independence DAY', 'neW DiscoverY'])

// TASK 2
const uniqueUsers = function (arr) {
    const uniquesArray = [];

    for (const element of arr) {
        !uniquesArray.includes(element) ? uniquesArray.push(element) : '';
    }

    return uniquesArray;
};

// uniqueUsers([23, 453, 65, 234, 234, 45, 23]);

// TASK 3
const noRepeatString = function (str) {
    const strArray = str.split(' ');

    const lengths = [];

    for (const element of strArray) {
        let checkWord = '';
        for (let i = 0; i < element.length; i += 1) {
            if (checkWord.includes(element[i]))
                strArray.splice(strArray.indexOf(element), 1);

            checkWord += element[i];
        }
    }

    for (let i = 0; i < strArray.length; i += 1) {
        lengths.push(strArray[i].length);
    }

    let longest = lengths[0];
    let indexOfLongest = 0;
    for (let i = 0; i < lengths.length; i += 1) {
        if (lengths[i] > longest) {
            longest = lengths[i];
            indexOfLongest = i;
        }
    }

    console.log(strArray[indexOfLongest]);
};

// noRepeatString('I work as a stunt actor');

// TASK 4
const noRepeatElements = function (arr1, arr2) {
    const unitedArr = [...arr1, ...arr2];
    const noRepeatArr = [];
    for (const el of unitedArr) {
        !noRepeatArr.includes(el) ? noRepeatArr.push(el) : '';
    }

    return noRepeatArr;
};

// noRepeatElements([2, 3, 4, 6], [5, 3, 2, 6, 2, 7, 8]);

// TASK 5
const votesCount = function (strArr) {
    const finalCount = {
        trump: 0,
        biden: 0,
    };

    for (const element of strArr) {
        element === 'Trump' ? (finalCount.trump += 1) : (finalCount.biden += 1);
    }

    console.log(finalCount);
};

// votesCount([
//     'Trump',
//     'Biden',
//     'Trump',
//     'Trump',
//     'Trump',
//     'Biden',
//     'Biden',
//     'Biden',
// ]);
