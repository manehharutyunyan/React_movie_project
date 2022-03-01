import ProductItem from './ProductItem';
import classes from './Products.module.css';
import CartButton from '../Card/CartButton';


const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Available movies to watch</h2>
      <CartButton />
      <ul>
        {props.productsList.map((product) => (
          <ProductItem
            key={product.imdbID}
            id={product.imdbID}
            title={product.Title}
            description={product.Type}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
