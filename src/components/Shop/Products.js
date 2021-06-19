import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

// const DUMMY_DATA = [
//   {
//     id:1,
//     name:"alvaro lavicci",
//     price:6,
//     description:"lorem ipsim dolor sit"
//   },
//   {
//     id:3,
//     name:"Zara lorti",
//     price:60,
//     description:"lorem ipsim dolor sit"
//   },
//   {
//     id:4,
//     name:"Lacost blei",
//     price:56,
//     description:"lorem ipsim dolor sit"
//   }

// ]

const Products = (props) => {
  const loading = useSelector(state => state.cart.fetching);
  const DATA = useSelector(state => state.cart.allItems);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          loading ? <p>Spinner ....</p> :
            DATA.map(item => (
              <ProductItem
                key={item.key}
                id={item.id}
                title={item.name}
                price={item.price}
                description={item.description}
              />
            ))
        }

      </ul>
    </section>
  );
};

export default Products;
