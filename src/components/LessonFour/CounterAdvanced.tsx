import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

type CounterState = {
    counter: number
    lastAction: string
    time: string
}

const initialState = {
    counter: 0,
    lastAction: "",
    time: "",
}

const CounterAdvanced = () => {
    const [state, setState] = useState<CounterState>(initialState);

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increaseCount = () => {
        setState({
            counter: state.counter + 1,
            lastAction: "Increase",
            time: getCurrentTime(),
        })
    }

    const decreaseCount = () => {
        if (state.counter > 0) {
            setState({
                counter: state.counter - 1,
                lastAction: "Decrease",
                time: getCurrentTime(),
            })
        }
    }

    const resetCount = () => {
        setState({
            counter: 0,
            lastAction: "Reset",
            time: getCurrentTime(),
        })
    }

    return (
        <>
            <h1 className="text-center text-xl font-bold"
            >Count is {state.counter}</h1>
            <div className="text-center space-x-4 pt-12">
                <CounterButton
                    onClick={increaseCount}
                    label="Increase"
                />
                <CounterButton
                    onClick={decreaseCount}
                    label="Decrease"
                    disabled={state.counter === 0}
                />
                <CounterButton
                    addClasses="bg-cf-dark-red"
                    onClick={resetCount}
                    label="Reset"
                    disabled={state.counter === 0}
                />
            </div>
            {
                state.lastAction && (
                    <p className="text-center pt-8">
                        Last Change: <strong>{state.lastAction }</strong> at{" "}
                        <strong>{state.time}</strong>
                    </p>
                )
            }
        </>
    )
}
export default CounterAdvanced;