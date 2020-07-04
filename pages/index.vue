<template>
  <div>
    <section class="bio">
      <section class="hero"></section>
      <img class="avatar" src="~/assets/avatar.jpeg" />
    </section>
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
</style>
