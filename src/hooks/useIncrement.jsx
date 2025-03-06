import {useState} from "react";

/**
 *
 * @param {number} base
 * @param {number} max
 * @param {number} min
 * @param {number} step
 * @returns {{count: number, increment: (function(): void), decrement: (function(): void)}}
 */
export function  useIncrement ({base = 0, max = Infinity, min = -Infinity, step = 1}) {
    const [state, setState] = useState(base)

    return {
        count: state,
        increment: () => setState(v => v < max ? v+step : v),
        decrement: () => setState(v => v > min ? v-step : v)
    }

}