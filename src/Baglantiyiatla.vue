<template>
    <div>
         <header1/>
        <baglantiyiatla />
         <footer1/>
    </div>
</template>

<script>


import header1 from "./components/header1.vue"
import baglantiyiatla from "./components/baglantiyiatla.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        baglantiyiatla,
        footer1
    }
    
}
</script>