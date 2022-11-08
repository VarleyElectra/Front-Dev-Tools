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
    import BaseCodeField from "@/components/UI/BaseCodeField";
    export default {
      name: "VText",
      components: {BaseCodeField},
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
  .main__header {
    height: 100px;
    background-color: #befaff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2vw;
    border: 2px solid #000;
    h1 {
      margin-left: 15px;
      transition: 1s;
      cursor: pointer;
    }
    h1:hover {
      color: #331bcf;
    }
    img {
      width: 60px;
      height: 60px;
      margin-left: 15px;
    }
    margin-bottom: 25px;
  }

  .main__grid-container {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    p {
      font-size: 1.5vw;
      margin-left: 15px;
      margin-top: 15px;
    }
  }

  .main__working-area {
    grid-area: area;
    background-color: #befaff;
    border: 2px solid #000;
  }

  .main__working-area__flex {
    display: flex;
    min-height: 50%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    margin: 50px;
  }

  .working-area__cell {
    box-shadow: 8px 8px 8px 8px rgba(34, 60, 80, 0.6);
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

  //TODO убрать лишние стили в этом файле
  .main__grid-settings {
    background-color: #befaff;
    border: 2px solid #000;
    min-height: 100%;
    h2 {
      font-size: 1.5vw;
      margin-bottom: 20px;
      margin-top: 10px;
      text-align: center;
    }
  }

  .control {
    position: relative;
    text-align: left;
    display: block;
    height: 30px;
    span {
      position: absolute;
      right: 22px;
      top: 8px;
    }
    input {
      width: 100%;
      box-shadow: 0 0 0 1px rgba(34, 60, 80, 1);
      max-width: 100%;
      color: rgb(54, 54, 54);
      padding: 5px;
      height: 30px;
    }
  }
  .tooltip-settings {
    display: inline;
  }
  .select {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, 0.1);
    height: 30px;
    width: 100%;
    select {
      line-height: 1;
      box-shadow: 0 0 0 1px rgba(34, 60, 80, 1);
      height: 100%;
      width: 100%;
    }
  }

  option {
    background-color: #befaff;
    box-shadow: 0 0 0 1px rgba(34, 60, 80, 1);
  }

  option:hover {
    background-color: #befaff;
  }

  .main__code-fields {
    min-height: 300px;
    font-size: 2 * $fontSize;
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 0;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    svg {
      height: 18px;
    }
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    min-width: 300px; /* Ширина подсказки */
    max-width: 350px;
    top: 0;
    right: 0; /* Положение подсказки */
    background: #3989c9;
    color: #fff;
    text-align: center;
    padding: 7.5px;
    border-radius: 6px;
    z-index: 2;
    font-size: 1.4 * $fontSize;
    line-height: 1.25;
    opacity: 0;
    transition: 0.25s;
    /* Position the tooltip text - see examples below! */
    position: absolute;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1; /* Показываем подсказку */
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

  input[type="number"] {
    width: 100%;
  }

  input[type="color"] {
    padding: 2px;
    width: 100%;
    transition: 1s;
  }
  input[type="color"]:hover {
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
  }
</style>