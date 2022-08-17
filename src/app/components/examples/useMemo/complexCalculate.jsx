import React, { useState, useMemo, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const fact = runFactorial(value);

    const [color, setColor] = useState("green");
    const btn = { color };

    useEffect(() => {
        console.log("render");
    });

    useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>{value}</p>
                <p>Result fact: {fact}</p>
                <button onClick={() => setValue((prevState) => prevState + 1)}>
                    Increment
                </button>
                <button onClick={() => setValue((prevState) => prevState - 1)}>
                    Decrement
                </button>
                <button style={btn} onClick={() => setColor("red")}>
                    {" "}
                    Change my color
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
