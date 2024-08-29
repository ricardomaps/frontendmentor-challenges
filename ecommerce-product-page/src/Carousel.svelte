<script>
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let selectedImage = 0;
  const thumbnails =["images/image-product-1-thumbnail.jpg", "images/image-product-2-thumbnail.jpg", "images/image-product-3-thumbnail.jpg", "images/image-product-4-thumbnail.jpg"];
  const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

  function handleSelectImage(index){
    selectedImage = index;
  }

  function openLightbox(){
    dispatch('openLightbox');
  }

</script>
<div class="carousel">
  <div class="product-image__container" on:click={openLightbox}>
    {#each [images[selectedImage]] as image (selectedImage)}
      <img class="product-image" out:fade={{duration: 400}} in:fade={{duration: 400, delay: 400}} src={image}/>
    {/each}
  </div>

  <ul class="photos-list">
    {#each thumbnails as thumbnail, index (index)}
      <li on:click={() => handleSelectImage(index)}><img class:active={ selectedImage == index } src={thumbnail}/></li>
    {/each}
  </ul>
</div>

<style lang="scss">

  .product-image__container{
    position: relative;
    height: 500px;
    width: 500px;
    overflow: hidden;
    border-radius: 1rem;
    margin-left: 35px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .product-image{
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .carousel .photos-list{
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-basis: 1;
    gap: 30px;
    height: 100px;
    overflow: hidden;
    postion: relative;
    li{
      cursor: pointer;
    }
    img{
      display: block;
      width: 100px;
      border-radius: 10%;
      &:hover{
	opacity: 0.5;
      }
    }
  }

  .active{
    opacity: 0.7;
    border: 3px solid var(--orange);
  }
</style>
