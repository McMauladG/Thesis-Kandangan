localStorage.setItem("reports", JSON.stringify([
  {
    student_name: "Juan Dela Cruz",
    grade: "Grade 6",
    incident_type: "Fever",
    status: "Pending",
    submitted_by: "Teacher A",
    time: new Date().toLocaleString()
  },
  {
    student_name: "Maria Santos",
    grade: "Grade 5",
    incident_type: "Headache",
    status: "Pending",
    submitted_by: "Teacher B",
    time: new Date().toLocaleString()
  }
]));
location.reload();