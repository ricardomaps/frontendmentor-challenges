import { writable, readable, derived } from 'svelte/store';
import jobs from '$lib/data.json';

export const filters = writable([]);
export const filteredJobs = derived(filters,
	($filters) => jobs.filter(job => $filters.every(filter => Object.values(job).includes(filter))));

