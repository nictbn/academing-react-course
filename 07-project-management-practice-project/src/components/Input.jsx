export default function Input({ label, isTextarea, name, ...props }) {
    return (
        <p>
            <label htmlFor={name}>{label}</label>
            {isTextarea ? <textarea name={name} {...props}/> : <input name={name} type="text" {...props}/>}
        </p>
    )
}