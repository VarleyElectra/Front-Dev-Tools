<template>
  <button
    aria-label="Delete property"
    class="delete-button"
    @click="deleteElem"
  >
    <font-awesome-icon
      icon="fa-solid fa-xmark"
      size="2x"
    />
  </button>
</template>

<script>
export default {
  name: "BaseDeleteButton",
  methods: {
    deleteElem(event) {
      let id = event.currentTarget.id.match(/\d+/);
      this.$emit('deleteElement', {
        id: Number(id[0]),
        target: event.target,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.delete-button {
    border: none;
    outline: black solid 2px;
    background-color: $redColor;
    color: #fff;
    height: 30px;
    width: 30px;
    transition: 0.5s;
    cursor: pointer;
    svg {
      width: 25px;
      height: 25px;
    }
}

.delete-button:hover {
  color: #000;
}
</style>