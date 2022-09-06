export interface ToastContextState{
    toast:string;
    handleToast: (nameTheme: string) => void;
}
export interface MyContextProp {
    children:JSX.Element
}