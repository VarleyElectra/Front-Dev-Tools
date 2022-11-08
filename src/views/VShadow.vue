<template>
  <main>
    <div class="main__header">
      <h1>Box-Shadow Генератор</h1>
    </div>
    <div class="main__container">
      <div class="main__working-area">
        <div class="main__grid-container">
          <p>Рабочая область</p>
          <div class="main__working-area__flex">
            <div
              class="working-area__cell"
              :style="{ 'box-shadow': shadowString}"
            />
          </div>
        </div>
      </div>
      <div class="main__grid-settings-container">
        <div class="main__grid-settings">
          <h2>Настройки</h2>

          <div
            v-for="(shadow, index) in shadowsArr"
            :key="index"
            class="flexbox-item__container"
          >
            <h3>Тень {{ index + 1 }}</h3>
            <div class="delete-button-container">
              <p class="control">
                <base-delete-button
                  :id="`delete-button__${index}`"
                  @deleteElement="deleteShadow"
                />
              </p>
            </div>
            <div
              id="flexbox-item__content__select"
              class="flexbox-item__content"
            >
              <div class="flexbox-item__div1">
                inset
                <div id="flexbox-item__div1-svg" class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Если ключевое слово inset не указано (по умолчанию), тень будет снаружи элемента (и создаст эффект выпуклости блока).
                    При наличие ключевого слова inset, тень будет падать внутри блока и создаст эффект вдавленности блока. Inset-тени рисуются в пределах границ элемента (даже прозрачные), поверх фона и за контентом.</span>
                </div>
              </div>

              <div class="flexbox-item__div2">
                <p
                  id="first-control"
                  class="contol"
                >
                  <span class="select">
                    <select
                      v-model="shadow[0]"
                      aria-label="Grid Template Columns"
                    >
                      <option value="no">no</option>
                      <option value="yes">yes</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div class="flexbox-item__content">
              <div class="flexbox-item__div1">
                <div class="settings__grid-text">
                  offset-x
                  <div class="tooltip tooltip-settings">
                    <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                    <span class="tooltiptext">Существуют 2 значения, которые устанавливают смещение тени. offset-x определяет горизонтальное расстояние. Отрицательные значения располагают тень слева от элемента.</span>
                  </div>
                </div>
              </div>

              <div class="flexbox-item__div2">
                <p class="control">
                  <input
                    v-model="shadow[1]"
                    type="number"
                    min="-100"
                    max="100"
                  >
                  <span>px</span>
                </p>
              </div>

              <div class="flexbox-item__div3">
                <p class="control">
                  <input
                    v-model="shadow[1]"
                    type="range"
                    min="-100"
                    max="100"
                    class="control__range-input"
                  >
                </p>
              </div>
            </div>
            <div class="flexbox-item__content">
              <div class="flexbox-item__div1">
                <div class="settings__grid-text">
                  offset-y
                  <div class="tooltip tooltip-settings">
                    <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                    <span class="tooltiptext">Существуют 2 значения length, которые устанавливают смещение тени. offset-y определяет вертикальное расстояние. Отрицательные значения располагают тень выше элемента.</span>
                  </div>
                </div>
              </div>

              <div class="flexbox-item__div2">
                <p class="control">
                  <input
                    v-model="shadow[2]"
                    type="number"
                    min="-100"
                    max="100"
                  >
                  <span>px</span>
                </p>
              </div>

              <div class="flexbox-item__div3">
                <p class="control">
                  <input
                    v-model="shadow[2]"
                    type="range"
                    min="-100"
                    max="100"
                    class="control__range-input"
                  >
                </p>
              </div>
            </div>

            <div class="flexbox-item__content">
              <div class="flexbox-item__div1">
                <div class="settings__grid-text">
                  blur-radius
                  <div class="tooltip tooltip-settings">
                    <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                    <span class="tooltiptext">Чем больше это значение, тем больше и светлее размытие тени. Отрицательные значения не поддерживаются. Если не определено, будет использоваться 0 (резкий край тени).</span>
                  </div>
                </div>
              </div>

              <div class="flexbox-item__div2">
                <p class="control">
                  <input
                    v-model="shadow[3]"
                    type="number"
                    min="0"
                    max="100"
                  >
                  <span>px</span>
                </p>
              </div>

              <div class="flexbox-item__div3">
                <p class="control">
                  <input
                    v-model="shadow[3]"
                    type="range"
                    min="0"
                    max="100"
                    class="control__range-input"
                  >
                </p>
              </div>
            </div>
            <div class="flexbox-item__content">
              <div class="flexbox-item__div1">
                <div class="settings__grid-text">
                  spread-radius
                  <div class="tooltip tooltip-settings">
                    <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                    <span class="tooltiptext">Положительные значения увеличивают тень, отрицательные - сжимают. По умолчанию значение равно 0 (размер тени равен размеру элемента).</span>
                  </div>
                </div>
              </div>

              <div class="flexbox-item__div2">
                <p class="control">
                  <input
                    v-model="shadow[4]"
                    type="number"
                    min="-100"
                    max="100"
                  >
                  <span>px</span>
                </p>
              </div>

              <div class="flexbox-item__div3">
                <p class="control">
                  <input
                    v-model="shadow[4]"
                    type="range"
                    min="-100"
                    max="100"
                    class="control__range-input"
                  >
                </p>
              </div>
            </div>
            <div class="flexbox-item__content">
              <div class="flexbox-item__div1">
                <div class="settings__grid-text">
                  transparent
                  <div class="tooltip tooltip-settings">
                    <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                    <span class="tooltiptext">Параметр transparent позволяет настроить прозрачность цвета тени</span>
                  </div>
                </div>
              </div>

              <div class="flexbox-item__div2">
                <p class="control">
                  <input
                    v-model="shadow[5]"
                    type="number"
                    step="0.1"
                    min="0.0"
                    max="1.0"
                  >
                </p>
              </div>

              <div class="flexbox-item__div3">
                <p class="control">
                  <input
                    v-model="shadow[5]"
                    type="range"
                    step="0.005"
                    min="0.0"
                    max="1.0"
                    class="control__range-input"
                  >
                </p>
              </div>
            </div>
            <div class="flexbox-item__content__select">
              <div class="flexbox-item__div1">
                <div class="settings__grid-text">
                  shadow color
                  <div class="tooltip tooltip-settings">
                    <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                    <span class="tooltiptext">Свойство, позволяющее задать цвет для тени.</span>
                  </div>
                </div>
              </div>

              <div class="flexbox-item__div2">
                <p class="control">
                  <input
                    v-model="shadow[6]"
                    type="color"
                  >
                </p>
              </div>
            </div>
          </div>

          <div class="add-new-element-button-container">
            <base-button
              @click="addNewShadow"
            >
              <font-awesome-icon icon="fa-solid fa-plus" /> Добавить тень
            </base-button>
          </div>
        </div>
      </div>
    </div>

    <div class="main__code-fields">
      <base-code-field :unique-id="'html-code-selector'">
        <template #header>
          HTML-код
        </template>
        <template #code>
          <pre><code><span class="element">&lt;div</span> id="fdt-shadow"<span class="element">&gt;</span>

<span class="element">&lt;/div&gt;</span></code></pre>
        </template>
      </base-code-field>

      <base-code-field :unique-id="'css-code-selector'">
        <template #header>
          CSS-код
        </template>
        <template #code>
          <pre><code><span class="element">#fdt-shadow {</span>
 <span class="textArea">box-shadow: {{ shadowString }};</span>
<span class="element">}</span>
                      </code>
                  </pre>
        </template>
      </base-code-field>
    </div>
  </main>
</template>

<script>
import BaseDeleteButton from "@/components/UI/BaseDeleteButton";
import BaseButton from "@/components/UI/BaseButton";
import BaseCodeField from "@/components/UI/BaseCodeField";
export default {
    name: "VShadow",
    components: {
      BaseButton,
      BaseDeleteButton,
      BaseCodeField
    },
    data() {
          return {
              shadowsArr: [
                  [
                      "no",
                      "4",
                      "4",
                      "8",
                      "0",
                      "0.4",
                      "#000000",
                  ],
              ],
          }
      },
    computed: {
      shadowString() {
        let boxShadowCSS = "";
        for (let shadow of this.shadowsArr) {
          if (shadow[0] === "yes") {
            boxShadowCSS += "inset "
          }
          boxShadowCSS += `${shadow[1]}px ${shadow[2]}px ${shadow[3]}px ${shadow[4]}px `;
          let alpha = shadow[5];
          let rgbColorObj = this.convertColor(shadow[6]);
          boxShadowCSS += `rgba(${rgbColorObj[0]}, ${rgbColorObj[1]}, ${rgbColorObj[2]}, ${alpha}), `;
        }
        boxShadowCSS = boxShadowCSS.slice(0, -2) // Удалить запятую у последней тени
        return boxShadowCSS;
      }
    },
    methods: {
        convertColor(hex) {
            let color = hex.slice(1);
            let aRGBToHex = color.match(/.{1,2}/g);
            let aRGB = [
                parseInt(aRGBToHex[0], 16),
                parseInt(aRGBToHex[1], 16),
                parseInt(aRGBToHex[2], 16)
            ];
            return aRGB;
        },

        addNewShadow() {
            let randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            this.shadowsArr.push(["no", "8", "8", "8", "0", "0.4", randomColor])
        },

        deleteShadow({id}) {
            this.shadowsArr.splice(id, 1);
        },
    },
}
</script>

<style lang="scss" scoped>
.working-area__cell {
  box-shadow: 4px 4px 8px 0 $shadowColor;
  background-color: #fff;
  min-width: 15vw;
  min-height: 15vw;
  overflow: hidden;
}

.flexbox-item__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 30px);
  grid-column-gap: 10px;
  grid-row-gap: 0;
}

.flexbox-item__content__select {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 30px;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

#flexbox-item__content__select {
  -ms-grid-rows: 30px;
  grid-template-rows: 30px;
  margin-top: 1.5vw;
  margin-bottom: 1vw;
}

.flexbox-item__div1 {
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  align-items: center;
  margin-left: 5px;
}

#flexbox-item__div1-svg {
  margin-left: 5px;
}
</style>