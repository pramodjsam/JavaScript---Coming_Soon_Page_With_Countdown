const countdown=document.querySelector(".countdown");

const launchDate= new Date('Jan 1,2021 13:00:00').getTime();

const interval= setInterval(function(){
	const now= new Date().getTime();
	const distance= launchDate-now;
	console.log(distance)

	const days= Math.floor(distance/(1000*60*60*24));
	const hours= Math.floor((distance%(1000*60*60*24))/(1000*60*60));
	const minutes= Math.floor((distance%(1000*60*60))/(1000*60));
	const seconds= Math.floor((distance%(1000*60))/(1000));

	countdown.innerHTML=`
		<div>${days}<span>Days</span></div>
		<div>${hours}<span>Hours</span></div>
		<div>${minutes}<span>minutes</span></div>
		<div>${seconds}<span>Seconds</span></div>
	`;
	if(distance<0){
		clearInterval(interval);
		countdown.style.color="#19a2b8";
		document.querySelector(".comingsoon").innerHTML=""
		countdown.innerHTML="Launched!"
	}
},1000)