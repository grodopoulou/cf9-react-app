
import CounterButton from "../LessonFour/CounterButton.tsx";
import {useCounter} from "../../hooks/useCounter.ts";



const CounterWithCustomHook = () => {
    const {count, lastAction, time, increase, decrease, reset} = useCounter();

    return (
        <>
            <h1 className="text-center text-xl font-bold"
            >Count is {count}</h1>
            <div className="text-center space-x-4 pt-12">
                <CounterButton
                    onClick={increase}
                    label="Increase"
                />
                <CounterButton
                    onClick={decrease}
                    label="Decrease"
                    disabled={count === 0}
                />
                <CounterButton
                    addClasses="bg-cf-dark-red"
                    onClick={reset}
                    label="Reset"
                    disabled={count === 0}
                />
            </div>
            {
                lastAction && (
                    <p className="text-center pt-8">
                        Last Change: <strong>{lastAction }</strong> at{" "}
                        <strong>{time}</strong>
                    </p>
                )
            }
        </>
    )
}
export default CounterWithCustomHook;