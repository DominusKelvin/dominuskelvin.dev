<template>
  <div class="container">
    <nav>
      <p class="brand"><nuxt-link to="/">Dominus Kelvin</nuxt-link></p>
      <ul class="main-nav">
        <li><nuxt-link to="/">Blog</nuxt-link></li>
        <li>
          <a
            href="https://www.smashingmagazine.com/author/kelvin-omereshone/"
            target="_blank"
            >Writings</a
          >
        </li>
        <li><nuxt-link to="/">Creations</nuxt-link></li>
      </ul>

      <ul class="social">
        <li>
          <a href="https://github.com/DominusKelvin" target="_blank">github</a>
        </li>
        <li>
          <a href="https://twitter.com/Dominus_Kelvin" target="_blank"
            >twtter</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kelvinomereshone/"
            target="_blank"
            >linkedIn</a
          >
        </li>
        <li>
          <a href="mailto:kelvinomereshone@gmail.com" target="_blank">email</a>
        </li>
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
    <aside>
      <section class="card">
        <h2>Skills</h2>
        <ul>
          <li>javascript</li>
          <li>vue</li>
          <li>nuxt</li>
          <li>node</li>
          <li>sails</li>
          <li>automation</li>
          <li>testing</li>
          <li>technical writing</li>
        </ul>
      </section>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style>
body {
  background-color: #191710;
  color: #7e8d85;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  text-decoration: none;
  color: rgb(77, 148, 110);
  transition: all 300ms;
  font-weight: 600;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.container {
  margin: 0;
  padding: 0 15em;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: 100vh;
}

main {
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}

nav {
  padding-right: 0.5rem;
  margin-left: 2rem;
}

nav ul {
  margin-top: 2rem;
}
nav ul > li {
  margin-bottom: 1.5rem;
  width: 50%;
}

nav ul a {
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
}
.brand {
  font-size: 2rem;
  font-weight: 600;
  margin-left: 1rem;
}
.brand a {
  color: #7e8d85;
}

ul.social {
  margin-top: 3rem;
}

ul.social a {
  color: rgba(77, 148, 110, 0.6);
}

ul.social a:hover {
  color: rgba(77, 148, 110);
}

nav ul.main-nav a:hover {
  background-color: rgb(77, 148, 110, 0.3);
  border-radius: 2rem;
  color: #7e8d85;
}

aside {
  margin-top: 3rem;
  padding-left: 0.5rem;
}
aside .card {
  width: 50%;
  padding: 0.5rem 1rem;
  color: gray;
}

.card ul > li {
  margin-bottom: 10px;
  background-color: #7e8d85;
  border-radius: 5px;
  color: black;
  padding: 10px;
  border: 1px solid #7e8d85;
}
</style>
