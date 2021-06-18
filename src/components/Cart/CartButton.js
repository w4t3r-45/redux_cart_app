import classes from './CartButton.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {uiActions} from '../../store/UiSLice';

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
