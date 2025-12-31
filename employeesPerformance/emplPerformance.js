
const employees = [
  { name: "Ali", department: "HR", monthlyScores: [80, 90, 75] },
  { name: "Subhan", department: "IT", monthlyScores: [95, 88, 92] },
  { name: "Adil", department: "HR", monthlyScores: [60, 70, 65] },
  { name: "Ahmad", department: "IT", monthlyScores: [] }
];


function calculateAverage(scores) {
  if (scores.length === 0) return 0;
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}


function assignGrade(avg) {
  if (avg >= 90) return "A+";
  else if (avg >= 80) return "A";
  else if (avg >= 70) return "B";
  else if (avg >= 60) return "C";
  else return "F";
}


const departmentToppers = {};

for (let emp of employees) {
  const avg = calculateAverage(emp.monthlyScores);
  const grade = assignGrade(avg);
  console.log(`Employee: ${emp.name}, Department: ${emp.department}, Average: ${avg.toFixed(2)}, Grade: ${grade}`);

  if (!departmentToppers[emp.department] || avg > departmentToppers[emp.department].avg) {
    departmentToppers[emp.department] = { name: emp.name, avg };
  }
}


console.log("\nTop Performers by Department:");
for (let dept in departmentToppers) {
  console.log(`${dept}: ${departmentToppers[dept].name} (${departmentToppers[dept].avg.toFixed(2)})`);
}