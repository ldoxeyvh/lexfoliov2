// import { writable } from 'svelte/store';

// export const layoutState = writable({
//   message: 'Hello from layout!'
// });

// src/stores.js
import { writable } from 'svelte/store';

// Type definition for the state object
export interface LayoutState {
  message: string;
}

// Create a writable store with initial state
export const layoutState = writable<LayoutState>({ message: 'Hello from layout!' });