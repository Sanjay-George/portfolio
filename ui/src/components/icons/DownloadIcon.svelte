<script>
    export let size = 8;
    export let color = "gray-800";

    $: classes = `size-${size} text-${color} border p-2 rounded-full 
    transition-colors ease-in-out duration-300 hover:text-purple-500`;
</script>

<svg
    class={classes}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
>
    <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
    />
</svg>
