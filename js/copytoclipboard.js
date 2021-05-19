function copyToClip(content) {
  var str = document.createElement("textarea");
  str.value = content;
  document.body.appendChild(str);
  str.select();
  document.execCommand("copy");
  document.body.removeChild(str);
}
