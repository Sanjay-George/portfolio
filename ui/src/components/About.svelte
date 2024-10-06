<script>
    import ArrowIcon from "./icons/ArrowIcon.svelte";
    import SkillTag from "./SkillTag.svelte";

    const about = [
        {
            date: "January 2023",
            title: "Started at newboxes GmbH",
            description:
                "Built serverless, event-driven solutions for a logistics client. Engineered data pipelines and optimized data access. Currently working on an internal platform at Rolls Royce to improve production efficiency.",
            skills: ["Node.js", "SQL Server", "Azure", "GH Actions", "Svelte"],
        },
        {
            date: "April 2022",
            title: "Moved to Germany for my Master degree",
            description:
                "Started my Master degree in Applied Computer Science at Hochschule Fulda.",
        },
        {
            date: "October 2021",
            title: "Team Lead (Bikes division)",
            description:
                "Started leading both teams of the bikes division. Led monolithic to microservices migration and React migration on critical pages, ensuring no downtime.",
        },
        {
            date: "March 2021",
            title: "Team Lead (Used Cars Team)",
            description:
                "Led the launch of a new product line for used cars in India.",
        },
        {
            date: "June 2018",
            title: "Started at CarTrade Tech",
            description:
                "Started working as SDE1 at CarTrade Tech in the bikes monetization team. Worked on dealer and consumer facing features, while also SEO optimizing the platform.",
            skills: [".NET C#", "React", "MySQL", "Docker", "K8s"],
        },
    ];
</script>

<section id="about" class="h-fit lg:mb-20">
    <p class="section__text__p1 mb-1">
        <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-slate-500
            from-purple-600 dark:to-slate-300">Get To Know More</span
        >
    </p>
    <h1
        class="title sm:mb-7 mt-0 text-3xl font-extrabold
        md:text-5xl lg:text-6xl text-slate-500 dark:text-slate-200"
    >
        About Me
    </h1>

    <div class="text-xl sm:border sm:rounded-3xl sm:px-16">
        <div class="my-5 sm:my-10 text-slate-500 dark:text-slate-200">
            Experienced Software Engineer with over 5 years of expertise in
            building scalable, data-driven solutions. Adept at collaborating in
            agile, cross-functional teams to deliver sustainable and optimized
            products.
        </div>
        <div>
            <ol class="relative border-s border-slate-200">
                {#each about as item}
                    <li class="mb-6 ml-10 ms-4">
                        <div
                            class="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5
                            border border-white"
                        ></div>
                        <time
                            class="text-xs font-extralight leading-none dark:text-slate-50"
                            >{item.date}</time
                        >
                        <h3
                            class="text-xl font-semibold text-slate-900 dark:text-slate-100"
                        >
                            {item.title}
                        </h3>
                        <p
                            class="mb-1 mt-3 sm:text-xl font-normal text-slate-400
                            hover:text-slate-500 transition-colors ease-in-out duration-300"
                        >
                            {item.description}
                        </p>

                        <div>
                            {#if item.skills}
                                {#each item.skills as skill, i}
                                    <SkillTag
                                        color={i % 2 !== 0 ? "purple" : "slate"}
                                        name={skill}
                                    />
                                {/each}
                            {/if}
                        </div>
                    </li>
                {/each}
            </ol>
        </div>
    </div>

    <ArrowIcon scrollTo="#experience" />
</section>
