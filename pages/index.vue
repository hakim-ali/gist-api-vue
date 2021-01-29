<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          v-model="username"
          flat
          light
          hide-details
          solo-inverted
          placeholder="Search for user e.g octocat"
          x-large
          append-icon="mdi-magnify"
          class="pt-5"
          color="black"
          @keydown="onSearchClicked"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <gist-card :gists="gists" :username="username" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gistCard from '@/components/gistCard'

import { mapState } from 'vuex'
export default {
  components: {
    gistCard,
  },
  data() {
    return {
      username: '',
    }
  },

  computed: {
    ...mapState({
      gists: (state) => state.gists.gists,
    }),
  },

  mounted() {},

  methods: {
    onSearchClicked() {
      this.getAllGists()
    },
    async getAllGists() {
      const res = await this.$store.dispatch('gists/getAllGists', {
        username: this.username,
      })
      console.log(res)
    },
  },
}
</script>
