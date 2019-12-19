<template>
    <div>
         <header1/>
        <sifremiunuttum/>
        <footer1/>
    </div>
</template>

<script>
import header1 from "./components/header1.vue"
import sifremiunuttum from "./components/sifremiunuttum.vue"
import footer1 from "./components/footer1.vue"


export default {
    name:"app",
    components: {
        header1,
        sifremiunuttum,
        footer1
    }

}
</script>