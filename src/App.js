import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchingData,fetchData} from './redux/actions/actions';

function App() {
  const dispatch = useDispatch();
  // dispatch FETCHING_ACTION first time component mounts
  useEffect(()=>{
    dispatch(fetchData());
  },[]);
  const visible = useSelector(state => state.cart.visible);
  return (
    <Layout>
      {visible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
