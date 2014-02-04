

str='window._open = window.open;window.open = function(){ arguments[2] = null; return window._open.apply(this,arguments)}';
s = document.createElement("script")
s.innerText = str
document.body.appendChild(s)

