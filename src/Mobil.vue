<template>
    <div>
         <header1/>
        <mobil/>
         <footer1/>
    </div>
</template>


<script>
import header1 from "./components/header1.vue"
import mobil from "./components/mobil.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        mobil,
        footer1
    }

}
</script>