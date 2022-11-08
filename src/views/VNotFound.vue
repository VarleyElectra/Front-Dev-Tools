<template>
  <div class="not-found-container">
    <h1 class="not-found-container__title">
      PAGE NOT FOUND
    </h1>
    <h2 class="not-found-container__subtitle">
      Error 404
    </h2>
    <base-button 
      class="not-found-container__button" 
      @click="$router.push('/')"
    >
      Вернуться на главную
    </base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
export default {
    name: "VNotFound",
    components: {BaseButton}
}
</script>

<style lang="scss" scoped>
.not-found-container {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 25px;
  &__title {
    padding: 25px;
    font-size: 35px;
  }
  &__subtitle {
    padding: 10px;
    font-size: 25px;
  }
  &__button {
    max-width: 50%;
    margin: 10px auto;
  }
}
</style>