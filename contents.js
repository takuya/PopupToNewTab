document.body.appendChild(function(){
  sc = document.createElement("script");
  var code = function(){
  	window._open = window.open;
  	window.open = function(){
  		return window._open.call(this,arguments[0],arguments[1])
  	}

  }
  src = "("+code.toString()+")()"
  sc.type="text/javascript";
  sc.text=src
  return sc;
}()
);
