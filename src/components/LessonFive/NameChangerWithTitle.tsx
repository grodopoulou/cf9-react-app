import {useEffect, useState} from "react";

const NameChangerWithTitle = () => {
    const [name, setName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    useEffect(() => {
        document.title = name ? `Hello ${name}!` : "Hello, Stranger!";
        document.title = `Hello, ${name || "Stranger"}`;
        document.title = "Hello, " + name || "Stranger";
    }, [name])


    return (
        <>
            <h1 className="text-center text-xl">Hello, {name || "Stranger"}</h1>
            <div className="text-center mt-4">
                <input
                    type="text"
                    className="border px-4 py-2"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}
export default NameChangerWithTitle;