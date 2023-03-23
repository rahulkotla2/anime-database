<template>
    <div class="card">
        <a href="#" target="_blank">
            
                <img :src="anime.images.jpg.image_url" :alt="anime.title + ' Poster'">
                <h3>{{ anime.title }}</h3>
            
        </a>
    </div>
</template>

<script>
export default {
    props: ['anime']
}
</script>

<style scoped>
.card {
    flex: 1 1 33%;
    width: 33%;
    max-width: 33%;
    padding: 0px 8px;
    margin-bottom: 16px;
}
.card a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


.card img {
    width: 100%;
    max-width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
}

.card h3 {
    padding: 5px;
    height: 50px;
    overflow-y: scroll;
    color: #313131;
    text-align: center;
    transition: 0.4s;
}

.card h3::-webkit-scrollbar {
    width: 0;
}

.card:hover img {
    transform: scale(1.05);
}

.card:hover h3 {
    color: #24c444;
}

@media screen and (min-width : 390px) and (max-width : 550px) {
    .card h3 {
        font-size: small;
        height: 30px;
        overflow: scroll;
        padding: 0;
    }

    h3::-webkit-scrollbar-thumb {
        width: 2px;
    }

    .card img {
        width: 100px;
        height: 130px;
    }
}

@media screen and (max-width :390px) {
    .card {
        max-width: none;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card a img {
        width: 100%
    }
}
</style>