document.addEventListener("DOMContentLoaded", function () {

    const darkBtn = document.getElementById("dark");
    const lightBtn = document.getElementById("light");
    const defaultBtn = document.getElementById("default");

    const darkSheet = document.getElementById("darkmode");

    darkBtn.addEventListener("click", function(e) {
        e.preventDefault();
        darkSheet.disabled = false;
    });

    lightBtn.addEventListener("click", function(e) {
        e.preventDefault();
        darkSheet.disabled = true;
    });

    defaultBtn.addEventListener("click", function(e) {
        e.preventDefault();
        darkSheet.disabled = true;
    });

});