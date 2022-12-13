import React, { useState } from "react";

export interface IOption
{
    text: string;
    value: number;
}

interface OptionProps
{
    optionText: string;
    optionValue: number;
    onOptionSelection: (option: IOption) => void;
}

export default function Option({
    optionText,
    optionValue,
    onOptionSelection
}: OptionProps)
{
    return (
        <li
            className="app-select-input__option-input"
            onClick={() => { onOptionSelection({ text: optionText, value: optionValue}) }}
        >{optionText}</li>
    );
}