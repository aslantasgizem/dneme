<template>
    <div>
         <header1/>
        <detay/>
         <footer1/>
    </div>
</template>

<script>
import header1 from "./components/header1.vue"
import detay from "./components/detay.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        detay,
        footer1
    }

}
</script>