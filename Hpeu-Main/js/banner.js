/**
 * Created by joke on 2017/8/9 0009.
 */

(function () {
    var ils = document.getElementsByClassName('wrapper-il');
    var inners =document.getElementsByClassName('slide-inner');
    var prevBtn =document.getElementById('pre');
    var nextBtn =document.getElementById('next');
    // var clientWidth =document.body.clientWidth;
    var flag=0;
    var liNum = ils.length;
    function clickAddLitsener() {
        for(var i=0; i<ils.length;i++){
            (function (index) {
                /*ils[index].click(function () {
                    console.log('asdasd '+index);
                    inners.each().slideToggle();
                });*/
                // ils[index].addEventListener('click',allAction(index),false);
                ils[index].onclick=function () {
                    reMoveColor();
                    reMoveClass();
                    setStatus(index);
                }
            })(i);
        }
    }
    clickAddLitsener();
    prevBtn.onclick=previousLi;   //注意不能加括号；！！！！！
    nextBtn.onclick=nextLi;

   /* function nextTransform(index) {
        var clientWidth =document.body.clientWidth;
        inners[index].style.transition="-webkit-transform 4000ms ease-out";

    }*/
   /* function autoPlay() {
        setInterval(
            function () {
                flag++;
                if(flag>liNum-1){
                    flag=0;
                    allAction(flag);
                    autoPlay();
                    console.log("auto");
                }else {
                    allAction(flag);
                    autoPlay();
                    console.log("auto");
                }
            } ,3000);
    }
    autoPlay();*/
    setTimeout(function play() {
        setTimeout(play,3000);
        flag++;
        if(flag>liNum-1){
            flag=0;
            allAction(flag);
        }else {
            allAction(flag);
        }
    },3000);
    function allAction(index) {
        reMoveColor();
        reMoveClass();
        setStatus(index);
    }

    function setStatus(i) {
        flag =i;
        console.log("点击了li"+flag);
        console.log("remove后"+flag);
        inners[i].classList.add('show-box');
        ils[i].style.backgroundColor='#222';
    }
    function reMoveClass() {
        for (var i=0; i<ils.length;i++){
            (function (index) {
                inners[index].classList.remove('show-box');
            })(i);
        }
    }
    function reMoveColor() {
        for (var i=0; i<ils.length;i++){
            (function (index) {
                ils[index].style.backgroundColor='#e0e0e0';
            })(i);
        }
    }
    function nextLi() {
        // nextTransform(flag);
        ++flag;
        console.log("点击了next 这时flag="+flag);
        if(flag>liNum-1){
            flag=0;
            allAction(flag);
        }
        else {
            allAction(flag);
        }
    }
    function previousLi() {
        --flag;
        console.log("点击了prev 这时flag="+flag);
        if(flag<0){
            flag=liNum-1;
            allAction(flag);
        }
        else {
            allAction(flag);
        }
    }

})();
