import boxing from "./fight-info.mjs";
import ufc from "./fight-info.mjs";
import ufcInfo from "./fight-info.mjs";
import boxingInfo from "./fight-info.mjs";

function ufcTemplate(ufcInfo, ufc)
{
    return `
            <div class="ufc-date-main">
                <h2>${ufcInfo.ufcDate1}</h2>
                <h3>${ufcInfo.ufcNumber1}</h3>
            </div>

            <form class="ufc-buttons">
                <button class="main-button"><img src="./images/main-button.png" alt="main button"></button>
                <button class="premliminary-button"><img src="./images/pre-button.png" alt="premliminary button"></button>
            </form>

            <div class="one">
                <img src="${ufc.fighterImage1}" alt="${ufc.fighterImageDescription1}">
                <p class="one-name">${ufc.fighterName1}</p>
                <p class="one-record">${ufc.fighterRecord1}</p>
            </div>

            <div class="vs1"><img src="./images/vs.png" alt="VS sign"></div>

            <div class="two">
                <img src="${ufc.fighterImage2}" alt="${ufc.fighterImageDescription2}">
                <p class="two-name">${ufc.fighterName2}</p>
                <p class="two-record">${ufc.fighterRecord2}</p>
            </div>
            <div class="three">
                <img src="${ufc.fighterImage3}" alt="${ufc.fighterImageDescription3}">
                <p class="two-name">${ufc.fighterName3}</p>
                <p class="two-record">${ufc.fighterRecord3}</p>
            </div>

            <div class="vs2"><img src="./images/vs.png" alt="VS sign"></div>

            <div class="four">
                <img src="${ufc.fighterImage4}" alt="${ufc.fighterImageDescription4}">
                <p class="two-name">${ufc.fighterName4}</p>
                <p class="two-record">${ufc.fighterRecord4}</p>
            </div>
    `
}

