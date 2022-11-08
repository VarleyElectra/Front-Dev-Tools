<template>
  <base-button @click="copyText">
    {{ buttonText }}
  </base-button>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
export default {
  name: "BaseCopyButton",
  components: {BaseButton},
  props: {
        elementSelector: {
            type: String,
            required: true,
        },
        buttonText: {
          type: String,
          default: () => 'Копировать'
        }
  },
  methods: {
        copyText(event) {
            let text = document.getElementById(`${this.elementSelector}`);
            let range = document.createRange();
            range.selectNode(text);
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            event.target.textContent = 'Скопировано!';
            setTimeout(() => {
              event.target.textContent = this.buttonText;
            }, 500)
        },
  }
}
</script>

<style scoped>

</style>