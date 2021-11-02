<div class="w-full h-full">
    <iframe bind:this={iframe} class="w-full" src="{url}" style="hidden; min-height:400px">
    </iframe>
</div>

<script>

export let url
let iframe
if (url != undefined) {
    iframe.classList.remove('hidden')
}

</script>