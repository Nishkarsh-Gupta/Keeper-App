//importing necessary modules
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

//this is the functoin which will be called by index.js
function App() {
    return (
        <div>
            {/* calling fuction output will showns as html */}
            <Header />
            {/* instead of calling a seperate function to show many notes we are using arrow function with the help of map */}
            {/* here note is acting as an object with properties */}
            {notes.map(note => (
                <Note    
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))}

            <Footer />
        </div>
    );
};

export default App;