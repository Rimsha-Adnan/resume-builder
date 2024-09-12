var form1 = document.getElementById('resumeForm');
var resumeDisplay = document.getElementById('resumeDisplay');
var editButton = document.getElementById('editButton');
// Input fields
var fullNameInput = document.getElementById('fullName');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var degreeInput = document.getElementById('degree');
var institutionInput = document.getElementById('institution');
var yearInput = document.getElementById('year');
var jobTitleInput = document.getElementById('jobTitle');
var jobDescriptionInput = document.getElementById('jobDescription');
var skill1Input = document.getElementById('skill1');
var skillLevel1Input = document.getElementById('skillLevel1');
// Resume display elements
var displayFullName = document.getElementById('displayFullName');
var displayEmail = document.getElementById('displayEmail');
var displayPhone = document.getElementById('displayPhone');
var displayDegree = document.getElementById('displayDegree');
var displayInstitution = document.getElementById('displayInstitution');
var displayYear = document.getElementById('displayYear');
var displayJobTitle = document.getElementById('displayJobTitle');
var displayJobDescription = document.getElementById('displayJobDescription');
var displaySkill1 = document.getElementById('displaySkill1');
// Event listener for form submission
form1.addEventListener('submit', function (event) {
    event.preventDefault();
    // Populate resume with form values
    displayFullName.textContent = fullNameInput.value.toUpperCase();
    displayEmail.textContent = "Email: ".concat(emailInput.value);
    displayPhone.textContent = "Phone: ".concat(phoneInput.value);
    displayDegree.textContent = "Degree: ".concat(degreeInput.value.toUpperCase());
    displayInstitution.textContent = "Institution: ".concat(institutionInput.value.toUpperCase());
    displayYear.textContent = "Year: ".concat(yearInput.value);
    displayJobTitle.textContent = jobTitleInput.value.toUpperCase();
    displayJobDescription.textContent = jobDescriptionInput.value;
    displaySkill1.textContent = "".concat(skill1Input.value.toUpperCase(), " - ").concat(skillLevel1Input.value, "%");
    // Show resume and hide form
    form1.classList.add('hidden');
    resumeDisplay.classList.remove('hidden');
});
// Event listener for editing the resume
editButton.addEventListener('click', function () {
    // Hide resume and show form
    resumeDisplay.classList.add('hidden');
    form1.classList.remove('hidden');
});
