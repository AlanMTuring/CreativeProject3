<template>
    <div class="flex-container">
        <div id="image-wrap"><img id="home-image" src="../assets/album_cover.jpg" alt="Album Cover"></div>
        <div id="home-text">
            <p>Meet</p>
            <p class="cursive">Kalin Nelson</p>
            <p>Musician, Singer, Songwriter, Solo Artist, and Collaborative Extraordinaire.</p>
            <p class="cursive">Buy his best-selling album, "Krazy", now!</p>
        </div>
    </div>
</template>



<style scoped>
.flex-container {
    margin: 35px 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

#image-wrap {
    width: 40%
}

#home-image {
    width: 100%;
    /*height: 400px;*/
    border: 10px solid #FFF;
    margin: 0;
}

#home-text {
    text-align: center;
    margin: 0 20px;
}

#home-text p {
    color: #FFF;
    margin: 0;
}

.cursive {
    font-family: 'Great Vibes', cursive;
}

#home-text p:nth-of-type(1) {
    font-size: 60px;
}

#home-text p:nth-of-type(2) {
    font-size: 120px;
}

#home-text p:nth-of-type(3) {
    font-size: 40px;
}

#home-text p:nth-of-type(4) {
    font-size: 70px;
}
</style>