import React, { useState } from "react";
import SelectDropdown from "./components/SelectDropdown";
import Option, { IOption } from "./components/Option";

const initialOption: IOption =
{
    text: "-- select item --",
    value: 0
}

export default function Main()
{
    const [selectedOption, setSelectedOption] = useState<IOption>(initialOption);

    const handleOptionSelection = (option: IOption) =>
    {
        // console.log(option);
        setSelectedOption(option);
    }

    return (
        <div
            className="main-container"
        >
            <SelectDropdown
                selectedOptionText={selectedOption.text}
            >
                <Option
                    optionText={initialOption.text}
                    optionValue={0}
                    onOptionSelection={handleOptionSelection}
                />
                <Option
                    optionText="Item 1"
                    optionValue={1}
                    onOptionSelection={handleOptionSelection}
                />
                <Option
                    optionText="Item 2"
                    optionValue={2}
                    onOptionSelection={handleOptionSelection}
                />
            </SelectDropdown>
        </div>
    );
}