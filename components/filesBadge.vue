<template>
  <div>
    <v-chip
      v-for="(type, index) in fileTypes"
      :key="index"
      color="primary"
      label
      class="mr-2 mt-2"
      text-color="white"
    >
      {{ type }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      fileTypes: [],
    }
  },

  mounted() {
    this.getFileTypes()
  },

  methods: {
    getFileTypes() {
      if (this.files && Object.keys(this.files).length > 0) {
        Object.keys(this.files).forEach((key) => {
          const item = this.files[key]

          if (!this.fileTypes.includes(item.language)) {
            if (item.language) {
              this.fileTypes.push(item.language)
            }
          }
        })
      } else {
        return []
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
