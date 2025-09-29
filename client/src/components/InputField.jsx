export const InputField = ({label, type, placeholder, id, className, inputClassName}) => {
  return (
    <div className={className}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={inputClassName} />
    </div>
  )
}
