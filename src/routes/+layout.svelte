<script lang="ts">
	import '../app.css';
	import Gallery from '$lib/Gallery.svelte';
    import { slide } from 'svelte/transition';
    import { bounceInOut, bounceIn, bounceOut, cubicInOut, backInOut, sineInOut } from 'svelte/easing';
    import { afterNavigate } from '$app/navigation';
    import { base } from '$app/paths';
    import Logo from '$lib/assets/LEXLOGO-01.svg'

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
        <div class="hidden lg:grid grid-cols-2 gap-y-12 w-full h-8"> 
            <!-- <a href="" class="col-span-2 justify-self-center" aria-label="logo/homepage link">
                <img src={Logo} alt="logo" class="h-16"/>
            </a> -->
            <a href="{`${base}/`}" class="group">
                <span class="text-xl lg:text-2xl xl:text-3xl text-slate-800 group-hover:font-semibold transition-all">ALEXSEY DACOSTA</span>
                <div class="w-1/2 mt-4 border-b-2 border-slate-800 group-hover:w-2/3 transition-all"></div>
            </a>
            <div class="grid grid-cols-5 gap-x-4">
                <a href="{`${base}/portfolio`}" class="group col-span-2">
                    <span class="text-xl lg:text-2xl xl:text-3xl text-slate-800 group-hover:font-semibold transition-all">PORTFOLIO</span>
                    <div class="w-2/3 group-hover:w-full mt-4 border-b-2 border-slate-800 transition-all"></div>
                </a>
                <div class="grid grid-cols-2 gap-x-4 col-span-3">
                    <a href="" class="group">
                        <span class="text-xl lg:text-2xl xl:text-3xl text-slate-800 group-hover:font-semibold transition-all">CONTACT</span>
                        <div class="w-2/3 group-hover:w-full mt-4 border-b-2 border-slate-800 transition-all"></div>
                    </a>
                    <a href="" class="group">
                        <span class="text-xl lg:text-2xl xl:text-3xl text-slate-800 group-hover:font-semibold transition-all">ABOUT ME</span>
                        <div class="w-2/3 group-hover:w-full mt-4 border-b-2 border-slate-800 transition-all"></div>
                    </a>
                </div>
            </div>
            
        </div>
        <!-- mobile -->
        <div class="lg:hidden grid grid-cols-4 mx-2 mt-2 pb-2 border-b border-slate-800">
            <span class="col-span-3 text-xl text-slate-800">ALEXSEY DACOSTA</span>
            <button onclick={toggleDropdown} class="cursor-pointer text-xl text-slate-800">
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

