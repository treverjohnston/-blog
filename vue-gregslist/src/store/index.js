import $ from 'jquery'
import vuex from 'vuex'
import vue from 'vue'

var ip = "//localhost:3000"

vue.use(vuex)

var store = new vuex.Store({
    state: {
        blogs: [],
        activeBlog: []
    },

    mutations:{
        //mutations should always be pure function--no logic AKA setters
        //signature for all mutations
        addBlog(state, payload){
            state.blogs.push(payload)
        },

        updateBlogs(state, blogs){
            state.blogs = blogs
        },
        setActiveBlog(state, blog){
            state.activeBlog = blog
        },
        deleteBlog(state){
            state.blogs
        }

    },
    
    actions: {
        //signature for all actions
        createBlog({ commit, dispatch }, payload) {
            $.post(ip+'/api/blogs', payload)
            .then(actualBlog=>{
                commit('addBlog', actualBlog)
            })
            .fail(err =>{
                console.error(err)
            })
        },

        getBlogs({commit, dispatch}){
            $.get(ip + '/api/blogs')
            .then(blogs =>{
                commit('updateBlogs', blogs)
            })
            .fail(err =>{
                console.error(err)
            })
        },

        // finish
        getBlog({commit, dispatch}, blogId){
            $.get(ip +'/api/blogs/'+blogId)
            .then(blog=>{
                commit('setActiveBlog', blog)
            })
            .fail(err =>{
                console.error(err)
            })
        },

        deleteBlog({ commit, dispatch }, blogId){
            $.ajax({
                contentType: 'application/json',
                method: 'DELETE',
                url: ip+'/api/blogs/' + blogId
              })
                .then(blogs=>{
                  dispatch('getBlogs')
                })
                .fail(err =>{
                    console.error(err)
                })
        },
        // updateBlog({ commit, dispatch }, payload){

        // },
    }
})

// var state = {
//     blogs: []
// }

// var store = {
//     state: state,

//     getBlogs(){
//         console.log('almost')
//         $.get(ip + '/api/blogs')
//         .then((res)=>{
//                 console.log(res)
//                 state.blogs = res
//             })
//             .catch((error)=> console.log(error))
//     }


// }

export { store }

// export default store
// would mean no curlies required