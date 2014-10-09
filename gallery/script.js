// Add your code here
$(document).ready(function() {

$ ('.filter-button').on('click' , function (e){
	var species = $(this).attr("id");

	if ($(this).hasClass('active')) {
		hideAnimals(species);
	}else{
		showAnimals(species);
	}
	$('#' + species).toggleClass('active');
	
	alertify.log('toggled ' + species + 's')
});


// $ ('.filter-button').on('click' , function (species){
// 	species = $(this).attr("id");
// 	$('.' + species).hide();
// 	$(this).removeClass('active');
// });

function hideAnimals(species){
	$('.' + species).hide();
	// $('#' + species).removeClass('active');
}

function showAnimals(species){
	$('.' + species).show();
	// $('#' + species).addClass('active');
}

});

// Make it so the button is no longer green


// reveal the hidden buttons