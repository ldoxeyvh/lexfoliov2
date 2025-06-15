<script>
    import Me from '$lib/assets/about-me/MEPICTURE.jpg'
    import { layoutState } from '$lib/store.js';

    layoutState.set({ message: 'About me' });

</script>

<div class="grid grid-cols-2 justify-items-center gap-40">
    <img src={Me} alt="me" class="border-2 border-slate-800 max-w-lg justify-self-end"/>
    <p class="text-2xl place-self-center justify-self-start max-w-2xl">
        Hi! My name is Alexsey daCosta and I am a Graphic Designer. I have a BA from the University of Michigan where I studied Art & Design.
        <br><br>
        I am passionate about the environment and all things creative. In my free time you can find me taking walks, birdwatching, or playing video games.
        <br><br>
        If you like what you see I would love to work with you! 
    </p>
</div>