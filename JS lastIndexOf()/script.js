const caliExercises = [
    "Pull-Ups",
    "Muscle-Ups",
    "Pull-Ups",
    "Human flag",
    "Push-Ups",
    "Pull-Ups",
    "Handstand",
    "Pull-Ups",
    "Handstand-pushups"
]

const lastExercise = document.getElementById("last-trained")
const lastPullUps = caliExercises.lastIndexOf("Pull-Ups")

if (lastPullUps !== -1) {
    lastExercise.textContent = `The last time I trained pull-ups is at index: ${lastPullUps}`
} else {
    lastExercise.textContent = "No pull-ups today, because its cheatday!!!"
}
