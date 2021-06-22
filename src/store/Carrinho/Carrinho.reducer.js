const carrinho = JSON.parse(localStorage.getItem('carrinho'))

const initialValue = {
    carrinho: carrinho ? carrinho : []
}

export default function(state= initialValue, action){
    switch(action.type){
        case 'SET_CARRINHO':
            localStorage.setItem('carrinho', JSON.stringify(action.payload))
            return {
                ...state,
                carrinho: action.payload
            }
        default:
            return state
    }
}