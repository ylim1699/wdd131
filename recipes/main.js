.searchBar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-bottom: 2%;

    border-bottom: 2px solid lightgray;
}

form input {
    width: 100%;
    border-top-left-radius: 3px;  
    border-bottom-left-radius: 3px; 
    border-top-right-radius: 0; 
    border-bottom-right-radius: 0; 
    padding: 7px;
    border: 1px solid gray;
    font-size: larger;
}

form input::placeholder {
    color: rgb(185, 185, 185);
}

form img {
    width: 32px;
}

button {
    background-color: white;
    border: 1px solid gray;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.recipe-container {
    display: flex;
    border: 1px solid gray;
    width: 97%;
    height: 300px;
    margin-top: 2%;
    border-radius: 5px;
    justify-self: center;
}

.recipe-container img{
    width: auto;
    height: 260px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
}

.recipe-info {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.tag {
    width: 65px;
    height: 30px;
    border: 1px solid black;
    grid-column: 2/2;
    text-align: center;
}

.tag p {
    margin-top: 6px;
}

.recipe-name {
    font-family: "Amatic SC", sans-serif;
    font-weight: 400;
    font-style: normal; 
    font-size: 200%;
    height:  75px;
    color: var(--primary-color);
}