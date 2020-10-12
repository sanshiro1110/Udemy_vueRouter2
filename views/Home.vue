<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページにいく</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    toUsers() {
      // this.$router.push('/users/1');
      this.$router.push({
        name: 'users-id-profile',
        params: {id: 1},
      })
    }
  },
  // computed: {
  //   doubleCount() {
  //     return this.$store.getters.doubleCount;
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount;
  //   },
  // }
  // computed: mapGetters({
  //   myComponentDoubleCount: "doubleCount",
  //   myComponentTripleCount: "tripleCount",
  // })
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
  }
}
</script>


