<template>
        <div>
            <h1>Blog</h1>
        </div>
    </template>
    
    <script>
        export default {
            data(){
                return{
                    
                    id: 'this.$route.params.blogId'
                }
            },
            mounted(){
                console.log(this.$route.params.blogId)
            }
        }
    </script>
    
    <style></style>