import Dispatcher from './Dispatcher';
import Store from './Store';

/**
 * Фреймворк
 */
class Framework {
    AppDispatcher: Dispatcher;
    store: {data: {}};

    constructor() {
        this.AppDispatcher = new Dispatcher();
        this.store = {data: {}};
    }

    /**
     * Регистрация коллбеков
     * @param {string} actionType
     * @param {{}} callback
     */
    register(actionType: string, callback: {}): void {
        this.AppDispatcher.register(actionType, callback)
    }

    /**
     * Триггер коллбеков
     * @param action
     */
    dispatch(action: {type: string, payload: {}}): void {
        this.AppDispatcher.dispatch(action)
    }

    /**
     * Создание store
     * @param {{}} state
     * @returns {{}}
     */
    createStore(state: {}): {data: {}} {
        this.store = new Store(state);
        return this.store;
    }
}

export default Framework;