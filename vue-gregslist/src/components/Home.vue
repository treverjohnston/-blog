<template>
    <div>
        <form @submit.prevent="createNewBlog()">
            <div class="form-group">
                <input class="form-control" type="text" v-model="title" placeholder="Title">
                <div>
                    <trumbowyg v-model='body'></trumbowyg>
                </div>
                <button type="submit" class="btn btn-default">Create</button>
            </div>
        </form>
        <hr>
        <div class="container-fluid">
            <div class="row">
                <div v-if="blogs.length > 0">
                    <ul v-for="blog in blogs">
                        <div class="col-xs-11">
                            <h1 class="text-center">
                                <router-link :to="{name: 'Blog', params: {blogId: blog._id}}">
                                    {{blog.title}}
                                </router-link>   
                            </h1>
                            <div v-html="blog.body">
                            </div>
                            <hr>
                        </div>
                        <div class="col-xs-1">
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
    import trumbowyg from 'vue-trumbowyg';
    import 'trumbowyg/dist/ui/trumbowyg.css';


    export default {
        data() {
            return {
                test: 'guess',
                title: '',
                body: '',
                content: ''
            }
        },

        computed: {
            blogs() {
                return this.$store.state.blogs
            }
        },

        component: {
            trumbowyg
        },

        methods: {
            createNewBlog() {
                var newBlog = {
                    title: this.title,
                    body: this.body
                }
                this.$store.dispatch("createBlog", newBlog)
                // this.$store.actions.createBlog() //this is essentially the same as above
            },

            deleteBlog(blogId){
                this.$store.dispatch("deleteBlog", blogId)
            }
        },

        // Lifecycle Hooks
        mounted() {
            this.$store.dispatch("getBlogs")
        },
        beforeDestroy() {
            console.log("Goodbye home")
        }
    }

</script>

<style>
    /* @import '~trumbowyg/dist/ui/css/trumbowyg.css' */
</style>