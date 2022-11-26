let batteryPercentage;

navigator.getBattery().then(function(battery) {
    batteryPercentage = (battery.level*100);
    let bkgrndColor = (batteryPercentage*2.55);
    console.log("The battery has: "+batteryPercentage+"% charge");

    window.addEventListener('load', (event)=> {
        updateBatterySmile();
    })

    battery.addEventListener('levelchange', function() {    
        batteryPercentage = (battery.level*100);
        document.getElementById("smile2").style.borderRadius = Math.abs(50-batteryPercentage)+"%";
        document.getElementById("documentBody").style.backgroundColor = 'rgb('+bkgrndColor+','+bkgrndColor+','+bkgrndColor+')';

        updateBatterySmile();

        console.log("!!UPDATE!! Battery: "+batteryPercentage);
    })
});

function updateBatterySmile() {
    if(batteryPercentage < 50){
        document.getElementById("smile2").style.transform='rotate('+180+'deg) translateY(-50px)';
        document.getElementById("smile2").style.top="36px";
    } else {
        document.getElementById("smile2").style.transform='rotate('+0+'deg)';
        document.getElementById("smile2").style.top="0";
    }
}