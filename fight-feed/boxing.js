import { fightInfo } from "./fight-info.mjs";

function boxingTemplate(fightInfo, userInput)
{
    
    if (userInput === "dazn") {
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

                <div class="vs1"><p>VS</p> </div>

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

                <div class="vs2"><p>VS</p></div>

                <div class="four">
                    <img src="${fightInfo.fighterImage12}" alt="${fightInfo.fighterImageDescription12}">
                    <p class="two-name">${fightInfo.fighterName12}</p>
                    <p class="two-record">${fightInfo.fighterRecord12}</p>
                </div>
        `
    } 
    else if (userInput === "topRank") {
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

                <div class="vs1"><p>VS</p></div>

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

                <div class="vs2"><p>VS</p></div>

                <div class="four">
                    <img src="${fightInfo.fighterImage16}" alt="${fightInfo.fighterImageDescription16}">
                    <p class="two-name">${fightInfo.fighterName16}</p>
                    <p class="two-record">${fightInfo.fighterRecord16}</p>
                </div>
        `
    } 
}

function renderFightInfoBoxing(fightInfo, userInput) {
    const outputElementBoxing = document.querySelector(".boxing-info");
    
    const boxingHtml = boxingTemplate(fightInfo, userInput);
    outputElementBoxing.innerHTML = boxingHtml;
}

renderFightInfoBoxing(fightInfo, "dazn");

document.querySelector(".logo-mainB").addEventListener("click", function(event) {
    if (event.target.closest(".dazn")) {
        renderFightInfoBoxing(fightInfo, "dazn");
    }
    if (event.target.closest(".topRank")) {
        renderFightInfoBoxing(fightInfo, "topRank");
    }
});

