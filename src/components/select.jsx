import '../app/styles/select.css';

export default function Select({ options, value, onChange }) {
    return (
        <select value={value} onChange={onChange} className="border-0 text-xl w-1/5">
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}