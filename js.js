var a;
var lineXOne=1205;
var lineXTwo=1225;
var carXOne=-100;
var carXTwo=540;
var down=0;
var planeYOne=300;
var planeYTwo=290;
var counterForPlane=2;
var counter=0;
var timer=0;
var wheels=4;
var personX=-100;
var check=false;
var mainDone=false;
var whenPersonShouldEnter;
var lightsOnBuildings=[];
var whenLightsTurnOn=false;
var colorCheckOne=false;
var colorCheckTwo=false;
var randomForColorCar;
var randomForColorCarTwo;
var checkForRotation=false;
var radarTowerXOne=910;
var radarTowerXTwo=950;
var posForStars=[];
var starsDone=false;
var counterForSteam=0;
var checkSmoke=false;
var colors=["#FFF312","#49ff4f","#46fff2","#ff48ef","#ff1e29","#10ffb7","#ff6bff","#10852c","#a36f37","#f6ff7e"];
var lightColor=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
function drawStuff() {
    drawSky();
    drawGrass();
    drawFactories();
    drawGarage();
    drawRadarTower();;
    drawRadar();
    drawRunwayOfTheFuture();
    drawPlane();
    drawRoad();
    drawCars();
    drawBuildingsAndLights();
    drawSun();
    drawSupports();
    drawSidewalk();
    drawLamps();
    drawPeople();
}
function drawRunwayOfTheFuture() {
    drawRect("gray",920,305,10,45);
    drawRect("gray",950,305,10,45);
    drawRect("gray", 920,305,80,5);
}
function drawGarage(){
    for(i=180;i<349; i=i+37) {
        drawRect("#302e30", 500, i, 200, 20);
    }
    drawRect("302e30",680,180,20,148);
}
function startAnimate() {
    if(mainDone==false){
        animate();
        mainDone=true;
    }
}
function animate() {
    a=requestAnimationFrame(animate);
    timer++;
    drawSky();
    drawGarage();
    drawFactories();
    drawRadarTower();
    drawRadar();
    drawRunwayOfTheFuture();
    drawGrass();
    drawPlane();
    drawRoad();
    drawCars();
    drawBuildingsAndLights();
    drawSupports();
    drawSidewalk();
    drawLamps();
    drawPeople();
    checkCars();
    checkPlaneHeight();
    checkPeople();
}
function checkPeople() {
    if(personX<=500&&check==false){
        whenPersonShouldEnter=ranNum(1,4);
        lightsOnBuildings.push(whenPersonShouldEnter);
        check=true;
    }
    if(personX>900){
        check=true;
    }
}
function makeTrue(){
    var random;
    if(whenPersonShouldEnter==1){
        var prevent=preventEndlessLoop(lightColor,0,8);
        if(prevent==false) {
            random=ranNum(0,8);
            while (lightColor[random] == true) {
                random = ranNum(0, 8);
            }
        }
    }
    if(whenPersonShouldEnter==2){
        prevent=preventEndlessLoop(lightColor,9,17);
        if(prevent==false) {
            random = ranNum(9, 17);
            while (lightColor[random] == true) {
                random = ranNum(9, 17);
            }
        }
    }
    if(whenPersonShouldEnter==3){
        prevent=preventEndlessLoop(lightColor,18,26);
        if(prevent==false) {
            random = ranNum(18, 26);
            while (lightColor[random] == true) {
                random = ranNum(18, 26);
            }
        }
    }
    if(whenPersonShouldEnter==4){
        prevent=preventEndlessLoop(lightColor,27,35);
        if(prevent==false) {
            random = ranNum(27, 35);
            while (lightColor[random] == true) {
                random = ranNum(27, 35);
            }
        }
    }
    lightColor[random]=true;
}
function preventEndlessLoop(array,boundOne,boundTwo){
    var counter=0;
    for(i=boundOne; i<boundTwo; i++){
        if(array[i]==true){
            counter++;
        }
    }
    if(counter==(boundTwo-boundOne)){
        return true;
    }
    else {
        return false;
    }
}
function ranNum(number1,number2) {
    var randomNumber = Math.floor(Math.random()*(number2-number1+1))+number1;
    return randomNumber;
}
function checkPlaneHeight() {
    if(lineXOne<400){
        down=1;
        wheels=1;
    }
    if(lineXOne<100){
        down=2;
        wheels=0;
    }
    if(lineXOne>900&&lineXOne<950){
        down=3;
        wheels=2;
    }
    if(lineXTwo<-100){
        lineXOne=ranNum(1020,1200);
        lineXTwo=lineXOne+20;
        planeYTwo=290;
        planeYOne=300;
        down=0;
        counterForPlane=2;
        counter=0;
        wheels=4;
    }
}
function drawPlane() {
    counter++;
    if(down==1){
        planeYOne=planeYOne+1;
        planeYTwo=planeYTwo+1;
    }
    if(down==2){
        planeYOne=planeYOne-1;
        planeYTwo=planeYTwo-1;
    }
    if(down==3){
        planeYOne=planeYOne-3;
        planeYTwo=planeYTwo-3;
    }
    lineXTwo = lineXTwo -counterForPlane;
    lineXOne = lineXOne -counterForPlane;
    if(counter%20==0){
        counterForPlane++;
    }
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");    ctx.fillStyle="red";
    ctx.beginPath();
    ctx.fillStyle="gray";
    ctx.moveTo(lineXOne, planeYOne);
    ctx.lineTo(lineXTwo ,planeYTwo);
    ctx.lineTo(lineXTwo+55 ,planeYTwo);
    ctx.lineTo(lineXTwo+75,planeYTwo-10);
    ctx.lineTo(lineXTwo+55,planeYTwo+10);
    ctx.closePath();
    ctx.fill();
    drawCircle("gray", lineXOne+15, planeYOne, wheels, 0, Math.PI);
    drawCircle("gray", lineXOne+65, planeYOne, wheels, 0, Math.PI);
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.moveTo(lineXOne + 45, planeYOne-10);
    ctx.lineTo(lineXTwo + 60, planeYTwo-10);
    ctx.lineTo(lineXOne + 60, planeYOne-10);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.moveTo(lineXOne + 45, planeYOne-5);
    ctx.lineTo(lineXTwo + 60, planeYTwo+10);
    ctx.lineTo(lineXOne + 60, planeYOne-5);
    ctx.closePath();
    ctx.fill()
}
function checkCars(){
    if(carXOne>=530){
        carXOne=-30;
        colorCheckOne=false;
    }
    if(carXTwo<-100){
        carXTwo=530;
        colorCheckTwo=false;
    }
}
function stopAnimate() {
    cancelAnimationFrame(a);
    mainDone=false;
}
function drawStars(){
    if(starsDone==false) {
        posForStars=[];
        for (i = 0; i < 100; i++) {
            posForStars.push(ranNum(0,1000));
            posForStars.push(ranNum(0,500));
            starsDone=true;
        }
    }
    for(i=0; i<100; i=i+2){
        drawCircle("white", posForStars[i], posForStars[i+1], 2, 0, 2 * Math.PI);
    }
}
function drawSky() {
    if(timer%2000<1000) {
        drawRect("lightblue", 0, 0, 1000, 348);
        drawSun();
        starsDone=false;
    }
    else if(timer%2000>=1000){
        drawRect("black",0,0,1000,348);
        drawMoon();
        drawStars();
    }
}
function drawGrass() {
    drawRect("green",0,348,1000,500);
}
function drawMoon() {
    drawCircle("white",40,40,40,0,2*Math.PI);
    drawCircle("black",48,40,35,0,2*Math.PI);

}
function drawBuildingsAndLights() {
    for (i = 5; i < 9; i++) {
        drawRect("#d3b888",i*100,50, 75, 350);
        drawRect("#5D3B0D",i*100+20,370,20,30);
        drawCircle("black",i*100+23, 385,2,0,2*Math.PI);
        for(q=2; q<11; q++){
            drawRect("gray",i*100,q*30,50,15);
        }
    }
    findColor();
}
function findColor() {
    if(whenLightsTurnOn==true) {
        for (u = 0; u < 36; u++) {
            if (lightColor[u] == true) {
                var info = u % 9;
                var divide = Math.floor(u / 9);
                drawRect("yellow", 100 * (divide + 5), 30 * (info + 2), 50, 15);
            }
        }
    }
}
function drawRoad() {
    drawRect("#AAAAAA",0,260,500,30);
    for(i=0; i<25; i++){
        drawLine("white",i*20,270,i*20+5, 270);
    }
    drawLights();
}
function drawSun() {
    drawCircle("yellow",0,0,40,0,Math.PI);
}
function drawSupports(){
    for(i=1; i<6; i++){
        drawLine("gray",i*80,290,i*80,310);
        drawLine("gray",i*80,310,i*80+40,290);
        drawLine("gray",i*80+15,302,i*80+15,348);
        drawLine("gray",i*80+20,300,i*80+20,348);
    }
}
function drawSidewalk(){
    drawRect("gray",0,400,900,25);
    for(i=1; i<15; i++){
        drawLine("blue",i*60,400, i*60, 425);
    }
}
function drawRect(color,a,b,c,d){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle=color;
    ctx.fillRect(a,b,c,d);
}
function drawCircle(color,a,b,c,d,e) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(a,b,c,d,e);
    ctx.closePath();
    ctx.fillStyle=color;
    ctx.fill();
}
function drawLine(color,a,b,c,d){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="blue";
    ctx.beginPath();
    ctx.moveTo(a,b);
    ctx.lineTo(c,d);
    ctx.strokeStyle=color;
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
}
function drawPeople(){
    personX=personX+1;
    drawCircle("black", personX,380, 6,0,2*Math.PI);
    drawCircle("white", personX,380, 4,0,2*Math.PI);
    drawCircle("black", personX+3,380, 0.5,0,2*Math.PI);
    drawLine("black",personX,386,personX,400);
    drawLine("black",personX,400,personX-3,410);
    drawLine("black",personX,400,personX+3,410);
    drawLine("black",personX,393,personX+9,391);
    if(personX==100*(4+whenPersonShouldEnter)+20){
        drawBuildingsAndLights();
        drawSidewalk();
        findColor();
        personX=-100;
        check=false;
        makeTrue();
        whenLightsTurnOn=true
    }
}
function drawCars(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var moveAmount=2.3;
    if(colorCheckOne==false){
        randomForColorCar=ranNum(0,9);
        colorCheckOne=true;
    }
    ctx.fillStyle=colors[randomForColorCar];
    carXOne=carXOne+moveAmount;
    ctx.beginPath();
    ctx.moveTo(carXOne, 260);
    ctx.lineTo(carXOne ,245);
    ctx.lineTo(carXOne+20 ,245);
    ctx.lineTo(carXOne+30, 255);
    ctx.lineTo(carXOne+30, 255);
    ctx.lineTo(carXOne+30, 260);
    ctx.lineTo(carXOne, 260);
    ctx.closePath();
    ctx.fill();
    drawCircle("black", carXOne + 3, 260, 3, 0, 2*Math.PI);
    drawCircle("black", carXOne + 27, 260, 3, 0, 2*Math.PI);
    if(colorCheckTwo==false){
        randomForColorCarTwo=ranNum(0,9);
        colorCheckTwo=true;
    }
    ctx.fillStyle=colors[randomForColorCarTwo];
    carXTwo=carXTwo-moveAmount;
    ctx.beginPath();
    ctx.moveTo(carXTwo, 280);
    ctx.lineTo(carXTwo ,265);
    ctx.lineTo(carXTwo-20 ,265);
    ctx.lineTo(carXTwo-30, 275);
    ctx.lineTo(carXTwo-30, 275);
    ctx.lineTo(carXTwo-30, 280);
    ctx.lineTo(carXTwo, 280);
    ctx.closePath();
    ctx.fill();
    drawCircle("black", carXTwo - 3, 280, 3, 0, 2*Math.PI);
    drawCircle("black", carXTwo - 27, 280, 3, 0, 2*Math.PI);
}
function drawRadarTower(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle="#8d8d8d";
    ctx.moveTo(910,348);
    ctx.lineTo(910,200);
    ctx.lineTo(950,200);
    ctx.lineTo(950,348);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle="#49f0ff";
    ctx.moveTo(910,200);
    ctx.lineTo(890,170);
    ctx.lineTo(970,170);
    ctx.lineTo(950,200);
    ctx.closePath();
    ctx.fill();
    drawRect("gray",925,144,10,25);
}
function drawRadar(){
    drawRect("#26edff", radarTowerXOne, 130, 20, 20);
    drawRect("#26edff", radarTowerXTwo, 130, -20, 20);
    if(radarTowerXOne==radarTowerXTwo){
        checkForRotation=true;
    }
    else if(radarTowerXOne==910){
        checkForRotation=false;
    }
    if(checkForRotation==false) {
        radarTowerXOne=radarTowerXOne+0.25;
        radarTowerXTwo=radarTowerXTwo-0.25;
    }
    else if(checkForRotation==true){
        radarTowerXOne=radarTowerXOne-0.25;
        radarTowerXTwo=radarTowerXTwo+0.25;
    }

}
function drawFactories(){
    var steamY1=110;
    var steamX1=110;
    var steamY2=70;
    var steamX2=200;
    var steamY3=160;
    var steamX3=290;
    if(checkSmoke==true) {
        if(timer%2000<1000) {
            var tempColor="gray";
            if(timer%100==0){
                counterForSteam++;
            }
        }
        else{
            tempColor="#cbcbcb";
            if(timer%100==0){
                counterForSteam--;
            }
        }
        for (i = 0; i < counterForSteam; i++) {
            steamX1 = steamX1 + 8;
            steamY1 = steamY1 - 8;
            drawCircle(tempColor, steamX1, steamY1, 15, 0, 2 * Math.PI);
        }
        for (i = 0; i < counterForSteam; i++) {
            steamX2 = steamX2 + 8;
            steamY2 = steamY2 - 8;
            drawCircle(tempColor, steamX2, steamY2, 15, 0, 2 * Math.PI);
        }
        for (i = 0; i < counterForSteam; i++) {
            steamX3 = steamX3+ 8;
            steamY3 = steamY3 - 8;
            drawCircle(tempColor, steamX3, steamY3, 15, 0, 2 * Math.PI);
        }
    }
    drawRect("#6cb231", 100,200,200,148);
    drawRect("#6cb231",100,100,40,200);
    drawRect("#6cb231",190,60,40,200);
    drawRect("#6cb231",280,150,40,198);
    checkSmoke=true;
}
function drawLights(){
    for(i=1; i<9; i++){
        drawLine("gray",i*60, 260, i*60,220);
        drawLine("gray",i*60, 220, i*60-20,230);
        drawCircle("white",i*60-20,230,5,0,Math.PI);
        if(timer%2000>1000){
            drawCircle("yellow",i*60-20,230,5,0,Math.PI);
        }
    }
}
function drawLamps() {
    for(i=1; i<9; i++){
        drawLine("black",i*60, 395, i*60,365);
        drawLine("black",i*60, 365, i*60-10,370);
        drawCircle("white",i*60-10,370,5,0,Math.PI);
        if(timer%2000>1000){
            drawCircle("yellow",i*60-10,370,5,0,Math.PI);
        }
    }
}