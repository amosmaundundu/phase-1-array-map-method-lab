 const tutorials =[
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];





const titleCased = () => {
  return tutorials
}

  let map1 =tutorials.map((items)=>{

    let words =items.split(" ");
    for(let i=0;i<words.length;i++){
       words[i] = words[i][0].toUpperCase() + words[i].substr(1);
     return words.join(" ");
    }


});{

 map1;
};
