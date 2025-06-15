<script lang="ts">
    const imageModules = import.meta.glob(
     '$lib/assets/portfolio/*{.jpg,png,jpeg,gif}',
        {
            eager: true
        }
    ) as Record<string, { default: string }>;
    const images = Object.values(imageModules).map(module => module.default);
</script>

<div class="columns-2 lg:columns-4 gap-4">
    {#each images as image}
        <img class="w-full mb-4 border-2 border-lime-800 " src={image} alt="TODO" />
    {/each}
</div>
