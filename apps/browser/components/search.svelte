<div class="p-3">
    <!-- <div class="flex">
        <button class=""><i class="fas fa-redo-alt"></i></button>
        <button class=""><i class="fas fa-arrow-left"></i></button>
        <button class=""><i class="fas fa-arrow-right"></i></button>
    </div> -->
    <div class="w-full">
        <input type="text" class=" w-full border-2 p-1 outline-none 
focus:border-blue-400 rounded-3xl" placeholder="Url please." bind:value="{url}" on:keydown="{search}">    
    </div>
</div>


<script>

    import { createEventDispatcher } from "svelte";
    
    export let url

    let dispatch = createEventDispatcher()

    
    function search(event) {

        if(event.key === 'Enter'){

            dispatch('search',{
                value:url
            })
        }
    }
</script>