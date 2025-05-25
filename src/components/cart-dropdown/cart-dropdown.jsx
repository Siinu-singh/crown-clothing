
import '../cart-dropdown/cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <span className='empty-message'>Your cart is empty</span>
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>

        </div>
    )
}

export default CartDropdown;
