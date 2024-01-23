import React from "react";
import "./Input.css";

type TInputTypes = "basicInput" | "flyInput" | "underlined";
type TInputSize = "small" | "medium" | "large";

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: TInputTypes;
    className?: string;
    sizeType?: TInputSize;
    placeholder?: string;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input = ({type = "basicInput", sizeType = "medium", ...props}: TInputProps) => {
    let classNameArr = ["uiXeny-input"];

    switch (type) {
        case "flyInput": {
            classNameArr.push("uiXeny-input--flyInput");
            break;
        }

        case "underlined": {
            classNameArr.push("uiXeny-input--underlined");
            break;
        }

        default: {
            classNameArr.push("uiXeny-input--basicInput");
            break;
        }
    }

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-input--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-input--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-input--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return <input className={classNameArr.join(' ')} {...props}/>;
};

export default Input;
