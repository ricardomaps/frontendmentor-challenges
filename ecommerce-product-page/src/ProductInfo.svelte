<script>
  import CartStore from '../src/cartStore.js';

  let itemsToAdd = 0;

  function increaseItems(){
    itemsToAdd++;
  }

  function decreaseItems(){
    if (itemsToAdd > 0){
      itemsToAdd--;
    }
  }

  function addToCart(){
    CartStore.update(items => items + itemsToAdd);
    itemsToAdd = 0;
  }

</script>

<div class="product-info">
  <div class="product-info__company-name">Sneaker Company</div>

  <div class="product-info__name">Fall Limited Edition Sneakers</div>

  <div class="product-info__product-desc">These low-profile sneakers are your perfect casual wear companion. Featuring a 
    durable rubber outer sole, they’ll withstand everything the weather can offer.
  </div>

  <div class="product-info__price">
    <div class="price-discount__wrapper">
      <span class="price">$125.00</span>
      <span class="discount">50%</span>
    </div>
    <span class="orig-price">$250.00</span>
  </div>

  <div class="procut-info_add">
    <div class="choose-quant">
      <button on:click={decreaseItems}><img src="/images/icon-minus.svg"/></button>
      <span>{itemsToAdd}</span>
      <button on:click={increaseItems}><img src="/images/icon-plus.svg"/></button>
    </div>
    <button class="btn add-btn" on:click={addToCart}><img class="white-svg" src="/images/icon-cart.svg"/>Add to cart</button>
  </div>
</div>

<style lang="scss">
  .product-info{
    padding: 4rem 10rem 0;
    width: 100%;
    height: 100%;
  }

  .product-info .product-info__company-name{
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--orange);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .product-info .product-info__name{
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 2.9rem;
    margin-bottom: 30px;
  }

  .product-info .product-info__product-desc{
    color: var(--dark-grayish-blue);
    text-align: left;
    margin-bottom: 20px;
    font-size: 1.1rem;
    line-height: 1.8rem
  }

  .product-info .product-info__price{
    align-items: flex-start;
    .price-discount__wrapper{
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .price{
      font-weight: 700;
      font-size: 2rem;
    }
    .discount{
      background-color: var(--pale-orange);
      color: var(--orange);
      font-weight: 700;
      padding: 0.1rem 0.5rem;
      border-radius: 5px;
    }
    .orig-price{
      color: var(--grayish-blue);
      font-weight: 700;
      text-decoration: line-through;
    }
  }

  .product-info .procut-info_add{
    margin-top: 2rem;
    display: flex;
    gap: 15px;
    font-weight: 700;
    .choose-quant{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 52px;
      width: 162px;
      background-color: var(--light-grayish-blue);
      border-radius: 0.8rem;
      button{
	padding: 1rem 2rem;
	outline: none;
	border: none;
	background-color: inherit;
	cursor: pointer;
      }
    }
  }
  .add-btn{
    max-width: 300px;
  }
  .white-svg{
    filter: brightness(5);
  }
</style>
