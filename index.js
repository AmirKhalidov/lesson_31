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
    const allIds = [];
    const uniqueIds = [];
    const repeatedIndices = [];

    for (const [index, obj] of arr.entries()) {
        allIds.push([obj.id, index]);
    }

    for (const elem of allIds) {
        !uniqueIds.includes(elem[0])
            ? uniqueIds.push(elem[0])
            : repeatedIndices.push(elem[1]);
    }

    for (let i = repeatedIndices.length - 1; i >= 0; i -= 1) {
        arr.splice(repeatedIndices[i], 1);
    }

    console.log(allIds);
    console.log(uniqueIds);
    console.log(repeatedIndices);
    console.log(arr)
};

const users = [
    {
        id: 12,
        name: 'Jane',
        age: 24,
    },
    {
        id: 12,
        name: 'Jim',
        age: 34,
    },
    {
        id: 13,
        name: 'Pat',
        age: 23,
    },
    {
        id: 14,
        name: 'Harry',
        age: 43,
    },
    {
        id: 12,
        name: 'Conan',
        age: 32,
    },
];

// uniqueUsers(users);

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
