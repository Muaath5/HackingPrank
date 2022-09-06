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

setTimeout(showMessage, 3*S);
setTimeout(d1, 500);

function d1() {
	ph.innerHTML = photos;
	setTimeout(d2, 500);
}

function d2() {
	vd.innerHTML = videos;
	setTimeout(d3, 500);
}

function d3() {
	cc.innerHTML = credit_cards;
	setTimeout(d4, 500);
}

function d4() {
	ap.innerHTML = apps;
	setTimeout(d5, 500);
}

function d5() {
	ps.innerHTML = passwords;
}

function showMessage()
{
	const inf = document.querySelector("#info");
	const hackInfo = `الاسم : احمد خالد صمهود الغامدي 
رقم الجوال: +966 550963225
جوال ايفون X`;
	inf.innerHTML = hackInfo;
	alert(hackInfo);
}
