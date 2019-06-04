
	var index = 1;
	
	function plusIndex(n){
		
		index = index + 1;
		showImage(index);
	}
	
	showImage(1);
	
	function showImage(n){
		
		var i;
		var x = document.getElementsByClassName("image");
		if(n>x.length){index = 1};
		if(n<1){index = x.length};
		for(i=0; i<x.length;i++){
			x[i].style.display = "none";
		}
		
		x[index-1].style.display = "block";
		
		
	}



var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("image");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 5 seconds
}