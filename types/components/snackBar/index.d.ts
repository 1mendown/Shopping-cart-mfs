/// <reference types="react" />
export interface Istate {
    open: boolean;
    message: string;
    handleClose: (data: boolean) => void;
}
export default function PositionedSnackbar({ open, message, handleClose }: Istate): JSX.Element;
