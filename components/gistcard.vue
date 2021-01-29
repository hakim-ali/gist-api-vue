<template>
  <v-sheet min-height="70vh" rounded="lg">
    <loader v-if="loading" :visible="loading" />
    <div v-else>
      <p v-if="gists.length > 0" class="text-center pa-5">
        {{ gists.length }} gists found against username
        <b>{{ username }}</b>
      </p>
      <gist-list v-if="gists.length > 0" :gists="gists" />
      <p v-else-if="username && gists.length === 0" class="text-center pa-5">
        No Gists found for username <b>{{ this.username }}</b>
      </p>
      <p v-else class="text-center pa-5">
        Please enter username to search the Gists
      </p>
    </div>
  </v-sheet>
</template>

<script>
import gistList from '@/components/gistList'
import Loader from '@/components/Loader'
import { mapState } from 'vuex'
export default {
  components: {
    gistList,
    Loader,
  },
  props: {
    gists: {
      type: Array,
      default: () => [],
    },
    username: {
      type: String,
      default: () => '',
    },
  },

  computed: {
    ...mapState({
      loading: (state) => state.gists.loading,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
