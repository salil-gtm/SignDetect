
	$('#main-div2').fadeOut('fast');
	var fun1 = function(){
		document.getElementById('label').innerHTML = "";
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
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
			$('#btn').removeAttr('disabled');
			setTimeout(function(){
				$('#main-div3').fadeOut(700);
			},0);
			setTimeout(function(){
				$('#main-div').fadeIn('slow');
			},800);
			document.getElementById('label').innerHTML = xhttp.responseText;
		    }
		};
		xhttp.open("GET", "http://127.0.0.1:6789/salil", true);
		xhttp.send();
		
	}
