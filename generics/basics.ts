function useState<T extends string | number>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return {get, set};
}


let newState = useState();
newState.get();
newState.set(123);
newState.set("carlos");