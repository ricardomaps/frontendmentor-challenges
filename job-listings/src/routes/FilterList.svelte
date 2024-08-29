<script>
import { filters } from '$lib/stores/stores.js'
import { flip } from 'svelte/animate';
import { fly, fade } from 'svelte/transition';
</script>

<div transition:fade class="container">
	<ul>
		{#each $filters as filter (filter)}
			<li in:fly={{ x: 200 }} out:fade animate:flip>
			{ filter } <span class="remove-icon"></span> </li>
		{/each}
	</ul>
</div>

<style>

.container {
	position: absolute;
	top: 0;
	transform: translateY(-50%);
	min-width: 60vw;
	background-color: white;
	padding: 0.5rem;
	border-radius: 4px;
	display: flex;
	align-items: center;
}

ul {
	list-style: none;
}

ul li {
	display: inline-block;
	padding: 5px;
	border-radius: 4px;
	margin-right: 15px;
	cursor: pointer;
	font-weight: bold;
	color: var(--dark-grayish-cyan);
	background-color: var(--light-grayish-cyan-2);
}

.remove-icon {
	display: inline-block;
	height: 100%;
	min-width: 20px; 
	background-color: var(--desaturated-dark-cyan);
	backgroun-image: url("images/icon-remove.svg");
	background-size: contain;
}

</style>
