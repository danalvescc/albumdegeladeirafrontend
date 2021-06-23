import styles from '../styles/components/Header.module.css'
import logotipo from '../assets/logotipo.png'
import logoname from '../assets/logoname.png'
import { FaShoppingCart } from 'react-icons/fa';

function Header(){
    

    return (
    <>
        <div className={styles.container}>
            <img src={logotipo} className={styles.logotipo} />
            <img src={logoname} className={styles.logoname} />
        </div>
        <div className={styles.ico}>
            <a href="./carrinho"><FaShoppingCart/></a>
        </div>
    </>
    )
}

export default Header