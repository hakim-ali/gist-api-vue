<template>
  <v-list three-line>
    <template v-for="(fork, index) in forks">
      <v-list-item
        :key="index"
        :href="`https://gist.github.com/${fork.id}`"
        target="_blank"
      >
        <v-list-item-avatar>
          <v-img
            v-if="fork.user && fork.user.avatar_url"
            :src="fork.user.avatar_url"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-black">{{
            fork.user.name
          }}</v-list-item-title>
          <v-list-item-subtitle
            >Login Id: <b>{{ fork.user.login }} </b></v-list-item-subtitle
          >
          <v-list-item-subtitle
            >Total Public Gist:
            <b>{{ fork.user.public_gists }}</b></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="index < forks.length - 1" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    forks: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
