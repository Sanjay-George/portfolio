<script>
    export let name = "";
    export let level = "";
    import CheckmarkIcon from "../assets/checkmark.png";
</script>

<article>
    <img src={CheckmarkIcon} alt="Skill icon" class="icon" />
    <div>
        <h3>{name}</h3>
        <p>{level}</p>
    </div>
</article>
