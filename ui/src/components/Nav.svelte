<script>
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    const items = [
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Experience",
            link: "#experience",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];
</script>

<nav id="desktop-nav">
    <div
        class="logo text-slate-400 border-solid border-b-2 border-slate-400 px-0 py-0"
    >
        S. GEORGE
    </div>
    <div>
        <ul class="nav-links">
            {#each items as item}
                <li
                    class="text-slate-400
                    border-b-2 border-transparent hover:border-slate-400
                    transition-colors ease-in-out duration-300"
                >
                    <a href={item.link}>{item.name}</a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
<nav id="hamburger-nav">
    <div
        class="logo text-slate-400 border-solid border-b-2 border-slate-400 px-0 py-0"
    >
        S. GEORGE
    </div>
    <div class="hamburger-menu">
        <div class="hamburger-icon" on:click={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="menu-links">
            {#each items as item}
                <li
                    class="text-slate-400
                    hover:border-b-2 hover:border-slate-400
                    transition-colors ease-in-out duration-300"
                >
                    <a href={item.link}>{item.name}</a>
                </li>
            {/each}
        </div>
    </div>
</nav>
