import React from "react";
declare type Props<T> = {
    name?: T & string;
    value?: T;
    tailwindStyles?: React.CSSProperties & string;
    rest?: T;
};
declare const Textfield: <T extends object>({ name, tailwindStyles, ...rest }: Props<T>) => JSX.Element;
export default Textfield;
