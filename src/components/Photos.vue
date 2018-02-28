<template>
    <div class="photo-wrapper">
        <div class="photo-wrap">
            <img src="../assets/album_cover.jpg" class="photo">
        </div>
        <div class="photo-wrap">
            <img src="../assets/cajon.jpg" class="photo">
        </div>
        <div class="photo-wrap">
            <img src="../assets/hot_wedding.jpg" class="photo">
        </div>
        <div class="photo-wrap">
            <img src="../assets/guitar.jpg" class="photo">
        </div>
        <div class="photo-wrap">
            <img src="../assets/piano1.jpg" class="photo">
        </div>
        <div class="photo-wrap">
            <img src="../assets/temple.jpg" class="photo">
        </div>
    </div>
</template>


<style scoped>
.photo-wrapper {
    margin: 150px 40px 80px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    justify-content: center;
}

.photo-wrap {
    width: 1fr;
}

.photo {
    width: 100%;
    transition: all .2s ease-in-out;
    border:10px solid #000000;

}

.photo:hover {
    transform: scale(1.05);
    transition: opacity 0.3s ease-in-out;
}
</style>
