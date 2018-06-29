// JavaScript source code
function getHttpRequest() {
    let httpRequest = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                httpRequest = new ActiveXObject("Msxl2.XMLHTTP");
            } catch (e) {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
    } else {
        alert("Votre navigateur ne peut pas faire d'Ajax");
    }
    return httpRequest;
}