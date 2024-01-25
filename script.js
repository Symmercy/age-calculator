function calculateAge() {
  // Get the input values (day, month, year)
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);

  // Check if the inputs are valid
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Please enter valid day, month, and year values.");
    return;
  }

  // Check if the date is valid
  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900) {
    alert("Please enter a valid date.");
    return;
  }

  // Calculate age
  var birthDate = new Date(year, month - 1, day);
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
  resultElement.innerHTML = "Your age is " + ageInYears + " years, " + ageInMonths + " months, and " + ageInDays + " days.";
}

