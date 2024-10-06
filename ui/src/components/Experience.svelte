<script>
    import Skill from "./Skill.svelte";
    import ArrowIcon from "./icons/ArrowIcon.svelte";

    const dev = [
        {
            name: "HTML",
            level: "Experienced",
        },
        {
            name: "CSS",
            level: "Experienced",
        },
        {
            name: "JavaScript",
            level: "Experienced",
        },
        {
            name: "React JS",
            level: "Intermediate",
        },
        {
            name: "Svelte",
            level: "Intermediate",
        },
        {
            name: "PostgreSQL",
            level: "Basic",
        },
        {
            name: "Node JS",
            level: "Intermediate",
        },
        {
            name: "Express JS",
            level: "Intermediate",
        },
        {
            name: "Git",
            level: "Intermediate",
        },
    ];

    const ops = [
        {
            name: "Docker",
            level: "Intermediate",
        },
        {
            name: "Kubernetes",
            level: "Test",
        },
        {
            name: "Linux",
            level: "Intermediate",
        },

        {
            name: "Nginx",
            level: "Intermediate",
        },
        {
            name: "Jenkins",
            level: "Basic",
        },
        {
            name: "Ansible",
            level: "Basic",
        },
        {
            name: "Terraform",
            level: "Basic",
        },
    ];
</script>

<section id="experience">
    <p class="section__text__p1 mb-1">
        <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-slate-500
            from-purple-600 dark:to-slate-300">Explore My</span
        >
    </p>
    <h1
        class="title md:mb-5 mt-0 text-3xl font-extrabold md:text-5xl lg:text-6xl
         text-slate-500 dark:text-slate-200"
    >
        Experience
    </h1>
    <div class="experience-details-container">
        <div class="about-containers">
            <div class="details-container border rounded-3xl">
                <h2
                    class="text-xl md:text-3xl font-semibold mb-5 md:mb-10 text-slate-300"
                >
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r
                        from-slate-400 to-purple-300">Dev</span
                    >
                </h2>
                <div class="article-container">
                    {#each dev as experience}
                        <Skill
                            name={experience.name}
                            level={experience.level}
                        />
                    {/each}
                </div>
            </div>
            <div class="details-container border rounded-3xl">
                <h2
                    class="text-xl md:text-3xl font-semibold mb-5 md:mb-10 text-slate-300"
                >
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r
                        to-slate-400 from-purple-300">Ops</span
                    >
                </h2>
                <div class="article-container">
                    {#each ops as experience}
                        <Skill
                            name={experience.name}
                            level={experience.level}
                        />
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <ArrowIcon scrollTo="#projects" />
</section>
