function InputWithLabel({ name, label, type, value, onInputChange }) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onInputChange}
        className="peer h-10 w-full border-b-2 border-gray-300 text-white placeholder-transparent focus:outline-none bg-transparent"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

export default InputWithLabel;
