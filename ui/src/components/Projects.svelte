<script>
    import ProjectCard from "./ProjectCard.svelte";
    import Project1Icon from "../assets/project-1.png";
    import Project2Icon from "../assets/project-2.png";
    import Project3Icon from "../assets/project-3.png";
    import ArrowIcon from "./icons/ArrowIcon.svelte";

    const projects = [
        {
            icon: Project1Icon,
            title: "Project One",
            github: "",
        },
        {
            icon: Project2Icon,
            title: "Project Two",
            github: "",
        },
        {
            icon: Project3Icon,
            title: "Project Three",
            github: "",
        },
    ];
</script>

<section id="projects">
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
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
