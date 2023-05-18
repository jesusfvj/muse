function checkTokenExpired(data) {
    if (data.msg === "Token expired") {
        window.localStorage.removeItem('token');
        window.location.href = '/';
    } else {
        return null;
    }
}

export {
    checkTokenExpired
}