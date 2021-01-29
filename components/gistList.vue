<template>
  <v-list three-line>
    <template v-for="(item, index) in gists">
      <v-list-item :key="item.url" :href="`/${item.id}`">
        <v-list-item-avatar>
          <v-img
            v-if="item.owner && item.owner.avatar_url"
            :src="item.owner.avatar_url"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-black">{{
            item.owner.login
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.url }}</v-list-item-subtitle>
          <filesBadge :files="item.files" />
        </v-list-item-content>
      </v-list-item>

      <v-divider v-if="index < gists.length - 1" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
import filesBadge from './filesBadge'
export default {
  components: {
    filesBadge,
  },
  props: {
    gists: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
