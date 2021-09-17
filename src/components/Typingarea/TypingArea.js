import { React, useEffect, useState, useRef, createRef } from 'react'
import Col from 'react-bootstrap/Col'
import StatsBar from '../Statsbar/StatsBar';
import './TypingArea.css';

export default function TypingArea() {
    // const [randomWords, setRandomWords] = React.useState("");
    // const [keyPressed, setKeyPressed] = React.useState('');

    const [timeData, setTimeData] = useState();
    const [wpmData, setWPMData] = useState();
    const [wordsLoaded, setWordsLoaded] = useState(false);
    const [generatedWordElements, setGeneratedWordElements] = useState([]);
    let i = 0;
    let j = 0;
    let counter = 0;
    let charSum = 0;
    let avgWordLength = 0;

    var generateRandomWords = require('random-words');
    let finalWords = [];


    useEffect(() => {
        generate();
        window.addEventListener('keydown', checkKeyPress)
        timer = setInterval(updateTimer, 1000);


        return () => {
            window.removeEventListener('keydown', checkKeyPress)
            clearInterval();
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
            charSum += word.length;
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

    let timeLeft = 60;
    let timeElapsed = 0;
    let lettersTyped = 0;
    let timer = null;
    let cpm = 0;
    let wpm = 0;
    let errors = 0;
    let totalErrors = 0;
    let accuracy = 0;

    function updateTimeLeft() {
        setTimeData(timeLeft)
    }

    function updateWPM() {
        avgWordLength = charSum / 30;
        wpm = Math.round((((lettersTyped / avgWordLength) / timeElapsed) * 60));
        setWPMData(wpm);
    }


    function updateTimer() {
        updateTimeLeft();
        updateWPM();
        if (timeLeft > 0) {
            timeLeft--;
            timeElapsed++;
        } else {
            finishGame();
        }
    }

    function finishGame() {
        clearInterval(timer);
        avgWordLength = charSum / 30;

        cpm = Math.round(((lettersTyped / timeElapsed) * 60));
        wpm = Math.round((((lettersTyped / avgWordLength) / timeElapsed) * 60));
        console.log("YOURE CPM" + cpm);
        console.log("YOURE WPM" + wpm);
    }


    function checkKeyPress(event) {


        var targetKey = document.getElementById("words-box").querySelectorAll('div#letter')[i].innerHTML;
        var currentLetterNode = document.getElementById("words-box").querySelectorAll('div#letter')[i];
        var previousLetterNode = document.getElementById("words-box").querySelectorAll('div#letter')[i - 1];
        var currentWordNode = document.getElementById("words-box").querySelectorAll('div#word')[j];
        var previousWordNode = document.getElementById("words-box").querySelectorAll('div#word')[j - 1];
        console.log(j + " This is the current word at beginning of keypress")

        if (counter < currentWordNode.childNodes.length && event.key !== "Backspace") {
            if (event.key === targetKey) {
                currentLetterNode.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: green;");
                lettersTyped++;
                i++;
                counter++;
            } else {
                currentLetterNode.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: red;");
                i++;
                counter++;
                errors++;
                lettersTyped++;
            }
            totalErrors += errors;

        }

        if (!(counter < currentWordNode.childNodes.length) && event.keyCode === 32) {
            counter = 0;
            j++;
            console.log("increased word by 1 and counter set to 0: Counter: " + counter + "Word: " + j);

        }

        if (!counter < currentWordNode.childNodes.length && event.key === "Backspace" && i !== 0 && previousLetterNode !== " ") {
            counter--;
            i--;
            console.log("removed 1 from counter and removed 1 from i: Current counter: " + counter + " Current i: " + i);
            previousLetterNode.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: slategray;");

        }

        if (event.key === "Backspace" && j !== 0 && i !== 0) {
            if (previousLetterNode.innerHTML === " ") {
                counter = previousWordNode.childNodes.length - 1;
                j--;
                console.log("set counter to previous word node length and went back 1 word: Current counter: " + counter + " Current word: " + j);
            }

        }






    }







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
        <>
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
            <Col>
                <StatsBar updateTimeLeft={timeData} updateWPM={wpmData} />
            </Col>
        </>
    )
}


