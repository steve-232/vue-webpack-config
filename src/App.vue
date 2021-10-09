<template>
  <div id="app">
    <router-link to="/">
      <font-awesome-icon icon="home" />
      Home
    </router-link>
    <router-link to="/about">
      <font-awesome-icon icon="info" />
      About
    </router-link>
    <router-view />
  </div>
</template>

<script>
import 'normalize.css';
import './sass/index.scss';

export default {};
</script>
