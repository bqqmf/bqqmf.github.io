import Dropdown from "./components/Dropdown";

export default function HomeWrapper() {
    const options = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange" }
    ];

    return (
        <div style={{ padding: "50px" }}>
            <Dropdown options={options} placeholder="Select a fruit" />
        </div>
    );
}