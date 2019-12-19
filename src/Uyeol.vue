<template>
    <div>
         <header1/>
        <uyeol/>
        <footer1/>
    </div>
</template>

<script>
import header1 from "./components/header1.vue"
import uyeol from "./components/uyeol.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        uyeol,
        footer1
    }

}
</script>