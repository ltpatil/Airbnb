import {AsyncLocalStorage} from'node:async_hooks';


type AsyncLocalStorageType = {
    coorealtionID: string;
}

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();
export const getCorrelationID = ()=>{
    const asyncStore = asyncLocalStorage.getStore();
    return asyncStore ?.coorealtionID || 'unknown-error-while-creating-coorealtionID';
}
