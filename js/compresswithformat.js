
function compresswithformat(str){
	return $compresswithformat($compress($compress(str)));
}

function $compresswithformat(str) {
	var ret = '';
	var cnt=0;
	var max_len = 80;
	for (var i=0; i<str.length; ++i,++cnt) {
		if (str[i]=='\n') cnt=0;
		ret += str[i];
		if (cnt == max_len - 1) {
			ret += '\\';
			ret += '\n';
			cnt = 0;
		}
	}
	return ret;
}
