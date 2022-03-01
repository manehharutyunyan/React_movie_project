import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  console.log("propsssssssss")
  console.log(props)

  const { title, description, id } = props;
  console.log(title);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
        </header>
        <p>{title}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to list</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
