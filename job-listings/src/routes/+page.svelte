<script>
	import JobOpening from './JobOpening.svelte';
	import FilterList from './FilterList.svelte';
	import { flip } from 'svelte/animate';
	import { fade, fly } from 'svelte/transition';
	import { filters, filteredJobs } from '$lib/stores/stores.js';
</script>

<div class="header">
</div>
<main class="main-content">
	{#if $filters.length > 0}
		<FilterList/>
	{/if}
	<ul>
		{#each $filteredJobs as job, i (job.id)}
			<li in:fade={{ delay: 100*i, duration: 200}} out:fly={{ x: 100, delay: 100*i, duration: 200 }} animate:flip> 
				<JobOpening {job}/>	
			</li>
		{/each}
	</ul>
</main>
<style>

@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');

:root {
	--desaturated-dark-cyan: hsl(180, 29%, 50%);
	--light-grayish-cyan-1: hsl(180, 52%, 96%);
	--light-grayish-cyan-2: hsl(180, 31%, 95%);
	--dark-grayish-cyan: hsl(180, 8%, 52%);
	--very-dark-grayish-cyan: hsl(180, 14%, 20%);

	font-family: "League Spartan", sans-serif;
	font-weight: 500;
}

.header {
	background-color: var(--desaturated-dark-cyan);
	background-image: url("images/bg-header-desktop.svg");
	background-size: cover;
	width: 100%;
	height: 200px;
}

.filters {
	position: absolute;
	top: 0;
	transform: translateY(-50%);
	background-color: white;
	width: 60vw;
}

.main-content {
	position: relative;
	min-height: calc(100vh - 180px);
	background-color: var(--light-grayish-cyan-1);
	display: flex;
	flex-direction: column;
	align-items: center;
}

ul {
	list-style: none;
}

ul li:first-child {
	margin-top: 50px;
}

</style>
