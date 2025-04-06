<script lang="ts">
    const imageModules = import.meta.glob(
     '$lib/assets/new-homepage/*{.jpg,.png,.jpeg,.gif}',
        {
            eager: true
        }
    ) as Record<string, { default: string }>;
    const images = Object.values(imageModules).map(module => module.default);
</script>

<div class="columns-1 lg:columns-2 gap-4 m-4">
    {#each images as image}
        <img class="w-full mb-4 border border-slate-500" src={image} alt="TODO" />
    {/each}
</div>