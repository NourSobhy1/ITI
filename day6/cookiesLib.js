function setCookie(cookieName, cookieValue, expiryDate) {
    if (expiryDate) {
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiryDate;
    } else {
        document.cookie = cookieName + "=" + cookieValue;
    }
}

function getCookie(cookieName) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        if (parts[0] === cookieName) {
            return parts[1];
        }
    }
    return null;
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function allCookieList() {
    var cookies = document.cookie.split("; ");
    var cookieObj = {};
    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        cookieObj[parts[0]] = parts[1];
    }
    return cookieObj;
}

function hasCookie(cookieName) {
    return getCookie(cookieName) !== null;
}