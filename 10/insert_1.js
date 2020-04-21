/*
http://heptaveegesimal.com
*/
var section = [
	['Home','index.html'],
	['VVOVOV','vvovov.html'],
	['About','about.html']]

var obj = document.getElementById('ins_1');
var text = '';
var here = obj.textContent;
var i;
for(i=0;i<section.length;i++){
	if(i>0){
		text += ' | ';
	}
	if(here == section[i][0]){
		text += '<u>'+section[i][0] + '</u>';
	}else{
		if(section[i][1] == ''){
			text += section[i][0];
		}else{
			text += '<a href="'+section[i][1] + '">';
			text += section[i][0] + '</a>';
		}
	}
}
obj.innerHTML = text;
