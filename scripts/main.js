// Start ready
$(function () {
	// Slide toggle for team logos hidden in nav
	$(".teamLogos").hide();
	$(".logoDrop").click(function () {
		$(".teamLogos").slideToggle(400);
	}); // end toggle

	// Rollover for team logos in nav
	$(".team, .league").mouseover(function () {
		$(this).css({
			transform: "scale(1.3)"
		});
		$(".team, .league").mouseout(function () {
			$(this).css({
				transform: "scale(1)"
			});
		});
	}); // end rollover

	// Slide toggle for team logos hidden in nav
	// Providence Roosters
	$(".pvdTopNav").hide();
	$(".titleLogo").click(function () {
		$(".pvdTopNav").fadeToggle(400);
	}); // end toggle

	// Rollover for team logos in nav
	$(".titleLogo").mouseover(function () {
		$(this).css({
			transform: "scale(1.3)"
		});
		$(".titleLogo").mouseout(function () {
			$(this).css({
				transform: "scale(1)"
			});
		});
	}); // end rollover

	// Newsletter modal
	$(".newsletter").dialog({
		modal: true,
		autoOpen: false,
		resizable: false,
		height: 700,
		width: 400
	});

	$(".teamNews").on("click", function () {
		$(this).toggleClass("teamNews toggle");
	});

	// Open modal on click
	$(".modalLink").click(function (evt) {
		evt.preventDefault();
		$(".newsletter").dialog("open");
	});
	$(".newsLetterBtn").mouseover(function () {
		$("this").css({
			transform: "scale(1.5)"
		});
	});
	//start validation
	$(".newsletter").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		}, // end rules
		messages: {
			name: {
				required: "Enter your name"
			},
			required: "Enter a valid email"
		} // end messages
	}); // end validation
}); // end ready
