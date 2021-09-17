import { React, useEffect, useState, useRef, createRef } from 'react'
import Col from 'react-bootstrap/Col'
import './TypingArea.css';

export default function TypingArea() {
    // const [randomWords, setRandomWords] = React.useState("");
    // const [keyPressed, setKeyPressed] = React.useState('');
    const [intervalTime, setIntervalTime] = useState()
    const [keyPressed, setKeyPressed] = useState('')
    const [placeHolder, setPlaceHolder] = useState("")
    const [wordsLoaded, setWordsLoaded] = useState(false);
    const [generatedWordElements, setGeneratedWordElements] = useState([]);
    let test = createRef();
    let i = 0;
    let j = 0;
    let counter = 0;

    var generateRandomWords = require('random-words');
    let finalWords = [];


    useEffect(() => {
        generate();
        window.addEventListener('keydown', checkKeyPress)


        return () => {
            window.removeEventListener('keydown', checkKeyPress)
        }
    }, [])

    useEffect(() => {
        if (document.getElementById("letter")) {
            document.getElementById("words-box").querySelectorAll('div#letter')[0].insertAdjacentHTML("afterbegin", '|');
        }

    }, [])


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
            wordElement.setAttribute("id", "word");
            wordElement.setAttribute("style", "margin: .35rem;");

            for (let i = 0; i < word.length; i++) {

                let elementToAdd = document.createElement("div");
                let spacer = document.createElement("div");
                if (i === word.length - 1) {
                    elementToAdd.setAttribute("className", "letter");
                    elementToAdd.setAttribute("id", "letter");
                    elementToAdd.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: slategray;");
                    elementToAdd.innerHTML = word[i];
                    wordElement.appendChild(elementToAdd);

                    spacer.setAttribute("className", "letter");
                    spacer.setAttribute("id", "letter");
                    spacer.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: slategray;");
                    spacer.innerHTML = " ";
                    wordElement.appendChild(spacer);
                } else {
                    elementToAdd.setAttribute("className", "letter");
                    elementToAdd.setAttribute("id", "letter");
                    elementToAdd.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: slategray;");
                    elementToAdd.innerHTML = word[i];
                    wordElement.appendChild(elementToAdd);
                }
            }
            finalWords.push(wordElement);
        });

        setGeneratedWordElements([...finalWords]);



    }




    function checkKeyPress(event) {
        var targetKey = document.getElementById("words-box").querySelectorAll('div#letter')[i].innerHTML;
        var currentLetterNode = document.getElementById("words-box").querySelectorAll('div#letter')[i];
        var previousLetterNode = document.getElementById("words-box").querySelectorAll('div#letter')[i - 1];
        var currentWordNode = document.getElementById("words-box").querySelectorAll('div#word')[j];
        var previousWordNode = document.getElementById("words-box").querySelectorAll('div#word')[j - 1];



    }

    //     if (counter < currentWordNode.children.length && event.key !== "Backspace") {
    //         if (event.key === targetKey) {
    //             currentLetterNode.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: green;");
    //             i++;
    //             counter++;
    //         } else {
    //             currentLetterNode.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: red;");
    //             i++;
    //             counter++;
    //         }
    //     }

    //     if (!counter < currentWordNode.children.length && event.keyCode === 32) {
    //         counter = 0;
    //         j++;
    //         console.log("hit space");

    //     }


    //     if (counter !== 0 && event.key === "Backspace" && j !== 0) {
    //         if (i !== 0 && targetKey !== currentWordNode.children.item(0).innerHTML) {
    //             console.log("Moving backwards");
    //             previousLetterNode.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: slategray;");
    //             i--;
    //             counter--;
    //         } else {
    //             j--;
    //             counter = previousWordNode.children.length - 1;
    //         }
    //     }

    //     if (i !== 0 && counter === 0 && event.key === "Backspace" && previousWordNode) {
    //         j--;
    //         counter = previousWordNode.children.length - 1;
    //     }

    //     if (j === 0 && event.key === "Backspace" && i <= currentWordNode.children.length && i !== 0) {
    //         console.log("moving backwards");
    //         previousLetterNode.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: slategray;");
    //         i--;
    //         counter--;
    //     }

    //     if (j === 0 && event.key === "Backspace" && i === 0) {
    //         return;
    //     }

    //     console.log(currentWordNode.children.length + " Current word length");
    //     console.log(counter + " Current counter");
    //     console.log(j + " Current word")
    //     console.log(i + " i variable")

    // }




    function handleChange(event) {
        console.log(event)

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

        </Col >
    )
}


