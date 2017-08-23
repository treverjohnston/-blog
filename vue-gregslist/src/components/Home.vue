<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="heading">Explore Posts</h2>
                    <hr>
                </div>
                <div v-if="blogs.length > 0">
                    <ul v-for="blog in blogs">
                        <div class="col-xs-12">
                            <h2 class="text-center">
                                <router-link :to="{name: 'Blog', params: {blogId: blog._id}}">{{blog.title}} <div class="glyphicon glyphicon-share-alt"></div></router-link>
                            </h2>
                            <hr>
                        </div>
                    </ul>
                    <div class="text-center">
                        <router-link :to="{name: 'Blogs'}">
                            <h4>Click To See All Posts</h4>
                        </router-link>
                    </div>
                </div>
                <div v-else>
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import trumbowyg from 'vue-trumbowyg';
    // import 'trumbowyg/dist/ui/trumbowyg.css';
    import Wiggy from './Wiggy'
    import Blogs from './Blogs'

    export default {
        data() {
            return {
                test: 'guess',
                title: '',
                body: ''
            }
        },

        computed: {
            blogs() {
                return this.$store.state.blogs
            }
        },


        // Lifecycle Hooks
        mounted() {
            this.$store.dispatch("getBlogs")
        },

        components: {
            // trumbowyg,
            Wiggy,
            Blogs
        }
    }

</script>

<style scoped>
    .trumbowyg-editor {
        background-color: white;
    }

    hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }

    .heading {
        text-align: center;
        font-size: 6rem;
    }
</style>