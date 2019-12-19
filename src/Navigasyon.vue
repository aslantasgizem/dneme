<template>
    <div>
         <header1/>
        <navigasyon/>
         <footer1/>
    </div>
</template>


<script>
import header1 from "./components/header1.vue"
import navigasyon from "./components/navigasyon.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        navigasyon,
        footer1
    }

}
</script>