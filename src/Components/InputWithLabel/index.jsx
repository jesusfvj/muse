export const InputWithLabel = ({ name, label, type, value, defaultValue, onInputChange, sizeContainer, styles, readonly = false }) => {
  return (
    <div className={`relative ${sizeContainer}`}>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onInputChange}
        className={`peer h-10 w-full border-b-1 border-gray-300 text-white placeholder-transparent bg-transparent ${styles}`}
        placeholder=" "
        readOnly={readonly}
      />
      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};