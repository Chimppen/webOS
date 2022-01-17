import Kernel from "web-os-core";
import * as browserApp from "../apps/browser/app.config";

let config = {
    apps:[],
    files:[
        {
            name:"root:",
            subfolders:[],
            files:[]
        }
    ]
}

// initiate 
export let os = new Kernel(config)


os.registerApp({
    name:browserApp.appName,
    icon:browserApp.appIcon,
    main:browserApp.main(),
})