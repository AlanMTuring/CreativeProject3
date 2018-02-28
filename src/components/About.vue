<template>
    <div>
        <link href="https://fonts.googleapis.com/css?family=Rammetto+One" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
        <div id="about-content">
            <h1 id="about-title">About</h1>
            <div id="about-text">
                <p>Since the beginning, Kalin Nelson has been inspired by love and feeling. His music is meant to inspire others with the same passion he feels for life and love. Though starting to write music for his high school sweetheart, he now writes music for his beautiful wife, Michelle. She is his world, and he makes his music for her.</p>
                <p>Kalin grew up in a small town called Perkasie, PA. He began playing piano at a very young age. Along his musical journey he learned to play the clarinet, tuba, guitar, ukulele, drums, and percussion. Now, he mainly plays piano and guitar, but will pick up and play any instrument he can! In his teenage years, he was inspired by artists like Jason Mraz and Jack Johnson and wrote his first songs on his acoustic guitar. Since then, other influences come from country and pop artists.</p>
                <p>Currently, Kalin is a Computer Science student at Brigham Young University, living in Draper,UT with his beautiful wife. They are expecting their first child, with music for him soon to follow. Kalin hopes to one day be a Software Developer. While trying to pay the bills, he performs periodically for some cash. See the "Tours" page for more information.</p>
            </div>
        </div>

        <div id="follow-info">
            <div id="left-div">
                <p>Follow</p>
                <p>Kalin Nelson</p>
                <ul id="social_media_list">
                    <li><a href="https://www.facebook.com/kalinnelsonmusic" target="_blank" class="fa fa-facebook"></a></li>
                    <li><a href="https://www.snapchat.com/add/nilaknoslen" target="_blank" class="fa fa-snapchat-ghost"></a></li>
                    <li><a href="https://www.instagram.com/kalinnelson/" target="_blank" class="fa fa-instagram"></a></li>
                    <li><a href="https://www.youtube.com/channel/UC5HZ9nDZFNf1QMI_yBuLFpQ?view_as=subscriber" target="_blank" class="fa fa-youtube"></a></li>
                    <li><a href="https://www.reddit.com/user/nilaknoslen/" target="_blank" class="fa fa-reddit"></a></li>
                </ul>
            </div>
            <div id="right-div">
            </div>
        </div>
    </div>
</template>



<style scoped>
#about-title {
    color: white;
    text-align: center;
    font-family: 'Rammetto One', cursive;
    font-size: 45px;
}

#about-content {
    margin: 240px 0 200px 0;
}

#about-text p {
    font-family: 'Rammetto One', cursive;
    color: white;
    margin: 20px 17%;
}

#follow-info {
    margin: 100px 0;
}

#left-div {
    background-color: #a9a9a9;
    width: 65%;
    text-align: center;
    height: 400px;
    float: left;
}

#left-div p:nth-of-type(1) {
    color: #FFF;
    font-family: 'Anton', sans-serif;
    margin-bottom: 0;
    font-size: 40px;
}
#left-div p:nth-of-type(2) {
    color: #FFF;
    font-family: 'Anton', sans-serif;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 65px;
}

#right-div {
    width: 35%;
    height: 400px;
    float: left;
    background: url(../assets/cajon_bw.jpg) no-repeat center;
    background-size: cover;
}


.fa {
    padding: 20px;
    font-size: 7px;
    width: 15px;
    height: 15px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    float: left;
}


.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
    background: #000;
    color: #FFF;
    background-size: contain;
}

.fa-instagram {
    background: #000;
    color: #FFF;
}

.fa-snapchat-ghost {
    background: #000;
    color: #FFF;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.fa-youtube {
    background: #000;
    color: #FFF;
}

.fa-reddit {
    background: #000;    
    color: #FFF;
}

#social_media_list {
    list-style-type: none;
    display: inline;
    -webkit-padding-start: 0 !important;
}

#social_media_list > li {
    display: inline-block !important;
    margin: 5px;
}
</style>

