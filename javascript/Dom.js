// document.getElementById("msg").innerHTML="javaScript"
// document.getElementById("h2").style.color="red"
// document.getElementById("img1").src="a2.jpg"
// document.getElementById("h1").addEventListener("click",function(){
//     document.write("you will get a dream job...")
// })
 var a = document.getElementById("h1")
 a.addEventListener("click",msg1)
 a.addEventListener("mouseout",msg2) 
 
 function msg1()
 {
    document.getElementById("h1").innerHTML="Do hardwork.."
 }
 function msg2()
 {
    document.getElementById("h1").innerHTML="you will get dream job.."
 }