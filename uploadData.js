//create a post String with the data
function startDataUpload(){
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var moduletitle = document.getElementById("module").value;
	var postString = "name="+name+"&surname="+surname+"&module="+moduletitle;
	alert(postString);
	processData(postString);
}

//make a global variable to hold the request
var client;

//process the post String
function processData(postString){
	//make a new request using the client variable
	client = new XMLHttpRequest();
	//use the server to bounce the data back to us using /reflectData
	client.open('POST','http://developer.cege.ucl.ac.uk:30282/reflectData',true);
	//inform the server of the type of data
	client.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//call the function to upload the data when the client is ready
	client.onreadystatechange() = dataUpload;
	//send the post String
	client.send(postString);
}

//add an event listener function to wait for the response from the data server and process that response once received
function dataUpload(){
	//if the client has state 4, the data is ready
	if (client.readyState == 4){
		//change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}
