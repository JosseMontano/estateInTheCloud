type Input = HTMLInputElement;
type TextArea = HTMLTextAreaElement;
type Select = HTMLSelectElement;

export default interface Event {
  file: React.ChangeEvent<HTMLInputElement>;
  inputChange: React.ChangeEvent<Input | TextArea | Select>;
}
