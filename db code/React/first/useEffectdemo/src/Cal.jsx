import React, { useState } from "react";

const Cal = () => {
    const [display, setDisplay] = useState("");

    const append = (value) => {
        setDisplay(display + value);
    };

    const calculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch {
            setDisplay("Error");
        }
    };

    const clear = () => {
        setDisplay("");
    };

    return (
        <>
            <style>
                {`
                    #button {
                        height: 50px;
                        width: 100%;
                        font-size: 30px;
                        background-color: lightgray;
                        color: black;
                        border: none;
                        cursor: pointer;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        text-align: center;
                        border-radius: 5px;
                        transition: background-color 0.3s ease-in-out;
                        outline: none;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                        box-sizing: border-box;
                        position: relative;
                    }

                    #display {
                        height: 30px;
                        width: 30%;
                        background-color: white;
                        color: black;
                        border: none;
                        border-radius: 5px;
                        text-align: center;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        font-size: 20px;
                        outline: none;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                        box-sizing: border-box;
                        position: relative;
                    }

                    table {
                        width: 30%;
                    }
                `}
            </style>

            <div>
                <input type="text" id="display" value={display} readOnly />
                <table>
                    <tbody>
                        <tr>
                            <td><button id="button" onClick={() => append('7')}>7</button></td>
                            <td><button id="button" onClick={() => append('8')}>8</button></td>
                            <td><button id="button" onClick={() => append('9')}>9</button></td>
                            <td><button id="button" onClick={() => append('*')}>*</button></td>
                        </tr>
                        <tr>
                            <td><button id="button" onClick={() => append('4')}>4</button></td>
                            <td><button id="button" onClick={() => append('5')}>5</button></td>
                            <td><button id="button" onClick={() => append('6')}>6</button></td>
                            <td><button id="button" onClick={() => append('-')}>-</button></td>
                        </tr>
                        <tr>
                            <td><button id="button" onClick={() => append('1')}>1</button></td>
                            <td><button id="button" onClick={() => append('2')}>2</button></td>
                            <td><button id="button" onClick={() => append('3')}>3</button></td>
                            <td><button id="button" onClick={() => append('+')}>+</button></td>
                        </tr>
                        <tr>
                            <td><button id="button" onClick={() => append('0')}>0</button></td>
                            <td><button id="button" onClick={calculate}>=</button></td>
                            <td><button id="button" onClick={() => append('/')}>/</button></td>
                            <td><button id="button" onClick={clear}>clear</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Cal;