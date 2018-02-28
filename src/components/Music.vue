<template>
    <div>
        <div id="music-header">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/q9HqX6-Z8Pg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

        <div id="music-text">
            <p>Here are some samples of his music. To buy his album, go to the contact page.</p>
        </div>

        <div class="wrapper">
            <div>
                <ul class="song-display">
                    <li><label>Dancin'</label></li>
                    <li><audio controls controlsList="nodownload">
                        <source src="../assets/Dancin.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio></li>
                </ul>
            </div>
            
            <div>
                <ul class="song-display">
                    <li><label>Hurricane</label></li>
                    <li><audio controls controlsList="nodownload">
                        <source src="../assets/Hurricane.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio></li>
                </ul>
            </div>
            
            <div>
                <ul class="song-display">
                    <li><label>Blanky</label></li>
                    <li><audio controls controlsList="nodownload">
                        <source src="../assets/Blanky.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio></li>
                </ul>
            </div>
            
            <div>
                <ul class="song-display">
                    <li><label>What is Love?</label></li>
                    <li><audio controls controlsList="nodownload">
                        <source src="../assets/What_is_Love.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio></li>
                </ul>
            </div>
            
            <div>
                <ul class="song-display">
                    <li><label>The Perfect Woman</label></li>
                    <li><audio controls controlsList="nodownload">
                        <source src="../assets/The_Perfect_Woman.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio></li>
                </ul>
            </div>
            
            <div>
                <ul class="song-display">
                    <li><label>Still Not Over You</label></li>
                    <li><audio controls controlsList="nodownload">
                        <source src="../assets/Still_Not_Over_You.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio></li>
                </ul>
            </div>
            
        </div>
    </div>
</template>


<style scoped>
#music-header {
    text-align: center;
    margin-top: 100px;
    padding-top: 20px;
}

.wrapper {
    margin: 20px 20px 80px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    justify-content: center;
}

.song-display {
    list-style-type: none;
}

#music-text {
    text-align: center;
}

#music-text p {
    font-family: 'Great Vibes', cursive;
    font-size: 35px;
    color: white;
}

.song-display label {
    font-family: 'Great Vibes', cursive;
    font-size: 35px;
    color: white;
}

.song-display audio {
    width: 100%;
}

</style>
