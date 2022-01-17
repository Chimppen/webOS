<div class="max-w-[800px] mx-auto p-4 rounded-md backdrop-filter backdrop-blur-md flex justify-start gap-3">

    {#each os.apps as app}
        <button on:click="{()=>callApp(app)}" class=""> 
            <AppIcon name={app.name} icon={app.icon}/>
        </button>
    {/each}

</div>

<script>
import { createEventDispatcher } from "svelte";
import AppIcon from "./app-icon.svelte";
import { os } from "../OS";

let dispatch = createEventDispatcher()



function callApp(app){
    
    dispatch('openApp',{
        app: app
    })

}



</script>