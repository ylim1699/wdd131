const themeSelector = document.getElementById("themeSelector");
themeSelector.addEventListener('change', changeTheme);


function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('yellow');
        
        const logoSelector = document.querySelector("footer");
        const image = logoSelector.querySelector("img")
        image.setAttribute("src", "images/byui-logo_white.png");
        // or you can do shorter const logoSelector = document.getElementById('logo');
        // logoSelector.innerHTML = '<img class="logo" src="images/byui-logo_white.png" alt="logo of byui">'
    } 
    else if (selectedTheme === 'yellow') {
        document.body.classList.add('yellow');
        document.body.classList.remove('dark');
        
        // resets the logo color to blue
        const logoSelector = document.querySelector("footer");
        const image = logoSelector.querySelector("img")
        image.setAttribute("src", "images/byui-logo_blue.webp");
    }
    else if (selectedTheme === "light") {
        document.body.classList.remove('dark','yellow');

        // resets the logo color to blue
        const logoSelector = document.querySelector("footer");
        const image = logoSelector.querySelector("img")
        image.setAttribute("src", "images/byui-logo_blue.webp");
    }
    else if (selectedTheme === "nothing") {
        
    }
}













import { fightInfo } from "./fight-info.mjs";

function boxingTemplateDazn(fightInfo)
{
        return `
                <div class="boxing-date-main">
                    <h2>${fightInfo.promotionName1}</h2>
                    <h3>${fightInfo.boxingDate1}</h3>
                </div>

                <div class="one">
                    <img src="${fightInfo.fighterImage9}" alt="${fightInfo.fighterImageDescription9}">
                    <p class="one-name">${fightInfo.fighterName9}</p>
                    <p class="one-record">${fightInfo.fighterRecord9}</p>
                </div>

                <div class="vs1"><img src="./images/vs.png" alt="VS sign"></div>

                <div class="two">
                    <img src="${fightInfo.fighterImage10}" alt="${fightInfo.fighterImageDescription10}">
                    <p class="two-name">${fightInfo.fighterName10}</p>
                    <p class="two-record">${fightInfo.fighterRecord10}</p>
                </div>
                <div class="three">
                    <img src="${fightInfo.fighterImage11}" alt="${fightInfo.fighterImageDescription11}">
                    <p class="two-name">${fightInfo.fighterName11}</p>
                    <p class="two-record">${fightInfo.fighterRecord11}</p>
                </div>

                <div class="vs2"><img src="./images/vs.png" alt="VS sign"></div>

                <div class="four">
                    <img src="${fightInfo.fighterImage12}" alt="${fightInfo.fighterImageDescription12}">
                    <p class="two-name">${fightInfo.fighterName12}</p>
                    <p class="two-record">${fightInfo.fighterRecord12}</p>
                </div>
        `
}

function boxingTemplateTopRank(fightInfo)
{
    return `
                <div class="boxing-date-main">
                    <h2>${fightInfo.promotionName2}</h2>
                    <h3>${fightInfo.boxingDate2}</h3>
                </div>

                <div class="one">
                    <img src="${fightInfo.fighterImage13}" alt="${fightInfo.fighterImageDescription13}">
                    <p class="one-name">${fightInfo.fighterName13}</p>
                    <p class="one-record">${fightInfo.fighterRecord13}</p>
                </div>

                <div class="vs1"><img src="./images/vs.png" alt="VS sign"></div>

                <div class="two">
                    <img src="${fightInfo.fighterImage14}" alt="${fightInfo.fighterImageDescription14}">
                    <p class="two-name">${fightInfo.fighterName14}</p>
                    <p class="two-record">${fightInfo.fighterRecord14}</p>
                </div>
                <div class="three">
                    <img src="${fightInfo.fighterImage15}" alt="${fightInfo.fighterImageDescription15}">
                    <p class="two-name">${fightInfo.fighterName15}</p>
                    <p class="two-record">${fightInfo.fighterRecord15}</p>
                </div>

                <div class="vs2"><img src="./images/vs.png" alt="VS sign"></div>

                <div class="four">
                    <img src="${fightInfo.fighterImage16}" alt="${fightInfo.fighterImageDescription16}">
                    <p class="two-name">${fightInfo.fighterName16}</p>
                    <p class="two-record">${fightInfo.fighterRecord16}</p>
                </div>
        `
}

function renderFightInfoDazn(fightInfo) {
    
    const outputElementBoxing = document.querySelector(".boxing-info");
    
    const boxingHtml = boxingTemplateDazn(fightInfo);
    outputElementBoxing.innerHTML = boxingHtml;
}

function renderFightInfoTopRank(fightInfo) {
    
    const outputElementBoxing = document.querySelector(".boxing-info");
    
    const boxingHtml = boxingTemplateTopRank(fightInfo);
    outputElementBoxing.innerHTML = boxingHtml;
}

renderFightInfoDazn(fightInfo)

document.querySelector(".dazn").addEventListener("click", function(event) {event.preventDefault(); renderFightInfoDazn(fightInfo)});
document.querySelector(".topRank").addEventListener("click", function (event) {event.preventDefault(); renderFightInfoTopRank(fightInfo)});



