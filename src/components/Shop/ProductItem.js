import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch, useSelector} from 'react-redux';
// import {cartActions} from '../../store/cartSlice';
import {addItem} from '../../redux/actions/actions';

const ProductItem = (props) => {
  
  const { title, price, description,id } = props;
  const dispatch = useDispatch();
  const clickHandler = ()=>{
    dispatch(addItem({ title, price, id }));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
