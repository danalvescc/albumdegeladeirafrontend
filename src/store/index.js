import { combineReducers, createStore } from "redux";
import carrinhoReducer from "./Carrinho/Carrinho.reducer"


const reducers = combineReducers({
    carrinho: carrinhoReducer
})

export default createStore(reducers)