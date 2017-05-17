$(document).ready(function () {
	$("#img1").css("display","inline");
	$("#imageCount").append("1 / 5");
	$("#before").on("click", imageBefore);
	$("#after").on("click", imageAfter);
	var imageCounter = 0;
	
	$("#gallery img").hover(function() {
		$(this).css("border", "solid 5px DarkGreen");
	});
	
	function imageBefore() {
		if(imageCounter == 0) {
			$("#imageCount").empty();
			$("#imageCount").append("5 / 5");
			$("#img1").toggle();
			$("#img5").toggle();
			imageCounter = 4; 
		}
		else if(imageCounter == 4) {
			$("#imageCount").empty();
			$("#imageCount").append("4 / 5");
			$("#img5").toggle();
			$("#img4").toggle();
			imageCounter--;
		}
		else if(imageCounter == 3) {
			$("#imageCount").empty();
			$("#imageCount").append("3 / 5");
			$("#img4").toggle();
			$("#img3").toggle();
			imageCounter--;
		}
		else if(imageCounter == 2) {
			$("#imageCount").empty();
			$("#imageCount").append("2 / 5");
			$("#img3").toggle();
			$("#img2").toggle();
			imageCounter--;
		}
		else if(imageCounter == 1) {
			$("#imageCount").empty();
			$("#imageCount").append("1 / 5");
			$("#img2").toggle();
			$("#img1").toggle();
			imageCounter--;
		}
		
	}

	function imageAfter() {
		if(imageCounter == 0) {
			$("#imageCount").empty();
			$("#imageCount").append("2 / 5");
			$("#img1").toggle();
			$("#img2").toggle();
			imageCounter++; 
		}
		else if(imageCounter == 1) {
			$("#imageCount").empty();
			$("#imageCount").append("3 / 5");
			$("#img2").toggle();
			$("#img3").toggle();
			imageCounter++; 
		}
		else if(imageCounter == 2) {
			$("#imageCount").empty();
			$("#imageCount").append("4 / 5");
			$("#img3").toggle();
			$("#img4").toggle();
			imageCounter++; 
		}
		else if(imageCounter == 3) {
			$("#imageCount").empty();
			$("#imageCount").append("5 / 5");
			$("#img4").toggle();
			$("#img5").toggle();
			imageCounter++; 
		}
		else if(imageCounter == 4) {
			$("#imageCount").empty();
			$("#imageCount").append("1 / 5");
			$("#img5").toggle();
			$("#img1").toggle();
			imageCounter = 0; 
		}
	}
});