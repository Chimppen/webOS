<div bind:this="{$screen}" class="w-screen h-screen overflow-hidden bg-blue-50" style="background: url('./assets/background.jpg'); background-repeat:no-repeat; background-size:cover; background-position:top;">
    <Topbar/>

    <div class="fixed bottom-0 w-full mb-2">
        <Taskbar on:openApp={openApp}/>
    </div>
</div>

<script>
import { screen } from "./stores/screen";

import Taskbar from "./components/Taskbar.svelte";

import Topbar from "./components/Topbar.svelte";



function openApp(event){

    let app = event.detail.app

    let process  = new app.main({
        target:$screen,
        props:{
            name:app.name
        }
    })

    process.$on('closeApp',()=>{
        console.log('closing app');
        process.$destroy()
    })
}
 
</script>