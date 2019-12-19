<template>
    <div>
         <header1/>
        <galaxy />
         <footer1/>
    </div>
</template>

<script>
import header1 from "./components/header1.vue"
import galaxy from "./components/galaxy.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        galaxy,
        footer1
    }
    
}
</script>