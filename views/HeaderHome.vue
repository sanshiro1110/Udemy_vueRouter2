<template>
  <nav>
    <h2>HeaderHome</h2>
    <router-link
      to="/"
      active-class="link--active"
      exact
      class="link"
    >Home</router-link>
    <router-link
      :to="{ name: 'users-id-profile', params: {id: 1}, query: {lang: 'ja', page: 2}, hash: '#next-user'}"
      active-class="link--active"
      exact
      class="link"
    >Users</router-link>
    <button @click="increment(2)">+1</button>
    <button @click="decrement(2)">-1</button>
  </nav>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 20px;
  }
</style>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    // ...mapMutations(["increment", "decrement"]),
    ...mapActions(["increment", "decrement"]),
    // increment() {
    //   this.$store.dispatch('increment', 2);
    // },
    // decrement() {
    //   this.$store.dispatch('decrement', 2);
    // },
  }
}
</script>
