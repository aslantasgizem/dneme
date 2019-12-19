<template>
    <div>
         <header1/>
        <tel/>
        <footer1/>
    </div>
</template>


<script>
import header1 from "./components/header1.vue"
import tel from "./components/tel.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        tel,
        footer1
    }

}
</script>