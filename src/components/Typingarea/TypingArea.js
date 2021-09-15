import { React, useEffect, useState, useRef } from 'react'
import Col from 'react-bootstrap/Col'
import './TypingArea.css';

export default function TypingArea() {
    // const [randomWords, setRandomWords] = React.useState("");
    // const [keyPressed, setKeyPressed] = React.useState('');
    const [intervalTime, setIntervalTime] = useState()
    const [isKeyPressed, setKeyPressed] = useState(false)
    const [wordsLoaded, setWordsLoaded] = useState(null);
    const [generatedWordElements, setGeneratedWordElements] = useState([]);
    const currentLetter = useRef(null)

    var generateRandomWords = require('random-words');
    let finalWords = [];



    useEffect(() => {
        generate();
    }, [])

    useEffect(() => {
        if (document.getElementById("letter")) {
            console.log(document.getElementById("letter").insertAdjacentHTML("afterbegin", '|'));
        }

    })

    function clearPrevious() {
        setGeneratedWordElements([]);
        var node = document.getElementById("words-box");
        node.querySelectorAll('*').forEach(n => n.remove())

    }

    function returnNewDivs() {

        generatedWordElements.map((item) => {
            return document.getElementById("words-box").appendChild(item)
        });

    }

    function getFirstLetter() {

        if (wordsLoaded) {
            var node2 = document.getElementById("words-box");
            node2.querySelectorAll('*').forEach(n => console.log(n))
        }
        console.log("Not loaded");
        // loadCursorBlink();
    }


    function generate() {
        clearPrevious();
        generateRandomWords(30).forEach(word => {
            //Create a div element with class "word"
            let wordElement = document.createElement("div");
            wordElement.setAttribute("className", "word");
            wordElement.setAttribute("style", "margin: .35rem;");

            for (let i = 0; i < word.length; i++) {
                let elementToAdd = document.createElement("div");
                elementToAdd.setAttribute("className", "letter");
                elementToAdd.setAttribute("id", "letter");
                elementToAdd.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: slategray;");
                elementToAdd.innerHTML = word[i];
                wordElement.appendChild(elementToAdd);
            }
            finalWords.push(wordElement);
        });

        setGeneratedWordElements([...finalWords]);



    }




    // function checkKeyPress() {
    //     setKeyPressed(this.keyPressed.bind(this));

    // }

    function handleChange() {

    }


    function loadCursorBlink() {
        // const nextTimeOut = setTimeout(() => {
        // let reference = document.getElementById("letter").innerText;
        // reference.innerText += '|';
        // })
        // let reference = document.getElementById("letter");
        // console.log(reference);
        // while (isKeyPressed) {

        // }
        // let reference = document.getElementById(currentLetter.current)

        console.log(currentLetter.current);
    }




    return (
        <Col xs={6}>
            <div className="typingarea-home">
                {/* <textarea
                className="textarea-home"
                disabled={textAreaDisabled}
                value={randomWords}
            /> */}
                <div className="words-div" id="words-box">
                    {returnNewDivs()}
                </div>
            </div>
            <button id="restart-test" onClick={generate}>
                <i className="fas fa-redo fa-lg"></i>
            </button>
        </Col>
    )
}


