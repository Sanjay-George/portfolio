<script>
    import ProfilePic from "../assets/about-pic.png";
    import ExperienceIcon from "../assets/experience.png";
    import EducationIcon from "../assets/education.png";
    import ArrowIcon from "./icons/ArrowIcon.svelte";
    import SkillTag from "./SkillTag.svelte";
</script>

<section id="about" class="h-fit lg:mb-20">
    <p class="section__text__p1 mb-1">
        <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-slate-500 from-orange-400"
            >Get To Know More</span
        >
    </p>
    <h1
        class="title md:mb-7 mt-0 text-3xl font-extrabold
        md:text-5xl lg:text-6xl text-slate-500"
    >
        About Me
    </h1>

    <div class="container lg:text-xl sm:border sm:rounded-3xl sm:px-16">
        <div class="my-10 text-slate-400">
            Experienced Software Engineer with over 5 years of expertise in
            building scalable, data-driven solutions. Adept at collaborating in
            agile, cross-functional teams to deliver sustainable and optimized
            products.
        </div>
        <div>
            <ol class="relative border-s border-slate-200">
                <li class="mb-6 ml-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5
                        border border-white"
                    ></div>
                    <time
                        class="text-xs font-extralight leading-none text-slate-700"
                        >January 2023</time
                    >
                    <h3
                        class="text-xl font-semibold text-slate-900 dark:text-white"
                    >
                        Started at newboxes GmbH
                    </h3>
                    <p
                        class="mb-1 mt-3 text-xl font-normal text-slate-400
                         dark:text-slate-400"
                    >
                        Built serverless, event-driven solutions for a logistic
                        client. Engineered data pipelines and optimized data
                        access. Currently working on an internal tool at Rolls
                        Royce to improve production efficiency.
                    </p>

                    <div>
                        <SkillTag color="orange" name="Node.js" />
                        <SkillTag color="slate" name="SQL Server" />
                        <SkillTag color="orange" name="Azure" />
                        <SkillTag color="slate" name="GH Actions" />
                        <SkillTag color="orange" name="Svelte" />
                    </div>
                </li>
                <li class="mb-6 ml-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5
                        border border-white"
                    ></div>
                    <time
                        class="text-xs font-extralight leading-none text-slate-700"
                        >April 2022</time
                    >
                    <h3
                        class="text-xl font-semibold text-slate-900 dark:text-white"
                    >
                        Moved to Germany and started my Masters
                    </h3>
                    <p class="text-xl font-normal text-slate-400">
                        Started my Masters in Applied Computer Science at
                        Hochschule Fulda.
                    </p>
                </li>
                <li class="mb-6 ml-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5 border border-white"
                    ></div>
                    <time
                        class="text-xs font-extralight leading-none text-slate-700"
                        >October 2021</time
                    >
                    <h3
                        class="text-xl font-semibold text-slate-900 dark:text-white"
                    >
                        Team Lead (Bikes division)
                    </h3>
                    <p
                        class="text-xl font-normal text-slate-400 dark:text-slate-400"
                    >
                        Started leading both teams of the bikes division.
                    </p>
                </li>
                <li class="mb-6 ml-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5 border border-white"
                    ></div>
                    <time
                        class="text-xs font-extralight leading-none text-slate-700"
                        >March 2021</time
                    >
                    <h3 class="text-xl font-semibold text-slate-900">
                        Team Lead (Used Cars Team, CarTrade)
                    </h3>
                    <p class="text-xl font-normal text-slate-400">
                        Led the launch of a new product line for used cars at
                        CarTrade Tech.
                    </p>
                </li>
                <li class="mb-10 ml-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5 border border-white"
                    ></div>
                    <time
                        class="text-xs font-extralight leading-none text-slate-700"
                        >June 2018</time
                    >
                    <h3
                        class="text-xl font-semibold text-slate-900 dark:text-white"
                    >
                        Started at CarTrade Tech
                    </h3>
                    <p
                        class="text-xl mt-3 mb-1 font-normal text-slate-400 dark:text-slate-400"
                    >
                        Started working as SDE1 at CarTrade Tech in the bikes
                        monetization team.
                    </p>
                    <div>
                        <SkillTag color="slate" name=".NET C#" />
                        <SkillTag color="orange" name="React" />
                        <SkillTag color="slate" name="MySQL" />
                        <SkillTag color="orange" name="Docker" />
                        <SkillTag color="slate" name="K8s" />
                    </div>
                </li>
            </ol>
        </div>
    </div>

    <ArrowIcon scrollTo="#experience" />
</section>
