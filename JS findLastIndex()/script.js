const grades = [ 85, 87, 39, 94, 98, 76, 98, 72, 89]

const lastAGrade = document.getElementById("last-a-grade")
const lastIndex = grades.findLastIndex(grade => grade >= 95)

if (lastIndex !== -1) {
    lastAGrade.textContent = `The last 'A' grade student is at index: ${lastIndex}`
} else {
    lastAGrade.textContent = 'No "A" grade students found.'
}