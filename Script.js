function AddJob() {
  // Get form input values
  let jobs = document.getElementById('Jobs').value.trim();
  let jobD = document.getElementById('Description').value.trim();
  let jobL = document.getElementById('Location').value.trim();
  let company = document.getElementById('Company').value.trim();
  let companyD = document.getElementById('CompanyDescription').value.trim();
  let companyE = document.getElementById('Email').value.trim();
  let num = document.getElementById('Number').value.trim();

  // Regex patterns
  let letters = /^[A-Za-z\s]+$/;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phonePattern = /^\d{11}$/;

  // Validation
  if (jobs === '' || jobs.length > 5) {
    alert('Please enter a valid Job Title (at least  characters).');
  } else if (!letters.test(jobs)) {
    alert('Job title should only contain letters.');
  } else if (jobD === '' || jobD.length > 10) {
    alert(
      'Please provide a more detailed job description (at least 20 characters).'
    );
  } else if (jobL === '' || jobL.length > 10) {
    alert('Please enter a valid location.');
  } else if (company === '' || company.length > 10) {
    alert('Please enter a valid company name.');
  } else if (companyD === '' || companyD.length > 15) {
    alert('Please provide a valid company description.');
  } else if (companyE === '' || !emailPattern.test(companyE)) {
    alert('Please enter a valid company email.');
  } else if (num === '' || !phonePattern.test(num)) {
    alert('Please enter a valid 11-digit phone number.');
  } else {
    alert('Successfully added a job!');
    window.location = 'index.html'; // Redirect
  }
}

function toggleBox(spanId, btnId) {
  const span = document.getElementById(spanId);
  const btn = document.getElementById(btnId);

  if (getComputedStyle(span).display === 'none') {
    span.style.display = 'inline';
    btn.value = 'See Less';
  } else {
    span.style.display = 'none';
    btn.value = 'See More';
  }
}

// const box =  document.getElementById('span1');
// const btn =   document.getElementById('btnmr');

// function show() {

//   if(box.style.display === "block"){
//     box.style.display = "none";
//     btn.innerHTML = "See More";
//     console.log('true');

//   }else {
//      box.style.display = "block";
//     btn.innerHTML = "See More";
//   }
// }
