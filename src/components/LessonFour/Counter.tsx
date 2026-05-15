import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increaseCount = () => {
        setCounter(counter + 1);
    }
    const decreaseCount = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }
    const resetCount = () => {
        setCounter(0);
    }
    return (
        <>
            <h1 className="text-center text-xl font-bold">Count is {counter}</h1>
            <div className="text-center space-x-4 pt-12">
                <CounterButton
                    onClick={increaseCount}
                    label="Increase"
                />
                <CounterButton
                    onClick={decreaseCount}
                    label="Decrease"
                    disabled = {counter === 0}
                />
                <CounterButton
                    addClasses="bg-cf-dark-red"
                    onClick={resetCount}
                    label="Reset"
                    disabled = {counter === 0}
                />
                {/*<button*/}
                {/*    className="bg-black text-white py-2 px-4"*/}
                {/*    onClick={increaseCount}>*/}
                {/*    Increase*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className="bg-black disabled:bg-cf-gray text-white py-2 px-4"*/}
                {/*    onClick={decreaseCount}*/}
                {/*    disabled={counter === 0}*/}
                {/*>*/}
                {/*    Decrease*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className="bg-cf-dark-red disabled:bg-cf-gray text-white py-2 px-4"*/}
                {/*    onClick={resetCount}*/}
                {/*    disabled={counter === 0}*/}
                {/*>*/}
                {/*    Reset*/}
                {/*</button>*/}

            </div>

        </>
    )
}
export default Counter;