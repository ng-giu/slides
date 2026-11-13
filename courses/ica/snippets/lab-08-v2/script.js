// #region step1
const title = "Inception";
const releaseYear = 2010;
const watchedRecently = true;

const movie = { title, releaseYear, watchedRecently };
console.table(movie);
// #endregion step1

// #region step2
const score = 85;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

const status = score >= 80 ? "Good" : "Needs work";
console.log(`${title}: ${status}`);
// #endregion step2

// #region step3
for (let i = 1; i <= 5; i++) {
  console.log("For:", i);
}

let count = 5;
while (count >= 1) {
  console.log("While:", count);
  count--;
}
// #endregion step3

// #region step4
function passed(grade) {
  return grade >= 50;
}

console.log(passed(78));
console.log(passed(40));
// #endregion step4

// #region step5
const grades = [40, 55, 78, 90, 100];

console.log(grades.filter(passed));
console.log(grades.filter(g => g >= 50));

const bonus = grades.map(g => g + 5);
bonus.forEach(g => console.log("Final:", g));
// #endregion step5
