
<App width="500px" height="500px" name={name}>

    <Search url={url} on:search={triggerSearch}/>
    <hr>
    <Body url={url}></Body>
</App>



<script>
import App from "../../src/components/app.svelte";
import Body from "./components/body.svelte";
import Search from "./components/search.svelte";

export let name, url

function triggerSearch(event) {
    url = event.detail.value
}

</script>