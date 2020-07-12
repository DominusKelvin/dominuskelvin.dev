<template>
  <div>
    <section class="bio">
      <section class="hero"></section>
      <img class="avatar" src="~/assets/avatar.jpeg" alt="Kelvin Omereshone" />
      <p class="hello">
        Hola 👋! I am Kelvin Omereshone (dominus_kelvin). I am a Nigerian 🇳🇬
        software engineer that loves working with JavaScript on mostly
        everything. I am also interested in systems architecture and design.
      </p>
      <p class="hello">
        When I'm not actively building softwares, you would find me glued to a
        book(mostly about software engineering),
        <a
          href="https://www.smashingmagazine.com/author/kelvin-omereshone/"
          target="_blank"
          >writing technical articles</a
        >, playing chess, learning Spanish or playing the piano.
      </p>
    </section>
    <newsletter-opt-in />
  </div>
</template>
<style>
.hero {
  background-color: #191710;
  background-image: url('../assets/floating-cogs.svg');
  height: 200px;
}

.avatar {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 5px solid #191710;
  bottom: 80px;
  left: 30px;
  -webkit-box-shadow: -4px -4px 32px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px -4px 32px -10px rgba(0, 0, 0, 0.75);
  box-shadow: -4px -4px 32px -10px rgba(0, 0, 0, 0.75);
}

.hello {
  padding: 0 2rem;
}

/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {
  .hello {
    padding: 0 0.5rem;
    margin-top: -1.5rem;
  }
}
</style>
