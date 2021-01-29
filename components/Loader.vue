<template>
  <v-row justify="center" class="dialog">
    <v-progress-circular
      :size="40"
      color="primary"
      indeterminate
      width="5"
    ></v-progress-circular>
  </v-row>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.justify-center {
  text-align: center !important;
  .v-progress-circular {
    margin: 15px;
  }
}

.v-card__subtitle {
  font-weight: bold;
}
</style>
