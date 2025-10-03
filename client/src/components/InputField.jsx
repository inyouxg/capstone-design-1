export const InputField = ({label, type, placeholder, id, className, inputClassName, register}) => {
  return (
    <div className={className}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        {...register}
        className={inputClassName} />
    </div>
  )
}
