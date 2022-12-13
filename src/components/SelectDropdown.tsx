import React, { useState } from "react";

interface SelectDropdownProps
{
    selectedOptionText: string;
    children?: React.ReactNode;
}

export default function SelectDropdown({
    selectedOptionText,
    children
}: SelectDropdownProps)
{
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className="app-select-input">
            <button
                className={isActive?
                    "app-select-input__button " +
                    "app-select-input__button--active" :
                    "app-select-input__button"
                }
                onClick={() => { setIsActive(!isActive); }}
            >
                <span className="app-select-input__selected-item-text">
                    {selectedOptionText}
                </span>
                <span
                    className={"app-select-input__select-icon "+
                    "app-select-input__select-icon-temporary-placeholder"
                }
                >{ !isActive ? <>&#9660;</> : <>&#9650;</> }</span>
            </button>
            <ul
                className={isActive?
                    "app-select-input__select-input-list " +
                    "app-select-input__select-input-list--active" :
                    "app-select-input__select-input-list "
                }
            >{children}</ul>
        </div>
    );
}