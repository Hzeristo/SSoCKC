<h1></h1>

<style>
    .container {
      display: flex;
      justify-content: space-between;
    }

    .text {
      width: 30%;
      margin-right: 10px;
      border: 1px solid #ccc;
      padding: 10px;
      background-size: cover;
      background-position: 10% 10%;
    }

    .textsub {
      padding: 10px;
      margin-top: 10px;
      background-color: rgba(255, 99, 45, 0.5);
      color: #000000;
    }

     @media (max-width: 600px) {
      .container {
        flex-direction: column; 
      }

      .text {
        width: 100%; 
        margin-bottom: 10px; 
      }
    }

    .logo {
      max-width: 10%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .intro {
      margin-top: 20px;
      font-size: 28px;
      text-align: center;
    }

    .token {
      font-weight: bold;
      color: #000000;
    }

    .adaptive-block {
      width: calc(100% - 10px);
      padding: 10px; 
      margin-top: 20px;
      border: 1px solid #ccc;
      box-sizing: border-box; 
    }
    @media (max-width: 600px) {
      .adaptive-block {
        width: 105%;
      }
    }
</style>


<div class = "logo">
    <img src="./assets/logo2.png">
</div>

<div class = "intro">
  <p>这里是竺可桢学院院友会秘书处办公主页</p>
</div>

<div style = "text-align: center;">
  <del>咱们自己的logo呢</del>
</div>

<div class="container">
  <div class="text" style="background-image: url('./assets/bg/q1.jpg');">
    <p><div class = "token"><img src = "./assets/icon/rocket-takeoff.svg" alt = "icon">最新活动：</div></p>
    <div class="textsub">
      <p>暂无最新活动（）</p>
    </div>
    <p><div class = "token"><img src = "./assets/icon/rocket-takeoff.svg" alt = "icon">历史活动：</div></p>
    <div class="textsub">
      <p>按时间顺序：</p>
    </div>
  </div>
  
  <div class="text" style="background-image: url('./assets/bg/q2.jpg');">
    <p><div class = "token"><img src = "./assets/icon/question-circle.svg" alt = "icon">使用须知</div></p>
    <p><div class = "token"><img src = "./assets/icon/terminal.svg" alt = "icon">维护指南</div></p>
    <p><div class = "token"><img src = "./assets/icon/file-earmark.svg" alt = "icon">免责声明</div></p>
    <p><div class = "token"><img src = "./assets/icon/info-circle.svg" alt = "icon">关于</div></p>
  </div>

  <div class="text" style="background-image: url('./assets/bg/q3.jpg');">
    <p><div class = "token"><img src = "./assets/icon/arrow-up-right-square.svg" alt = "icon">网址导航：</div></p>
    <p><a href="http://tzzd.zju.edu.cn/">团在浙大</a></p>
    <p><a href="https://qzonline.zju.edu.cn/hom/uni#/home">场地预约（启真平台）</a></p>
    <p><a href="http://www.youth.zju.edu.cn/sztz/">素拓网</a></p>

    <p>　</p> <!--注意是全角空格-->
    <p>　</p>
    <p>　</p>
  </div>
</div>

<div class = "adaptive-block">
这里是正文部分，之后会加上介绍文案
</div>


??? info "页面说明"

    1. 由于Android原生webView不支持阅览pdf文件，所以目前Android端部分文件可能需要下载查看。pdf图片化正稳步推进。
    2. 目前前端页面不是最终版本，之后会换成夜间不那么晃眼睛，ui更好看，兼容多设备的版本。


<div style = "margin-top: 100px;text-align: right;font-size: 12px;">
    <p>当前版本：0.5.0</p>
</div>


