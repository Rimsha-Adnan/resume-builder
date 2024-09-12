
const form1 = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
const editButton = document.getElementById('editButton') as HTMLButtonElement;

// Input fields
const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const institutionInput = document.getElementById('institution') as HTMLInputElement;
const yearInput = document.getElementById('year') as HTMLInputElement;
const jobTitleInput = document.getElementById('jobTitle') as HTMLInputElement;
const jobDescriptionInput = document.getElementById('jobDescription') as HTMLTextAreaElement;
const skill1Input = document.getElementById('skill1') as HTMLInputElement;
const skillLevel1Input = document.getElementById('skillLevel1') as HTMLInputElement;

// Resume display elements
const displayFullName = document.getElementById('displayFullName') as HTMLHeadingElement;
const displayEmail = document.getElementById('displayEmail') as HTMLParagraphElement;
const displayPhone = document.getElementById('displayPhone') as HTMLParagraphElement;
const displayDegree = document.getElementById('displayDegree') as HTMLParagraphElement;
const displayInstitution = document.getElementById('displayInstitution') as HTMLParagraphElement;
const displayYear = document.getElementById('displayYear') as HTMLParagraphElement;
const displayJobTitle = document.getElementById('displayJobTitle') as HTMLHeadingElement;
const displayJobDescription = document.getElementById('displayJobDescription') as HTMLParagraphElement;
const displaySkill1 = document.getElementById('displaySkill1') as HTMLParagraphElement;

// Event listener for form submission
form1.addEventListener('submit', (event) => {
  event.preventDefault();

  // Populate resume with form values
  displayFullName.textContent = fullNameInput.value.toUpperCase();
  displayEmail.textContent = `Email: ${emailInput.value}`;
  displayPhone.textContent = `Phone: ${phoneInput.value}`;
  displayDegree.textContent = `Degree: ${degreeInput.value.toUpperCase()}`;
  displayInstitution.textContent = `Institution: ${institutionInput.value.toUpperCase()}`;
  displayYear.textContent = `Year: ${yearInput.value.toString()}`;
  displayJobTitle.textContent = jobTitleInput.value.toUpperCase();
  displayJobDescription.textContent = jobDescriptionInput.value;
  displaySkill1.textContent = `${skill1Input.value.toUpperCase()} - ${skillLevel1Input.value}%`;

  // Show resume and hide form
  form1.classList.add('hidden');
  resumeDisplay.classList.remove('hidden');
});

// Event listener for editing the resume
editButton.addEventListener('click', () => {
  // Hide resume and show form
  resumeDisplay.classList.add('hidden');
  form1.classList.remove('hidden');
});

