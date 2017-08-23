<template>
        <div class="home">
            <wiggy></wiggy>
            <hr>
            <blogs></blogs>
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
    
            components: {
                // trumbowyg,
                Wiggy,
                Blogs
            },
    
    
            // Lifecycle Hooks
            mounted() {
                this.$store.dispatch("getBlogs")
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
    
    </style>