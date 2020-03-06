<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/favicon-32x32.ico");
         document.title = '(っェ⊂)我藏好了哦~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/favicon-32x32.ico");
         document.title = 'o(^▽^)o被你发现啦~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });