import React from 'react'
import Col from 'react-bootstrap/Col'
import './TypingArea.css';

export default function TypingArea() {
    const [randomWords, setRandomWords] = React.useState("");
    const [keyPressed, setKeyPressed] = React.useState('');
    const [textAreaDisabled, setTextAreaDisabled] = React.useState(true);
    const [generatedWordElements, setGeneratedWordElements] = React.useState([]);

    const strings = ["test", "wow", "help", "omg", "what", "then", "them", "if", "pizza", "store", "math", "science", "history", "gaming"];
    let generatedWords = [];
    let finalWords = [];


    React.useEffect(() => generateRandomWord(), []);

    function clearPrevious() {
        setGeneratedWordElements([]);
        var node = document.getElementById("words-box");
        node.querySelectorAll('*').forEach(n => n.remove())

    }


    function generateRandomWord() {
        clearPrevious();
        for (let i = 0; i < strings.length; i++) {
            generatedWords.push(strings[Math.floor(Math.random() * (strings.length))])
        }
        //Generated the random words into generatedWords array
        //Take each word, create div for each letter
        generateLetterDivs();

    }


    function returnNewDivs() {
        generatedWordElements.map((item) => (
            document.getElementById("words-box").appendChild(item)
        ))

    }



    function generateLetterDivs() {
        generatedWords.forEach(word => {
            //Create a div element with class "word"
            let wordElement = document.createElement("div");
            wordElement.setAttribute("className", "word");
            wordElement.setAttribute("style", "margin: .35rem;");

            for (let i = 0; i < word.length; i++) {
                let elementToAdd = document.createElement("div");
                elementToAdd.setAttribute("className", "letter");
                elementToAdd.setAttribute("style", "display: inline-block; line-height: 1.5rem; font-size: 1.5rem; color: slategray;");
                elementToAdd.innerHTML = word[i];
                wordElement.appendChild(elementToAdd);
            }
            finalWords.push(wordElement);
        });
        setGeneratedWordElements([...finalWords]);
    }



    function checkKeyPress() {
        setKeyPressed(this.keyPressed.bind(this));

    }

    function handleChange() {

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
            <button id="restart-test" onClick={generateRandomWord}>
                <i class="fas fa-redo fa-lg"></i>
            </button>
        </Col>
    )
}


