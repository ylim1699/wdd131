const addParticipantButton = document.querySelector("#add");
const participantSection = document.querySelector(".participant1");
const submitButton = document.querySelector("#submitButton");
const summaryElement= document.querySelector("#summary");
const form = document.querySelector("form");
const firstName = document.querySelector("#fname1");
const fee = document.querySelector("#fee");



let participants = 1;

function addParticipant()
{
    participants ++;
    const newParticipants = participantTemplate(participants);
    addParticipantButton.insertAdjacentHTML("beforebegin", newParticipants);
}

function participantTemplate(count) {
    let newparticipantSection = participantSection.outerHTML.replaceAll("1", count);
    return newparticipantSection;
}

function submission(event)
{
    event.preventDefault();

    form.classList.add("hide");
    // element.style.display = "none"; or I could use this on form

    const feeInputs = document.querySelectorAll("[id^=fee]");
    let totalFees = 0;

    feeInputs.forEach(input => {
        const feeValue = parseFloat(input.value) || 0; // If the input is empty or invalid, use 0
        totalFees += feeValue;
    });

    const submissionElement = summaryElement.innerHTML = `Thank you ${firstName.value} for registering. You have ${participants} participants and owe $${totalFees.toFixed(2)} in Fees.`;
    console.log(submissionElement);
}

addParticipantButton.addEventListener('click', addParticipant);
submitButton.addEventListener('click', submission);