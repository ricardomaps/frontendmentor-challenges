<script>
  import CartModal from '../src/CartModal.svelte';
  import CartStore from '../src/cartStore.js';

  let isOpen = false;
  function handleOpen(){
    isOpen = true;
    console.log("is open")
    document.body.addEventListener("click", handleClose);
  }

  function handleClose(){
    isOpen = false;
    document.body.removeEventListener("click", handleClose);
  }

  function toggleOpen(){
    if (isOpen){
      handleClose();
    }else{
      handleOpen();
    }
  }

</script>

<div class="header">  
  <ul class="navbar">
    <img src="/images/logo.svg"/>
    <li>Collections</li>
    <li>Men</li>
    <li>Women</li>
    <li>About</li>
    <li>Contact</li>
  </ul>

  <div class="profile-section">
    <img id="cart" src="/images/icon-cart.svg" on:click|stopPropagation={toggleOpen}/>
    {#if $CartStore > 0}
    <div class="orange-dot-indicator">{$CartStore}</div>
    {/if}
    <img id="avatar" src="/images/image-avatar.png"/>
    {#if isOpen}
      <CartModal/>
    {/if}
  </div>
</div>

<style lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--black);
  }

  .navbar{
    display: flex;
    align-items: center;
    list-style: none;
    color: var(--dark-grayish-blue);
    font-size: 1.1rem;
    img {
      padding: 2.5rem 0rem;
      margin-right: 2rem;
    }
    
    li{
      position: relative;
      padding: 2.5rem 0;
      margin-left: 2.5rem;
      cursor: pointer;
      &:hover{
	color: var(--very-dark-blue);
      }
    }
    li::before{
      content: '';
      background-color: var(--orange);
      position: absolute;
      left: 0;
      bottom: -18px;
      right: 0;
      height: 4px;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
    }
    li:hover::before{
      transform: scaleX(1);
    }
  }

  .header .profile-section{
    position: relative;
    margin-right: 5rem;
    display: flex;
    align-items: center;
    gap: 3rem;
    #avatar{
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
    #avatar:hover{
      border: 2px solid var(--orange);
      border-radius: 50%;
    }
    #cart{
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
    .orange-dot-indicator{
      position: absolute;
      left: 10px;
      top: 8px;
      width: 15px;
      text-align: center;
      font-size: 0.5rem;
      border-radius: 40%;
      background-color: var(--orange);
      color: white;
    }
  }
</style>
