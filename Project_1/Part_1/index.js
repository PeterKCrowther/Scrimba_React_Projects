import React from "react";
import ReactDOM from "react-dom";

var myPage = (
    <div className="myContainer">
        <img src="./react-logo.png" alt="React Logo" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordon Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is Maintained by Faceboo</li>
            <li>Powers thousands of enterprise apps including mobile apps</li>                        
        </ul>   
    </div> 
);

var myRoot = document.getElementById("root");

ReactDOM.render(myPage, myRoot);

function MyReactComponent() {
    return (
        <ol>
            <li>New Job</li>
            <li>Lots of Cash</li>
            <li>Bentley Conti GT</li>
            <li>Times Two</li>
        </ol>
    );    
}

//var myRoot = document.getElementById("root");

ReactDom.render(<MyReactComponent />, myRoot); 



// ReactDOM.render(<h1>Hello, everyone.</h1>, document.getElementById("root"));

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);

// root.render(
//     <ul className="my-listcon">
//         <li>Item 1</li>
//         <li>Item 2</li>
//     </ul>
// );

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);



// const myNav = (
//   <nav>
//     <h1>Heading for Nav</h1>
//     <ul className="peteNav">
//         <li>List Item 1</li>
//         <li>List Item 2</li>
//         <li>List Item 3</li>
//     </ul>
//   </nav>  
// );

// //root.render(myNav);

// ReactDOM.render(myNav, document.getElementById("root"));


import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <>
            <header>
                <nav>
                    <img src="./react-logo.png" alt="React Logo" width="40px" />
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <p>&copy; 2022 PKC development. All rights reserved.</p>
            </footer>
        </>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

