<script>
    export let name = "";
    export let level = "";
    import CheckmarkIcon from "../assets/checkmark.png";
</script>

<article>
    <img src={CheckmarkIcon} alt="Skill icon" class="icon" />
    <div>
        <h3 class="text-lg sm:text-2xl font-bold text-slate-500 text-nowrap">
            {name}
        </h3>
        <p class="xs:text-sm sm:text-md text-slate-400">{level}</p>
    </div>
</article>
