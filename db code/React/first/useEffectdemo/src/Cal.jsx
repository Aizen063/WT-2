import React, { useState } from "react";

const Cal = () => {
    const [display, setDisplay] = useState("");

    const append = (value) => {
        setDisplay(display + value);
    };

    const calculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (e) {
            setDisplay("Error");
        }
    };

    const clear = () => {
        setDisplay("");
    };

    const scientificCalculate = (func) => {
        try {
            setDisplay(func(eval(display)).toString());
        } catch (e) {
            setDisplay("Error");
        }
    };

    return (
        <>
            <style>
                {`
                    #button {
                        height: 50px;
                        width: 100%;
                        font-size: 20px;
                        background-color: #f0f0f0;
                        color: #333;
                        border: 1px solid #ccc;
                        cursor: pointer;
                        margin: 5px;
                        text-align: center;
                        border-radius: 5px;
                        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                        outline: none;
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                    }

                    #button:hover {
                        background-color: #ddd;
                        color: #000;
                    }

                    #display {
                        height: 50px;
                        width: 490px;
                        background-color: #fff;
                        color: #000;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        text-align: right;
                        padding: 10px;
                        font-size: 24px;
                        margin-bottom: 10px;
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                    }

                    .calculator {
                        width: 510px;
                        margin: 50px auto;
                        padding: 20px;
                        border: 1px solid #ccc;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        background-color: #fafafa;
                    }

                    .button-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 10px;
                    }
                `}
            </style>

            <div className="calculator">
                <input type="text" id="display" value={display} readOnly />
                <div className="button-grid">
                    <button id="button" onClick={() => append('7')}>7</button>
                    <button id="button" onClick={() => append('8')}>8</button>
                    <button id="button" onClick={() => append('9')}>9</button>
                    <button id="button" onClick={() => append('*')}>*</button>
                    <button id="button" onClick={() => append('4')}>4</button>
                    <button id="button" onClick={() => append('5')}>5</button>
                    <button id="button" onClick={() => append('6')}>6</button>
                    <button id="button" onClick={() => append('-')}>-</button>
                    <button id="button" onClick={() => append('1')}>1</button>
                    <button id="button" onClick={() => append('2')}>2</button>
                    <button id="button" onClick={() => append('3')}>3</button>
                    <button id="button" onClick={() => append('+')}>+</button>
                    <button id="button" onClick={() => append('0')}>0</button>
                    <button id="button" onClick={() => append('(')}>(</button>
                    <button id="button" onClick={() => append(')')}>)</button>
                    <button id="button" onClick={() => append('/')}>/</button>
                    <button id="button" onClick={() => append('.')}>.</button>
                    <button id="button" onClick={() => append('%')}>%</button>
                    <button id="button" onClick={() => scientificCalculate(Math.sin)}>sin</button>
                    <button id="button" onClick={() => scientificCalculate(Math.cos)}>cos</button>
                    <button id="button" onClick={() => scientificCalculate(Math.tan)}>tan</button>
                    <button id="button" onClick={() => scientificCalculate(Math.log10)}>log</button>
                    <button id="button" onClick={() => scientificCalculate(Math.exp)}>exp</button>
                    <button id="button" onClick={() => scientificCalculate(Math.sqrt)}>sqrt</button>
                    <button id="button" onClick={clear}>clear</button>
                    <button id="button" onClick={calculate}>=</button>
                </div>
            </div>
        </>
    );
};

export default Cal;