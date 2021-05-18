function compresswithformat(str) {
  return $compresswithformat($compress($compress(str)));
}

function $compresswithformat(str) {
  var ret = "";
  var maxlen = width.maxlen.value;
  if (maxlen == -1) return str;
  if (maxlen < 2) maxlen = 2;
  var cnt = 0;
  for (var i = 0; i < str.length; ++i, ++cnt) {
    if (str[i] == "\n") cnt = 0;
    ret += str[i];
    if (cnt == maxlen - 1) {
      ret += "\\";
      ret += "\n";
      cnt = 0;
    }
  }
  return ret;
}
