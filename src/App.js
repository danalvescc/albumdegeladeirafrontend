import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'


import Header from './components/Header';
import HeaderFreteGratis from './components/HeaderFreteGratis'

function App() {
  return (
    <>
      <HeaderFreteGratis/>
      <Header/>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/produtos"/>
            )}/>
            <Route path="/produtos" component={Produtos} />
            <Route path="/carrinho" component={Carrinho} />
        </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
