// document.getElementById('owl').onclick = function(){
//     alert('Owl pick clicked');
// }

document.getElementById('owl').addEventListener('click',function(e){ //e is the event object
    alert('Owl pick clicked');
    console.log(e);
    
},false); //false is default value for third parameter
//type, timestamp, defaultPrevented, isTrusted, target,toElement, srcElement,currentTarget,clientX,clientY,offsetX,offsetY,
//screenX,screenY,pageX,pageY
//altkey,ctrlkey,metakey,shiftkey,keyCode,which


//attachEvent() was used in earlier days in IE
//jquery - on


