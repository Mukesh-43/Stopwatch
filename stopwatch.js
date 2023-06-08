// Getting all the elements using id selector;
const mseconds = document.getElementById('mseconds');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const lapText = document.getElementById('lapText');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const lap = document.getElementById('lap');
const lapdiv = document.getElementById('lapdiv');

// Initiallizing with 0;
let para = 0;
let count = 0;
let interval;

// Initially let the values be 0;
milli = 00;
secs = 00;
mins = 00;

// Adding click event for start button
start.addEventListener('click',()=>{
	interval = setInterval(play,10);
})

// Adding click event for stop button
stop.addEventListener('click',()=>{
	clearInterval(interval);
	start.innerHTML = 'Resume';
})

// Adding click event for reset button
reset.addEventListener('click',()=>{
	clearInterval(interval);
	milli = 00;
	secs = 00;
	mins = 00;
	mseconds.innerHTML = '00';
	seconds.innerHTML = '00';
	minutes.innerHTML = '00';

	window.location.reload(); // Used to delete all the laps
})

// Adding click event for lap button
lap.addEventListener('click',()=>{
	count++;
    para = document.createElement('p');
	lapText.appendChild(para);
	if(milli == '0')
		milli = '0' + milli;
	if(secs == '0')
	    secs = '0' + secs;
	if(mins == '0')
		mins = '0' + mins;
	para.innerHTML = `Lap ${count} = ${mins}:${secs}:${milli}`;
})

// This function is for start button
function play(){

	milli++;
	if(milli < 10){
	  milli = '0' + milli;
	  mseconds.innerHTML = milli;
	}else{
		mseconds.innerHTML = milli;
	}
	if(milli == 100){
		mseconds.innerHTML = '00';
	}
	if(milli > 99){
		milli = 0;
		secs++;
	
		if(secs < 10){
			secs = '0' + secs;
			seconds.innerHTML = secs;
		}else{
			seconds.innerHTML = secs;
		}
		if(secs == 60){
			seconds.innerHTML = '00';
		}
	}
	if(secs > 59){
		secs = 00;
		mins++;
		if(mins < 10){
			mins = '0' + mins;
			minutes.innerHTML = mins;
		}else{
			minutes.innerHTML = mins;
		}
		
	}
}
