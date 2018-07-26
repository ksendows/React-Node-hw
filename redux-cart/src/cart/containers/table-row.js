import { connect } from 'react-redux';
import TableRow from '../ui/products-table/table-row';
import { addToCart, reduceQuantityInCart, removeFromCart } from '../actions';
import { makeGetCartProduct } from 'redux/selectors';

const makeMapStateToProps = () => {
  const getCartProduct = makeGetCartProduct();

  return (state, ownProps) => {
    const product = getCartProduct(state, ownProps.id);

    return product;
  };
};

const mapDispatch = { addToCart, reduceQuantityInCart, removeFromCart };

export default connect(
  makeMapStateToProps,
  mapDispatch,
)(TableRow);
