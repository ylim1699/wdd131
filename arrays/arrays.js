const steps = ["one", "two", "three"];
const listTemplate = (step) => `<li>${step}</li>`;//the html string made from step

const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

// activity 2
const exampleArray = ['A','B','A'];

const gpaConverter = (exampleArray) => {
  if (exampleArray === 'A')
  {
    return 4;
  } else if (exampleArray === 'B') {
    return 3;
  }
}

const gpaValue = exampleArray.map(gpaConverter);
console.log(gpaValue);

// activity 3
const initialValue = 0;
const sumWithInitial = gpaValue.reduce(
(a, b) => a + b /3, initialValue);

console.log(sumWithInitial);



