import styles from '../styles/pages/Carrinho.module.css'
import PageTitle from '../components/PageTitle'
import { useDispatch, useSelector } from 'react-redux';
import ProductCarrinho from '../components/ProductCarrinho';
import api_albumdegeladeira from '../services/api_albumdegeladeira'
import { useState } from 'react';
import {setCarrinho} from '../store/Carrinho/Carrinho.action'
import CarrinhoImg from '../assets/carrinho.png'


function formatReal(price){
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}


function Carrinho(){
    const dispatch = useDispatch()
    const {carrinho} = useSelector(state=> state.carrinho)
    const [shipping, setShipping] = useState({price:0, dats:0})

    
    function handleChangeCep(e){
        const cep = e.target.value
        if(cep.length !== 9 && cep.length !== 8)
        return;
        
        api_albumdegeladeira.get('shipping',{
            params:{
                cep
            }
        }).then(response=>{
            let obj = response.data[0]
            setShipping({
                ...obj,
                price: parseFloat(obj.ValorSemAdicionais),
                days: parseInt(obj.PrazoEntrega)
            })
        })
    }
    
    function handleChangeQuant(id, quant){
        let arr = []
        if(quant == 0 && quant != '')
            arr = carrinho.filter(i => i.id !== id)
        //PERDE A POSIÇÃO
        /*else
        arr = [...carrinho.filter(i => i.id !== id), { ...carrinho.find(i => i.id === id), quant }] */
        else
            arr = carrinho.map(i=> i.id === id ? {...i, quant}: i)
        
        
        dispatch(setCarrinho(arr))   
    }

    function handleRemover(id){
        dispatch(setCarrinho(carrinho.filter(i => i.id !== id)))
    }
    
    function subtotal(){
        let subtotal = 0
        carrinho.forEach(item=> subtotal += item.price * item.quant)
        return subtotal
    }
    
    
    function renderProducts(){
        return carrinho.map(i=>(
            <ProductCarrinho 
                handleChangeQuant={(e)=> handleChangeQuant(i.id, e.target.value)}
                handleRemover={()=> handleRemover(i.id)}
                key={i.id}
                data={i}/>
        ))
    }

    return (
        <div className={styles.container}>
            <div>
                <PageTitle title={"Carrinho"} color={'purple'}/>
            {carrinho.length? 
                <div className={styles.card}>
                    {renderProducts()}

                    <div className={[styles.row, styles.resumoRow, styles.borderBottom].join(' ')}>
                        <p class={styles.title}>Resumo</p>
                    </div>

                    <div className={[styles.row, styles.borderBottom, styles.infos].join(' ')}>
                        <p >Subtotal</p>
                        <p>{formatReal(subtotal())}</p>
                    </div>
                    <div className={[styles.row, styles.borderBottom, styles.shipping].join(' ')}>
                        <p>Calcule o frete e prazo da entrega dos seus produtos</p>
                        <input 
                            type="text" 
                            placeholder="Digite o CEP do local de entrega" 
                            onChange={handleChangeCep}
                            />
                        {shipping.days && <div className={[styles.row, styles.shippingInfo].join(' ')}>
                            <div>
                                <p>Correios - SEDEX</p>
                                <span>Chegará em {shipping.days} dias </span>
                            </div>
                            <p>{formatReal(shipping.price)}</p>
                        </div>}
                    </div>
                    <div className={[styles.row,  styles.infos].join(' ')}>
                        <p>Total</p>
                        <p>{formatReal(subtotal() + shipping.price)}</p>
                    </div>
                </div>
                :
                <div className={styles.carrinhoVazio}>
                    <img src={CarrinhoImg} alt="carrinho vazio" />
                    <p>O seu carrinho de compras está vazio</p>
                </div>
                }
            </div>
        </div>
    )
}

export default Carrinho;