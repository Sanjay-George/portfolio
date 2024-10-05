<script>
    import EmailIcon from "./icons/EmailIcon.svelte";
    import LinkedInIcon from "./icons/LinkedInIcon.svelte";
</script>

<section id="contact">
    <p class="section__text__p1">Get in Touch</p>
    <h1
        class="title md:mb-5 mt-0 text-3xl font-extrabold md:text-5xl lg:text-6xl text-slate-500"
    >
        Contact Me
    </h1>
    <div class="contact-info-upper-container">
        <div class="contact-info-container">
            <EmailIcon />
            <p>
                <a href="mailto:sanjaygeorge16@gmail.com"
                    >sanjaygeorge16@gmail.com</a
                >
            </p>
        </div>
        <div class="contact-info-container">
            <LinkedInIcon />
            <p>
                <a target="_blank" href="https://www.linkedin.com">LinkedIn</a>
            </p>
        </div>
    </div>
</section>
