import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Produtos from './pages/Produtos'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/produtos" component={Produtos} />
          {/* <Route path="/carrinho" component={Carrinho} /> */}
      </Switch>
  </BrowserRouter>
  );
}

export default App;
