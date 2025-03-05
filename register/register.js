const addParticipantButton = document.querySelector("#add");
const participantSection = document.querySelector(".participant1");

let participants = 1;


function addParticipant()
{
    participants ++;
    participantTemplate(participants);
}

function participantTemplate(count) {
    participantSection.outerHTML = participantSection.outerHTML.replace("1", count);
}

addParticipantButton.addEventListener('click', addParticipant);