
Meteor.startup (function(){
	$("#generate").click(function(event) {
		event.preventDefault();
		var exclamation = $("#exclamations").val();
		var adverb = $("#adverbs").val();
		var noun = $("#nouns").val();
		var verb = $("#verbs").val();

		var madLib = exclamation + "! he said, as he " + adverb + " jumped onto his " + noun + " and " + verb + " into the sunset.";

		console.log(madLib);
		$("#instructions").hide();
		$("#instructions").text(madLib).fadeIn("slow").css("color","#0000ff");
	});


});