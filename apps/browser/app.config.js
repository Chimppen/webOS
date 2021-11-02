import Main from "./main.svelte";
import icon from "./app-icon";

export let appName = "Browser's Browser"

export let appIcon = icon

export function main() {
    return Main
}