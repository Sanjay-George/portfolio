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
            name: "Azure",
            level: "Basic",
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
    <p class="section__text__p1">Explore My</p>
    <h1
        class="title md:mb-5 mt-0 text-3xl font-extrabold md:text-5xl lg:text-6xl text-slate-500"
    >
        Experience
    </h1>
    <div class="experience-details-container">
        <div class="about-containers">
            <div class="details-container">
                <h2 class="experience-sub-title">Dev</h2>
                <div class="article-container">
                    {#each dev as experience}
                        <Skill
                            name={experience.name}
                            level={experience.level}
                        />
                    {/each}
                </div>
            </div>
            <div class="details-container">
                <h2 class="experience-sub-title">Ops</h2>
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
