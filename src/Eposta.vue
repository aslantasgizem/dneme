<template>
    <div>
         <header1/>
        <eposta />
         <footer1/>
    </div>
</template>

<script>
import header1 from "./components/header1.vue"
import eposta from "./components/eposta.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        eposta,
        footer1
    }
    
}
</script>