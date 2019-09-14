
    function init(){
        //书写轮图片显示的定时操作
        setInterval("changeImg()",2100);
        // setInterval("changeNavd()",2000);
    }

//书写函数
var i=25;
function changeImg(){
    i++;
    //获取图片位置并设置src属性值
    document.getElementById("img25").src="../img/"+ i +".jpg";
    if(i==28){
        i=24;
    }
}
// //默认显示图片的索引
// var index = 0;
// //获取所有的a
// var allA = document.getElementsByTagName("a");
// //设置默认选中的效果
// allA[index].style.backgroundColor = "black";
// function changNav() {
//     for( i=0 ; i<allA.length ; i++){
//         allA[i].style.backgroundColor = "";
//     }
//     //将选中的a设置为黑色
//     allA[index].style.backgroundColor = "black";
// };
//默认显示图片的索引



