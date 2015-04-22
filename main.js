$(document).ready( function(){
	
	var btns = $('#ass_wipings').children();

	$.each( btns, function(btn){
		console.log(btn);
	});

	$('#caffeine').click( function(){
		$('#showoff_area').text(wipemyass.give_me_some_caffeine());
	});
});