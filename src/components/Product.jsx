import styles from '../styles/components/Product.module.css'

function Product({title, price, onAdd, id}){
    return (
        <div className={styles.container}>
            <img src="https://picsum.photos/300/300" />
            <span className={styles.title}>
                {title}
            </span>
            <div className={styles.flex}>

            <div className={styles.price}>
                <span>R$</span>
                {price}
            </div>
            <button onClick={()=> onAdd(id)}>
                + Comprar
            </button>
            </div>
        </div>
    )
}

export default Product