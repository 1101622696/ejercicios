let now = new Date();

  // Get the start and end dates of the current week
  let weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
  let weekEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (6 - now.getDay()));

  // Format the dates
  let formattedStartDate = formatDate(weekStart);
  let formattedEndDate = formatDate(weekEnd);

  // Insert dates into HTML
  document.getElementById("weekDates").innerHTML = formattedStartDate + " - " + formattedEndDate;

  // Function to format the date as YYYY-MM-DD
  function formatDate(date) {
		let months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
		
    let month = months[date.getMonth()];
    let day = date.getDate().toString().padStart(2, '0');
		return day + ". " + month;
  }
  const allPoints = document.querySelectorAll(
	".data-point-views, .data-point-purchases, .data-point-heart"
);
const allTooltips = document.querySelectorAll(
	".data-tooltip-views, .data-tooltip-purchases, .data-tooltip-heart"
);

allPoints.forEach((point, i) => {
	point.addEventListener("mouseover", function () {
		allTooltips[i].style.opacity = "1";
		allTooltips[i].style.height = "24px";
		allTooltips[i].style.width = "35px";
		allTooltips[i].style.visibility = "visible";
	});
});

allPoints.forEach((point, i) => {
	point.addEventListener("mouseleave", function () {
		allTooltips[i].style.opacity = "0";
		allTooltips[i].style.height = "0";
		allTooltips[i].style.visibility = "hidden";
	});
});
