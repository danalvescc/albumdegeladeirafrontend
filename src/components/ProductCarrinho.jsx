import styles from '../styles/components/ProductCarrinho.module.css'

function formatReal(price){
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function ProductCarrinho(props){
    const {name, quant, price} = props.data
    return (
        <div className={styles.product}>
            <img src="https://picsum.photos/200/200" />
            <div className={styles.productInfo}>
                <div className={styles.row}>
                    <div className={styles.productTitle}>
                        <h2 className={styles.title}>
                            {name}  
                        </h2>
                    </div>
                    <div  className={styles.productQuant}>
                        <input 
                            type="number" 
                            min={0} 
                            value={quant}
                            onChange={e=> props.handleChangeQuant(e)}/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.productRemove}>
                        <a onClick={props.handleRemover}>Remover</a>
                    </div>
                    <div className={styles.productPrice}>
                        <p><span>Un: </span>{formatReal(price)}</p>
                        <br/>
                        <p><span>Total: </span>{formatReal(price * quant)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCarrinho