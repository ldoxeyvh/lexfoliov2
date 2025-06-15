<script>
	import Gallery from "$lib/Gallery.svelte";
    import { layoutState } from '$lib/store.js';

    layoutState.set({ message: 'My Portfolio' });

</script>

<Gallery></Gallery>