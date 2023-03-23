<template>
  <div class="head">
    <header>
      <h1>The <strong>Anime</strong>Database</h1>

      <form class="search-box" @submit.prevent="HandleSearch">
        <input type="search" class="search-field" placeholder="Search for an anime..." v-model="search_query" required>
      </form>
    </header>
    <main>
      <div class="cards" v-if="animeList.length > 0">
        <anime-card v-for="anime in animeList" :key="anime.mal_id" :anime="anime"></anime-card>
      </div>
      <div class="no-results" v-else>
        <h3>Sorry, we have no results...</h3>
      </div>
    </main>
  </div>
</template>

<script>
import AnimeCard from './components/AnimeCard.vue'
export default {
  components: {
    AnimeCard,
  },
  data() {
    return {
      search_query: "",
      animeList: []
    }
  },
  methods: {
     HandleSearch() {
      fetch(`https://api.jikan.moe/v4/anime?q=${this.search_query}`)
      .then(res => res.json())
      .then(data => {
        this.animeList = data.data;
      })
      .catch(err => {
        console.log(err);
      })
      this.search_query = "";
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

a {
  text-decoration: none;
}

header {
  padding-top: 50px;
  padding-bottom: 50px;
}

header h1 {
  color: #888;
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
}

header h1 strong {
  color: #313131;
}

header h1:hover {
  color: #313131;
}

.search-box {
  display: flex;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
}

.search-field {
  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: #f3f3f3;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);

  display: block;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 8px;
  color: #313131;
  font-size: 20px;
  transition: 0.4s;
}

.search-field::placeholder {
  color: #aaa;
}

.search-field:focus,
.search-field:valid {
  color: #fff;
  background-color: #313131;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.15);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}

@media screen and (min-width : 280px) and (max-width : 550px){
   header h1{
    font-size: 25px;
   }
}

@media screen and (max-width :390px){
    .cards{
      display : inline-block;
    }
  }
</style>
