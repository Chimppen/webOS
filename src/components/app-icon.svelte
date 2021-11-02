<div bind:this="{iconContainer}" class="p-2 rounded-2xl bg-white">

</div>

<script>
import { onMount } from "svelte";

let iconContainer

export let icon

onMount(()=>{

    iconContainer.innerHTML = icon
})

</script>