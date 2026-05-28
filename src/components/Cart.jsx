function Cart({
  isOpen,
  cartItems,
  cartTotal,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-overlay">
      <aside className="cart-panel">
        <div className="cart-header">
          <div>
            <p className="eyebrow">Your order</p>
            <h2>Shopping cart</h2>
          </div>

          <button className="cart-close" type="button" onClick={onClose}>
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h3>Your cart is empty</h3>
            <p>Add some sneakers to continue shopping.</p>
            <button type="button" onClick={onClose}>
              Back to shop
            </button>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.color}</p>
                    <strong>${item.price}</strong>

                    <div className="cart-quantity">
                      <button type="button" onClick={() => onDecrease(item.id)}>
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button type="button" onClick={() => onIncrease(item.id)}>
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="cart-remove"
                    type="button"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>${cartTotal}</strong>
              </div>

              <button className="checkout-button" type="button">
                Checkout
              </button>

              <button className="clear-cart-button" type="button" onClick={onClear}>
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;