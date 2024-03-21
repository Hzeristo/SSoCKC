function toggleVisibility(contentId, ButtonId, eyeButtonId, eyeSlashButtonId) {
    var isContentVisible = false;
    var toggleButton = document.getElementById(ButtonId);
    toggleButton.addEventListener("click", function() {
        var hiddenContent = document.getElementById(contentId);
        var eyeButton = document.getElementById(eyeButtonId);
        var eyeSlashButton = document.getElementById(eyeSlashButtonId);
        if (isContentVisible) {
            hiddenContent.style.display = "none";
            eyeButton.style.display = "block";
            eyeSlashButton.style.display = "none";
        } else {
            hiddenContent.style.display = "block";
            eyeButton.style.display = "none";
            eyeSlashButton.style.display = "block";
        }
    isContentVisible = !isContentVisible;
    });
}

function editModal(ButtonId, ModalId) {
    const openModalBtn = document.getElementById(ButtonId);
    const modal = document.getElementById(ModalId);
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function versionUpdate() {
    fetch('https://hzeristo.github.io/SSoCKC/info.html')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
    })
    .then(htmlContent => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlContent, 'text/html');
    const versionDiv = htmlDocument.getElementById('version');
    if (versionDiv) {
        document.getElementById('index_version').textContent = "当前版本：" + versionDiv.textContent;
    } else {
        console.error('Target div not found.');
    }
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
}

function currentActivityUpdate()
{
    fetch('https://hzeristo.github.io/SSoCKC/info.html')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
    })
    .then(htmlContent => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlContent, 'text/html');
    const name = htmlDocument.getElementById('activity_current_name');
    const slogan = htmlDocument.getElementById('activity_current_slogan');
    const guest = htmlDocument.getElementById('activity_current_guest');
    const time = htmlDocument.getElementById('activity_current_time');
    const location = htmlDocument.getElementById('activity_current_location');
    const plan = htmlDocument.getElementById('activity_current_plan');
    const schedule = htmlDocument.getElementById('activity_current_schedule');
    if (name && time && slogan && guest && location) {
        document.getElementById('string1').textContent = name.textContent
        document.getElementById('string2').textContent = slogan.textContent;
        document.getElementById('string3').textContent = guest.textContent;
        document.getElementById('string4').textContent = time.textContent + "，" + location.textContent;
        var planDiv = document.getElementById('plan');
        var taskDiv = document.getElementById('task');
        if(planDiv && taskDiv){
            planDiv.setAttribute('src', plan.textContent);
            taskDiv.setAttribute('src', schedule.textContent);
        }
    } else {
        console.error('Target div not found.');
    }
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
}