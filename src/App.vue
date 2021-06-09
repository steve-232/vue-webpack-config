<template>
  <div id="app">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
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
