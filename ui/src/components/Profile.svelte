<script>
    import profilePic from "../assets/profile-pic.png";
    import LinkedInIcon from "../assets/linkedin.png";
    import GithubIcon from "../assets/github.png";
</script>

<section id="profile" class="xl:pt-28">
    <div class="section__pic-container">
        <img src={profilePic} alt="Profile picture" />
    </div>
    <div class="section__text xl:pt-16">
        <p class="section__text__p1 text-slate-400">Hello, I'm</p>
        <h1
            class="md:mb-5 mt-0 text-3xl font-extrabold md:text-5xl lg:text-6xl"
        >
            <span
                class="text-transparent bg-clip-text bg-gradient-to-r to-slate-500 from-orange-400"
                >Sanjay George</span
            >
        </h1>

        <p class="section__text__p2 text-slate-400">
            <span class="text-sm font-extralight hidden sm:inline">
                and I'm a</span
            > Software Engineer
        </p>
        <!-- <div class="btn-container pt-8 pb-1 text-sm">
            <button
                class="btn btn-color-2"
                onclick="window.open('./assets/resume-example.pdf')"
            >
                Download CV
            </button>
            <button
                class="btn text-white bg-slate-600"
                onclick="location.href='./#contact'"
            >
                Contact Info
            </button>
        </div> -->
        <div id="socials-container">
            <img
                src={LinkedInIcon}
                alt="My LinkedIn profile"
                class="icon"
                onclick="location.href='https://linkedin.com/'"
            />
            <img
                src={GithubIcon}
                alt="My Github profile"
                class="icon"
                onclick="location.href='https://github.com/'"
            />
        </div>
    </div>
</section>
