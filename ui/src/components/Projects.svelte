<script>
    import ProjectCard from "./ProjectCard.svelte";
    import Project1Icon from "../assets/project-1.png";
    import Project2Icon from "../assets/project-2.png";
    import Project3Icon from "../assets/project-3.png";
    import ArrowIcon from "./icons/ArrowIcon.svelte";

    const projects = [
        {
            icon: Project1Icon,
            title: "Product Management System",
            github: "",
        },
        {
            icon: Project2Icon,
            title: "Container Validation & Transportation Solution",
            github: "",
        },
        {
            icon: Project3Icon,
            title: "Document.io",
            github: "",
        },
        {
            icon: Project3Icon,
            title: "Bikewale",
            github: "",
        },
        {
            icon: Project3Icon,
            title: "Localize MSSQL",
            github: "",
        },
        {
            icon: Project3Icon,
            title: "Web Automator",
            github: "",
        },
    ];
</script>

<section id="projects">
    <p class="section__text__p1 mb-1">
        <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-slate-500 from-orange-400"
            >Browse My Recent</span
        >
    </p>
    <h1
        class="title md:mb-5 mt-0 text-3xl font-extrabold md:text-5xl lg:text-6xl text-slate-500"
    >
        Projects
    </h1>
    <div class="experience-details-container">
        <div class="about-containers">
            {#each projects as project}
                <ProjectCard
                    icon={project.icon}
                    title={project.title}
                    github={project.github}
                />
            {/each}
        </div>
    </div>
    <ArrowIcon scrollTo="#contact" />
</section>
