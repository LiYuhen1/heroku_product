<template>
  <nav>
    <router-link to="/" id="home">PolygenRx</router-link>
    <router-link to="/platform">Our Platform</router-link>
    <router-link to="/results">Our Results</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/career">Career</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/"></router-link>
  </nav>
  <router-view/>
</template>

<script>
export default{
    name: 'NavBar',
}
</script>

<style scoped>

nav {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 51px;
}

nav a {
  text-decoration: none;
  
  color: #FFFFFF;
  margin-right: 31px;
}

nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

#home {
  font-size: x-large;
  font-weight: bold;
  margin-right: 312px;

}

</style>

