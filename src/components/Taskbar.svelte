<div bind:this="{taskbar}" class="max-w-[800px] mx-auto p-4 rounded-md backdrop-filter backdrop-blur-md flex justify-start gap-3">

    {#each $apps as app}
        <button on:click="{newApp(app)}" class=""> 
            <AppIcon name={app.name} icon={app.icon}/>
        </button>
    {/each}

</div>

<script>
import { apps } from "../memory/apps";
import { screen } from "../memory/screen";
import { createEventDispatcher } from "svelte";
import AppIcon from "./app-icon.svelte";
import Topbar from "./Topbar.svelte";

let dispatch = createEventDispatcher()

let taskbar


function newApp(app){
    
    dispatch('openApp',{
        app: app
    })

}



</script>