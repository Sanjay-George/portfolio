<script>
    import profilePic from "../assets/profile.png";
    import Github from "./icons/Github.svelte";
    import LinkedInIcon from "./icons/LinkedInIcon.svelte";
    import DownloadIcon from "./icons/DownloadIcon.svelte";
    import Resume from "../assets/resume.pdf";
</script>

<section id="profile" class="pt-16 xl:pt-24">
    <div class="section__pic-container">
        <img
            src={profilePic}
            alt="Profile picture"
            class="border rounded-full xl:h-80"
        />
    </div>
    <div class="section__text xl:pt-16">
        <p class="section__text__p1 text-slate-400 dark:text-slate-300">
            Hello, I'm
        </p>
        <h1
            class="md:mb-5 mb-2 text-3xl font-extrabold md:text-5xl lg:text-6xl"
        >
            <span
                class="text-transparent bg-clip-text bg-gradient-to-r
                to-slate-500 from-purple-800 dark:to-slate-300
                ">Sanjay George</span
            >
        </h1>

        <p class="section__text__p2 text-slate-400 dark:text-slate-300 mb-1">
            <span class="text-sm font-extralight hidden sm:inline">
                and I'm a</span
            > Software Engineer
        </p>

        <div class="flex justify-center gap-2 lg:mt-12">
            <a href="https://www.linkedin.com/in/sanjay-george/" target="_blank"
                ><LinkedInIcon size={10} color="slate-400" /></a
            >
            <a href="https://github.com/Sanjay-George" target="_blank">
                <Github size={10} color="slate-400" /></a
            >
            <button
                on:click={() => {
                    window.open(Resume);
                }}
            >
                <DownloadIcon size={10} color="slate-400" /></button
            >
        </div>
    </div>
</section>
