var tl =gsap.timeline();
tl.from(".line h1,h2",{
    y :100,
    duration :1,
    stagger : 0.3,

})


tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        let counter= document.querySelector("#line1-part1 h5");
        let count =0;
        setInterval(function(){
        if(count <= 100){
           counter.innerHTML = count ++;
        }
},30)
    }
})
tl.to("#loader",{
    opacity : 0,
    duration:0.2,
    delay:3.8
})
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4,
    duration:0.5
})
tl.to("#loader",{
    display:"none"
})

// let now= document.getElementById("now");
// let font
// font = setInterval(function(){

//      now.style.fontFamily = "cursive"
    
// },100)
