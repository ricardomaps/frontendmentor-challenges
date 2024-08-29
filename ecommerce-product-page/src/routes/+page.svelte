<script>
  import Header from '../Header.svelte';
  import ProductInfo from '../ProductInfo.svelte';
  import Carousel from '../Carousel.svelte';
  import Lightbox from '../Lightbox.svelte';

  let isLightboxOpen = false;

  function openLightbox(){
    console.log("opening lightbox")
    isLightboxOpen = true;
  }

  function closeLightbox(){
    isLightboxOpen = false;
  }
</script>

<Header/>
<div class="main-page-layout">
  {#if isLightboxOpen}
    <Lightbox on:closeLightbox={closeLightbox}/>
  {/if}
  <Carousel on:openLightbox={openLightbox}/>
  <ProductInfo/>
</div>

<style>
  .main-page-layout{
    padding: 4rem;
    display: flex;
    justidy-content: space-between;
  }
</style>

  .close-ligthbox{
    position: absolute;
    top: -20px;
    right: 0;
    cursor: pointer;
  }

