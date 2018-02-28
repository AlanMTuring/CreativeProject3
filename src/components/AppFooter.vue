<template>
    <footer>
        <p>&copy; Kalin Nelson Music | <a href="https://github.com/AlanMTuring/CreativeProject3" target="_blank">GitHub Link</a></p>
    </footer>
</template>

<script>
 export default {
     name: 'AppFooter'
 }
</script>

<style scoped>
footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: right;
    background-color: #333;
    height: 45px;
}

footer a {
    margin-right: 20px;
    color: white;
}

footer p {
    color: white;
}
</style>
