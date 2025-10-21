const BASE_URL = "https://student-data-public-api.onrender.com";

async function getAllStudents() {
  /* 
  Fetches all student data from the API and displays it on the page.
  */
  const response = await fetch(`${BASE_URL}/students`);
  const data = await response.json();
  console.log(data);
  document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}

async function getStudentById(id) {
  /* 
  Fetches data for a individual student by their ID from the API.
  */
  const response = await fetch(`${BASE_URL}/students/${id}`);
  const data = await response.json();
  document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}

async function addStudent() {
  /* 
  Adds a single new student to the API by sending a POST request 
  with the student's data.
  */
  const id = prompt("Enter student ID (must be a new id number):");
  const name = prompt("Enter student name:");
  const gpa = prompt("Enter student GPA:");
  const grade = prompt("Enter student grade:");
  const degree = prompt("Enter student degree:");

  if (!id || !name || !gpa || !grade || !degree) {
    alert("All fields are required!");
    return;
  }

  const newStudent = {
    id: parseInt(id),
    name,
    gpa,
    grade,
    degree
  };

  const response = await fetch(`${BASE_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newStudent)
  });

  const data = await response.json();
  document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}

async function deleteStudent() {
  /* 
  Deletes a student from the API by sending a DELETE request 
  for the given student ID.
  */
  const id = prompt("Enter student ID to delete:");

  if (!id) {
    alert("ID is required!");
    return;
  }

  const response = await fetch(`${BASE_URL}/students/${id}`, {
    method: "DELETE"
  });

  const data = await response.json();
  document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}