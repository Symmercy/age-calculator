function calculateAge() {
  // Get the input value (date of birth)
  var dob = document.getElementById("dob").value;

  // Check if a date is selected
  if (!dob) {
    alert("Please select a valid date of birth.");
    return;
  }

  // Calculate age
  var birthDate = new Date(dob);
  var currentDate = new Date();

  var ageInMilliseconds = currentDate - birthDate;

  // Calculate years
  var ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

  // Check if the birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
  ) {
    ageInYears--;
  }

  // Calculate months
  var monthsDiff = currentDate.getMonth() - birthDate.getMonth();
  var ageInMonths = monthsDiff + (monthsDiff < 0 ? 12 : 0);

  // Calculate days
  var daysDiff = currentDate.getDate() - birthDate.getDate();
  var ageInDays = daysDiff + (daysDiff < 0 ? new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() - birthDate.getDate() : 0);

  // Display the result
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Dob je " + ageInYears + " godina, " + ageInMonths + " mjeseci, i " + ageInDays + " dana.";
}

