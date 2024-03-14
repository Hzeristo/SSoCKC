---
hide:
    - navigation
    - toc
---

<link rel="stylesheet" type="text/css" href="../stylesheets/main.css">
<div class = "main-adaptive-block" style = "backgruond-image: url('/assets/background/qiu.png')"><div class = "text__token"> 活动信息：</div>
    <p><div class = "text__token"> 活动名称：</div><div class = "string__Data" id = "string1"></div></p>
    <p><div class = "text__token"> 活动slogan：</div><div class = "string__Data" id = "string2"></div></p>
    <p><div class = "text__token"> 活动嘉宾：</div><div class = "string__Data" id = "string3"></div></p>
    <p><div class = "text__token"> 活动时间，地点：</div><div class = "string__Data" id = "string4"></div></p>
</div>
<div class = "main-adaptive-block" >
    <div class = "text__token"> 策划案 <button class = "button-show" id = "planButton"><img src = "/assets/icon/eye.svg" alt = "icon" id = "pBon"><img src = "/assets/icon/eye-slash.svg" alt = "icon" id = "pBoff" style = "display:none;"></button></div>
    <script src = "/assets/js/hideContentButton.js"></script>
    <script>
        toggleVisibility("plan", "planButton", "pBon", "pBoff");
    </script>
    <p><!-- 在这里嵌入在线工作表 --><iframe src="https://www.kdocs.cn/l/ciDycMTdcc6l?from=docs" width = 100% height ="1200px" frameborder="0" id = "plan" style = "display:none;"></iframe></p>
</div>
<div class = "main-adaptive-block" >
    <div class = "text__token"> 分锅表 <button class = "button-show" id = "taskButton"><img src = "/assets/icon/eye.svg" alt = "icon" id = "tBon"><img src = "/assets/icon/eye-slash.svg" alt = "icon" id = "tBoff" style = "display:none;"></button></div>
    <script>
        toggleVisibility("task", "taskButton", "tBon", "tBoff");
    </script>
    <p><!-- 在这里嵌入在线工作表 --><iframe src="https://www.kdocs.cn/l/ciDycMTdcc6l?from=docs" width = 100% height ="1200px" frameborder="0" id = "task" style = "display:none;"></iframe></p>
</div>

<div class = "main-adaptive-block">
    <div class = "text__token"> 相关文件&材料</div>
    <p><a href>这里是链接占位符</a></p>
</div>

<div class = "main-adaptive-block">
    <div class = "text__token"> 工作分统计</div>
</div>

<script>  
    fetch('/currentState.json')
        .then(response => response.json())
        .then(jsonData => {
            const currentActivity = jsonData.current_activity;
            const debugText = jsonData.debug;
            document.getElementById('string1').textContent = currentActivity.name;
            document.getElementById('string2').textContent = currentActivity.slogan;
            document.getElementById('string3').textContent = currentActivity.people;
            document.getElementById('string4').textContent = currentActivity.time + "，" + currentActivity.location;
            })
        .catch(error => console.error('Error fetching JSON file:', error));
</script>