import {useState} from "react";

const NameChanger = () => {
    const [name,setName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    return (
        <>
            <h1 className="text-center text-xl">Hello, {name || "Stranger"}</h1>
            <div className="text-center mt-4">
                <input
                    type="text"
                    className="border px-4 py-"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}
export default NameChanger;