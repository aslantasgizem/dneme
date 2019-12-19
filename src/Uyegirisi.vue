<template>
    <div>
         <header1/>
        <uyegirisi />
         <footer1/>
    </div>
</template>

<script>
import header1 from "./components/header1.vue"
import uyegirisi from "./components/uyegirisi.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        uyegirisi,
        footer1
    }
    
}
</script>