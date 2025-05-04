const doParticles = true;




// Do not mess with the rest of this file unless you know what you're doing

const getWidth = () => { // credit to travis on stack overflow
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

if (doParticles) {
    if (getWidth() < 400) $.firefly({
        minPixel: 1,
        maxPixel: 2,
        total: 20
    });
    else $.firefly({
        minPixel: 1,
        maxPixel: 3,
        total: 40
    });
}

// This is for the click to copy
let t;
$(document).ready(() => {
    t = $(".ip").html();
});

$(document).on("click", ".ip", () => {
    let copy = document.createElement("textarea");
    copy.style.position = "absolute";
    copy.style.left = "-99999px";
    copy.style.top = "0";
    copy.setAttribute("id", "ta");
    document.body.appendChild(copy);
    copy.textContent = t;
    copy.select();
    document.execCommand("copy");
    $(".ip").html("<span class='extrapad'>IP copied!</span>");
    setTimeout(() => {
        $(".ip").html(t);
        var copy = document.getElementById("ta");
        copy.parentNode.removeChild(copy);
    }, 800);
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const infoButton = document.getElementById('info');

    if (!popupOverlay || !popup || !closePopup || !infoButton) return;

    function openPopup() {
        popupOverlay.style.display = 'block';
    }

    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }

    infoButton.addEventListener('click', openPopup);
    closePopup.addEventListener('click', closePopupFunc);
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });
});
