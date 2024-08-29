<script>
  import Carousel from '../src/Carousel.svelte';
  import { createEventDispatcher }  from 'svelte';

  const dispatch = createEventDispatcher();

  export let isOpen;
  export let currentImage;

  function nextImage(){
    if (currentImage == 3){
      currentImage = 0;
    }else{
      currentImage++;
    }
  }

  function prevImage(){
    if (currentImage == 0){
      currentImage = 3;
    }else{
      currentImage--;
    }
  }

  function closeLightbox(){
    dispatch('closeLightbox');
  }
</script>

<div class="lightbox__background">
  <div class="ligthbox__container">
    <button class="close-lightbox" on:click={closeLightbox}><img src="/images/icon-close.svg"/></button>
    <Carousel class="carousel"/>
    <button class="prev-image" on:click={prevImage}><img src="/images.icon-prev.svg"/></button>
    <button class="next-image" on:click={nextImage}><img src="/images/icon-next.svg"/></button>
  </div>
</div>

<style lang="scss">
  .lightbox__background{
    position: absolute;
    inset: 0;
    background-color: black;
    opacity: 5%;
  }

  .lightbox__container{
    postion: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .close-ligthbox{
    position: absolute;
    top: -20px;
    right: 0;
    cursor: pointer;
  }

  .next-image{
    position: absolute;
    right: -10px;
    top: 50%;
    cursor: pointer;
  }

  .prev-image{
    position: absolute;
    left: -10px;
    top: 50%;
    cursor: pointer;
  }

</style>
