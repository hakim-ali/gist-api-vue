<template>
  <v-list three-line>
    <template v-for="(file, index) in files">
      <v-list-item :key="file.url" :href="`${file.raw_url}`" target="_blank">
        <v-list-item-content>
          <v-list-item-title class="font-weight-black">{{
            file.filename
          }}</v-list-item-title>
          <v-list-item-subtitle
            >Language: {{ file.language }}</v-list-item-subtitle
          >
          <v-list-item-subtitle>Type: {{ file.type }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="index < files.length - 1" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
