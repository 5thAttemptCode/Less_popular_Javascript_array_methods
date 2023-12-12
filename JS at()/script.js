const projectTasks = [
    "Project idea",
    "Planning and research",
    "Design Process",
    "Write the code",
    "Final client approval",
    "Project Launch",
    "Party and get drunk"
]

const firstProjectTask = projectTasks.at(0)

const firstPtag = document.querySelector(".first")
firstPtag.innerHTML = firstProjectTask


const finalProjectTask = projectTasks.at(-1)

const finalPtag = document.querySelector(".final")
finalPtag.innerHTML = finalProjectTask