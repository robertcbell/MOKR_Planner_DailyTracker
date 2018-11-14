//Set the counter
if(localStorage.getItem("count")==null){
	localStorage.setItem("count", 0)
}

//Update the inner html data
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//Add one on button click
function plusOne(){
	localStorage.setItem("count", Number(localStorage.getItem("count")) +1)
	update()
}

//reset count
function reset(){
	if (confirm("Are you SURE fool?")) {
    	txt = localStorage.setItem("count", 0)
		update()
	} 	
	else {
   		
	}
	
}