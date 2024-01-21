var mdby = "Oh, ";
var plyhp = 180;
var enmhp = 180;
var mv1 = 28;
var mv2 = 46;
function randomNum(mini,maxi){
	var mini = Math.ceil(mini);
	var maxi = Math.floor(maxi);
	return Math.floor(Math.random()*(maxi-mini+1))+mini;
}
function hidehit1(){
	document.getElementById("hitImg1").style.display = "none";
}
function showhit1(){
	document.getElementById("hitImg1").style.display = "block";
}
function hidehit2(){
	document.getElementById("hitImg2").style.display = "none";
}
function showhit2(){
	document.getElementById("hitImg2").style.display = "block";
}
var prog = "hi!";
function hideskill(){
	document.getElementById("sk-btn2").style.display = "none";
	document.getElementById("sk-btn-b").style.display = "block";
}
function showskill(){
	document.getElementById("sk-btn2").style.display = "block";
	document.getElementById("sk-btn-b").style.display = "none";
}
function showskill2(){
	document.getElementById("imgEnm").style.display = "none";
	document.getElementById("sk-btn-b").innerHTML = "<div style=\"text-align: center; font-size: 20px; padding-top: 25px;\">You Win!</div>";
}
function showskill3(){
	document.getElementById("imgPly").style.display = "none";
	document.getElementById("sk-btn-b").innerHTML = "<div style=\"text-align: center; font-size: 20px; padding-top: 25px;\">You Lose</div>";
}
function refhp(){
	document.getElementById("hp1").innerHTML = "HP : "+plyhp;
	document.getElementById("hp2").innerHTML = "HP : "+enmhp;
}
function plymin1(){
	plyhp = plyhp-mv1;
	enmhp = enmhp+14;
	if (enmhp>=180) {
		enmhp = 180;
	}
}
function plymin2(){
	plyhp = plyhp-mv2;
	var x2 = randomNum(6,10);
	if (x2==8) {
		plyhp -= 2;
	}
}
var ft_txt = mdby+prog;
function enmmin1(){
	enmhp = enmhp-mv1;
	plyhp = plyhp+14;
	if (plyhp>=180) {
		plyhp = 180;
	}
}
function enmmin2(){
	enmhp = enmhp-mv2;
	var x4 = randomNum(6,10);
	if (x4==8) {
		enmhp -= 2;
	}
}
function PmEm() {
	setTimeout(showhit2,500);
	setTimeout(hideskill,100);
	setTimeout(hidehit2,750);
	setTimeout(showhit2,1000);
	setTimeout(hidehit2,1250);
	setTimeout(enmmin1,1250);
	setTimeout(function(){
		if (enmhp<=0) {
			enmhp = 0;
			setTimeout(refhp,250);
			setTimeout(showskill2,750);
		} else {
			setTimeout(refhp,250);
			setTimeout(showhit1,750);
			setTimeout(hidehit1,1000);
			setTimeout(showhit1,1250);
			setTimeout(hidehit1,1500);
			setTimeout(plymin1,1500);
			setTimeout(function() {
				if (plyhp<=0) {
					plyhp = 0;
					setTimeout(refhp,250);
					setTimeout(showskill3,750);
				} else {
					setTimeout(refhp,250);
					setTimeout(showskill,750);
				}
			}, 1500);
		}
	}, 1250);
}
function PfEf() {
	setTimeout(showhit2,500);
	setTimeout(hideskill,100);
	setTimeout(hidehit2,750);
	setTimeout(showhit2,1000);
	setTimeout(hidehit2,1250);
	setTimeout(enmmin2,1250);
	setTimeout(function(){
		if (enmhp<=0) {
			enmhp = 0;
			setTimeout(refhp,250);
			setTimeout(showskill2,750);
		} else {
			setTimeout(refhp,250);
			setTimeout(showhit1,750);
			setTimeout(hidehit1,1000);
			setTimeout(showhit1,1250);
			setTimeout(hidehit1,1500);
			setTimeout(plymin2,1500);
			setTimeout(function() {
				if (plyhp<=0) {
					plyhp = 0;
					setTimeout(refhp,250);
					setTimeout(showskill3,750);
				} else {
					setTimeout(refhp,250);
					setTimeout(showskill,750);
				}
			}, 1500);
		}
	}, 1250);
}
function PfEm() {
	setTimeout(showhit2,500);
	setTimeout(hideskill,100);
	setTimeout(hidehit2,750);
	setTimeout(showhit2,1000);
	setTimeout(hidehit2,1250);
	setTimeout(enmmin2,1250);
	setTimeout(function(){
		if (enmhp<=0) {
			enmhp = 0;
			setTimeout(refhp,250);
			setTimeout(showskill2,750);
		} else {
			setTimeout(refhp,250);
			setTimeout(showhit1,750);
			setTimeout(hidehit1,1000);
			setTimeout(showhit1,1250);
			setTimeout(hidehit1,1500);
			setTimeout(plymin1,1500);
			setTimeout(function() {
				if (plyhp<=0) {
					plyhp = 0;
					setTimeout(refhp,250);
					setTimeout(showskill3,750);
				} else {
					setTimeout(refhp,250);
					setTimeout(showskill,750);
				}
			}, 1500);
		}
	}, 1250);
}
function EfPm() {
	setTimeout(showhit1,500);
	setTimeout(hideskill,100);
	setTimeout(hidehit1,750);
	setTimeout(showhit1,1000);
	setTimeout(hidehit1,1250);
	setTimeout(plymin2,1250);
	setTimeout(function(){
		if (plyhp<=0) {
			plyhp = 0;
			setTimeout(refhp,250);
			setTimeout(showskill3,750);
		} else {
			setTimeout(refhp,250);
			setTimeout(showhit2,750);
			setTimeout(hidehit2,1000);
			setTimeout(showhit2,1250);
			setTimeout(hidehit2,1500);
			setTimeout(enmmin1,1500);
			setTimeout(function() {
				if (enmhp<=0) {
					enmhp = 0;
					setTimeout(refhp,250);
					setTimeout(showskill2,750);
				} else {
					setTimeout(refhp,250);
					setTimeout(showskill,750);
				}
			}, 1500);
		}
	}, 1250);
}
function EmPm() {
	setTimeout(showhit1,500);
	setTimeout(hideskill,100);
	setTimeout(hidehit1,750);
	setTimeout(showhit1,1000);
	setTimeout(hidehit1,1250);
	setTimeout(plymin1,1250);
	setTimeout(function(){
		if (plyhp<=0) {
			plyhp = 0;
			setTimeout(refhp,250);
			setTimeout(showskill3,750);
		} else {
			setTimeout(refhp,250);
			setTimeout(showhit2,750);
			setTimeout(hidehit2,1000);
			setTimeout(showhit2,1250);
			setTimeout(hidehit2,1500);
			setTimeout(enmmin1,1500);
			setTimeout(function() {
				if (enmhp<=0) {
					enmhp = 0;
					setTimeout(refhp,250);
					setTimeout(showskill2,750);
				} else {
					setTimeout(refhp,250);
					setTimeout(showskill,750);
				}
			}, 1500);
		}
	}, 1250);
}
function EfPf() {
	setTimeout(showhit1,500);
	setTimeout(hideskill,100);
	setTimeout(hidehit1,750);
	setTimeout(showhit1,1000);
	setTimeout(hidehit1,1250);
	setTimeout(plymin2,1250);
	setTimeout(function(){
		if (plyhp<=0) {
			plyhp = 0;
			setTimeout(refhp,250);
			setTimeout(showskill3,750);
		} else {
			setTimeout(refhp,250);
			setTimeout(showhit2,750);
			setTimeout(hidehit2,1000);
			setTimeout(showhit2,1250);
			setTimeout(hidehit2,1500);
			setTimeout(enmmin2,1500);
			setTimeout(function() {
				if (enmhp<=0) {
					enmhp = 0;
					setTimeout(refhp,250);
					setTimeout(showskill2,750);
				} else {
					setTimeout(refhp,250);
					setTimeout(showskill,750);
				}
			}, 1500);
		}
	}, 1250);
}
function PmEf() {
	setTimeout(showhit2,500);
	setTimeout(hideskill,100);
	setTimeout(hidehit2,750);
	setTimeout(showhit2,1000);
	setTimeout(hidehit2,1250);
	setTimeout(enmmin1,1250);
	setTimeout(function(){
		if (enmhp<=0) {
			enmhp = 0;
			setTimeout(refhp,250);
			setTimeout(showskill2,750);
		} else {
			setTimeout(refhp,250);
			setTimeout(showhit1,750);
			setTimeout(hidehit1,1000);
			setTimeout(showhit1,1250);
			setTimeout(hidehit1,1500);
			setTimeout(plymin2,1500);
			setTimeout(function() {
				if (plyhp<=0) {
					plyhp = 0;
					setTimeout(refhp,250);
					setTimeout(showskill3,750);
				} else {
					setTimeout(refhp,250);
					setTimeout(showskill,750);
				}
			}, 1500);
		}
	}, 1250);
}
function EmPf() {
	setTimeout(showhit1,500);
	setTimeout(hideskill,100);
	setTimeout(hidehit1,750);
	setTimeout(showhit1,1000);
	setTimeout(hidehit1,1250);
	setTimeout(plymin1,1250);
	setTimeout(function(){
		if (plyhp<=0) {
			plyhp = 0;
			setTimeout(refhp,250);
			setTimeout(showskill3,750);
		} else {
			setTimeout(refhp,250);
			setTimeout(showhit2,750);
			setTimeout(hidehit2,1000);
			setTimeout(showhit2,1250);
			setTimeout(hidehit2,1500);
			setTimeout(enmmin2,1500);
			setTimeout(function() {
				if (enmhp<=0) {
					enmhp = 0;
					setTimeout(refhp,250);
					setTimeout(showskill2,750);
				} else {
					setTimeout(refhp,250);
					setTimeout(showskill,750);
				}
			}, 1500);
		}
	}, 1250);
}
function skill1(){
	var y1 = randomNum(6,7);
	if (y1==6) {
		var z1 = randomNum(6,7);
		if (z1==6) {
			EmPm();
		} else {
			PmEm();
		}
	} else {
		var zz1 = randomNum(6,7);
		if (zz1==6) {
			EfPm();
		} else {
			PmEf();
		}
	}
}
function skill2(){
	var y2 = randomNum(6,7);
	if (y2==6) {
		var z2 = randomNum(6,7);
		if (z2==6) {
			EmPf();
		} else {
			PfEm();
		}
	} else {
		var zz2 = randomNum(6,7);
		if (zz2==6) {
			EfPf();
		} else {
			PfEf();
		}
	}
}