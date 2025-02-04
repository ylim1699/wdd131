const button = document.querySelector('.menuButton');

button.addEventListener('click', openMenu);
window.addEventListener('resize', handleResize);
document.querySelector(".gallery").addEventListener("click", viewHandler);

function openMenu() {
    const menuList = document.querySelector('nav');
    menuList.classList.toggle('hide');
}

function handleResize() {
    const windowWidth = window.innerWidth;
    const menuList = document.querySelector('nav');

    if (windowWidth >= 1000) {
        menuList.classList.remove('hide');
    } 
    else {
        menuList.classList.add('hide');
    }
}

function viewHandler(event) {
        let clickedElement = event.target;
        
        if (clickedElement.tagName == "IMG") {
        let pic = clickedElement.src;
        let alt = clickedElement.alt;
        let newPart = pic.replace("-sm","-full");

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newPart, alt));
    
        const button = document.querySelector(".closeButton");
        button.addEventListener('click', closeViewer);   
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="closeButton">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer() {
    let element = document.querySelector(".viewer");
    element.remove();
}





























































































































































































































































































