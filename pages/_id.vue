<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="pt-5">Files</h2>
        <v-sheet rounded="lg">
          <loader v-if="loading" :visible="loading" />
          <file-list v-else-if="files.length > 0" :files="files"></file-list>
          <p v-else class="text-center pa-5">
            No files for this Gist: <b>{{ gistId }}</b>
          </p>
        </v-sheet>
        <h2 class="pt-5">Forks</h2>
        <v-sheet rounded="lg">
          <loader v-if="loading" :visible="loading" />
          <fork-list v-else-if="forks.length > 0" :forks="forks"></fork-list>
          <p v-else class="text-center pa-5">
            No Fork for this Gist: <b>{{ gistId }}</b>
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import fileList from '@/components/fileList'
import forkList from '@/components/forkList'
import Loader from '@/components/Loader'
import { mapState } from 'vuex'

export default {
  components: {
    fileList,
    forkList,
    Loader,
  },
  data() {
    return {
      gistId: '',
    }
  },
  computed: {
    ...mapState({
      files: (state) => state.gists.files,
      forks: (state) => state.gists.forks,
      loading: (state) => state.gists.loading,
    }),
  },
  mounted() {
    this.gistId = this.$route.params.id
    this.getGistDetails()
  },
  methods: {
    async getGistDetails() {
      const res = await this.$store.dispatch('gists/getGistDetails', {
        gistId: this.gistId,
      })
      console.log(res.data)
    },
  },
}
</script>

<style lang="scss" scoped></style>
