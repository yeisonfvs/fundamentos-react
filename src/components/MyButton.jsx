const MyButton = ({ text, handleClick }) => {
  return <button onClick={() => handleClick()}>{text}</button>;
};

export default MyButton;
