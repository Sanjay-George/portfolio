<script>
    import EmailIcon from "./icons/EmailIcon.svelte";
    import LinkedInIcon from "./icons/LinkedInIcon.svelte";
</script>

<section id="contact">
    <p class="section__text__p1">
        <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-slate-500
            from-purple-600">Get in Touch</span
        >
    </p>
    <h1
        class="title md:mb-5 mt-0 text-3xl font-extrabold md:text-5xl lg:text-6xl text-slate-500"
    >
        Contact Me
    </h1>
    <div class="contact-info-upper-container border rounded-3xl">
        <div class="contact-info-container">
            <a class="text-slate-500" href="mailto:sanjaygeorge16@gmail.com">
                <EmailIcon size={10} color="slate-400" /></a
            >
            <p>
                <a
                    class="text-slate-500 dark:text-slate-300"
                    href="mailto:sanjaygeorge16@gmail.com"
                    >sanjaygeorge16@gmail.com</a
                >
            </p>
        </div>
        <div class="contact-info-container">
            <a target="_blank" href="https://www.linkedin.com/in/sanjay-george/"
                ><LinkedInIcon size={10} color="slate-400" /></a
            >
            <p>
                <a
                    class="text-slate-500 dark:text-slate-300 inline-flex items-center"
                    target="_blank"
                    href="https://www.linkedin.com/in/sanjay-george/"
                    >LinkedIn</a
                >
            </p>
        </div>
    </div>
</section>
