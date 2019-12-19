<template>
    <div>
         <header1/>
        <erisilebilirlik />
         <footer1/>
    </div>
</template>

<script>
import header1 from "./components/header1.vue"
import erisilebilirlik from "./components/erisilebilirlik.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        header1,
        erisilebilirlik,
        footer1
    }
    
}
</script>