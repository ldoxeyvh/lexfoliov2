<script lang="ts">
    import { base } from "$app/paths";
    import elements from "$lib/assets/new-homepage/elements.json"
    import { crossfade } from "svelte/transition";

    const imageModules = import.meta.glob(
     '$lib/assets/new-homepage/*{.jpg,.png,.jpeg,.gif}',
        {
            eager: true,
            query: '?url'
        }
    ) as Record<string, { default: string }>;
    const images = Object.values(imageModules).map(module => module.default);

    const [send, receive] = crossfade({});

    function filenameToUrl(target: string): string | undefined {
        return images.find(path => {
            const filename = path.split('/').pop();
            return filename === target;
        })
    }
</script>

<div class="columns-1 lg:columns-2 gap-4 m-4">
    {#each elements as element}
        <a href={`${base}${element["dest"]}`} aria-label={element.alt}>
            <img class="w-full mb-4 border hover:border-3 border-slate-800" src={filenameToUrl(element["main-img"])} alt={element.alt} />
        </a> 
    {/each}
</div>