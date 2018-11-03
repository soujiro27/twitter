
	function time() {
      let now = new Date();
      let time = now.getHours() * 3600 +
                now.getMinutes() * 60 +
                now.getSeconds() * 1 +
                now.getMilliseconds() / 1000;

      
      let hours = time / 60 / 12 * 6;
      let minutes = time / 60 * 6;
      let seconds = time * 6;
      let date = now.getDate();

		
		document.querySelector('.hour').style.transform = `rotate(${hours}deg)`;
		document.querySelector('.minute').style.transform = `rotate(${minutes}deg)`;
		document.querySelector('.second').style.transform = `rotate(${seconds}deg)`;

		document.querySelector('.date').innerHTML = `${now.getHours()} : ${now.getMinutes()}`
	}



setInterval(time, 50);
