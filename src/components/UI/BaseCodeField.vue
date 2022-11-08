<template>
  <div class="code-fields">
    <p class="code-fields__name">
      <slot name="header" />
    </p>
    <div class="code-fields__container">
      <div
        :id="uniqueId"
        class="code-fields__content"
      >
        <slot name="code" />
      </div>
    </div>
    <base-copy-button
      class="base-copy-button"
      :element-selector="uniqueId"
    />
  </div>
</template>

<script>
import BaseCopyButton from "@/components/UI/BaseCopyButton";
export default {
    name: "BaseCodeField",
    components: {BaseCopyButton},
    props: {
        uniqueId: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss">
.code-fields {
    position: relative;
    max-width: 40vw;
    background-color: $lightBlueColor;
    border: 2px solid #000 !important;
}

.code-fields__name {
    margin: 15px;
}

.code-fields__container {
    padding: 20px;
    background-color: #fff;
    margin: 15px;
    border: 2px solid #000;
    font-size: 1.8 * $fontSize;
    overflow-y: auto;
    height: 300px;
}

.code-fields__content {
    min-height: 150px;
}

.element {
    color: $mainBlueColor;
}

.base-copy-button {
    margin: 0 15px 15px 15px;
}

.textArea {
    white-space: normal;
    margin-left: 10px;
}
</style>