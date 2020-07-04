<template>
  <div class="container">
    <nav>
      <p><strong>Dominus Kelvin </strong></p>
      <ul>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/creations">Creations</nuxt-link></li>
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
  color: #fff;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  font-family: Arial, Helvetica, sans-serif;
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

main,
aside {
  padding-left: 0.5rem;
}
nav {
  padding-right: 0.5rem;
  margin-left: 2rem;
}

aside {
  margin-top: 3rem;
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
