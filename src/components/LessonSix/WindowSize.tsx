import {useEffect, useState} from "react";

const WindowSize =() => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        // SETUP
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize)

        // CLEANUP
        return () => window.removeEventListener("resize", handleResize)

    }, []);


    return (
        <>
            <div className="text-center pt-2">
                <h1 className="text-cf-dark-gray text-2xl mb-4">
                    Windows size: {size.width} x {size.height}
                </h1>
                <p>Resize the window and watch it update!</p>
            </div>
        </>
    )
}
export default WindowSize;