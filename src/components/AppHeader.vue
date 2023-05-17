<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/dramatic.png" alt="Logo" class="logo">
    </router-link>
    <nav class="navigation">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">TV SHOWS</a></li>
        <li><a href="#">MOVIES</a></li>
        <li><a href="#">NEW</a></li>
        <li>
          <form class="search-form">
            <input type="text" v-model="searchQuery" placeholder="Search">
            <router-link :to="{ path: '/search', query: { q: searchQuery } }">
              <img src="../assets/search.png" alt="Search icon" class="search-icon">
            </router-link>
          </form>
          <img src="../assets/gift.png" alt="Gift icon" class="gift-icon">
          <img src="../assets/bell.png" alt="Bell icon" class="bell-icon">
          <div class="avatar">
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    searchMovies() {
      this.$router.push({ name: 'SearchResult', query: { q: this.searchQuery } });
    }
  }
};
</script>
<style>

.header {
  width: 100%;
  height: 93px;
  background: linear-gradient(90.53deg, rgba(0, 0, 0, 0.75) 0.45%, rgba(102, 80, 165, 0.75) 105.51%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo {
  width: 180px;
  height: 49px;
  object-fit: contain;
  margin-left: 30px;
}

.navigation ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  padding: 0;
  margin-right: 35em;
}

.navigation ul li {
  margin: 0 10px;
  flex-shrink: 0;
}

.navigation ul li:first-child {
  margin-left: 0;
}

.navigation ul li:first-child a {
  color: #FFFFFF;
  font-weight: bold;
  margin-left: 0;
  margin-right: auto;
}

.navigation ul li a {
  position: relative;
  color: #A1B1CB;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-decoration: none;
  padding: 0 10px;
  letter-spacing: 0.04em;
  margin-right: 0;
  margin-left: 32px;
  flex-shrink: 0;
}

.navigation ul li a.active,
.navigation ul li a:hover {
  color: #FFFFFF;
}

.navigation ul li:not(:first-child) a {
  margin-left: 32px;
}

.navigation ul li a::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #FFC907;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}

.navigation ul li a.active::before,
.navigation ul li a:hover::before {
  transform: scaleX(0);
}


.navigation ul li:last-child {
  position: absolute;
  width: 324px;
  height: 37px;
  left: 840px;
  top: 29px;
}

.navigation ul li:last-child form {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 15px;
}

.search-form {
  display: flex;
  align-items: center;
  margin-left: 85px;
  cursor: pointer;
}
.search-form input[type="text"] {
  position: relative; 
  width: 200px;
  height: 37px;
  background-color: #3B567D;
  color: #fff;
  border: none;
  border-radius: 18.5px;
  padding: 0 40px 0 10px; 
  font-size: 14px;
}

.search-icon {
  position: absolute;
  width: 21px;
  height: 21px;
  right: 62px;
  top: -11px;
}

.gift-icon {
  position: absolute;
  width: 31px;
  height: 31px;
  left: 400px;
  top: 1px; 
}

.bell-icon {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 450px;
  top: 3px; 
}

.search-form input[type="text"]::placeholder {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #A2B3CD;
}
.avatar {
  box-sizing: border-box;
  position: absolute;
  width: 59px;
  height: 59px;
  left: 500px;
  top: -11px; 
  border-radius: 50%; 
  border: 2px solid #FFFFFF;
}

</style>