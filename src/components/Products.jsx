import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api_albumdegeladeira from '../services/api_albumdegeladeira'
import { setCarrinho } from '../store/Carrinho/Carrinho.action'
import styles from '../styles/components/Products.module.css'
import Product from './Product'

function Products(){
    const dispatch = useDispatch()
    const {carrinho} = useSelector(state=> state.carrinho)
    
    const [arrProducts, setArrProducts] = useState([])

    function fetchProducts(){
        api_albumdegeladeira.get('products').then(response=> {
            setArrProducts(response.data.data)
        }).catch(err=> console.error(err))
    }

    function addCarrinho(id){
        let productCarrinho = carrinho.find(i=> i.id === id)
        let product = arrProducts.find(i=> i.id === id)

        if(productCarrinho)
            var arr = [...carrinho.filter(e => e.id !== id), {...productCarrinho, quant: productCarrinho.quant + 1}]
        else
            var arr = [...carrinho, {...product, quant: 1 }]

        dispatch(setCarrinho(arr))
    }

    function renderProducts(){
        return arrProducts.map(product => (
            <Product 
                title={product.name}
                price={product.price
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '')}
                onAdd={addCarrinho}
                id={product.id}
            />
        ))
    }

    useEffect(() =>{
        fetchProducts()
    },[])


    return (
        <div className={styles.container}>
            <header>
                <h2>Produtos</h2>
            </header>
            <div className={styles.productGrid}>
                {renderProducts()}
            </div>
        </div>
    )
}

export default Products;