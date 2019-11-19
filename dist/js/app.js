function changeTextColor() {
    document.getElementById('title').style.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

setInterval(changeTextColor, 200);