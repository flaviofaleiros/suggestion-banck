import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function TextArea({ name, label, ...rest }) {
    const inputRef = useRef(null);

    const { fieldName, defaultValue = "", registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);
    return (
        <>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <textarea
                ref={inputRef}
                id={fieldName}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && <span style={{ color: "#ff0000" }}>{error}</span>}
        </>
    );
}
