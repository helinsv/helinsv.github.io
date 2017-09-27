$(document).ready(function(){

	$(".tab_content .tab_item").not(":first").hide();
	$(".tab-menu .wrapper .tab").click(function() {
		$(".tab-menu .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-menu .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tab_content1 .tab_item").not(":first").hide();
	$(".tab-contacts .wrapper .tab").click(function() {
		$(".tab-contacts .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");		

$(".fancybox").fancybox();

var owl = $(".carousel");
owl.owlCarousel({
	items : 5
});
owl.on("mousewheel", ".owl-wrapper", function (e) {
	if (e.deltaY > 0) {
		owl.trigger("owl.prev");
	} else {
		owl.trigger("owl.next");
	}
	e.preventDefault();
});
$(".next_button").click(function(){
	owl.trigger("owl.next");
});
$(".prev_button").click(function(){
	owl.trigger("owl.prev");
});

$('.white').waypoint(function() {
	$("li a").css("color","black");
	$("nav ul").css("color","black");
	offset='40%'
});

$('.black').waypoint(function() {
	$("li a").css("color","white");
	$("nav ul").css("color","white");
	offset='40%'
});

var waypoint = new Waypoint({
	element: document.getElementById('up'),
	handler: function() {
		$("li a").css("color","white");
		$("nav ul").css("color","white");
		offset='40%'
	}
});

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


