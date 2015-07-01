<?php
	$message = '
					<html>
					<head>
						<title>Shrine Inquiry</title>
					</head>
					<body>
						<font face="Arial,Verdana,Helvetica" color="black" size="2">' . 
							$_POST['name'] . '<br />' . 
							$_POST['address'] . '<br />' . 
							$_POST['city'] . ', ' . $_POST['state'] . ' ' . $_POST['zip'] . '<br />' . 
							$_POST['email'] . '<br />' . 
							$_POST['phone'] . '<br />' . 
							'<br />' . 
							'Message: ' . $_POST['message'] . 
							'<br /><br />Source: ' . $_POST['source'] . '
						</font>
					</body>
					</html>
				';
	$header = 'MIME-Version: 1.0' . "\r\n";
	$header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$header .= 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\n";
?>




<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<title>Contact Us</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="keywords" content="historic landmark,chicago historic landmark,historical landmark,chicago historical landmark,history" />
	<meta name="description" content="Chicago historic landmark - Help restore the Shrine of Christ the King, an historical landmark in Chicago, IL." />
	<meta name="verify-v1" content="DfYrVDPQi+MYVt6aZ4/FXEHMSSnWjguEdXZKX+gq4aU=" />
	<meta name="author" content="SITE CREATED BY DONALD TAYLOR, III - taylorwebsites@gmail.com" />
	<link rel="shortcut icon" href="favicon.ico" />
	<link rel="stylesheet" type="text/css" href="main.css" />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
	<script src="jquery.lightbox-0.5.js"></script>
	<script>
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-131347-8']);
		_gaq.push(['_trackPageview']);
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head>
<body>
	<div id="container">
		<div id="navigation">
			<a href="http://www.historic-landmark.org/" class="first">Home</a>
			<a href="glorious-history.html">History</a>
			<a href="critical-present.html">Present</a>
			<a href="bright-future.html">Future</a>
			<a href="donate.html">Donate</a>
			<a href="contact.html">Contact</a>
			<a href="offerings.php">Offerings</a>
			<a href="chicago-concert-series.html" class="last">Concerts</a>
		</div>
		<div id="content">


			<?php
				if (@mail('info@historic-landmark.org','Historic Landmark Restoration Inquiry',$message,$header)) {
						echo('<h1>Message Sent</h1><p>Thank you for your interest in this important gem of history. We will contact you shortly, if your message so requires.</p>');
					} else {
						echo('<h1>Error</h1><p>Your message could not be sent due to an error. We are very sorry, and would be most grateful if you would please <a href="mailto:info@historic-landmark.org?subject=Historic-Landmark.org: Error in Contact Form">notify us</a> of this.</p>');
					}
			?>
			
			
		</div>
	</div>
	<div id="footer">
			<a href="http://www.historic-landmark.org/">Historic Landmark</a> &sect; <a href="http://www.historic-landmark.org/">Chicago Historic Landmark</a> &sect; <a href="historical-landmark.html">Historical Landmark</a> &sect; <a href="historical-landmark.html">Chicago Historical Landmark</a><br /><br />
			Shrine of Christ the King &#183; 6415 S. Woodlawn Avenue &#183; Chicago, Illinois 60637-3817<br />
			Phone: 773.363.7409 &#183; Fax: 773.363.7824 &#183; Email: <a href="mailto:info@historic-landmark.org?subject=Historic Landmark Restoration Inquiry">info@historic-landmark.org</a><br />
			Copyright &copy; MMXI. All rights reserved.
	</div>
</body>
</html>