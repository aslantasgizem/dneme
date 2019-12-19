<template>
    <div>
         <header1/>
        <kampanyalar />
         <footer1/>
    </div>
</template>

<script>
import header1 from "./components/header1.vue"
import kampanyalar from "./components/kampanyalar.vue"
import footer1 from "./components/footer1.vue"


export default {
    name:"app",
    components: {
        header1,
        kampanyalar,
        footer1
    }
    
}
</script>