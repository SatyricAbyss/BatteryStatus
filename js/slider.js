document.getElementById('mySlider').addEventListener("input", function(){
    const val = document.getElementById("mySlider").value;
    let bkgrndColor = (val*2.55);
    document.getElementById("smile").style.borderRadius = Math.abs(50-val)+"%";
    document.getElementById("documentBody").style.backgroundColor = 'rgb('+bkgrndColor+','+bkgrndColor+','+bkgrndColor+')';
    
    if(val < 50){ 
        document.getElementById("smile").style.transform='rotate('+180+'deg) translateY(-50px)';
        document.getElementById("smile").style.top="36px";
    } else {
        document.getElementById("smile").style.transform='rotate('+0+'deg)';
        document.getElementById("smile").style.top="0";
    }
})

function changeSmile() {
    let sliderValue = document.getElementById("mySlider").value;
    console.log("The slider has updated: "+sliderValue);
}