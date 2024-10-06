<script>
    import SkillTag from "./SkillTag.svelte";
    import ArrowIcon from "./icons/ArrowIcon.svelte";
    import Github from "./icons/Github.svelte";

    const projects = [
        {
            title: "Rolls Royce Product Steering Tool",
            description:
                "A tool to improve production efficiency at Rolls Royce.",
            scope: "work",
            github: null,
            skills: ["PHP", "Svelte", "MySQL"],
        },
        {
            title: "Container Transportation Solution",
            description:
                "A solution to optimize container validation and transportation built for a logistics client.",
            scope: "work",
            github: null,
            skills: [
                "Node.js",
                "Azure",
                "SQL Server",
                "GH Actions",
                "Puppeteer",
                "Java",
            ],
        },
        {
            title: "Document.io",
            description:
                "A streamlined tool for capturing, annotating, and documenting websites directly from your browser.",
            scope: "personal",
            github: "https://github.com/Sanjay-George/document.io",
            skills: ["Node.js", "NextJS", "MongoDB"],
        },
        {
            title: "Localize MSSQL",
            description:
                "A docker-based solution to run local MSSQL instances with automated creation of schemas and tables, and population of data from CSV files",
            scope: "personal",
            github: "https://github.com/Sanjay-George/localize-mssql",
            skills: ["Docker", "MSSQL", "Node.js"],
        },
    ];
</script>

<section id="projects">
    <p class="section__text__p1 mb-1">
        <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-slate-500 from-purple-600"
            >Browse My Recent</span
        >
    </p>
    <h1
        class="title md:mb-5 mt-0 text-3xl font-extrabold md:text-5xl lg:text-6xl text-slate-500"
    >
        Projects
    </h1>

    <div class="flex flex-wrap gap-0 justify-center items-center">
        {#each projects as project}
            <div class="w-full xl:w-1/3 lg:w-1/2 px-4 py-4">
                <div
                    class="xl:min-h-[300px] lg:min-h-[280px] border border-gray-200 rounded-2xl"
                >
                    <!-- <img
                        class="rounded-t-lg"
                        src="/docs/images/blog/image-1.jpg"
                        alt=""
                    /> -->
                    <div class="px-7 py-5">
                        <h5
                            class="mb-2 text-xl font-bold tracking-tight text-slate-700 dark:text-slate-200"
                        >
                            {project.title}
                        </h5>
                        <div>
                            {#each project.skills as skill, i}
                                <SkillTag
                                    name={skill}
                                    color={i % 2 !== 0 ? "purple" : "slate"}
                                />
                            {/each}
                        </div>
                        <p
                            class="mb-3 font-normal text-slate-500 dark:text-slate-400 sm:text-xl pt-3"
                        >
                            {project.description}
                        </p>
                        {#if project.github}
                            <a href={project.github} target="_blank">
                                <Github size={10} color="slate-400" /></a
                            >
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <ArrowIcon scrollTo="#contact" />
</section>
