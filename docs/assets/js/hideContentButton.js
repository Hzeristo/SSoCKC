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
