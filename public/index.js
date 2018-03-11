
	$('#main-div2').fadeOut('fast');
	var fun1 = function(){
		// alert("abcd");
		$('#btn').prop('disabled', 'true');
		$('#main-div').fadeOut(700);

		setTimeout(function(){
			$('#main-div2').fadeIn('slow');
		},800);
		setTimeout(function(){
			$('#main-div2').fadeOut(700);
		},5800);
		setTimeout(function(){
			$('#main-div3').fadeIn('slow');
		},6550);
		setTimeout(function(){
			$('#main-div3').fadeOut(700);
		},13550);
		setTimeout(function(){
			$('#main-div').fadeIn('slow');
		},14350);

		setTimeout(function(){
			$('#btn').removeAttr('disabled');
		}, 24400);

		// setTimeout(function(){
		// 	$('#main-div2').fadeOut('slow');	
		// 	$('#main-div3').fadeIn('slow');	
		// },5000);

		// setTimeout(function(){
		// 	$('#main-div3').fadeOut('slow');	
		// 	$('#main-div').fadeIn('slow');	
		// }, 7000);

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		       console.log('send successfully');
		    }
		};
		xhttp.open("GET", "http://127.0.0.1:6789/salil", true);
		xhttp.send();
	}
