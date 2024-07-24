import React from "react";
import ReactDOM from "react-dom/client";

//REACT ELEMENT USING CORE REACT
const heading=React.createElement(
    "h1"
    ,{
        id:"heading",
        className:"head"
    },
    "Namaste React using core react"
);//this is so clumpsy so FB developers created JSX

//attributes
//1:type of element
//2:attributes like id,class
//3:children like text or other tags

//React.createElement  ==creates==>  js-object  ==render==>  HTML element
console.log(heading);//to show that react is an object


//REACT ELEMENT USING JSX
//single line
const jsxHeading=<h1 id="heading" className="head">Namaste React using JSX</h1>// JSX is not HTML in js but it is syntax is similar syntax
//multiple line enclose in the braces
const jsxHeading2=(<h1 id="heading" className="head">
    Namaste React using JSX
    </h1>)
//JSX==babel transpilation==>React.createElement  ==creates==>  js-object  ==render==>  HTML element

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//root.render(jsxHeading);

//REACT FUNCTIONAL COMPONENT
const Title=()=>(
    <h1>Namaste React course</h1>
)
const normalComponent= <h1>normal react component</h1>
const num=1000;
const HeadingComponent=()=>{
    return <div>
        {/* //this is component compositon putting one component inside another component */}
        <Title/>{/*functional component included inside functiona component  */}
        <Title></Title>{/*  I can write functional component like this also*/}
        {Title()}{/*Like this also  */}
        {100+200}{/*  using curly braces we can include anything inside JS inside the JSX*/}
        <br></br>
        {num}
        {normalComponent}{/*including normal component here */}
        <h1>Namste React Functional Component</h1>
    </div>
}
//single line functional components
const HeadingComponent2=()=> <h1>Namste React Functional Component</h1>
root.render(<HeadingComponent/>)//the to render functional components

//we can use react element inside functional component

//we can use functional component inside react element

//we can use functional component inside functional component

//we can use react element inside react element



