var infolist = {};
window.addEventListener('load', function() {
    const about = document.getElementById("about");
    const paragraphs = about.querySelectorAll('p');

    // policz całkowitą wysokość wszystkich paragrafów
    let totalHeight = 0;
    paragraphs.forEach(p => {
        totalHeight += p.clientHeight + 35; // uwzględniamy margines
    });
    totalHeight += 0; // padding dodatkowy

    // początkowe ustawienia
    about.style.height = "0px";
    about.style.overflow = "hidden";
    about.style.transition = "height 2s ease"; // smooth transition całej wysokości

    // pokaż paragrafy od razu, ale z opacity 0
    paragraphs.forEach(p => {
        p.style.opacity = "0";
        p.style.transform = "translateX(-20px)";
        p.style.transition = "opacity 2s ease, transform 2s ease";
    });

    // trigger animacji w następnym ticku
    setTimeout(() => {
        about.style.height = totalHeight + "px"; // smooth wysuwanie kontenera
        paragraphs.forEach(p => {
            p.style.opacity = "1";
            p.style.transform = "translateX(0)";
        });
    }, 50);
});
window.addEventListener('load', function() {
    const paragraphs = document.querySelectorAll('#about p');

    function getRandomNeonColor() {
        // jaskrawe kolory RGB (255-100 w każdym kanale)
        const r = Math.floor(Math.random() * 200);
        const g = Math.floor(Math.random() * 200);
        const b = Math.floor(Math.random() * 200);
        return `rgb(${r},${g},${b})`;
    }

    paragraphs.forEach(p => {
        const color = getRandomNeonColor();
        p.style.setProperty('--dot-color', color);
    });
});


function suw(act,pp,inform,th){
        var infs = infolist[inform];
        var index = infs[2];
        var el1 = document.getElementById(pp+index);
        if (act == 2){
            if (index < infs[0]){
                index++;
                document.getElementById("in_"+infs[1]).textContent = index+"/"+infs[0];
                infolist[inform] = [infs[0], infs[1], index];
            }
            else {
                th.style.transform = "rotate(20deg)";
            
                setTimeout(() => {
                    th.style.transform = "rotate(-20deg)";
                }, 100);
            
                setTimeout(() => {
                    th.style.transform = "rotate(20deg)";
                }, 200);
            
                setTimeout(() => {
                    th.style.transform = "rotate(20deg)";
                }, 300);
                setTimeout(() => {
                    th.style.transform = "rotate(0)";
                }, 300);
            }
            var el2 = document.getElementById(pp+index)
            el1.style.transform = "translateX(-200%)"
            el1.className = "additionals_inact"
            el2.className = "additionals_"
            el2.style.transform = "translateX(0)"
        }     
        else{
            if (index > 1){
                index--;
                infolist[inform] = [infs[0], infs[1], index];
                document.getElementById("in_"+infs[1]).textContent = index+"/"+infs[0];
            }
            else {
                th.style.transform = "rotate(5deg)";
            
                setTimeout(() => {
                    th.style.transform = "rotate(-5deg)";
                }, 100);
            
                setTimeout(() => {
                    th.style.transform = "rotate(5deg)";
                }, 200);
            
                setTimeout(() => {
                    th.style.transform = "rotate(-5deg)";
                }, 300);
                setTimeout(() => {
                    th.style.transform = "rotate(0)";
                }, 300);
            }
            
            var el2 = document.getElementById(pp+index)
            el1.style.transform = "translateX(200%)"
            el1.className = "additionals_inact"
            el2.className = "additionals_"
            el2.style.transform = "translateX(0)"
        }
}

const lis = ['projectsai','projectsfulls', 'projectssys', 'projectsit']
document.addEventListener('DOMContentLoaded', function() {
    lis.forEach(function(param, index) {
        var element = document.getElementById(param).querySelectorAll(".additionals_inact").length+1;
        infolist[param] = [element, index, 1];
        document.getElementById("in_"+index).textContent = "1/"+element;
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const text = '';
    let i = 0;
    const element = document.getElementById('text');
    
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Co 100 ms dodaje kolejny znak
        }
    }
    
    typeWriter();
    setTimeout(() => {
        element.style.border = "none"
    }, 5000);
});

function setCookie(name, value) {
    var expires = new Date();
    expires.setFullYear(expires.getFullYear() + 10);
    expires = "; expires=" + expires.toUTCString() 
    document.cookie = name + "=" + (value || "") + expires + "; SameSite=Lax"; 
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return 0;
}
const abot = document.getElementById("about");
const header = document.querySelector("header");
const txt = document.getElementById("text");
const selector_button = document.getElementById("selector-button");
function changeCat(th) {
    const table = ['categor1', 'categor2', 'categor3', 'categor4'];
    table.forEach(function(param) {
        const elements = document.getElementsByClassName(param);
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    });
    // pokazanie wybranej kategorii
    if (th.textContent == "1") {
        document.getElementsByClassName('categor1')[0].style.display = "block";
        abot.style.border = "#ff9100 2px solid";
        header.style.boxShadow = "#ff9100  0px 0px 20px 2px";
        header.style.color = "#ff9100";
        txt.style.color = "#ff9100";
        selector_button.style.borderLeft = "#ff9100 2px solid";
        selector_button.style.borderRight = "#ff9100 2px solid";
    } else if (th.textContent == "2") {
        document.getElementsByClassName('categor2')[0].style.display = "block";
        abot.style.border = "#1cddf7 2px solid";
        header.style.boxShadow = "#1cddf7  0px 0px 20px 2px";
        header.style.color = "#1cddf7";
        txt.style.color = "#1cddf7";
        selector_button.style.borderLeft = "#1cddf7 2px solid";
        selector_button.style.borderRight = "#1cddf7 2px solid";
    } else if (th.textContent == "3") {
        document.getElementsByClassName('categor3')[0].style.display = "block";
        abot.style.border = "#30fa29 2px solid";
        header.style.boxShadow = "#30fa29  0px 0px 20px 2px";
        header.style.color = "#30fa29";
        txt.style.color = "#30fa29";
        selector_button.style.borderLeft = "#30fa29 2px solid";
        selector_button.style.borderRight = "#30fa29 2px solid";
    }
    else if (th.textContent == "4") {
        document.getElementsByClassName('categor4')[0].style.display = "block";
        abot.style.border = "#b800f0 2px solid";
        header.style.boxShadow = "#b800f0  0px 0px 20px 2px";
        header.style.color = "#b800f0";
        txt.style.color = "#b800f0";
        selector_button.style.borderLeft = "#b800f0 2px solid";
        selector_button.style.borderRight = "#b800f0 2px solid";
    }

    // teraz ustawiamy spread w box-shadow
    const buttons = document.querySelectorAll('#selector-button button');

    buttons.forEach(btn => {
        // pobieramy aktualny box-shadow
        const style = getComputedStyle(btn).boxShadow;
        const parts = style.match(/(-?\d+px)/g); // wyciągamy liczby w px
        const color = style.match(/rgba?\(.*?\)|#[0-9a-fA-F]+|\w+/); // wyciągamy kolor

        if (parts && color) {
            // offsetX offsetY blur spread color
            btn.style.boxShadow = `${parts[0]} ${parts[1]} 5px ${color[0]}`;
        }
    });

    // ustawiamy kliknięty przycisk na spread 20px
    const style = getComputedStyle(th).boxShadow;
    const parts = style.match(/(-?\d+px)/g);
    const color = style.match(/rgba?\(.*?\)|#[0-9a-fA-F]+|\w+/);

    if (parts && color) {
        th.style.boxShadow = `${parts[0]} ${parts[1]} 20px ${color[0]}`;
    }
}
