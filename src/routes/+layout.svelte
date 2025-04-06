<script lang="ts">
	import '../app.css';
	import Gallery from '$lib/Gallery.svelte';
    import { slide } from 'svelte/transition';
    import { bounceInOut, bounceIn, bounceOut, cubicInOut, backInOut, sineInOut } from 'svelte/easing';
    import { afterNavigate } from '$app/navigation';
    import { base } from '$app/paths';

    let isDropdownHidden = $state(true);

    function toggleDropdown() {
        isDropdownHidden = !isDropdownHidden;
        console.log('dropdown triggered')
    }

    // Resets mobile nav dropdown on navigation
    afterNavigate(() => {
        isDropdownHidden = true;
    })
    // const navText = "text-3xl text-blue-700 pb-4 border-b border-blue-700";
	
	let { children } = $props();
</script>

<div class="lg:p-5 p-3 bg-zinc-100">
    <div class="border-2 border-slate-800 lg:px-20 lg:py-12">
        <!-- desktop -->
        <div class="hidden lg:grid grid-cols-2 gap-x-4 w-full"> 
            <div class="grid grid-cols-6">
                <a href="" class="text-3xl">LOGO</a>
                <a href="{`${base}/`}" class="col-span-5 text-3xl text-slate-800 pb-4 border-b-2 border-slate-800 w-1/2 hover:w-3/4 hover:font-semibold transition-all">ALEXSEY DACOSTA</a>
            </div>
            <div class="grid grid-cols-2 gap-x-4">
                <a href="{`${base}/portfolio`}" class="text-3xl text-slate-800 pb-4 border-b-2 border-slate-800 w-2/3 hover:w-full hover:font-semibold transition-all">PORTFOLIO</a>
                <div class="grid grid-cols-2 gap-x-4">
                    <a href="" class="text-3xl text-slate-800 pb-4 border-b-2 border-slate-800 w-2/3 hover:w-full hover:font-semibold transition-all">ABOUT ME</a>
                    <a href="" class="text-3xl text-slate-800 pb-4 border-b-2 border-slate-800 w-2/3 hover:w-full hover:font-semibold transition-all">CONTACT</a>
                </div>
            </div>
        </div>
        <!-- mobile -->
        <div class="lg:hidden grid grid-cols-4 mx-2 mt-2 pb-2 border-b border-slate-800">
            <span class="col-span-3 text-xl text-slate-800">ALEXSEY DACOSTA</span>
            <button onclick={toggleDropdown} class="text-xl text-slate-800">
                {#if isDropdownHidden}
                    <!-- <i class="text-slate-800 text-xl fa-solid fa-bars"></i> -->
                     <span class="text-slate-800 text-xl">+</span>
                {:else}
                    <!-- <i class="text-slate-800 text-xl fa-solid fa-xmark"></i> -->
                    <span class="text-slate-800 text-xl">x</span>
                {/if}
            </button>
        </div>
        {#if !isDropdownHidden}
            <div transition:slide={{duration: 500, easing:cubicInOut}}
             class="grid grid-cols-1 border-b-2 border-slate-800">
                <a href="" class="mx-2 mt-2 pb-2 border-b border-slate-800 text-xl">TEST</a>
                <a href="" class="mx-2 mt-2 pb-2 border-b border-slate-800 text-xl">TEST</a>
                <a href="" class="mx-2 mt-2 pb-2  text-xl">TEST</a>
            </div>
        {/if}
        <div class="lg:h-52"></div> <!-- filler -->
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        </div> -->
        {@render children()}
        <!-- footer -->
        
    </div>
</div>

