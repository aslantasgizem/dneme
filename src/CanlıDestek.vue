<template>
    <div>
         <header1/>
        <canlıdestek/>
         <footer1/>
    </div>
</template>


<script>
import header1 from "./components/header1.vue"
import canlıdestek from "./components/canlıdestek.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        canlıdestek,
        footer1
    }

}
</script>