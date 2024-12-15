$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://cdn.jsdelivr.net/gh/rltzhdls/fw3@main/fw3.mp4";
        document.getElementById('vd').load();
    }
	}
});

