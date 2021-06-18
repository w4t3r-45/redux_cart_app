import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id:1,
    name:"alvaro lavicci",
    price:6,
    description:"lorem ipsim dolor sit"
  },
  {
    id:3,
    name:"Zara lorti",
    price:60,
    description:"lorem ipsim dolor sit"
  },
  {
    id:4,
    name:"Lacost blei",
    price:56,
    description:"lorem ipsim dolor sit"
  }
  
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {
        DUMMY_DATA.map(item =>(
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
