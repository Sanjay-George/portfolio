<script>
    import ArrowIcon from "./icons/ArrowIcon.svelte";
    import SkillTag from "./SkillTag.svelte";

    const about = [
        {
            date: "January 2023",
            title: "Software Engineer at Newboxes GmbH",
            description:
                "Developed event-driven logistics solutions, cutting delays by 53%. Built container validation systems, reducing manual processes by 80%. Enhanced CI/CD efficiency, reducing release cycles by 35%.",
            skills: [
                "Node.js",
                "SQL Server",
                "Azure",
                "GitHub Actions",
                "Svelte",
            ],
        },
        {
            date: "April 2022",
            title: "Moved to Germany for Master's",
            description:
                "Started pursuing Master's in Applied Computer Science at Hochschule Fulda, focusing on cloud computing, data engineering, and software optimization.",
        },
        {
            date: "October 2021",
            title: "Team Lead (Bikes Division) at CarTrade Tech",
            description:
                "Led migration to microservices and React, ensuring zero downtime. Improved system reliability by 80% and optimized key features for better monetization.",
        },
        {
            date: "March 2021",
            title: "Team Lead (Used Cars Team) at CarTrade Tech",
            description:
                "Launched a new used cars product line, boosting revenue streams. Ensured smooth integration with the platform, maintaining high code quality.",
        },
        {
            date: "June 2018",
            title: "Software Engineer at CarTrade Tech",
            description:
                "Engineered SEO-optimized features for high-traffic pages. Developed consumer and dealer-facing solutions, improving user engagement and sales.",
            skills: [".NET C#", "React", "MySQL", "Docker", "Kubernetes"],
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
            Software Engineer with 5+ years of experience delivering scalable,
            data-driven solutions. Skilled in understanding business goals,
            collaborating with cross-functional teams, and holistically
            engineering products that drive business success and customer
            satisfaction.
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
