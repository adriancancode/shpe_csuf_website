export default function Select({ options, value, onChange }) {
    return (
        <select value={value} onChange={onChange} className="select-board">
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}