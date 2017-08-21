import $ from 'jquery'

var ip = "//localhost:3000"

var state = {
    blogs: []
}

var store = {
    state: state,

    getBlogs(){
        console.log('almost')
        $.get(ip + '/api/blogs')
        .then((res)=>{
                console.log(res)
                state.blogs = res
            })
            .catch((error)=> console.log(error))
    }


}




export { store }