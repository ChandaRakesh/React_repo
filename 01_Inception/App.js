//Manipulate the HTML DOM using plain javascript
// const heading= document.createElement("h1")
// heading.innerHTML="using plain vanilla javascript"
// const root=document.getElementById("root")// accessing the div with id="root" in the html file
// root.appendChild(heading)// we are appending an element inside the div tag with id="root"


//Manipulate the HTML DOM using REACT

//step 1
const heading=React.createElement("h1",{id:"heading"},"using react")// this is an object once try by printing it

//3 arguments of createElement
//1:"h1":type of html element we are gonna use
//2:this object is the place where we will give attributes like id,styles etc... 
//3:"using react":the thing which we are gonna put in html element

//step2
const root=ReactDOM.createRoot(document.getElementById("root"))

//creating element is core thing of React
//but creating root and rendering something in it this job is taken care by ReactDOM because its 

//step3
root.render(heading)

//nesting ex like we do in html <div><div><h1></h1></div></div>
const parent=React.createElement(
    "div",
    {
        id:"parent",
    },
    React.createElement(
        "div",
        {
            id:"child"
        },
        React.createElement("h1","{}","Hi I'am in an h1 tag of child")//if you want to put multiple children then put an array of childrens
    )
)
root.render(parent)

//if we want more nested it will become a mess

//in react you can only render one element 
//so if we want to render multiple react objects they all are contained in a single object and then rendered
const heading1=React.createElement(
    "h1",
    {
        id:"title",
        style:{
            background:"red",
        },
    },
    "I am h1 heading"
)
const heading2=React.createElement(
    "h2",
    {
        id:"subtitle",
        style:{
            background:"blue"
        }
    }
    ,"I am h2 heading"

)
const container=React.createElement(
    "div",
    {
        id:"container"
    },
    [heading1,heading2]//2 elements contained together
)

//const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(container)