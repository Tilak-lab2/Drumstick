
var b=document.querySelectorAll(".drum").length
document.getElementsByTagName("button")[0].addEventListener("click",function(){
//alert("clicked")
})
document.getElementsByTagName("button")[1].addEventListener("click",function(){
  //  alert("clicked")
    })
 document.getElementsByTagName("button")[2].addEventListener("click",function(){
    //    alert("clicked")
        })
document.getElementsByTagName("button")[3].addEventListener("click",function(){
      //      alert("clicked")
            })
            
for(var i=0;i<b;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var audio=new Audio("sounds/crash.mp3")
    audio.play()
    this.style.color="white"
    var p=this.innerHTML
   sound(p)
   anima(p)
})
}
document.addEventListener("keypress",function(event){
 
sound(event.key)
anima(event.key)
})
function sound(key){
    switch(key){
        case("w"):
        var audio=new Audio("")
        audio.play()
      
        break
      
        case("a"):
        var audio=new Audio("sounds/kick-bass.mp3")
        audio.play()
        break    
        case("s"):
        var audio=new Audio("sounds/snare.mp3")
        audio.play()
        break
        case("d"):
        var audio=new Audio("sounds/tom-1.mp3")
        audio.play()
        break
        case("j"):
        var audio=new Audio("sounds/tom-2.mp3")
        audio.play()
        break
        case("k"):
        var audio=new Audio("sounds/tom-3.mp3")
        audio.play()
        break
        default:
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play()
}
}
function anima(currkey){
var c=document.querySelector("."+currkey)
c.classList.add("pressed")
setTimeout(function(){
    c.classList.remove("pressed")
},600)

}
var a=new Date()
a.getDate()