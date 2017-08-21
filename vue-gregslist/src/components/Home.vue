<template>
    <div>
        <h1>Vue is alright i {{test}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: 'guess'
            }
        },
// Lifecycle Hooks
        mounted(){
            console.log("Home page is where we at")
        },
        beforeDestroy(){
            console.log("Goodbye home")
        },
        beforeCreate(){

        },
        beforeMount(){

        }, //...


    }

</script>

<style></style>