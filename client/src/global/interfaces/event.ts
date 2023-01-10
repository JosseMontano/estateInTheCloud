type Input = HTMLInputElement;
type TextArea = HTMLTextAreaElement;
type Select = HTMLSelectElement;

export default interface Event {
  file: React.ChangeEvent<HTMLInputElement>;
  inputChange: React.ChangeEvent<Input | TextArea | Select>;
  inputChangeIT: React.ChangeEvent<Input | TextArea>;
  buttonOnclick: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  buttonSend : React.FormEvent<HTMLFormElement>;
  htmlChange : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
}
