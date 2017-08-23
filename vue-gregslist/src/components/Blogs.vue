<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div v-if="blogs.length > 0">
                    <ul v-for="blog in blogs">
                        <div class="col-xs-12 col-md-offset-1 col-md-10">
                            <h1 class="text-center">
                                <router-link :to="{name: 'Blog', params: {blogId: blog._id}}">
                                    {{blog.title}}
                                </router-link>
                            </h1>
                            <hr>
                            <div v-html="blog.body">
                            </div>
                            <hr>
                        </div>
                        <div class="col-xs-12 col-md-1">
                            <button class="btn btn-danger" @click="deleteBlog(blog._id)">Delete</button>
                        </div>
                    </ul>
                </div>
                <div v-else>
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods:{
            deleteBlog(blogId) {
                this.$store.dispatch("deleteBlog", blogId)
            }
        },
        computed: {
            blogs() {
                return this.$store.state.blogs
            }
        }
    }

</script>

<style></style>