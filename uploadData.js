function startDataUpload(){
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var moduletitle = document.getElementById("module").value;
	var postString = "name="+name+"&surname="+surname+"&module="+moduletitle;
	alert(postString);
}