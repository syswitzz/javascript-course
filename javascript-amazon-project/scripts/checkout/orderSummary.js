import {cart, removeFromCart, updateDeliveryOption} from "../../data/cart.js";
import {products, getProduct} from "../../data/products.js";
import {deliveryOptions, getDeliveryOption} from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import dayjs from "https://unpkg.com/dayjs@1.11.21/esm/index.js";


export function renderCartSummary(){

    let cartSummaryHTML = ``;

    cart.forEach(cartItem => {
        let matchingItem = getProduct(cartItem.productId)

        let deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)

        
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const deliveryString = deliveryDate.format('dddd, MMMM D');


        cartSummaryHTML += `
            <div class="cart-item-container js-cart-item-container-${matchingItem.id}">
            <div class="delivery-date">
                Delivery date: ${deliveryString}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchingItem.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingItem.name}
                </div>
                <div class="product-price">
                    $${(matchingItem.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${matchingItem.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                    ${deliveryOptionsHTML(matchingItem, cartItem)}
                </div>
            </div>
            </div>
        `;
    })


    function deliveryOptionsHTML(matchingItem, cartItem) {
        let html = ``;

        deliveryOptions.forEach(deliveryOption => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
            const deliveryString = deliveryDate.format('dddd, MMMM D');

            const shippingCharge = deliveryOption.priceCents;
            const shippingString = shippingCharge !== 0 ? `$${(shippingCharge/100).toFixed(2)} -` : 'FREE';

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            html += `
                <div class="delivery-option js-delivery-option" data-product-id='${matchingItem.id}' data-delivery-option-id="${deliveryOption.id}">
                    <input type="radio" ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                    <div>
                    <div class="delivery-option-date">
                        ${deliveryString}
                    </div>
                    <div class="delivery-option-price">
                        ${shippingString} Shipping
                    </div>
                    </div>
                </div>
            `
        })
        
        return html;
    }



    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


    document.querySelectorAll('.js-delete-quantity-link').forEach(deleteLink => {
        deleteLink.addEventListener("click", () => {
            let productId = deleteLink.dataset.productId;
            removeFromCart(productId)
            
            document.querySelector(`.js-cart-item-container-${productId}`).remove()

            renderPaymentSummary();
        })
    })

    document.querySelectorAll('.js-delivery-option').forEach(element => {
        element.addEventListener('click', () => {
            const {productId, deliveryOptionId} = element.dataset;
            updateDeliveryOption(productId, deliveryOptionId);
            renderCartSummary();
            renderPaymentSummary();
        })
    })
}

