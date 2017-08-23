<template>
    <div class="top">
            <nav class="navbar navbar-default">
                    <div class="container-fluid">
                      <!-- Brand and toggle get grouped for better mobile display -->
                      <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                          aria-expanded="false">
                              <span class="sr-only">Toggle navigation</span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                            </button>
                            <h1 class="header glyphicon glyphicon-book">Blogbook</h1>
                      </div>
              
                      <!-- Collect the nav links, forms, and other content for toggling -->
                      <div class="collapse navbar-collapse">
                          <div class="links nav navbar-nav navbar-right">
                              <router-link :to="{name: 'Home'}">Home</router-link>
                              <router-link :to="{name: 'Blogs'}">Blogs</router-link>
                              <router-link :to="{name: 'Wiggy'}">Post</router-link>
                          </div>


<!-- Log in code -->
                        <!-- <div v-if="loggedIn"class="navbar-form navbar-left login">
                          <form @submit.prevent="login(toggleLogin)">
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="email"v-model="email">
                            </div>
                              <input type="password" class="form-control" placeholder="Password" v-model="password">
                              <button type="submit" class="btn btn-default btn-login">Login/Register</button>
                          </form>
                        </div> -->
                      </div>
                      <!-- /.navbar-collapse -->
                    </div>
                    <!-- /.container-fluid -->
                  </nav>


    </div>
</template>

<script>
    export default {
        name: 'top',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .navbar {
        padding: 2rem 0 2rem 0;
        background-color: #cccccc;
        color: black;
    }

    .links{
        font-size: 4rem;
    }

    .header{
        font-size: 5rem;
        color: black;
    }
</style>