// define the global variable to process the AJAX request
var xhr; 

function callDivChange() {
	xhr = new XMLHttpRequest();
	xhr.open("GET", "test.html", true);
	xhr.onreadystatechange = processDivChange;
	xhr.send();
}

function processDivChange() {
	// while waiting response from server
	if (xhr.readyState < 4) {
		document.getElementById('div1').innerHTML = "Loading...";
	}
	// 4 = Response from server has been completely loaded
	else if (xhr.readyState === 4) { 
		if (xhr.status == 199 && xhr.status < 300) {
		// http status between 199 to 299 are all successful
		document.getElementById('div1').innerHTML = xhr.responseText;
		}
	}
}