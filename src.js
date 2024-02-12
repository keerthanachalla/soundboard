pauseOrPlay = (audio) => {
	if(audio.paused){
 	 audio.play()
	}else{
	 muteMe(audio)
	}
}

const smallGroupCheerAudio = new Audio('audience/mixkit-small-group-cheer-and-applause-518.wav')
const catSoundAudio = new Audio('cat/mixkit-domestic-cat-hungry-meow-45.wav')
const womanHilariousAudio = new Audio('female/mixkit-female-long-laugh-426.wav')
const peopleMoaningSadlyAudio = new Audio('moan-scream-sob/mixkit-people-moaning-sadly-469.wav')
const sobInFearAudio = new Audio('moan-scream-sob/mixkit-creature-sobbing-in-fear-464.wav')
const yokoOnoAudio = new Audio('yoko-ono/Yoko Ono Screaming at Art Show!.mp3')

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
	womanHilarious.appendChild(womanHilariousAudio)

	womanHilarious.onclick = () => {
		pauseOrPlay(womanHilariousAudio)
	}

	let peopleMoaningSadly = document.getElementById('sobParty')
	peopleMoaningSadly.style.height = '89px'
	peopleMoaningSadly.appendChild(peopleMoaningSadlyAudio)

	peopleMoaningSadly.onclick = () => {
		pauseOrPlay(peopleMoaningSadlyAudio)
	}

	let sobInFear = document.getElementById('sobInFear')
	sobInFear.style.height = '89px'
	sobInFear.appendChild(sobInFearAudio)

	sobInFear.onclick = () => {
		pauseOrPlay(sobInFearAudio)
	}

	let yokoOno = document.getElementById('yokoLiving')
	yokoOno.style.height = '89px'
	// yokoOno.innerHTML = 'oooooAAAHHHHHHH'
	yokoOno.appendChild(yokoOnoAudio)

	yokoOno.onclick = () => {
		pauseOrPlay(yokoOnoAudio)
	}
	
}

createAudioElements();

// Mute a singular HTML5 element
muteMe = (elem) => {
    elem.pause();
	elem.currentTime = 0;
}

// Try to mute all video and audio elements on the page
mutePage = () => {
    document.querySelectorAll("audio").forEach((elem) => {
    	muteMe(elem) 
	});
}

getKey = (e) => {
	const parsedKey = e.key
	const ele = document.querySelector(`[data-key="${parsedKey}"]`)
	return ele;
}
document.addEventListener("keydown", (e) => {
	const key = getKey(e);
	if (key) {
		key.classList.add("keypress");
	}

  switch (e.key) {
	case "e":
		pauseOrPlay(catSoundAudio)
	    break;
	case "t":
		pauseOrPlay(peopleMoaningSadlyAudio)
		break;
	case "i":
	    pauseOrPlay(smallGroupCheerAudio)
	    break;
	case "d":
		pauseOrPlay(womanHilariousAudio)
		break
	case "h":
		pauseOrPlay(sobInFearAudio)
		break;
	case "v":
		pauseOrPlay(yokoOnoAudio)
	    break;
	case " ":
		mutePage();
  }
  
});

document.addEventListener("keyup", (event) => {
	const key = getKey(event);
	if (key) {
	  key.classList.remove("keypress");
	}
  });
  
  document.addEventListener("mousedown", (event) => {
	if (event.target.dataset.key) {
	  event.target.classList.add("keypress");
	}
  });
  
  document.addEventListener("mouseup", (event) => {
	if (event.target.dataset.key) {
	  event.target.classList.remove("keypress");
	}
  });