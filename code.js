const S = 1000;
const photos       = "Photos - الصور ✅";
const videos       = "Videos - مقاطع الفيديو ✅";
const credit_cards = "Credit cards - البطاقات الائتمانية ❌";
const apps         = "Apps - التطبيقات والبرامج ✅";
const passwords    = "Passwords - كلمات المرور ✅";

//const text = photos + "\n" + videos + "\n" + credit_cards + "\n" + apps + "\n" + passwords;
const
	ph = document.querySelector("#photos"),
	vd = document.querySelector("#videos"),
	cc = document.querySelector("#cc"),
	ap = document.querySelector("#apps"),
	ps = document.querySelector("#passwords");
ph.innerHTML = "%L2l#Oeu&*Aв095";
vd.innerHTML = "jBW8@!b^N^n$E!@";
cc.innerHTML = "wX3&w4%S$^5X5SM";
ap.innerHTML = "S&@7&П#6BxcuB9K";
ps.innerHTML = "2$FiИa^Vcq3tu20";

setTimeout(showMessage, 11*S);
setTimeout(d1, 2*S);

function d1() {
	ph.innerHTML = photos;
	setTimeout(d2, 2*S);
}

function d2() {
	vd.innerHTML = videos;
	setTimeout(d3, 2*S);
}

function d3() {
	cc.innerHTML = credit_cards;
	setTimeout(d4, 2*S);
}

function d4() {
	ap.innerHTML = apps;
	setTimeout(d5, 2*S);
}

function d5() {
	ps.innerHTML = passwords;
}

function showMessage()
{
	console.log("Alert!");
	alert("You've been hacked - لقد تم اختراقك - Вас взломли");
}
