pauseOrPlay = (audio) => {
	if(audio.paused){
 	 audio.play()
	}else{
 	 audio.pause()
	}
}

	const smallGroupCheerAudio = new Audio('audience/mixkit-small-group-cheer-and-applause-518.wav')
	const catSoundAudio = new Audio('cat/mixkit-big-wild-cat-long-purr-96.wav')


createAudioElements = () => {
	let smallGroupCheer = document.getElementById('nounParty')
	smallGroupCheer.style.height = '89px'
	smallGroupCheer.appendChild(smallGroupCheerAudio)

	smallGroupCheer.onclick = () => {
		pauseOrPlay(smallGroupCheerAudio)
	}

	let catSound = document.getElementById('catSound')
	catSound.style.height = '89px'
	catSound.appendChild(catSoundAudio)

	catSound.onclick = () => {
		pauseOrPlay(catSoundAudio)
	}

	let womanHilarious = document.getElementById('womanHilarious')
	womanHilarious.style.height = '89px'
	let womanHilariousAudio = new Audio('female/mixkit-woman-hilarious-laughing-410.wav')
	womanHilarious.appendChild(womanHilariousAudio)

	womanHilarious.onclick = () => {
		pauseOrPlay(womanHilariousAudio)
	}

	let peopleMoaningSadly = document.getElementById('sobParty')
	peopleMoaningSadly.style.height = '89px'
	let peopleMoaningSadlyAudio = new Audio('moan-scream-sob/mixkit-people-moaning-sadly-469.wav')
	peopleMoaningSadly.appendChild(peopleMoaningSadlyAudio)

	peopleMoaningSadly.onclick = () => {
		pauseOrPlay(peopleMoaningSadlyAudio)
	}

	let sobInFear = document.getElementById('sobInFear')
	sobInFear.style.height = '89px'
	let sobInFearAudio = new Audio('moan-scream-sob/mixkit-creature-sobbing-in-fear-464.wav')
	sobInFear.appendChild(sobInFearAudio)

	sobInFear.onclick = () => {
		pauseOrPlay(sobInFearAudio)
	}

	let yokoOno = document.getElementById('yokoLiving')
	yokoOno.style.height = '89px'
	// yokoOno.innerHTML = 'oooooAAAHHHHHHH'
	let yokoOnoAudio = new Audio('yoko-ono/Yoko Ono Screaming at Art Show!.mp3')
	yokoOno.appendChild(yokoOnoAudio)

	yokoOno.onclick = () => {
		pauseOrPlay(yokoOnoAudio)
	}
	
}

createAudioElements();


// Mute a singular HTML5 element
muteMe = (elem) => {
    // elem.muted = true;
    elem.pause();
}

// Try to mute all video and audio elements on the page
mutePage = () => {
    document.querySelectorAll("audio").forEach((elem) => {
    	muteMe(elem) });
}


document.addEventListener("keydown", (e) => {
  if (e.key == "i" || e.key == "I") { 
		pauseOrPlay(smallGroupCheerAudio)

  }

		pauseOrPlay(catSoundAudio)
  
});



// function playMusic(){
// 	console.log("1 log")
//   var music = new Audio('audience/mixkit-small-group-cheer-and-applause-518.wav');
//   music.play();
//   }

// var yourAudio = document.getElementById('yourAudio'),
//     ctrl = document.getElementById('audioControl');

// ctrl.onclick = function () {
// 	console.log('onclick on play')
//     // Update the Button
//     var pause = ctrl.innerHTML === 'pause!';
//     ctrl.innerHTML = pause ? 'play!' : 'pause!';

//     // Update the Audio
//     var method = pause ? 'pause' : 'play';
//     yourAudio[method]();

//     // Prevent Default Action
//     return false;
// };