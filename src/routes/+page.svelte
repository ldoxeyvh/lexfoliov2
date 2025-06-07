<script lang="ts">
    import { base } from "$app/paths";
    import elements from "$lib/assets/new-homepage/elements.json";
    import { crossfade } from "svelte/transition"; // Note: crossfade not directly related to image loading issue

    // This glob runs at build time.
    // `query: '?url'` correctly tells Vite to give you the path to the built asset.
    const imageModules = import.meta.glob(
      '$lib/assets/new-homepage/*{.jpg,.png,.jpeg,.gif}',
        {
            eager: true,
            query: '?url'
        }
    ) as Record<string, { default: string }>;

    // CREATE A MAP FROM ORIGINAL FILENAME TO BUILT URL
    const filenameToBuiltUrlMap: Record<string, string> = {};
    for (const originalPath in imageModules) {
        if (Object.prototype.hasOwnProperty.call(imageModules, originalPath)) {
            // Extract the original filename from the original source path
            // e.g., "$lib/assets/new-homepage/my-image.jpg" -> "my-image.jpg"
            const filename = originalPath.split('/').pop() as string;
            // Store the built URL (module.default) with the original filename as the key
            filenameToBuiltUrlMap[filename] = imageModules[originalPath].default;
        }
    }

    function filenameToUrl(targetFilename: string): string | undefined {
        return filenameToBuiltUrlMap[targetFilename];
    }

    const [send, receive] = crossfade({});
</script>

<div class="columns-1 lg:columns-2 gap-4 m-4">
    {#each elements as element}
        <a href={`${base}${element["dest"]}`} aria-label={element.alt}>
            <img class="w-full mb-4 border hover:border-3 border-slate-800"
                 src={filenameToUrl(element["main-img"])}
                 alt={element.alt} />
        </a>
    {/each}
</div>