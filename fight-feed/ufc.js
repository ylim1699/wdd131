import { fightInfo } from "./fight-info.mjs";


function ufcTemplate(fightInfo, userInput)
{
    if (userInput === "main") {
        return `
                <div class="ufc-buttons">
                <button class="main-button"><img src="./images/main-button.png" alt="main button"></button>
                <button class="preliminary-button"><img src="./images/pre-button.png" alt="preliminary button"></button>
                </div>

                <div class="boxing-date-main">
                    <h2>${fightInfo.ufcNumber1}</h2>
                    <h3>${fightInfo.ufcDate1}</h3>
                </div>

                <div class="one">
                    <img src="${fightInfo.fighterImage1}" alt="${fightInfo.fighterImageDescription1}">
                    <p class="one-name">${fightInfo.fighterName1}</p>
                    <p class="one-record">${fightInfo.fighterRecord1}</p>
                </div>

                <div class="vs1"><p>VS</p></div>

                <div class="two">
                    <img src="${fightInfo.fighterImage2}" alt="${fightInfo.fighterImageDescription2}">
                    <p class="two-name">${fightInfo.fighterName2}</p>
                    <p class="two-record">${fightInfo.fighterRecord2}</p>
                </div>
                <div class="three">
                    <img src="${fightInfo.fighterImage3}" alt="${fightInfo.fighterImageDescription3}">
                    <p class="two-name">${fightInfo.fighterName3}</p>
                    <p class="two-record">${fightInfo.fighterRecord3}</p>
                </div>

                <div class="vs2"><p>VS</p></div>

                <div class="four">
                    <img src="${fightInfo.fighterImage4}" alt="${fightInfo.fighterImageDescription4}">
                    <p class="two-name">${fightInfo.fighterName4}</p>
                    <p class="two-record">${fightInfo.fighterRecord4}</p>
                </div>
        `
    } 
    else if (userInput === "preliminary") {
        return `
                <div class="ufc-buttons">
                <button class="main-button"><img src="./images/main-button.png" alt="main button"></button>
                <button class="preliminary-button"><img src="./images/pre-button.png" alt="preliminary button"></button>
                </div>

                <div class="boxing-date-main">
                    <h2>${fightInfo.ufcNumber1}</h2>
                    <h3>${fightInfo.ufcDate1}</h3>
                </div>

                <div class="one">
                    <img src="${fightInfo.fighterImage5}" alt="${fightInfo.fighterImageDescription5}">
                    <p class="one-name">${fightInfo.fighterName5}</p>
                    <p class="one-record">${fightInfo.fighterRecord5}</p>
                </div>

                <div class="vs1"><p>VS</p></div>

                <div class="two">
                    <img src="${fightInfo.fighterImage6}" alt="${fightInfo.fighterImageDescription6}">
                    <p class="two-name">${fightInfo.fighterName6}</p>
                    <p class="two-record">${fightInfo.fighterRecord6}</p>
                </div>
                <div class="three">
                    <img src="${fightInfo.fighterImage7}" alt="${fightInfo.fighterImageDescription7}">
                    <p class="two-name">${fightInfo.fighterName7}</p>
                    <p class="two-record">${fightInfo.fighterRecord7}</p>
                </div>

                <div class="vs2"><p>VS</p></div>

                <div class="four">
                    <img src="${fightInfo.fighterImage8}" alt="${fightInfo.fighterImageDescription8}">
                    <p class="two-name">${fightInfo.fighterName8}</p>
                    <p class="two-record">${fightInfo.fighterRecord8}</p>
                </div>
        `
    } 
}

function renderFightInfoUfc(fightInfo, userInput) {
    const outputElementUfc = document.querySelector(".ufc-info");
    
    const ufcHtml = ufcTemplate(fightInfo, userInput);
    outputElementUfc.innerHTML = ufcHtml;
}

renderFightInfoUfc(fightInfo, "main");

document.querySelector(".ufc-info").addEventListener("click", function(event) {
    if (event.target.closest(".main-button")) {
        renderFightInfoUfc(fightInfo, "main");
    }
    if (event.target.closest(".preliminary-button")) {
        renderFightInfoUfc(fightInfo, "preliminary");
    }
});

