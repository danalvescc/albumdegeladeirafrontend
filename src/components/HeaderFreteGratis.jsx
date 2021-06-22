import styles from '../styles/components/HeaderFreteGratis.module.css';
import image from '../assets/frete_gratis.png'


function HeaderFreteGratis(){
    return (
        <div className={styles.container}>
            <img src={image}/>
            <div>
                <p>FRETE GRÁTIS</p>
                <span>acima de R$ 100,00</span>
            </div>
        </div>
    )
}

export default HeaderFreteGratis