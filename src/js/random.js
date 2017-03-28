const rnd = (min, max) => { 
	let rnd_int  = Math.random() * (max - min) + min;
	return parseInt(rnd_int);
}
module.exports = rnd;
