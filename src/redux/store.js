import { createStore, action } from "easy-peasy";

const storeModel = {
    result: 0,
    items: [],
    operations: [],
    currentNumber: 0,
    shouldClearCurrentNumber: false,

    clear: action((state, payload) => {
        state.items = [];
        state.operations = [];
        state.currentNumber = 0;
        state.result = 0;
    }),

    addDigit: action((state, payload) => {
        if(state.shouldClearCurrentNumber){
            state.currentNumber = 0;
            state.shouldClearCurrentNumber = false;
        }
        let digits = String(state.currentNumber);
        digits += String(payload);
        state.currentNumber = Number(digits);
    }),

    addOperation: action((state, payload) => {
        state.items.push(state.currentNumber);
        state.shouldClearCurrentNumber = true;
        state.operations.push(payload);
    }),

    calculate: action((state, payload) => {
        state.items.push(state.currentNumber);
        const { items, operations } = state;
        while (items.length >= 2 || operations.length >= 1) {
            let operation;
            switch (operations.pop()) {
                case "+":
                    operation = (x, y) => x + y;
                    break;
                case "-":
                    operation = (x, y) => y - x;
                    break;
                case "*":
                    operation = (x, y) => x * y;
                    break;
                case "/":
                    operation = (x, y) => y / x;
                    break;
                default:
                    state.result = "unknown operation";
                    state.items = [];
                    state.operations = [];
                    break;
            }

            if (operation)
                items.push(operation(items.pop(), items.pop()));
        }

        state.result = items.pop();
        state.currentNumber = state.result;
    })
}

const store = createStore(storeModel);

export default store;