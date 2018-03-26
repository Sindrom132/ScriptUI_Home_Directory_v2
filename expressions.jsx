function wiggle_exp(){
	var seed;
	var range;
	var w = new Window ("dialog");
		var g = w.add("group",undefined,"group");
			g.orientation = "column";
			g.alignChildren = ["right","fill"];
			var seed_group = g.add("group",undefined,"");
			var st_seed = seed_group.add("staticText",undefined,"Seed");
			var et_seed = seed_group.add("editText",undefined,"2");
			et_seed.characters = 5;

			var range_group = g.add("group",undefined,"");
			var st_range = range_group.add("staticText",undefined,"Amplitude");
			var et_range = range_group.add("editText",undefined,"250");
			et_range.characters = 5;
		var ok_button = w.add("button",undefined,"Ok");
			ok_button.onClick = function(){
				seed = et_seed.text;
				range = et_range.text;
				w.close();
			};
	w.show();
	if (seed != undefined) {
		return "wiggle("+ seed +","+ range +")";
	} else {
		return null;
	}
    
};
function bounce_exp(){
	var amp;
	var freq; 
	var decay;

	var w = new Window ("dialog");
		var g = w.add("group",undefined,"group");
			g.orientation = "column";
			g.alignChildren = ["right","fill"];

			var amp_group = g.add("group",undefined,"");
			var st_amp = amp_group.add("staticText",undefined,"Amplitude");
			var et_amp = amp_group.add("editText",undefined,"0.1");
			et_amp.characters = 5;

			var freq_group = g.add("group",undefined,"");
			var st_freq = freq_group.add("staticText",undefined,"Frequency");
			var et_freq = freq_group.add("editText",undefined,"2");
			et_freq.characters = 5;

			var decay_group = g.add("group",undefined,"");
			var st_decay = decay_group.add("staticText",undefined,"Decay");
			var et_decay = decay_group.add("editText",undefined,"5");
			et_decay.characters = 5;

		var ok_button = w.add("button",undefined,"Ok");
			ok_button.onClick = function(){
				amp = et_amp.text;
				freq = et_freq.text;
				decay = et_decay.text;
				w.close();
			};

	w.show();

	if (amp != undefined) {
		return 'n = 0;if(numKeys > 0){n = nearestKey(time).index;if (key(n).time > time){n--;};};if (n == 0){t = 0;}else{t = time - key(n).time;};if (n > 0){v = velocityAtTime(key(n).time - thisComp.frameDuration/10);amp = '+ amp +';freq = '+ freq +';decay = '+ decay +';M=Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);value + v*amp*M;}else{value;};';
	} else {
		return null;
	}
    
};






