<template>
    <div class="wiggy">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <div class="input">
                        <form @submit.prevent="createNewBlog()">
                            <div class="form-group">
                                <input class="form-control" type="text" v-model="title" placeholder="Title">
                                <div>
                                    <trumbowyg v-model='body'></trumbowyg>
                                </div>
                                <button type="submit" class="btn btn-default">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import trumbowyg from 'vue-trumbowyg';
    import 'trumbowyg/dist/ui/trumbowyg.css';

    export default {
        name: 'wiggy',
        data() {
            return {
                title: '',
                body: ''
            }
        },
        methods:{
            createNewBlog() {
                var newBlog = {
                    title: this.title,
                    body: this.body
                }
                this.$store.dispatch("createBlog", newBlog)
            }
        },
        components:{
            trumbowyg
        }
    }

</script>

<style scoped>
    .wiggy{
            padding: 2rem 0 2rem 0;
            background-color: white;
           border-radius: 25px;
           margin: 0 5rem 0 5rem;
        }
</style>