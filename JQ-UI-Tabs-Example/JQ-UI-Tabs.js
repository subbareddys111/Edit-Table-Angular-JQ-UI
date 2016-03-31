	  $(function() {
		    $( "#tabs" ).tabs();
		  });
	  
	  $(function() {
		    var availableTags = [
		      "Australia",
		      "Atlanta",
		      "Boston",
		      "Chicago",
		      "Denver",
		      "Newyork",
		      "Hyderabad",
		      "San Francisco",
		      "San Jose",
		      "San Diego",
		      "Sacramento"
		    ];
		    $( ".FromandTo" ).autocomplete({
		      source: availableTags
		    });
		  });
	  
	  $(function() {
		    $( ".datepicker" ).datepicker();
		  });
	  
	  $(function() {
		    $( "#Adult" ).selectmenu();
		 
		    $( "#Children" ).selectmenu();
	  });
	  
	  
		  $("#but1").click(function(){
		        alert("Flights Form is Submitted");
		    });
		  $("#but2").click(function(){
		        alert("Hotels Form is Submitted");
		    });
		  $("#but3").click(function(){
		        alert("Rental cars Form is Submitted");
		    });