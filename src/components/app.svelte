<div bind:this="{app}" class="absolute bg-white border-2 rounded-3xl shadow-2xl" style="min-width:{width}; min-height:{height}; left:{left}px; top:{top}px;" on:mouseenter="{focus}" on:mouseleave="{focus}">

    <div class="w-full p-2 px-4 rounded-t-3xl flex justify-between bg-gray-50" on:mousedown="{onMouseDown}">
        <div class="">
            {name}
        </div>
        <div class="flex gap-3">
            <button on:click={resize}><i class="far fa-square"></i></button>
            <button on:click="{triggerClose}" class="hover:text-red-600"><i class="fas fa-times"></i></button>
        </div>
    </div>
   <slot></slot>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
<script>
import { createEventDispatcher } from "svelte";


export let width, height, name

let app

// closing app
let dispatch = createEventDispatcher()

function triggerClose() {
    app.remove()
    dispatch('appClose')
}

// Focusing 

function focus(event) {
    if(event.type === 'mouseenter'){
        app.classList.add('z-30')
    }else{
        app.classList.remove('z-30')
    }
}




// Resizing 
let lastLeft = 0
let lastTop= 0
let lastWidth = 0
let isMax = false

function resize() {
    if(!isMax){

        lastWidth = width
        width = '95%'

        lastLeft = left
        left = 25

        isMax = true

    }else{
        width = lastWidth
        isMax = false
    }
}



//moving the app around


let left = Math.floor(Math.random(0)*300)
let top = Math.floor(Math.random(0)*100)


let moving = false;

function onMouseDown() {
    moving = true;
}

function onMouseMove(e) {
    if (moving) {
        left += e.movementX;
        top += e.movementY;
    }
}

function onMouseUp() {
    moving = false;
}



</script>