<script>
    import ArrowIcon from "../../assets/arrow.png";

    export let scrollTo = "";
</script>

<img
    src={ArrowIcon}
    alt="Arrow icon"
    class="icon arrow"
    onclick={`location.href='./${scrollTo}'`}
/>
