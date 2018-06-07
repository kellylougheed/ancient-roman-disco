window.onload = function() {
    const text = document.querySelector("#text");
    const temple = document.querySelector("#temple");
    const light = document.querySelector("#light");
    const mainLight = document.querySelector("#defaultLight2");
    
    const dancer1 = document.querySelector("#dancer1");
    const dancer2 = document.querySelector("#dancer2");
    const disco = new Audio('dance.m4a');
    
    var textColorChange = setInterval(animateTextColor, 10);
    
    temple.addEventListener('click', e => {
        text.setAttribute("visible", "false");
        clearInterval(textColorChange);
        document.querySelector("#defaultLight1").setAttribute("visible", "false");
        mainLight.setAttribute("visible", "false");
        document.querySelector("a-cursor").setAttribute("color", "#ddd");
        disco.play();
        setInterval(function() {
            disco.play();
        }, 1000);
        setTimeout(function() {
            light.setAttribute("visible", "true");
            setInterval(animateLightColor, 10);
            mainLight.setAttribute("visible", "true");
            mainLight.setAttribute("light", "type: directional; color: #FFF; intensity: 0.2");
        }, 2000);
        setInterval(dance, 1000);
    });
    
    var h = 0;
    var hChange = 1;
    
    function animateTextColor() {
        animateColor(text);
    }
    
    function animateLightColor() {
        animateColor(light);
    }
    
    function animateColor(element) {
        h += hChange;
        if (h >= 255 || h <= 0) {
            hChange *= -1;
        }
        element.setAttribute("color", `hsl(${h}, 100%, 50%)`);
    }
    
    function dance() {
        var d1x = Math.random() * -4 - 1;
        var d1z = Math.random() * -5 - 4;
        var d2x = Math.random() * 4 + 1;
        var d2z = Math.random() * -5 - 4;
        var d2y = 1;
        if (d2z <= -6) {
            d2y = 2;
        }
        dancer1.setAttribute("position", `${d1x} 1 ${d1z}`);
        dancer2.setAttribute("position", `${d2x} ${d2y} ${d2z}`);
    }
    
}