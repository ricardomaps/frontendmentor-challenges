<script>
  import CartStore from '../src/cartStore.js';

  function deleteCart(){
    CartStore.update((items) => {
      return 0;
    })
  }

</script>
<div class="user-cart" on:click|stopPropagation={()=>{}}>
  <div class="user-cart__header">Cart</div>
  <div class="user-cart__items__wrapper">
    {#if $CartStore > 0}
      <div class="user-cart__items">
	<img class="thumbnail" src="/images/image-product-1-thumbnail.jpg"/>
	<span>
	  Fall Limited Edition Sneakers $125.00 x {$CartStore} <span id='total-cost'> ${$CartStore * 125} </span>
	</span>
	<img src='/images/icon-delete.svg' class="delete-btn" on:click={deleteCart}>
      </div>
      <button class="btn checkout-btn">Checkout</button>
    {:else}
      <div class='empty-cart'>Your cart is empty.</div>
    {/if}
  </div>
</div>

<style lang="scss">
  .user-cart{
    position: absolute;
    top: 68px;
    right: -110px;
    background-color: white;
    min-width: 400px;
    max-height: 300px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  .user-cart__header{
    text-align: left;
    font-weight: 700;
    padding: 1.5rem;
    border-bottom: 2px solid var(--black);
  }

  .user-cart__items__wrapper{
    padding: 1.5rem;
    padding-bottom: 2rem;
    min-height: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .user-cart__items{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    color: var(--dark-grayish-blue);
    #total-cost{
      color: var(--very-dark-blue);
      font-weight: 700;
    }

    .thumbnail{
      height: 40px;
      width: 40px;
      border-radius: 10%;
      margin-right: 1rem;
    }
  }

  .delete-btn{
    margin-left: 1rem;
    cursor: pointer;
  }

  .empty-cart{
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: var(--dark-grayish-blue);
  }

  .checkout-btn{
    margin-top: 10px;
  }
</style>
