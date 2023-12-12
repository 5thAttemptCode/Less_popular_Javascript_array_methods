let courses = ['Course 1', 'Course 2', 'Course 3', 'Featured Course 1', 'Featured Course 2']
  
const courseDiv = document.getElementById('course-list')
const button = document.getElementById("button")

function renderCourses() {
  // First, clear the course list
  while (courseDiv.firstChild) {
    courseDiv.removeChild(courseDiv.firstChild)
  }

  // Then, repopulate it with current course data
  for (let i = 0; i < courses.length; i++) {
    let item = document.createElement('p')
    item.textContent = courses[i]
    courseDiv.appendChild(item)
  }
}

function copy(){
  courses.copyWithin(0, courses.length-2)
  renderCourses()
}

// Initial render
renderCourses();

button.addEventListener("click", copy)