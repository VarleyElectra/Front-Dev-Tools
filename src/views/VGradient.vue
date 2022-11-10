<template>
  <main>
    <div class="main__header">
      <h1>CSS-Gradient Генератор</h1>
    </div>
    <div class="main__container">
      <div class="main__working-area">
        <div class="main__grid-container">
          <p>Рабочая область</p>
          <div class="main__working-area__flex">
            <div
              class="working-area__cell"
              :style="{'background': gradientString}"
            />
          </div>
        </div>
      </div>
      <div class="main__grid-settings-container">
        <div class="main__grid-settings">
          <h2>Настройки</h2>

          <div
            v-if="gradientDirectionShow"
            class="gradient-direction__container"
          >
            <span>
              Направление
              <div class="tooltip tooltip-settings"><font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Позволяет задать направление градиента в градусах.</span>
              </div>
            </span>
            <div class="gradient-direction__grid">
              <div
                id="gradient-direction__item__1"
                class="gradient-direction__item"
                @click="changeGradientDirection($event)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                />
              </div>
              <div
                id="gradient-direction__item__2"
                class="gradient-direction__item"
                @click="changeGradientDirection($event)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                />
              </div>
              <div
                id="gradient-direction__item__3"
                class="gradient-direction__item"
                @click="changeGradientDirection($event)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                />
              </div>
              <div
                id="gradient-direction__item__4"
                class="gradient-direction__item"
                @click="changeGradientDirection($event)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                />
              </div>
              <div
                id="gradient-direction__item__5"
                class="gradient-direction__item"
                @click="changeGradientDirection($event)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                />
              </div>
              <div
                id="gradient-direction__item__6"
                class="gradient-direction__item"
                @click="changeGradientDirection($event)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                />
              </div>
              <div
                id="gradient-direction__item__7"
                class="gradient-direction__item"
                @click="changeGradientDirection($event)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                />
              </div>
              <div
                id="gradient-direction__item__8"
                class="gradient-direction__item"
                @click="changeGradientDirection($event)"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                />
              </div>
            </div>
          </div>
          <div
            id="flexbox-item__content__select"
            class="flexbox-item__content"
          >
            <div class="flexbox-item__div1">
              gradient-type
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Позволяет задать тип градиента.<br>
                  linear-gradient - переход между цветами вдоль прямой линии <br>
                  radial-gradient-circle - переход между цветами, которые исходят от точки. Имеет форму окружности. <br>
                  conic-gradient -  создает изображение, состоящее из градиента с цветовыми переходами, поворачивающимися вокруг центральной точки (а не от центра). <br>
                </span>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p
                id="first-control"
                class="contol"
              >
                <span class="select">
                  <select
                    id="gradientType"
                    v-model="gradientType"
                    aria-label="Grid Template Columns"
                    @change="checkGradientType"
                  >
                    <option value="linear-gradient">linear-gradient</option>
                    <option value="repeating-linear-gradient">repeating-linear-gradient</option>
                    <option value="radial-gradient">radial-gradient</option>
                    <option value="repeating-radial-gradient">repeating-radial-gradient</option>
                    <option value="conic-gradient">conic-gradient</option>
                    <option value="repeating-conic-gradient">repeating-conic-gradient</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div
            v-if="gradientPositionShow"
            id="flexbox-item__content__select"
            class="flexbox-item__content"
          >
            <div class="flexbox-item__div1">
              gradient-position
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Позволяет задать расположение начальной точки градиента<br>
                </span>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p
                id="first-control"
                class="contol"
              >
                <span class="select">
                  <select
                    v-model="gradientPositionValue"
                    aria-label="Grid Template Columns"
                  >
                    <option value="top left">top left</option>
                    <option value="top">top</option>
                    <option value="top right">top right</option>
                    <option value="left">left</option>
                    <option value="center">center</option>
                    <option value="right">right</option>
                    <option value="bottom left">bottom left</option>
                    <option value="bottom">bottom</option>
                    <option value="bottom right">bottom right</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <transition-group name="element-list">
            <div
              v-for="(color, index) in gradientColors"
              :key="color.id"
              class="gradient-settings__grid-container"
            >
              <div class="delete-button-container">
                <p class="control">
                  <base-delete-button
                    :id="`delete-button__${index}`"
                    @deleteElement="deleteColor"
                  />
                </p>
              </div>
              <div class="gradient-settings__item1">
                <div class="settings__grid-text">
                  цвет №{{ index + 1 }}
                </div>
              </div>
              <div class="gradient-settings__item2">
                <p class="control">
                  <input
                    v-model="gradientValues[index]"
                    type="number"
                    min="0"
                    max="100"
                  >
                </p>
              </div>
              <div class="gradient-settings__item3">
                <p class="control">
                  <input
                    v-model="gradientColors[index].color"
                    type="color"
                  >
                </p>
              </div>
              <div class="gradient-settings__item4">
                <p class="control">
                  <input
                    v-model="gradientValues[index]"
                    type="range"
                    min="0"
                    max="100"
                    class="control__range-input"
                  >
                </p>
              </div>
            </div>
          </transition-group>

          <div class="add-new-element-button-container">
            <base-button 
              @click="addNewColor"
            >
              <font-awesome-icon icon="fa-solid fa-plus" /> Добавить цвет
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
          <pre><code><span class="element">&lt;div</span> id="fdt-gradient"<span class="element">&gt;</span>

<span class="element">&lt;div/&gt;</span></code></pre>
        </template>
      </base-code-field>

      <base-code-field :unique-id="'css-code-selector'">
        <template #header>
          CSS-код
        </template>
        <template #code>
          <pre><code><span class="element">#fdt-gradient {</span>
<span class="textArea">background: {{ gradientString }};</span>
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
    name: "VGradient",
    components: {BaseCodeField, BaseButton, BaseDeleteButton},
    data() {
          return {
              gradientDirectionValue: "45",
              gradientType: "linear-gradient",
              gradientPositionShow: false,
              gradientDirectionShow: true,
              gradientPositionValue: "center",
              gradientValues: [
                  "0",
                  "25",
              ],
              gradientColors: [
                {color: '#0f46e8', id: Date.now() + Math.round(Math.random() * 100)},
                {color: '#f00b00', id: Date.now() + Math.round(Math.random() * 100)}
              ],
          }
      },
    computed: {
      gradientString() {
        let gradients = this.gradientColors
            .reduce((accumulator, currentValue) =>  accumulator + `${currentValue.color},` , "");

        let colors = gradients.split(',');
        colors.pop();
        let settings = colors.map((el, index) => `${el} ${this.gradientValues[index]}%`).join(', ');

        switch (this.gradientType) {
          case "linear-gradient":
            return `${this.gradientType}(${this.gradientDirectionValue}deg, ${settings})`;
          case "repeating-linear-gradient":
            return `${this.gradientType}(${this.gradientDirectionValue}deg, ${settings})`;
          case "radial-gradient":
            return `${this.gradientType}(circle at ${this.gradientPositionValue}, ${settings})`;
          case "repeating-radial-gradient":
            return `${this.gradientType}(circle at ${this.gradientPositionValue}, ${settings})`;
          case "conic-gradient":
            return `${this.gradientType}(${settings})`;
          case "repeating-conic-gradient":
            return `${this.gradientType}(${settings})`;
          default:
            return '';
        }
      }
    },
    methods: {
        checkGradientType() {
            let select = document.querySelector('#gradientType');
            this.gradientPositionShow = select.value === "radial-gradient"
                    || select.value === "repeating-radial-gradient";
            this.gradientDirectionShow = select.value === "linear-gradient"
                    || select.value === "repeating-linear-gradient";
        },

        changeGradientDirection(event) {
            let id = event.currentTarget.id.match(/\d+/);
            let number = Number(id[0]);
            switch (number) {
                case 1:
                    this.gradientDirectionValue = "315";
                    break;
                case 2:
                    this.gradientDirectionValue = "0";
                    break;
                case 3:
                    this.gradientDirectionValue = "45";
                    break;
                case 4:
                    this.gradientDirectionValue = "270";
                    break;
                case 5:
                    this.gradientDirectionValue = "90";
                    break;
                case 6:
                    this.gradientDirectionValue = "135";
                    break;
                case 7:
                    this.gradientDirectionValue = "180";
                    break;
                case 8:
                    this.gradientDirectionValue = "225";
                    break;
                default:
                    break;
            }
        },

        addNewColor() {
            let randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            let randomValue =  `${Math.round(Math.random() * 100)}`;
            this.gradientColors.push({color: randomColor, id: Date.now()});
            this.gradientValues.push(randomValue);
        },

        deleteColor({id}) {
            this.gradientColors.splice(id, 1);
            this.gradientValues.splice(id, 1);
        },
    }
}
</script>

<style lang="scss" scoped>
.working-area__cell {
    min-width: 25vw;
    min-height: 25vw;
    overflow: hidden;
    border: 1px solid #000;
}

.gradient-direction__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px 5px;
    span {
        margin-bottom: 10px;
    }
}
.gradient-direction__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 2vw);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    width: 100%;
}
.gradient-direction__item {
    background-color: #4bd1fe;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.75s;
    border: 1px solid transparent;
    button {
        background-color: transparent;
    }
    img {
        width: 2vw;
        height: 1vw;
    }
    &:hover {
        background-color: #fff;
        cursor: pointer;
        border: 1px solid #000;
    }
}
#gradient-direction__item__1 {
    grid-area: 1 / 1 / 2 / 2;
    svg {
        transform: rotate(-135deg);
    }
}
#gradient-direction__item__2 {
    grid-area: 1 / 2 / 2 / 3;
    svg {
        transform: rotate(-90deg);
    }
}
#gradient-direction__item__3 {
    grid-area: 1 / 3 / 2 / 4;
    svg {
        transform: rotate(-45deg);
    }
}
#gradient-direction__item__4 {
    grid-area: 2 / 1 / 3 / 2;
    svg {
        transform: rotate(-180deg);
    }
}
#gradient-direction__item__5 {
    grid-area: 2 / 3 / 3 / 4;
}
#gradient-direction__item__6 {
    grid-area: 3 / 1 / 4 / 2;
    svg {
        transform: rotate(135deg);
    }
}
#gradient-direction__item__7 {
    grid-area: 3 / 2 / 4 / 3;
    svg {
        transform: rotate(90deg);
    }
}
#gradient-direction__item__8 {
    grid-area: 3 / 3 / 4 / 4;
    svg {
        transform: rotate(45deg);
    }
}

.gradient-settings__grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 30px);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin: 15px 5px;
    background-color: #4bd1fe;
    padding: 55px 5px 0;
    border: 2px solid #000;
    border-radius: 5px;
    position: relative;
}
.gradient-settings__item1 {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5px;
}

.gradient-settings__item2 {
    grid-area: 1 / 2 / 2 / 3;
}
.gradient-settings__item3 {
    grid-area: 1 / 3 / 2 / 4;
}
.gradient-settings__item4 {
    grid-area: 2 / 1 / 3 / 4;
}

.flexbox-item__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 30px);
    grid-column-gap: 10px;
    grid-row-gap: 0;
    margin: 15px 5px;
}
.flexbox-item__content__select {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 30px;
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 15px 5px;
}

.flexbox-item__div1 {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
}
.flexbox-item__div2 {
    grid-area: 1 / 3 / 2 / 4;
    padding: 0;
    max-width: 150px;
    font-size: 1.6 * $fontSize;
}

#flexbox-item__content__select {
    grid-template-rows: 30px;
    grid-template-columns: 1fr 2fr;
    margin-top: 1.5vw;
    margin-bottom: 1vw;
}

.shadow-list-item {
  display: inline-block;
  margin-right: 10px;
}

.shadow-list-enter-active,
.shadow-list-leave-active {
  transition: all 0.4s ease;
}

.shadow-list-enter-from,
.shadow-list-leave-to {
  opacity: 0;
  transition: all 0.4s ease;
}

.shadow-list-move {
  transition: transform 0.4s ease;
}
</style>