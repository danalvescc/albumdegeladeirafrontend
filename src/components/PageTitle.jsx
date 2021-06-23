import styles from '../styles/components/PageTitle.module.css'

function PageTitle({title, color}){
    return (
        <header className={styles.container}>
            <h2 className={styles[color]}>{title}</h2>
        </header>
    )
}

export default PageTitle