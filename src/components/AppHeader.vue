<template>
    <nav>
        <ul>
            <li><router-link to="/music">Music</router-link></li>
            <li><router-link to="/photos">Photos</router-link></li>
            <li><router-link to="/" class="home-button">Kalin Nelson Music</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script>
 export default {
     name: 'AppHeader'
 }
</script>



<style scoped>
nav {
    display: inline-block;
    width: 100%;
    background-color: #333;
    border-bottom: 1px solid #222;
    text-align: center;
    position: fixed;
    top: 0;
}

nav ul {
    padding: 15px 0;
    margin: 0;
}

nav li {
    padding-left: 15px;
    padding-right: 15px;
    display: inline-block;
    text-decoration: none;
}

nav a {
    color: #FFF;
    text-decoration: none;
    padding: 20px;
    font-family: 'Great Vibes', cursive;
    font-size: 30px;
}

nav a:hover, nav .active a {
    border-bottom: 5px solid #FFF;
}

nav .home-button {
    color: #f2f2f2;
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
    display: inline;
    padding-bottom: 0;
}

</style>