<template>
  <main>
    <div class="main__header">
      <h1>Text Генератор</h1>
    </div>
    <div class="main__container">
      <div class="main__working-area">
        <div class="main__grid-container">
          <p>Рабочая область</p>
          <div class="main__working-area__flex">
            <div
              class="working-area__cell"
              :style="{'background-color': background}"
            >
              <textarea
                id=""
                v-model="textAreaText"
                name=""
                cols="75"
                rows="15"
                placeholder="Введи свой текст"
                :style="{ 'font-size': fontSize, 'font-weight': fontWeight,
                          'font-style': fontStyle, 'font-family': fontFamily, 
                          'color': color, 'background-color': background,
                          'text-decoration': textDecoration, 'text-transform': textTransform,
                          'text-align': textAlign, 'line-height': lineHeight}"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="main__grid-settings-container">
        <div class="main__grid-settings">
          <h2>Настройки</h2>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              font-size
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство font-size изменяет размер шрифта. Оно задаётся с помощью значения и единицы измерения (em, px, pt, %). Единицы измерения em и % являются относительными и зависят от размера шрифта установленного в документе. Единицы измерения px и pt являются абсолютными и их размер зависит от разрешения экрана.</span>
              </div>
            </div>
            <div class="font-settings__div2">
              <p class="control">
                <label for="font-size__input" /><input
                  id="font-size__input"
                  v-model="fontSizeValue"
                  type="number"
                >
              </p>
            </div>
            <div class="font-settings__div3">
              <p>
                <span class="select">
                  <select
                    v-model="fontSizeUnit"
                    aria-label="Grid Template Columns"
                  >
                    <option value="vw">vw</option>
                    <option value="vh">vh</option>
                    <option value="px">px</option>
                    <option value="em">em</option>
                    <option value="rem">rem</option>
                    <option value="%">%</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              line-height
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство line-height предназначено для задания высоты строки, которая влияет на расстояние между строчками текста. Если использовать в качестве единицы измерения параметра обычное число, то высота строки считается как высота шрифта, умноженная на параметр.</span>
              </div>
            </div>
            <div class="font-settings__div2">
              <p class="control">
                <input
                  id="line-height__input"
                  v-model="lineHeightValue"
                  type="number"
                >
              </p>
            </div>
            <div class="font-settings__div3">
              <p>
                <span class="select">
                  <select
                    v-model="lineHeightUnit"
                    aria-label="Grid Template Columns"
                  >
                    <option value="vw">vw</option>
                    <option value="vh">vh</option>
                    <option value="">number</option>
                    <option value="px">px</option>
                    <option value="em">em</option>
                    <option value="rem">rem</option>
                    <option value="%">%</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              font-weight
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство font-weight изменяет жирность шрифта. Свойство font-weight имеет 2 часто используемых значения: normal (обычное) и bold (жирное). Также можно использовать числовой вариант значения, принимающий значения от 100 до 900.</span>
              </div>
            </div>

            <div class="font-settings__div3 font-settings__2fr_option">
              <p>
                <span class="select">
                  <select
                    v-model="fontWeight"
                    aria-label="Grid Template Columns"
                  >
                    <option value="normal">normal</option>
                    <option value="bold">bold</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                    <option value="800">800</option>
                    <option value="900">900</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              font-style
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Определяет начертание шрифта — обычное, курсивное или наклонное. Когда для текста установлено курсивное или наклонное начертание, браузер обращается к системе для поиска подходящего шрифта. Если заданный шрифт не найден, браузер использует специальный алгоритм для имитации нужного вида текста.</span>
              </div>
            </div>

            <div class="font-settings__div3 font-settings__2fr_option">
              <p>
                <span class="select">
                  <select
                    v-model="fontStyle"
                    aria-label="Grid Template Columns"
                  >
                    <option value="normal">normal</option>
                    <option value="italic">italic</option>
                    <option value="oblique">oblique</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              font-family
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство font-family изменяет шрифт или список шрифтов с помощью которых отображается текст. В качестве значений свойство font-family принимает названия шрифтов (например: font-family: "Tahoma", "Arial") или предопределенные названия группы шрифтов (serif, sans-serif, monospace, fantasy, cursive).</span>
              </div>
            </div>

            <div class="font-settings__div3 font-settings__2fr_option">
              <p>
                <span class="select">
                  <select
                    v-model="fontFamily"
                    aria-label="Grid Template Columns"
                  >
                    <option value="sans-serif">sans-serif</option>
                    <option value="serif">serif</option>
                    <option value="cursive">cursive</option>
                    <option value="fantasy">fantasy</option>
                    <option value="monospace">monospace</option>
                    <option value="system-ui">system-ui</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              color
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство, позволяющее задать цвет текста.</span>
              </div>
            </div>

            <div class="font-settings__div3 font-settings__2fr_option">
              <p class="control">
                <input
                  v-model="color"
                  type="color"
                >
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              background
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство, позволяющее задать цвет фона текста, может использоваться для выделения текста, как это делает маркер.</span>
              </div>
            </div>

            <div class="font-settings__div3 font-settings__2fr_option">
              <p class="control">
                <input
                  v-model="background"
                  type="color"
                >
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              text-decoration
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство text-decoration можно использовать для декоративного оформления текста. В качестве значений свойства text-decoration можно использовать следующие: none (без декоративного оформления), underline (подчёркивание), overline (линия над текстом), line-through (зачёркивание).</span>
              </div>
            </div>

            <div class="font-settings__div3 font-settings__2fr_option">
              <p>
                <span class="select">
                  <select
                    v-model="textDecoration"
                    aria-label="Grid Template Columns"
                  >
                    <option value="none">none</option>
                    <option value="underline">underline</option>
                    <option value="overline">overline</option>
                    <option value="line-through">line-through</option>
                    <option value="underline">underline</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              text-transform
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство text-transform управляет регистром символов. В качестве значений свойства text-transform можно использовать следующие: none (по умолчанию), lowercase (переводит все символы в строчные), uppercase (переводит все символы в прописные), capitalize (каждое слово начинается с прописного символа).</span>
              </div>
            </div>

            <div class="font-settings__div3 font-settings__2fr_option">
              <p>
                <span class="select">
                  <select
                    v-model="textTransform"
                    aria-label="Grid Template Columns"
                  >
                    <option value="none">none</option>
                    <option value="lowercase">lowercase</option>
                    <option value="uppercase">uppercase</option>
                    <option value="capitalize">capitalize</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="main__font-settings">
            <div class="font-settings__div1">
              text-align
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство text-align предназначено для выравнивания текста в горизонтальном направлении. Значения свойства text-align указывают, что текст будет выровнен: left (по левому краю), center (по центру), right (по правому краю), justify (по ширине, т.е. одновременно по левому и правому краям).</span>
              </div>
            </div>

            <div class="font-settings__div3 font-settings__2fr_option">
              <p>
                <span class="select">
                  <select
                    v-model="textAlign"
                    aria-label="Grid Template Columns"
                  >
                    <option value="left">left</option>
                    <option value="center">center</option>
                    <option value="right">right</option>
                    <option value="justify">justify</option>
                  </select>
                </span>
              </p>
            </div>
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
          <pre><code><span class="element">&lt;p</span> id="fdt-text"<span class="element">></span>
<span class="textArea">{{ textAreaText }}</span>
<span class="element">&lt;/p&gt;</span></code></pre>
        </template>
      </base-code-field>

      <base-code-field :unique-id="'css-code-selector'">
        <template #header>
          CSS-код
        </template>
        <template #code>
          <pre><code><span class="element">#fdt-text {</span>
<span class="textArea">font-size: {{ fontSize }};</span>
<span class="textArea">line-height: {{ lineHeight }};</span>
<span class="textArea">font-weight: {{ fontWeight }};</span>
<span class="textArea">font-style: {{ fontStyle }};</span>
<span class="textArea">font-family: {{ fontFamily }};</span>
<span class="textArea">color: {{ color }};</span>
<span class="textArea">background-color: {{ background }};</span>
<span class="textArea">text-decoration: {{ textDecoration }};</span>
<span class="textArea">text-transform: {{ textTransform }};</span>
<span class="textArea">text-align: {{ textAlign }};</span>
<span class="element">}</span>
                </code>
              </pre>
        </template>
      </base-code-field>
    </div>
  </main>
</template>

<script>
export default {
    name: "VText",
    data() {
          return {
              fontSizeValue: 1,
              fontSizeUnit: "vw",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "sans-serif",
              color: "#000000",
              background: "#ffffff",
              textDecoration: "none",
              textTransform: "none",
              textAlign: "left",
              lineHeightValue: 1,
              lineHeightUnit: "vw",
              textAreaText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                      "Optio porro voluptas fuga ducimus hic, animi ut alias dicta " +
                      "repudiandae incidunt quo natus vel. Illum modi deserunt porro " +
                      "quisquam provident maxime!",
          }
    },
    computed: {
        lineHeight() {
          return `${this.lineHeightValue}${this.lineHeightUnit}`
        },
        fontSize() {
          return `${this.fontSizeValue}${this.fontSizeUnit}`
        }
    },
}
</script>

<style lang="scss" scoped>
.working-area__cell {
  box-shadow: 4px 4px 4px 4px $shadowColor;
  background-color: #fff;

  textarea {
    resize: none;
    padding: 10px;
    font-size: 1.8 * $fontSize;
    line-height: 1;
    max-width: 40vw;
    max-height: 25vw;
    min-width: 35vw;
    min-height: 20vw;
    font-weight: normal;
    font-style: normal;
    font-family: sans-serif;
    text-align: left;
  }
}

.main__font-settings {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 30px;
  grid-column-gap: 10px;
  grid-row-gap: 0;
  margin: 25px 5px;
}

.font-settings__div1 {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.font-settings__div2 {
  grid-area: 1 / 2 / 2 / 3;
}

.font-settings__div3 {
  grid-area: 1 / 3 / 2 / 4;
}

.font-settings__2fr_option {
  grid-area: 1 / 2 / 2 / 4;
}
</style>