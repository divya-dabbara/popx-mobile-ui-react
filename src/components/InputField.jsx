function InputField({ label, type = 'text', value, onChange, required = false, placeholder = '' }) {
    return (
        <div className="input-group">
            <label>
                {label}
                {required && <span className="required">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputField;
