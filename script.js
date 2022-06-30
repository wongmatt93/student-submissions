const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 90,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

addSubmission(submissions, "Matt", 19, "test");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    return item.name === name;
  });
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    console.log("Name not found");
  }
};

// deleteSubmissionByName(submissions, "Jane");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  score >= 60 ? (array[index].passed = true) : (array[index].passed = false);
};

editSubmission(submissions, 0, 100);
console.log(submissions);

const findSubmissionByName = (array, name) =>
  array.find((student) => student.name === name);

console.log(findSubmissionByName(submissions, "Jane"));

const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((student) => {
    if (student.score < lowestScore.score) {
      lowestScore = student;
    }
  });
  return lowestScore;
};

console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (let student of array) {
    sum += student.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

const filterPassing = (array) => array.filter((student) => student.passed);

console.log(filterPassing(submissions));

const filter90AndAbove = (array) =>
  array.filter((student) => student.score >= 90);

console.log(filter90AndAbove(submissions));

//extended challenges
const createRange = (start, end) => {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};

console.log(createRange(1, 10));

// const countElements = (array) => {
//   let newArray = [...new Set(array)].sort();
//   let newObject = {};
//   for (let letter of newArray) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (letter === array[i]) {
//         counter++;
//       }
//     }
//     newObject[letter] = counter;
//   }
//   return newObject;
// };

const countElements = (array) => {
  let newArray = array.filter((x, i, a) => a.indexOf(x) === i).sort();
  let newObject = {};
  for (let letter of newArray) {
    let count = array.filter((item) => item === letter);
    newObject[letter] = count.length;
  }
  return newObject;
};

console.log(countElements(["d", "a", "b", "a", "c", "a", "b", "a", "a", "a"]));
