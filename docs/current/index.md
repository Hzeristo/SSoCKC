---
hide:
    - navigation
    - toc
---

<link rel="stylesheet" type="text/css" href="../stylesheets/main.css">
<script src = "/javascripts/extra.js"></script>
<script src="https://cdn.staticfile.net/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.net/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

<div class = "main-adaptive-block" style = "backgruond-image: url('/assets/background/qiu.png')"><div class = "text__token"> 活动信息：</div>
    <p><span class = "text__token"> 活动名称：</span><span class = "string__Data" id = "string1"></span></p>
    <p><span class = "text__token"> 活动slogan：</span><span class = "string__Data" id = "string2"></span></p>
    <p><span class = "text__token"> 活动嘉宾：</span><span class = "string__Data" id = "string3"></span></p>
    <p><span class = "text__token"> 活动时间，地点：</span><span class = "string__Data" id = "string4"></span></p>
</div>
<div class = "main-adaptive-block" >
  <div class = "text__token"> 策划案  <button type = "button" class = "button-show" id = "planButton"><img src = "../assets/icon/eye.svg" alt = "icon" id = "pBon"><img src = "../assets/icon/eye-slash.svg" alt = "icon" id = "pBoff" style = "display:none;"></button></div>
  <p><!-- 在这里嵌入在线工作表 --><iframe width = 100% height ="1200px" frameborder="0" id = "plan" style = "display:none;"></iframe></p>
</div>
<div class = "main-adaptive-block" >
  <div class = "text__token"> 分锅表 <button class = "button-show" id = "taskButton"><img src = "../assets/icon/eye.svg" alt = "icon" id = "tBon"><img src = "../assets/icon/eye-slash.svg" alt = "icon" id = "tBoff" style = "display:none;"></button></div>
  <p><!-- 在这里嵌入在线工作表 --><iframe width = 100% height ="1200px" frameborder="0" id = "task" style = "display:none;"></iframe></p>
</div>

<div class = "main-adaptive-block">
  <div class = "text__token"> 相关文件&材料</div>
  <p><a href>这里是链接占位符</a></p>
</div>

<div class = "main-adaptive-block">
  <div class = "text__token"> 工作分统计</div>
</div>

<script> 
    toggleVisibility("plan", "planButton", "pBon", "pBoff");
    toggleVisibility("task", "taskButton", "tBon", "tBoff");
    currentActivityUpdate();
</script>