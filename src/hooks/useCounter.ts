import {useState} from "react";
import type {CounterState} from "../types.ts"



const initialState = {
    count: 0,
    lastAction: "",
    time: "",
}

export const useCounter = () => {
    const [state, setState] = useState<CounterState>(initialState);
    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increase = () => {
        setState({
            count: state.count + 1,
            lastAction: "Increase",
            time: getCurrentTime(),
        });
    }

    const decrease = () => {
            if (state.count > 0) {
                setState({
                    count: state.count - 1,
                    lastAction: "Decrease",
                    time: getCurrentTime(),
                });
            }
    }

    const reset = () => {
        setState({
            count: 0,
            lastAction: "Reset",
            time: getCurrentTime(),
        });
    }

    return {
        count: state.count,
        lastAction: state.lastAction,
        time: state.time,
        increase,
        decrease,
        reset
    }
}