import { cart } from "../../data/cart.js"
import { products, getProduct } from "../../data/products.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";


export function renderPaymentSummary() {
    let quantityTotal = 0;
    let itemTotal = 0;
    let shippingTotal = 0;

    cart.forEach((cartItem) => {
        let product = getProduct(cartItem.productId)
        itemTotal += (cartItem.quantity * product.priceCents / 100);

        let deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingTotal += (deliveryOption.priceCents / 100);

        quantityTotal += cartItem.quantity;
    })

    let totalBeforeTax = itemTotal + shippingTotal;
    let totalAfterTax = totalBeforeTax + (totalBeforeTax * 0.1);


    const paymentSummaryHTML = `
        <div class="payment-summary-title">
            Order Summary
        </div>
        <div class="payment-summary-row">
        <div>Items (${quantityTotal}):</div>
        <div class="payment-summary-money">$${itemTotal.toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${shippingTotal.toFixed(2)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${totalBeforeTax.toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${(totalAfterTax - totalBeforeTax).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${totalAfterTax.toFixed(2)}</div>
        </div>
        <button class="place-order-button button-primary">
            Place your order
        </button>
    `

    document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}

