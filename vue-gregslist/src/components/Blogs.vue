<template>
    <div>
        <ul>
            <li v-for="blog in blogs"> 
               <!-- <router-link :to="{name: 'Blog', params: {blogId: blog.id}}"> -->
                <h2>
                    {{blog.title}}
                </h2>   
                <p>
                    {{blog.body}}
                </p>
                <hr>
               <!-- </router-link> -->
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // blogs: store.state.blogs,
                test: 'suppose'
            }
        },
        computed:{
            blogs(){
                return this.$store.state.blogs
            }
        }
        // beforeCreate(){
        //     store.getBlogs()
        // }
    }
</script>

<style></style>