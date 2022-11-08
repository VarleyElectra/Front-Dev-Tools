<template>
  <button class="code-fields__button">
    <slot />
  </button>
</template>

<script>
export default {
    name: "BaseButton"
}
</script>

<style lang="scss" scoped>
    .code-fields__button {
        background-color: #fff;
        color: #000;
        border: 2px solid #000;
        padding: 7.5px;
        border-radius: 2.5%;
        transition: 0.5s;
    }

    .code-fields__button:hover {
        color: #0099cc;
        border: 2px solid #0099cc;
    }
</style>