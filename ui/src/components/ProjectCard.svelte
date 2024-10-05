<script>
    export let icon = null;
    export let title = "";
    export let github = "";
</script>

<div class="details-container border rounded-3xl w-4/6">
    <div class="article-container">
        <img src={icon} alt="Project 1" class="project-img" />
    </div>
    <h2 class="experience-sub-title project-title">{title}</h2>
    <div class="btn-container">
        <button
            class="btn border rounded-sm px-5 py-1"
            onclick="location.href='https://github.com/'"
        >
            Github
        </button>
        <!-- <button
            class="btn btn-color-2 project-btn"
            onclick="location.href='https://github.com/'"
        >
            Live Demo
        </button> -->
    </div>
</div>
