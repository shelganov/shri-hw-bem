// let obj = {
//     'remove': [callback1, callback2, callback3]
// }

class Dispatcher {
    /**
     * Все коллбеки Store
     */
    _container: {
        [eventType: string]: {}[]
    };

    constructor() {
        this._container = {};
    }

    /**
     * Срабатываение коллбеков из Store
     * @param {} action - событие от View
     */
    dispatch(action: { type: string; payload: {}; }): void {
        this._container[action.type].forEach(function (handler) {
            // @ts-ignore
            handler(action.payload);
        })
    }

    /**
     * Регистрация коллбеков
     * @param actionType
     * @param callback
     */
    register (actionType: string, callback: {}): void {
        if (!this._container[actionType])
            this._container[actionType] = [];

        this._container[actionType].push(callback);
    }
}

export default Dispatcher;
