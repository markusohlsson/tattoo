<template>
  <nav class="navigation">
    <div class="container">
      <div class="navigation-left">
        <h1>Ohlsson Tattoo</h1>
      </div>
      <ul class="navigation-right">
        <li class="navigation-link"><router-link to="/">Home</router-link></li>
        <li class="navigation-link"><router-link to="/portfolio">Portfolio</router-link></li>
        <li class="navigation-link"><router-link to="/about">About</router-link></li>
        <li class="navigation-link"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style>
.navigation {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: transparent;
  z-index: 111;
}

.container {
  max-width: 1200px; /* or whatever */
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigation-right {
  display: flex;
  list-style: none;
  gap: 20px;
}
</style>