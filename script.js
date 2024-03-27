
let grade = [];

let unit = [];


document.querySelector(".btn").addEventListener("click", () => {

    let qualityPoint = []

  let grade1 = parseInt(document.getElementById("grade1").value)
  let grade2 = parseInt(document.getElementById("grade2").value)
  let grade3 = parseInt(document.getElementById("grade3").value)
  let grade4 = parseInt(document.getElementById("grade4").value)
  let grade5 = parseInt(document.getElementById("grade5").value)
  let grade6 = parseInt(document.getElementById("grade6").value)
  let grade7 = parseInt(document.getElementById("grade7").value)
  let grade8 = parseInt(document.getElementById("grade8").value)
  let grade9 = parseInt(document.getElementById("grade9").value)
  let grade10 = parseInt(document.getElementById("grade10").value)

  grade.push(grade1);
  grade.push(grade2);
  grade.push(grade3);
  grade.push(grade4);
  grade.push(grade5);
  grade.push(grade6);
  grade.push(grade7);
  grade.push(grade8);
  grade.push(grade9);
  grade.push(grade10);

  console.log(grade);

  let unit1 = parseInt(document.getElementById("unit1").value)
  let unit2 = parseInt(document.getElementById("unit2").value)
  let unit3 = parseInt(document.getElementById("unit3").value)
  let unit4 = parseInt(document.getElementById("unit4").value)
  let unit5 = parseInt(document.getElementById("unit5").value)
  let unit6 = parseInt(document.getElementById("unit6").value)
  let unit7 = parseInt(document.getElementById("unit7").value)
  let unit8 = parseInt(document.getElementById("unit8").value)
  let unit9 = parseInt(document.getElementById("unit9").value)
  let unit10 = parseInt(document.getElementById("unit10").value)

  unit.push(unit1);
  unit.push(unit2);
  unit.push(unit3);
  unit.push(unit4);
  unit.push(unit5);
  unit.push(unit6);
  unit.push(unit7);
  unit.push(unit8);
  unit.push(unit9);
  unit.push(unit10);
  
  console.log(unit)

  let QP1 = unit[0] * grade[0]
  let QP2 = unit[1] * grade[1]
  let QP3 = unit[2] * grade[2]
  let QP4 = unit[3] * grade[3]
  let QP5 = unit[4] * grade[4]
  let QP6 = unit[5] * grade[5]
  let QP7 = unit[6] * grade[6]
  let QP8 = unit[7] * grade[7]
  let QP9 = unit[8] * grade[8]
  let QP10 = unit[9] * grade[9]

  qualityPoint.push(QP1)
  qualityPoint.push(QP2)
  qualityPoint.push(QP3)
  qualityPoint.push(QP4)
  qualityPoint.push(QP5)
  qualityPoint.push(QP6)
  qualityPoint.push(QP7)
  qualityPoint.push(QP8)
  qualityPoint.push(QP9)
  qualityPoint.push(QP10)

  console.log(qualityPoint)

  const totalUnits = unit[0] + unit[1] + unit[2] + unit[3] + unit[4] + unit[5] + unit[6] + unit[7] + unit[8] + unit[9];
  console.log(totalUnits)
  const totalQP = QP1 + QP2 + QP3 + QP4 + QP5 + QP6 + QP7 + QP8 + QP9 + QP10
  console.log(totalQP)

let GPA = 0;
if (totalUnits > 0) {
  GPA = totalQP / totalUnits;
  GPA = Math.round(GPA * 100) / 100; // Round to two decimal places
}

document.getElementById("GPA").innerText = GPA;
});
