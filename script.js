const subjectsData = {
  "2022-2026": {
    1: [
      {sem: 1, code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2,},
      { sem: 1, code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      {sem: 1, code: "GE3151",name: "Problem Solving and Python Programming", credits: 3,},
      { sem: 1, code: "GE3152", name: "Heritage of Tamils", credits: 1 },
      {sem: 1, code: "GE3171", name: "Problem Solving and Python Programming Laboratory",credits: 2,},
      { sem: 1, code: "GE3172", name: "English Laboratory", credits: 1 },
      { sem: 1, code: "HS3152", name: "Professional English - I", credits: 3 },
      { sem: 1, code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { sem: 1, code: "PH3151", name: "Engineering Physics", credits: 3 },
    ],
    2: [
      { sem: 2, code: "AD3251", name: "Data Structures Design", credits: 3 },
      {sem: 2,code: "AD3271",name: "Data Structures Design Laboratory",credits: 2,},
      {sem: 2,code: "BE3251",name: "Basic Electrical and Electronics Engineering",credits: 3,},
      {sem: 2, code: "GE3251", name: "Engineering Graphics", credits: 4 },
      {sem: 2, code: "GE3252", name: "தமிழரும் தொழில்நுட்பமும்", credits: 1 },
      {sem: 2,code: "GE3271",name: "Engineering Practices Laboratory",credits: 2,},
      { sem: 2, code: "GE3272", name: "Communication Lab", credits: 2 },
      { sem: 2, code: "HS3252", name: "Professional English - II", credits: 2 },
      {sem: 2,code: "MA3251",name: "Statistics and Numerical Methods",credits: 4},
      {sem: 2,code: "PH3256",name: "Physics for Information Science",credits: 3,},
    ],
    3: [
      {sem: 3,code: "AD3351",name: "Design and Analysis of Algorithms",credits: 4,},
      {sem: 3,code: "AD3491",name: "Fundamentals of Data Science and Analytics",credits: 3,
      },
      {sem: 3,code: "CS3351",name: "Digital Principles and Computer Organization",credits: 4,},
      {sem: 3,code: "CS3381",name: "Object-Oriented Programming Laboratory",credits: 1.5,},
      {sem: 3,code: "CS3391",name: "Object-Oriented Programming",credits: 3,},
      { sem: 3, code: "CW3301", name: "Fundamentals of Economics", credits: 3 },
      {sem: 3,code: "CW3311",name: "Business Communication Laboratory I",credits: 1.5,},
      { sem: 3, code: "GE3361", name: "Professional Development", credits: 1 },
      { sem: 3, code: "MA3354", name: "Discrete Mathematics", credits: 4 },
    ],
    4: [
      {sem: 4,code: "AD3461",name: "Machine Learning Laboratory",credits: 2},
      { sem: 4, code: "AL3451", name: "Machine Learning", credits: 3 },
      { sem: 4, code: "AL3452", name: "Operating Systems", credits: 4 },
      {sem: 4,code: "CS3481",name: "Database Management Systems Laboratory",credits: 1.5},
      {sem: 4,code: "CS3492",name: "Database Management Systems",credits: 3},
      {sem: 4,code: "CW3401",name: "Introduction to Business Systems",credits: 3},
      {sem: 4,code: "CW3411",name: "Business Communication Laboratory II",credits: 1.5},
      {sem: 4,code: "GE3451",name: "Environmental Sciences and Sustainability",credits: 2},
      {sem: 4,code: "MA3391",name: "Probability and Statistics",credits: 4},
    ],
    5: [
      { sem: 5, code: "CCS336", name: "Cloud Service Management", credits: 3 },
      { sem: 5, code: "CCS346", name: "Exploratory Data Analysis", credits: 3 },
      { sem: 5, code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
      {sem: 5,code: "CW3501",name: "Fundamentals of Management",credits: 3},
      { sem: 5, code: "CW3511", name: "Summer Internship", credits: 2 },
      {sem: 5,code: "CW3551",name: "Data and Information Security",credits: 3},
      {sem: 5,code: "MX3084",name: "Disaster Risk Reduction and Management (Non-credit)",credits: 0,},
    ],
  },
  "2023-2027": {
    1: [
      {sem: 1,code: "PUCC1HM01",name: "Professional English - I",credits: 2,},
      { sem: 1, code: "PUCC1BS01", name: "Matrices and Calculus", credits: 4 },
      { sem: 1, code: "PUCC1BS02", name: "Engineering Physics", credits: 3 },
      { sem: 1, code: "PUCC1BS03", name: "Engineering Chemistry", credits: 3 },
      { sem: 1, code: "PUCC1BE01", name: "Engineering Graphics", credits: 4 },
      { sem: 1, code: "PUCC1HM02", name: "Heritage of Tamil", credits: 1 },
      {sem: 1,code: "PUCC1PL01",name: "Professional English - I(Lab)",credits: 2,},
      {sem: 1,code: "PUCC1PL02",name: "Physics and Chemistry Laboratory",credits: 2,},
      // { sem:1,  code: "PUCC1HM03", name: "Wellness", credits: 0 }
    ],
    2: [
      {sem: 2,code: "PUCC2HMO4",name: "Professional English - II",credits: 2},
      {sem: 2,code: "PUCC2BS04",name: "Statistics and Numerical Methods",credits: 4},
      {sem: 2,code: "PUCS2BS05",name: "Physics for Information Sciences",credits: 3},
      {sem: 2,code: "PUCC2BE02",name: "Basic Electrical and Electronics Engineering",credits: 3},
      {sem: 2,code: "PUCC2BE03",name: "Introduction to Computer Science & Business Systems",credits: 3},
      {sem: 2,code: "PUCC2BE04",name: "Problem Solving using Python Programming",credits: 2},
      {sem: 2,code: "PUCC2HM05",name: "தமிழரும் தொழில்நுட்பமும்",credits: 1},
      {sem: 2,code: "PUCC2PL03",name: "Professional English - II(Lab)",credits: 2},
      {sem: 2,code: "PUCC2PL04",name: "Problem Solving using Python Programming Laboratory",credits: 2},
      {sem: 2,code: "PUCC2PL05",name: "Civil and Mechanical Engineering Practices",credits: 1},
      {sem: 2,code: "PUCC2PL06",name: "Electrical and Electronics Engineering Preactices",credits: 1,
      },
      // { sem:2, code: "PUCC2HM06", name: "Wellness", credits: 0 },
    ],
    3: [
      { sem: 3, code: "PUCB3BS09", name: "Discrete Mathematics", credits: 4 },
      {sem: 3,code: "PUCS3PC01",name: "Computer Organization & Architecture",credits: 4},
      {sem: 3,code: "PUAD2BE03",name: "Fundamentals of Data Science and Analytics",credits: 3},
      {sem: 3,code: "PUCS3PC03",name: "Data Structures and Algorithms",credits: 4},
      {sem: 3,code: "PUCS3PC04",name: "Object-Oriented Programming",credits: 3},
      {sem: 3,code: "PUCC3MCXX",name: "Mandatory Course-I(Non-credit)",credits: 0},
      {sem: 3,code: "PUAD3PL02",name: "Data Structures and Algorithms Laboratory I",credits: 2},
      {sem: 3,code: "PUCS3PL02",name: "Object-Oriented Programmin Laboratory",credits: 2,},
      {sem: 3,code: "PUCB3PL01",name: "Business Communication Laboratory",credits: 1,},
      { sem: 3, code: "PUCC3HM07", name: "Extension Activities", credits: 0 },
    ] /*,
    4: [
        { sem:4, code: "PUCC4BS06", name: "Environmental Sciences & Sustainability", credits: 3 },
        { sem:4, code: "PUCB4PC01", name: "Intoduction to Innovation, IPR and Product Development", credits: 3 },
        { sem:4, code: "PUCB4PC02", name: "Embedded Systems and IOT", credits: 4 },
        { sem:4, code: "PUIT4PC03", name: "Database Management Systems", credits: 4 },
        { sem:4, code: "PUIT4PC04", name: "Operating Systems", credits: 4 },
        { sem:4, code: "PUCC4MCXX", name: "Mandatory Course-II(Non-credit)", credits: 0 },
        { sem:4, code: "PUIT4PL01", name: "Operating Systems Laboratory", credits: 2 },
        { sem:4, code: "PUIT4PL02", name: "Database Management Systems Laboratory", credits: 2 },
        { sem:4, code: "PUCC4HM08", name: "Extension Activities", credits: 0 },
        { sem:4, code: "PUCB4IP01", name: "In-Plant Training/Internship", credits: 0 }
    ]*/,
  },
  "2024-2028": {
    1: [
      {sem: 1,code: "PUCC1HM01",name: "Professional English - I",credits: 2,},
      { sem: 1, code: "PUCC1BS01", name: "Matrices and Calculus", credits: 4 },
      { sem: 1, code: "PUCC1BS02", name: "Engineering Physics", credits: 3 },
      { sem: 1, code: "PUCC1BS03", name: "Engineering Chemistry", credits: 3 },
      { sem: 1, code: "PUCC1BE01", name: "Engineering Graphics", credits: 4 },
      { sem: 1, code: "PUCC1HM02", name: "Heritage of Tamil", credits: 1 },
      {sem: 1,code: "PUCC1PL01",name: "Professional English - I(Lab)",credits: 2,},
      {sem: 1,code: "PUCC1PL02",name: "Physics and Chemistry Laboratory",credits: 2,},
      // { sem:1,  code: "PUCC1HM03", name: "Wellness", credits: 0 }
    ],/*
    2: [
      {sem: 2,code: "PUCC2HMO4",name: "Professional English - II",credits: 2},
      {sem: 2,code: "PUCC2BS04",name: "Statistics and Numerical Methods",credits: 4},
      {sem: 2,code: "PUCS2BS05",name: "Physics for Information Sciences",credits: 3},
      {sem: 2,code: "PUCC2BE02",name: "Basic Electrical and Electronics Engineering",credits: 3},
      {sem: 2,code: "PUCC2BE03",name: "Introduction to Computer Science & Business Systems",credits: 3},
      {sem: 2,code: "PUCC2BE04",name: "Problem Solving using Python Programming",credits: 2},
      {sem: 2,code: "PUCC2HM05",name: "தமிழரும் தொழில்நுட்பமும்",credits: 1},
      {sem: 2,code: "PUCC2PL03",name: "Professional English - II(Lab)",credits: 2},
      {sem: 2,code: "PUCC2PL04",name: "Problem Solving using Python Programming Laboratory",credits: 2},
      {sem: 2,code: "PUCC2PL05",name: "Civil and Mechanical Engineering Practices",credits: 1},
      {sem: 2,code: "PUCC2PL06",name: "Electrical and Electronics Engineering Preactices",credits: 1,
      },
      // { sem:2, code: "PUCC2HM06", name: "Wellness", credits: 0 },
    ],
    3: [
      { sem: 3, code: "PUCB3BS09", name: "Discrete Mathematics", credits: 4 },
      {sem: 3,code: "PUCS3PC01",name: "Computer Organization & Architecture",credits: 4},
      {sem: 3,code: "PUAD2BE03",name: "Fundamentals of Data Science and Analytics",credits: 3},
      {sem: 3,code: "PUCS3PC03",name: "Data Structures and Algorithms",credits: 4},
      {sem: 3,code: "PUCS3PC04",name: "Object-Oriented Programming",credits: 3},
      {sem: 3,code: "PUCC3MCXX",name: "Mandatory Course-I(Non-credit)",credits: 0},
      {sem: 3,code: "PUAD3PL02",name: "Data Structures and Algorithms Laboratory I",credits: 2},
      {sem: 3,code: "PUCS3PL02",name: "Object-Oriented Programmin Laboratory",credits: 2,},
      {sem: 3,code: "PUCB3PL01",name: "Business Communication Laboratory",credits: 1,},
      { sem: 3, code: "PUCC3HM07", name: "Extension Activities", credits: 0 },
    ] ,
    4: [
        { sem:4, code: "PUCC4BS06", name: "Environmental Sciences & Sustainability", credits: 3 },
        { sem:4, code: "PUCB4PC01", name: "Intoduction to Innovation, IPR and Product Development", credits: 3 },
        { sem:4, code: "PUCB4PC02", name: "Embedded Systems and IOT", credits: 4 },
        { sem:4, code: "PUIT4PC03", name: "Database Management Systems", credits: 4 },
        { sem:4, code: "PUIT4PC04", name: "Operating Systems", credits: 4 },
        { sem:4, code: "PUCC4MCXX", name: "Mandatory Course-II(Non-credit)", credits: 0 },
        { sem:4, code: "PUIT4PL01", name: "Operating Systems Laboratory", credits: 2 },
        { sem:4, code: "PUIT4PL02", name: "Database Management Systems Laboratory", credits: 2 },
        { sem:4, code: "PUCC4HM08", name: "Extension Activities", credits: 0 },
        { sem:4, code: "PUCB4IP01", name: "In-Plant Training/Internship", credits: 0 }
    ]*/,
  },
};

let chart = null;

// Fetch data from localStorage
function getSGPAData(registerNumber) {
  return JSON.parse(localStorage.getItem(registerNumber)) || [];
}

function storeSGPAData(registerNumber, sgpaData) {
  localStorage.setItem(registerNumber, JSON.stringify(sgpaData));
}

function handleRegisterChange() {
  const registerNumber = document.getElementById("registerNumber").value.trim();
  if (registerNumber && registerNumber > 0) {
    displayHistory(registerNumber);
    updateChart(registerNumber);
  }
}

function resetSemesterAndSubjects() {
  // Reset semester to default (deselect)
  document.getElementById("semester").value = "";

  // Clear subject list
  document.getElementById("subjectList").innerHTML = "";

  // Check if register number is entered
}

function validateRegister() {
  const registerInput = document.getElementById("registerNumber").value.trim();
  if (!registerInput || registerInput <= 0) {
    alert("Enter the register number before selecting the batch!");
    document.getElementById("batch").value = "";
    return;
  }
}

function updateSubjects() {
  const batch = document.getElementById("batch").value;
  const semester = document.getElementById("semester").value;
  const subjectListDiv = document.getElementById("subjectList");
  subjectListDiv.innerHTML = "";

  if (batch && semester) {
    const subjects = subjectsData[batch]?.[semester] || [];
    let table =
      '<table><h3 class="text-center my-5">Subjects and Grades</h3><tr><th>Sem</th><th>Code</th><th>Subject Name</th><th>Grade</th><th>Credits</th></tr>';
    subjects.forEach((sub, index) => {
      table += `<tr>
                <td>${sub.sem}</td>
                <td>${sub.code}</td>
                <td>${sub.name}</td>
                <td><select id='grade-${index}'>
                    <option value='10' selected >O</option>
                    <option value='9'>A+</option>
                    <option value='8'>A</option>
                    <option value='7'>B+</option>
                    <option value='6'>B</option>
                    <option value='5'>C</option>
                    <option value='0'>U</option>
                </select></td>
                <td>${sub.credits}</td>
            </tr>`;
    });

    table += "</table>";
    subjectListDiv.innerHTML = table;
    document.getElementById(
      "button"
    ).innerHTML = `<div class="button-row text-center my-5">
            <button class="btn btn-outline-success justify-content-center mb-4" type="button" onclick="calculateSGPA()">Calculate SGPA</button>
            <button class="btn btn-outline-info justify-content-center mb-4" type="button" onclick="addSemester()">Add Next Semester</button>
            </div>
        </div>`;
  }
}

function calculateSGPA() {
  const registerNumber = document.getElementById("registerNumber").value.trim();
  if (!registerNumber || registerNumber <= 0) {
    alert("Enter a valid register number");
    return;
  }

  const batch = document.getElementById("batch").value;
  const semester = document.getElementById("semester").value;
  const subjects = subjectsData[batch]?.[semester] || [];
  let totalCredits = 0,
    totalPoints = 0;

  subjects.forEach((sub, i) => {
    const grade = parseInt(document.getElementById(`grade-${i}`).value);
    totalCredits += sub.credits;
    totalPoints += grade * sub.credits;
  });

  const sgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById("sgpaResult").innerText = `SGPA: ${sgpa}`;

  const sgpaData = getSGPAData(registerNumber);
  const existingIndex = sgpaData.findIndex((s) => s.semester === semester);
  if (existingIndex !== -1) {
    sgpaData[existingIndex].sgpa = sgpa;
  } else {
    sgpaData.push({ semester, sgpa: parseFloat(sgpa) });
  }

  storeSGPAData(registerNumber, sgpaData);
  displayHistory(registerNumber);
  updateChart(registerNumber);
}

function calculateCGPA(registerNumber) {
  const sgpaData = getSGPAData(registerNumber);
  let totalSGPA = sgpaData.reduce((sum, s) => sum + parseFloat(s.sgpa), 0);
  return (totalSGPA / sgpaData.length).toFixed(2);
}

function displayHistory(registerNumber) {
  const sgpaData = getSGPAData(registerNumber);
  const historyDiv = document.getElementById("semesterHistory");
  historyDiv.innerHTML = '<h3 class="text-center my-5">Semester History</h3>';
  if (sgpaData.length > 0) {
    let table =
      '<table class="justify-content-center"><tr><th>Semester</th><th>SGPA</th><th class="deltd">Action</th></tr>';
    sgpaData.forEach((s, index) => {
      table += `
                <tr>
                    <td>${s.semester}</td>
                    <td>${s.sgpa}</td>
                    <td class="deltd">
                        <button type="button" class="delete-btn btn-close" aria-label="Close" onclick="deleteSemester(${index})"></button>
                    </td>
                </tr>`;
    });
    const cgpa = calculateCGPA(registerNumber);
    const cgpaPercentage = (parseFloat(cgpa) / 10) * 100;
    table += `<tr><th>Overall CGPA</th><th>${cgpa}</th></tr>`;
    table += `<tr><th>CGPA Percentage</th><th>${cgpaPercentage.toFixed(
      2
    )}%</th></tr>`; // Display percentage
    table += "</table>";
    historyDiv.innerHTML += table;
  } else {
    historyDiv.innerHTML += "<p>No history available.</p>";
  }
}

function deleteSemester(index) {
  const registerNumber = document.getElementById("registerNumber").value.trim();
  if (!registerNumber || registerNumber <= 0) {
    alert("Enter a valid register number");
    return;
  }
  const sgpaData = getSGPAData(registerNumber);
  sgpaData.splice(index, 1); // Remove the selected semester entry
  storeSGPAData(registerNumber, sgpaData); // Store the updated data in localStorage
  displayHistory(registerNumber); // Refresh the displayed history
  updateChart(registerNumber); // Update the chart with the new data
}

function addSemester() {
  const semesterSelect = document.getElementById("semester");
  semesterSelect.selectedIndex++;
  updateSubjects();
  document.getElementById("sgpaResult").innerText = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateChart(registerNumber) {
  const sgpaData = getSGPAData(registerNumber);
  const ctx = document.getElementById("sgpaChart").getContext("2d");
  const labels = sgpaData.map((s) => `Semester ${s.semester}`);
  const data = sgpaData.map((s) => s.sgpa);
  document.getElementById("graph").innerHTML =
    '<h3 class="text-center">SGPA Line Graph</h3>';

  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "SGPA Trend",
          data: data,
          borderColor: "#2196F3",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Semester",
          },
        },
        y: {
          title: {
            display: true,
            text: "SGPA (Grade Points)",
          },
          min: 0, // Start at 0 for SGPA scale
          max: 10, // End at 10 for SGPA scale
          ticks: {
            stepSize: 1, // Increment by 1 on y-axis
          },
        },
      },
    },
  });
}

function clearSemesterData() {
  const registerNumber = document.getElementById("registerNumber").value.trim();
  if (!registerNumber || registerNumber <= 0) {
    alert("Enter a valid register number");
    return;
  }
  localStorage.removeItem(registerNumber);
  displayHistory(registerNumber);
  updateChart(registerNumber);
}

window.onload = () => {
  const registerNumber = document.getElementById("registerNumber").value.trim();
  if (registerNumber) {
    displayHistory(registerNumber);
    updateChart(registerNumber);
  }
};

////function for send message through the e-mail

document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    // Capture input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      event.preventDefault(); // Stop form submission
      return;
    }

    // Enhance mailto: URL (optional)
    const mailtoLink = `mailto:spremkumar2424@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )}%0A%0AFrom: ${email}`;

    // Redirect to mailto link
    window.location.href = mailtoLink;

    // Prevent default form action
    event.preventDefault();
  });
