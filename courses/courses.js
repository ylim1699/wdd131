const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",

    sections: [
    {
    sectionNum: 1,
    roomNum: "STC 353",
    enrolled: 26,
    days: "TTh",
    instructor: "Bro T",
    },
    {
    sectionNum: 2,
    roomNum: "STC 347",
    enrolled: 28,
    days: "TTh",
    instructor: "Sis A",
    },
    ],

    enrollStudent(sectionNum) {
    if (this.sections === sectionNum) {
        this.sections.enrolled ++;
    }
    },

    dropStudent(sectionNum) {
        if (section === sectionNum)
        {

        }
    } 
    };

function setCourseInfo(aCourse) {
    const name = document.querySelector("#courseName");
    const code = document.querySelector("#courseCode");

    name.textContent = aCourse.name;
    code.textContent = aCourse.code;   
}

function setSectionTemplate(section) {
    return `<tr>
    <th>${section.sectionNum}</th>
    <th>${section.roomNum}</th>
    <th>${section.enrolled}</th>
    <th>${section.days}</th>
    <th>${section.instructor}</th>
    </tr>`
}

function renderSection(section) {
    const html = section.map(setSectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSection(aCourse.sections);

// function setNameNum(aCourse) {
//     const name = document.createElement('h1');
//     const code = document.createElement('h2');

//     name.textContent = aCourse.name;
//     code.textContent = aCourse.code;

//     const header = document.createElement("header");
    
//     header.appendChild(name);
//     header.appendChild(code);

//     document.body.prepend(header);
// }

// setNameNum(aCourse);