<script>
import { filters } from '$lib/stores/stores.js';
export let job;
const filterableItems = [job.role, job.level, ...job.languages, ...job.tools];
const handleAddFilter = newFilter => {
	if (!$filters.includes(newFilter)) {
		filters.update(filters => [...filters, newFilter])
	} 
}
</script>

<div class="container">
	<div class="left-part">
		<img class="company-logo" src={job.logo} alt="Company Logo"/>
		<div>
			<p class="company-name">{job.company}</p>
			{#if job.new}
				<span class="new pill">NEW!</span>
			{/if}
			{#if job.featured}
				<span class="featured pill">FEATURED</span>
			{/if}
			<p class="job-position">{job.position}</p>
			<p class="job-details">{job.postedAt} · {job.contract} · {job.location}</p>
			
		</div>
	</div>	
	<div class="right-part">
		<ul class="filterable-list">
			{ #each filterableItems as filter }
				<li on:click={() => handleAddFilter(filter) }> { filter } </li>
			{/each}
		</ul>
	</div>

</div>

<style>
.container {
	margin-bottom: 20px;
	min-width: 60vw;
	background-color: white;
	padding: 1rem;
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
}

.left-part {
	display: flex;
	align-items: center;
}

.right-part {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.company-logo {
	display: block;
	border-radius: 50%;
	margin-right: 15px;
}

.company-name {
	color: var(--desaturated-dark-cyan);
	font-weight: 700;
	margin: 0;
	display: inline;
	margin-right: 10px;
}

.job-position {
	color: var(--desaturated-dark-cyan);
	font-weight: 700;
	font-size: 22px;
	margin: 0;
}

.job-details {
	color: var(--dark-grayish-cyan);
	font-size: 15px;
}

.pill {
	display: inline-block;
	border-radius: 500px;
	padding: 6px;
	font-weight: 700;
	text-align: center;
	margin-right: 10px;
}

.new {
	color: white;
	background-color: var(--desaturated-dark-cyan);
}

.featured {
	color: white;
	background-color: var(--very-dark-grayish-cyan);
}

.filterable-list {
	list-style: none;
}

.filterable-list li {
	display: inline-block;
	padding: 8px;
	border-radius: 4px;
	margin-right: 15px;
	cursor: pointer;
	font-weight: bold;
	color: var(--desaturated-dark-cyan);
	background-color: var(--light-grayish-cyan-2);
}

</style>
