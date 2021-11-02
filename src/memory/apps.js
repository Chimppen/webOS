import { writable } from "svelte/store";
import * as browser from '../../apps/browser/app.config'


export let apps = writable([
           {
               name: browser.appName,
               icon:browser.appIcon,
               main:browser.main
           }
])

    
