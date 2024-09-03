// Beginner IIFE Exercises

// 1. Simple IIFE
(function() {
    const localVariable = "I am local!";
    console.log(localVariable); // Output: I am local!
})();

// 2. Basic Counter with IIFE
const counter = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
})();

counter.increment();
console.log(counter.getCount()); // Output: 1

// 3. Simple Configuration Object with IIFE
const config = (function() {
    const settings = {
        color: 'blue',
        fontSize: '14px'
    };
    return {
        getConfig: function() {
            return settings;
        }
    };
})();

console.log(config.getConfig()); // Output: { color: 'blue', fontSize: '14px' }


// Advanced IIFE Exercises

// 1. Private Variable with IIFE
const myModule2 = (function() {
    let privateVar = 0;
    return {
        getVar: function() {
            return privateVar;
        },
        setVar: function(value) {
            privateVar = value;
        }
    };
})();

console.log(myModule2.getVar()); // Output: 0
myModule2.setVar(42);
console.log(myModule2.getVar()); // Output: 42

// 1. Singleton Pattern with IIFE
const singleton = (function() {
    let instance;
    function createInstance() {
        return { message: "I am the instance" };
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const obj1 = singleton.getInstance();
const obj2 = singleton.getInstance();
console.log(obj1 === obj2); // Output: true

// 2. Module Pattern with IIFE
const myModule = (function() {
    const privateMethod = function() {
        console.log("Private method");
    };
    return {
        publicMethod: function() {
            console.log("Public method");
            privateMethod();
        }
    };
})();

myModule.publicMethod(); // Output: Public method, Private method

// 3. Lazy Initialization with IIFE
const lazyInit = (function() {
    let initialized = false;
    return function() {
        if (!initialized) {
            console.log("Initializing...");
            initialized = true;
        } else {
            console.log("Already initialized");
        }
    };
})();

lazyInit(); // Output: Initializing...
lazyInit(); // Output: Already initialized

// 4. Configuration Module with IIFE
const configModule = (function() {
    const config = {};
    return {
        set: function(key, value) {
            config[key] = value;
        },
        get: function(key) {
            return config[key];
        }
    };
})();

configModule.set('theme', 'dark');
console.log(configModule.get('theme')); // Output: dark


// Beginner Closures Exercises

// 1. Simple Counter with Closure
function createSimpleCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const simpleCounter = createSimpleCounter();
console.log(simpleCounter()); // Output: 1
console.log(simpleCounter()); // Output: 2

// 2. Greeting Generator
function greet(name) {
    return function(greeting) {
        console.log(`${greeting}, ${name}!`);
    };
}

const greetJohn = greet('John');
greetJohn('Hello'); // Output: Hello, John!

// 3. Multiplier Function
function createMultiplier(n) {
    return function(x) {
        return x * n;
    };
}

const int = createMultiplier(2);
console.log(int(5)); // Output: 10


// Advanced Closures Exercises

// 1. Memoization Function
function memoize(fn) {
    const cache = {};
    return function(arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        }
        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}

const slowSquare = (n) => {
    for (let i = 0; i < 1000000000; i++) {} // Simulate slow computation
    return n * n;
};

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5)); // Slow on first call
console.log(fastSquare(5)); // Fast on second call

// 2. Private Counter with Reset
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        reset: function() {
            count = 0;
        }
    };
}

const counterWithReset = createCounter();
console.log(counterWithReset.increment()); // Output: 1
console.log(counterWithReset.increment()); // Output: 2
counterWithReset.reset();
console.log(counterWithReset.increment()); // Output: 1

// 3. Once Function
function once(fn) {
    let called = false;
    let result;
    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
        }
        return result;
    };
}

const logOnce = once((msg) => console.log(msg));
logOnce("Hello!"); // Output: Hello!
logOnce("Hello again!"); // No output

// 4. Curry Function
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6

// 5. Function Composition
function compose(...fns) {
    return function(result) {
        return fns.reduceRight((acc, fn) => fn(acc), result);
    };
}

const add1 = (x) => x + 1;
const double = (x) => x * 2;
const subtract3 = (x) => x - 3;

const composed = compose(subtract3, double, add1);
console.log(composed(5)); // Output: 9


// Beginner Higher-Order Functions Exercises

// 1. Basic Callback Example with Delay
function withDelay(callback, delay) {
    setTimeout(callback, delay);
}

withDelay(() => console.log("This is delayed"), 1000); // Output after 1 second: "This is delayed"

// 2. Simple Array Filter
function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, x => x % 2 === 0);
console.log(evens); // Output: [2, 4]

// 3. Function Timer
function timeFunction(fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(`Function took ${end - start}ms to execute.`);
}

timeFunction(() => {
    for (let i = 0; i < 1000000; i++) {} // Some computation
});

// Advanced Higher-Order Functions Exercises

// 1. Function Debouncing
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

const logDebounced = debounce(() => console.log('Debounced!'), 500);
logDebounced();
logDebounced();
logDebounced(); // Only one "Debounced!" should appear after 500ms

// 2. Throttle Function
function throttle(fn, interval) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn(...args);
        }
    };
}

const logThrottled = throttle(() => console.log('Throttled!'), 500);
logThrottled();
logThrottled(); // Only one "Throttled!" should appear every 500ms

// 3. Custom Map Function
function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const numbersForMap = [1, 2, 3];
const doubled = customMap(numbersForMap, x => x * 2);
console.log(doubled); // Output: [2, 4, 6]

// 4. Compose Functions
function composeFunctions(...fns) {
    return function(arg) {
        return fns.reduceRight((result, fn) => fn(result), arg);
    };
}

const add1Again = x => x + 1;
const doubleAgain = x => x * 2;

const composedAgain = composeFunctions(add1Again, doubleAgain);
console.log(composedAgain(5)); // Output: 11 (double(5) => 10, add1(10) => 11)

// 5. Partial Application
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

const addForPartial = (a, b, c) => a + b + c;
const add5 = partial(addForPartial, 5);

console.log(add5(10, 15)); // Output: 30


// Beginner Recursion Exercises

// 1. Factorial Calculation
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6

// 2. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(7)); // Output: 13

// 3. Sum of Array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15])); // Output: 30


// Advanced Recursion Exercises

// 1. Flatten Nested Arrays
function flatten(arr) {
    return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
}

console.log(flatten([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flatten([[1, 2], [3, [4, [5]]]])); // Output: [1, 2, 3, 4, 5]
