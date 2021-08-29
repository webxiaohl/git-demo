var username=document.getElementById("username");
        var password=document.getElementById("password");
        var span=document.querySelector("span");
        span.addEventListener("mouseover",function(){
            this.style.cursor="pointer";
            this.style.backgroundColor="rgb(160, 160, 250)";
        });
        span.addEventListener("mouseout",function(){
            this.style.cursor="";
            this.style.backgroundColor="rgb(189, 175, 248)";
        });
        span.addEventListener("click",function(){
            this.style.border="1px solid red";
            if(username.value=="赵小琳" && password.value=="1314"){
                    window.location.href="lin.html";
                }else if(username.value=="肖磊" && password.value=="3416"){
                    window.location.href="xiao.html";
                }else{
                    alert("请输入正确的账号或密码！");
                    span.style.border="1px solid #ccc";
                }
        });