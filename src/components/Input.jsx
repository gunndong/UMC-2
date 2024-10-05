const Input = ({ value, onChange, placeholder }) => {
    return (
      <input
        className="todo-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  };
  
  export default Input;
  