/**
 * @param {bigint} init
 * @return {Object} Counter object with increment, decrement, and reset methods
 */
const createCounter = function (init) {
    let x = init;

    const increment = () => {
        return ++x;
    }

    const reset = () => {
        x = init;
        return x;
    }

    const decrement = () => {
        return --x;
    }

    return {
        increment,
        decrement,
        reset
    };
};

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset());      // Output: 5
console.log(counter.decrement());  // Output: 4
