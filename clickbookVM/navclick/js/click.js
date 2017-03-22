//回到顶部
var topbtn = document.getElementById('top-btn');
topbtn.onclick = function(){
    DS.ready(function(){
    DS.sendBtnName('回到顶部');
    });
    $('.all').animate({scrollTop:0},500);
};
//跳转领取新人红包
 var coupon=document.getElementById('coupon-btn')
     coupon.onclick=function(){
         DS.ready(function(){
         DS.sendBtnName('领取新人红包');
         });
        window.location="http://mp.bookln.cn/h5/coupons.htm?key=170113&vm=newusercoupon"
    }
 //试读跳转
 var book1_1 = document.getElementById('book1_1');
 book1_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第1_1本');
     });
     window.location ="http://qr.bookln.cn?_appbiz=clickread&bookid=1266&srcchannel=h5usual";
 };
 var book1_2 = document.getElementById('book1_2');
 book1_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第1_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1067&srcchannel=h5usual";
 };
 var book1_3 = document.getElementById('book1_3');
 book1_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第1_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1064&srcchannel=h5usual";
 };
 var book1_4 = document.getElementById('book1_4');
 book1_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第1_4本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14483&srcchannel=h5usual";
 };
 var book1_5 = document.getElementById('book1_5');
 book1_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第1_5本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=9872&srcchannel=h5usual";
 };
 var book2_1 = document.getElementById('book2_1');
 book2_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第2_1本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1072&srcchannel=h5usual";
 };
 var book2_2 = document.getElementById('book2_2');
 book2_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第2_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14473&srcchannel=h5usual";
 };
 var book2_3 = document.getElementById('book2_3');
 book2_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第2_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=6203&srcchannel=h5usual";
 };
 // var book2_4 = document.getElementById('book2_4');
 // book2_4.onclick = function () {
 //     DS.ready(function(){
 //         DS.sendBtnName('read第2_4本');
 //     });
 //     window.location = "http://qr.bookln.cn/qr.html?crcode=110000010F0000000600000057K515B3";
 // };
 var book3_1 = document.getElementById('book3_1');
 book3_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第3_1本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=17274&srcchannel=h5usual";
 };
 var book3_2 = document.getElementById('book3_2');
 book3_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第3_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=17601&srcchannel=h5usual";
 };
 var book3_3 = document.getElementById('book3_3');
 book3_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第3_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=17602&srcchannel=h5usual";
 };
 var book3_4 = document.getElementById('book3_4');
 book3_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第3_4本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14482&srcchannel=h5usual";
 };
 var book3_5 = document.getElementById('book3_5');
 book3_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第3_5本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=17736&srcchannel=h5usual";
 };
 var book3_6 = document.getElementById('book3_6');
 book3_6.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第3_6本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=17437&srcchannel=h5usual";
 };
 var book4_1 = document.getElementById('book4_1');
 book4_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_1本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1255&srcchannel=h5usual";
 };
 var book4_2 = document.getElementById('book4_2');
 book4_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1562&srcchannel=h5usual";
 };
 var book4_3 = document.getElementById('book4_3');
 book4_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1455&srcchannel=h5usual";
 };
 var book4_4 = document.getElementById('book4_4');
 book4_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_4本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1063&srcchannel=h5usual";
 };
 var book4_5 = document.getElementById('book4_5');
 book4_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_5本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14485&srcchannel=h5usual";
 };
 var book4_6 = document.getElementById('book4_6');
 book4_6.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_6本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=13179&srcchannel=h5usual";
 };
 var book4_7 = document.getElementById('book4_7');
 book4_7.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_7本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1536&srcchannel=h5usual";
 };
 var book4_8 = document.getElementById('book4_8');
 book4_8.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_8本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1450&srcchannel=h5usual";
 };
 var book4_9 = document.getElementById('book4_9');
 book4_9.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_9本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14481&srcchannel=h5usual";
 };
 var book4_10 = document.getElementById('book4_10');
 book4_10.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第4_10本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1483&srcchannel=h5usual";
 };
 var book5_1 = document.getElementById('book5_1');
 book5_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_1本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1264&srcchannel=h5usual";
 };
 var book5_2 = document.getElementById('book5_2');
 book5_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1855&srcchannel=h5usual";
 };
 var book5_3 = document.getElementById('book5_3');
 book5_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1263&srcchannel=h5usual";
 };
 var book5_4 = document.getElementById('book5_4');
 book5_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_4本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1858&srcchannel=h5usual";
 };
 var book5_5 = document.getElementById('book5_5');
 book5_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_5本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1525&srcchannel=h5usual";
 };
 var book5_6 = document.getElementById('book5_6');
 book5_6.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_6本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1836&srcchannel=h5usual";
 };
 var book5_7 = document.getElementById('book5_7');
 book5_7.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_7本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1256&srcchannel=h5usual";
 };
 var book5_8 = document.getElementById('book5_8');
 book5_8.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_8本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1857&srcchannel=h5usual";
 };
 var book5_9 = document.getElementById('book5_9');
 book5_9.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_9本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1529&srcchannel=h5usual";
 };
 var book5_10 = document.getElementById('book5_10');
 book5_10.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第5_10本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1530&srcchannel=h5usual";
 };
 var book6_1 = document.getElementById('book6_1');
 book6_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第6_1本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1535&srcchannel=h5usual";
 };
 var book6_2 = document.getElementById('book6_2');
 book6_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第6_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=6210&srcchannel=h5usual";
 };
 var book6_3 = document.getElementById('book6_3');
 book6_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第6_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=12874&srcchannel=h5usual";
 };
 // var book6_4 = document.getElementById('book6_4');
 // book6_4.onclick = function () {
 //     DS.ready(function(){
 //         DS.sendBtnName('read第6_4本');
 //     });
 //     window.location = "http://qr.bookln.cn/qr.html?crcode=110000010F000000060000005AX31C71";
 // };
 var book7_1 = document.getElementById('book7_1');
 book7_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第7_1本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1538&srcchannel=h5usual";
 };
 var book7_2 = document.getElementById('book7_2');
 book7_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第7_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1779&srcchannel=h5usual";
 };
 var book7_3 = document.getElementById('book7_3');
 book7_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第7_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=3479&srcchannel=h5usual";
 };
 var book7_4 = document.getElementById('book7_4');
 book7_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第7_4本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=1778&srcchannel=h5usual";
 };
 var book8_1 = document.getElementById('book8_1');
 book8_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第8_1本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14484&srcchannel=h5usual";
 };
 var book8_2 = document.getElementById('book8_2');
 book8_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第8_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14477&srcchannel=h5usual";
 };
 var book8_3 = document.getElementById('book8_3');
 book8_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第8_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14479&srcchannel=h5usual";
 };
 var book8_4 = document.getElementById('book8_4');
 book8_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第8_4本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=16940&srcchannel=h5usual";
 };
 var book9_1 = document.getElementById('book9_1');
 book9_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第9_1本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=11795&srcchannel=h5usual";
 };
 var book9_2 = document.getElementById('book9_2');
 book9_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第9_2本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=12004&srcchannel=h5usual";
 };
 var book9_3 = document.getElementById('book9_3');
 book9_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第9_3本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=13213&srcchannel=h5usual";
 };
 var book9_4 = document.getElementById('book9_4');
 book9_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第9_4本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=14013&srcchannel=h5usual";
 };
 var book9_5 = document.getElementById('book9_5');
 book9_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第9_5本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=15965&srcchannel=h5usual";
 };
 var book9_6 = document.getElementById('book9_6');
 book9_6.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第9_6本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=16918&srcchannel=h5usual";
 };
 var book9_7 = document.getElementById('book9_7');
 book9_7.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第9_7本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=16989&srcchannel=h5usual";
 };
 var book9_8 = document.getElementById('book9_8');
 book9_8.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('read第9_8本');
     });
     window.location = "http://qr.bookln.cn?_appbiz=clickread&bookid=16991&srcchannel=h5usual";
 };
 //购买跳转
  var buy1_1 = document.getElementById('buy1_1');
 buy1_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第1_1本');
     });
     window.location ="http://bookln.cn?_appbiz=buy&biztype=8&bizid=17&srcchannel=h5usualbuy";
 };
 var buy1_2 = document.getElementById('buy1_2');
 buy1_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第1_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=18&srcchannel=h5usualbuy";
 };
 var buy1_3 = document.getElementById('buy1_3');
 buy1_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第1_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=65&srcchannel=h5usualbuy";
 };
 var buy1_4 = document.getElementById('buy1_4');
 buy1_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第1_4本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=43&srcchannel=h5usualbuy";
 };
 var buy1_5 = document.getElementById('buy1_5');
 buy1_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第1_5本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=53&srcchannel=h5usualbuy";
 };
 var buy2_1 = document.getElementById('buy2_1');
 buy2_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第2_1本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=28&srcchannel=h5usualbuy";
 };
 var buy2_2 = document.getElementById('buy2_2');
 buy2_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第2_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=39&srcchannel=h5usualbuy";
 };
 var buy2_3 = document.getElementById('buy2_3');
 buy2_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第2_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=114&srcchannel=h5usualbuy";
 };
 // var buy2_4 = document.getElementById('buy2_4');
 // buy2_4.onclick = function () {
 //     DS.ready(function(){
 //         DS.sendBtnName('buy第2_4本');
 //     });
 //     window.location = "http://qr.bookln.cn/qr.html?crcode=110000010F0000000600000057K515B3";
 // };
 var buy3_1 = document.getElementById('buy3_1');
 buy3_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第3_1本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=92&srcchannel=h5usualbuy";
 };
 var buy3_2 = document.getElementById('buy3_2');
 buy3_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第3_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=110&srcchannel=h5usualbuy";
 };
 var buy3_3 = document.getElementById('buy3_3');
 buy3_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第3_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=109&srcchannel=h5usualbuy";
 };
 var buy3_4 = document.getElementById('buy3_4');
 buy3_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第3_4本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=42&srcchannel=h5usualbuy";
 };
 var buy3_5 = document.getElementById('buy3_5');
 buy3_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第3_5本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=111&srcchannel=h5usualbuy";
 };
 var buy3_6 = document.getElementById('buy3_6');
 buy3_6.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第3_6本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=99&srcchannel=h5usualbuy";
 };
 var buy4_1 = document.getElementById('buy4_1');
 buy4_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_1本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=29&srcchannel=h5usualbuy";
 };
 var buy4_2 = document.getElementById('buy4_2');
 buy4_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=76&srcchannel=h5usualbuy";
 };
 var buy4_3 = document.getElementById('buy4_3');
 buy4_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=34&srcchannel=h5usualbuy";
 };
 var buy4_4 = document.getElementById('buy4_4');
 buy4_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_4本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=66&srcchannel=h5usualbuy";
 };
 var buy4_5 = document.getElementById('buy4_5');
 buy4_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_5本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=38&srcchannel=h5usualbuy";
 };
 var buy4_6 = document.getElementById('buy4_6');
 buy4_6.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_6本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=22&srcchannel=h5usualbuy";
 };
 var buy4_7 = document.getElementById('buy4_7');
 buy4_7.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_7本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=32&srcchannel=h5usualbuy";
 };
 var buy4_8 = document.getElementById('buy4_8');
 buy4_8.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_8本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=68&srcchannel=h5usualbuy";
 };
 var buy4_9 = document.getElementById('buy4_9');
 buy4_9.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_9本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=41&srcchannel=h5usualbuy";
 };
 var buy4_10 = document.getElementById('buy4_10');
 buy4_10.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第4_10本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=31&srcchannel=h5usualbuy";
 };
 var buy5_1 = document.getElementById('buy5_1');
 buy5_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_1本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=61&srcchannel=h5usualbuy";
 };
 var buy5_2 = document.getElementById('buy5_2');
 buy5_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=62&srcchannel=h5usualbuy";
 };
 var buy5_3 = document.getElementById('buy5_3');
 buy5_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=60&srcchannel=h5usualbuy";
 };
 var buy5_4 = document.getElementById('buy5_4');
 buy5_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_4本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=59&srcchannel=h5usualbuy";
 };
 var buy5_5 = document.getElementById('buy5_5');
 buy5_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_5本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=64&srcchannel=h5usualbuy";
 };
 var buy5_6 = document.getElementById('buy5_6');
 buy5_6.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_6本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=82&srcchannel=h5usualbuy";
 };
 var buy5_7 = document.getElementById('buy5_7');
 buy5_7.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_7本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=122&srcchannel=h5usualbuy";
 };
 var buy5_8 = document.getElementById('buy5_8');
 buy5_8.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_8本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=125&srcchannel=h5usualbuy";
 };
 var buy5_9 = document.getElementById('buy5_9');
 buy5_9.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_9本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=67&srcchannel=h5usualbuy";
 };
 var buy5_10 = document.getElementById('buy5_10');
 buy5_10.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第5_10本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=84&srcchannel=h5usualbuy";
 };
 var buy6_1 = document.getElementById('buy6_1');
 buy6_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第6_1本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=30&srcchannel=h5usualbuy";
 };
 var buy6_2 = document.getElementById('buy6_2');
 buy6_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第6_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=115&srcchannel=h5usualbuy";
 };
 var buy6_3 = document.getElementById('buy6_3');
 buy6_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第6_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=20&srcchannel=h5usualbuy";
 };
 // var buy6_4 = document.getElementById('buy6_4');
 // buy6_4.onclick = function () {
 //     DS.ready(function(){
 //         DS.sendBtnName('buy第6_4本');
 //     });
 //     window.location = "http://qr.bookln.cn/qr.html?crcode=110000010F000000060000005AX31C71";
 // };
 var buy7_1 = document.getElementById('buy7_1');
 buy7_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第7_1本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=33&srcchannel=h5usualbuy";
 };
 var buy7_2 = document.getElementById('buy7_2');
 buy7_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第7_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=26&srcchannel=h5usualbuy";
 };
 var buy7_3 = document.getElementById('buy7_3');
 buy7_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第7_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=12&srcchannel=h5usualbuy";
 };
 var buy7_4 = document.getElementById('buy7_4');
 buy7_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第7_4本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=27&srcchannel=h5usualbuy";
 };
 var buy8_1 = document.getElementById('buy8_1');
 buy8_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第8_1本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=44&srcchannel=h5usualbuy";
 };
 var buy8_2 = document.getElementById('buy8_2');
 buy8_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第8_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=45&srcchannel=h5usualbuy";
 };
 var buy8_3 = document.getElementById('buy8_3');
 buy8_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第8_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=47&srcchannel=h5usualbuy";
 };
 var buy8_4 = document.getElementById('buy8_4');
 buy8_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第8_4本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=71&srcchannel=h5usualbuy";
 };
 var buy9_1 = document.getElementById('buy9_1');
 buy9_1.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第9_1本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=11&srcchannel=h5usualbuy";
 };
 var buy9_2 = document.getElementById('buy9_2');
 buy9_2.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第9_2本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=35&srcchannel=h5usualbuy";
 };
 var buy9_3 = document.getElementById('buy9_3');
 buy9_3.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第9_3本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=36&srcchannel=h5usualbuy";
 };
 var buy9_4 = document.getElementById('buy9_4');
 buy9_4.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第9_4本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=49&srcchannel=h5usualbuy";
 };
 var buy9_5 = document.getElementById('buy9_5');
 buy9_5.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第9_5本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=51&srcchannel=h5usualbuy";
 };
 var buy9_6 = document.getElementById('buy9_6');
 buy9_6.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第9_6本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=69&srcchannel=h5usualbuy";
 };
 var buy9_7 = document.getElementById('buy9_7');
 buy9_7.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第9_7本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=78&srcchannel=h5usualbuy";
 };
 var buy9_8 = document.getElementById('buy9_8');
 buy9_8.onclick = function () {
     DS.ready(function(){
         DS.sendBtnName('buy第9_8本');
     });
     window.location = "http://bookln.cn?_appbiz=buy&biztype=8&bizid=80&srcchannel=h5usualbuy";
 };
