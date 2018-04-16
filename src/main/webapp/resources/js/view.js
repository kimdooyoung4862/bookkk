var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'">'+x.txt+'</div>'
}
var createATag=x=>{
	return '<a id="'+x.id+'" class="'+x.clazz+'" role="'+x.role+'">'+x.txt+'</a>'
}
var createSpan=x=>{
	return '<span id="'+x.id+'" class="'+x.clazz+'"></span>'
}
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'" role="'+x.role+'"></ul>'
}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>'
}
var createImg=x=>{
	return '<img alt="'+x.alt+'" src="'+x.src+'">'
}
var createButton=x=>{
	return '<button id="'+x.id+'" class="'+x.clazz+'">'+x.txt+'</button>'
}
var createHTag=x=>{
	return '<h'+x.num+' class="'+x.clazz+'">'+x.txt+'</h'+x.num+'>'
}
