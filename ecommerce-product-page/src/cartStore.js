import { writable } from 'svelte/store';

const CartStore = writable(0);

export default CartStore;
