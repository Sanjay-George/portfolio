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
        class="title md:mb-5 mt-0 text-3xl font-extrabold
        md:text-5xl lg:text-6xl text-slate-500"
    >
        About Me
    </h1>

    <div class="container">
        <div class="my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
        </div>
        <div>
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <time
                        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                        >January 2023</time
                    >
                    <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Started working at newboxes GmbH
                    </h3>
                    <p
                        class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
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
                <li class="mb-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <time
                        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                        >April 2022</time
                    >
                    <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Moved to Germany and started my Masters
                    </h3>
                    <p
                        class="text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                        Started my Masters in Applied Computer Science at
                        Hochschule Fulda.
                    </p>
                </li>
                <li class="mb-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <time
                        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                        >October 2021</time
                    >
                    <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Team Lead (Bikes division)
                    </h3>
                    <p
                        class="text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                        Started leading both teams of the bikes division.
                    </p>
                </li>
                <li class="mb-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <time
                        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                        >March 2021</time
                    >
                    <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Promoted to Team Lead (Used Cars Team, CarTrade)
                    </h3>
                    <p
                        class="text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                        Led the launch of a new product line for used cars at
                        CarTrade Tech.
                    </p>
                </li>
                <li class="mb-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <time
                        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                        >June 2018</time
                    >
                    <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Started working at CarTrade Tech
                    </h3>
                    <p
                        class="text-base mb-4 font-normal text-gray-500 dark:text-gray-400"
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

    <!-- <div class="section-container pt-6 items-center h-fit gap-8">
        <div class="section__pic-container w-full">
            <img src={ProfilePic} alt="Profile picture" class="about-pic" />
        </div>
        <div class="about-details-container">
            <div class="about-containers">
                <div class="details-container">
                    <img
                        src={ExperienceIcon}
                        alt="Experience icon"
                        class="icon"
                    />
                    <h3>Experience</h3>
                    <p>2+ years <br />Frontend Development</p>
                </div>
                <div class="details-container">
                    <img
                        src={EducationIcon}
                        alt="Education icon"
                        class="icon"
                    />
                    <h3>Education</h3>
                    <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
                </div>
            </div>
            <div class="text-container">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    quis reprehenderit et laborum, rem, dolore eum quod
                    voluptate exercitationem nobis, nihil esse debitis maxime
                    facere minus sint delectus velit in eos quo officiis
                    explicabo deleniti dignissimos. Eligendi illum libero
                    dolorum cum laboriosam corrupti quidem, reiciendis ea
                    magnam? Nulla, impedit fuga!
                </p>
            </div>
        </div>
    </div> -->
    <ArrowIcon scrollTo="#experience" />
</section>
