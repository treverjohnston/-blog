<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <h1>{{blog.title}}</h1>
                    <p v-html="blog.body"></p>
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
        mounted() {
            this.$store.dispatch('getBlog', this.$route.params.blogId)
        },
        computed: {
            blog() {
                return this.$store.state.activeBlog
            }
        }

    }
</script>

<style></style>