<template>
  <main>
    <div class="main__header">
      <h1>CSS-Filters Генератор</h1>
    </div>
    <div class="main__container">
      <div class="main__working-area">
        <div class="main__grid-container">
          <p>Рабочая область</p>
          <div class="upload-image__container">
            <label
              for="myFile"
              class="upload-image__label"
            ><font-awesome-icon icon="fa-solid fa-cloud-arrow-down" />Загрузить изображение</label>

            <input
              id="myFile"
              type="file"
              class="upload-image__input"
              name="myFile"
              multiple="multiple"
              @change="loadFile($event)"
            >
          </div>
          <div class="main__working-area__flex">
            <div class="working-area__cell">
              <figure
                id="myFigure"
                :style="{'filter': filterString}"
              >
                <img
                  id="myImage"
                  :src=" require('../assets/images/filter-image.jpg') "
                  alt="your image"
                >
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="main__grid-settings-container">
        <div class="main__grid-settings">
          <h2>Настройки</h2>
          <div class="flexbox-item__content">
            <div class="flexbox-item__div1">
              <div class="settings__grid-text">
                blur
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Размытие. Применяет к изображению размытие по Гауссу. Значение определяет значение стандартного отклонения функции Гаусса или количество пикселей на экране, сливающихся друг с другом, поэтому большее значение приведет к большему размытию. Если параметр не указан, используется значение 0. Параметр указывается как длина CSS, но не принимает процентные значения.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterBlur"
                  type="number"
                  min="0"
                  max="10"
                  class="input__percent-value"
                >
                <span>px</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterBlur"
                  type="range"
                  min="0"
                  max="10"
                  class="control__range-input"
                >
              </p>
            </div>
          </div>
          <div class="flexbox-item__content">
            <div class="flexbox-item__div1">
              <div class="settings__grid-text">
                brightness
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Яркость. Применяет линейный множитель к входному изображению, делая его более или менее ярким. Значение 0% будет создавать полностью черное изображение. Значение 100% оставляет вход без изменений. Остальные значения являются линейными множителями эффекта. Допускаются значения, превышающие сумму 100%, что обеспечивает более яркие результаты. Если параметр отсутствует, используется значение 1.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterBrightness"
                  type="number"
                  min="0"
                  max="200"
                  class="input__percent-value"
                >
                <span>%</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterBrightness"
                  type="range"
                  min="0"
                  max="200"
                  class="control__range-input"
                >
              </p>
            </div>
          </div>
          <div class="flexbox-item__content">
            <div class="flexbox-item__div1">
              <div class="settings__grid-text">
                contrast
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Контраст. Регулирует контрастность изображения. Значение 0% будет создавать полностью черное изображение. Значение 100% оставляет изображение без изменений. Допускаются значения  выше 100%, что дает результаты с меньшим контрастом. Если параметр отсутствует, используется значение 1.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterContrast"
                  type="number"
                  min="0"
                  max="200"
                >
                <span>%</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterContrast"
                  type="range"
                  min="0"
                  max="200"
                  class="control__range-input"
                >
              </p>
            </div>
          </div>

          <div class="flexbox-item__content">
            <div class="flexbox-item__div1">
              <div class="settings__grid-text">
                grayscale
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Оттенок серого. Преобразует входное изображение в оттенки серого. Значение  определяет долю конверсии. Значение 100% делает изображение полностью серым. Значение 0% оставляет изображение без изменений. Значения между 0% и 100% являются линейными множителями эффекта. Если параметр  отсутствует, используется значение 0.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterGrayscale"
                  type="number"
                  min="0"
                  max="100"
                >
                <span>%</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterGrayscale"
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
                hue-rotate
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Изменение цветовой гаммы. Применяет поворот оттенка к изображению. Значение определяет количество градусов вокруг цветового круга, в котором будут настраиваться входные образцы. Значение 0deg оставляет изображение без изменений. Если параметр отсутствует, используется значение 0deg. Хотя максимального значения не существует, эффект от приведенных выше значений 360deg повторяется.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterHueRotate"
                  type="number"
                  min="0"
                  max="360"
                >
                <span>deg</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterHueRotate"
                  type="range"
                  min="0"
                  max="360"
                  class="control__range-input"
                >
              </p>
            </div>
          </div>
          <div class="flexbox-item__content">
            <div class="flexbox-item__div1">
              <div class="settings__grid-text">
                invert
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Инвертирование. Инвертирует цвета в изображении. Значение определяет долю конверсии. Значение 100% полностью инвертировано. Значение 0% оставляет изображение без изменений. Значения между 0% и 100%являются линейными множителями эффекта. Если параметр отсутствует, используется значение 0.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterInvert"
                  type="number"
                  min="0"
                  max="100"
                >
                <span>%</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterInvert"
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
                opacity
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Прозрачность. Значение определяет долю конверсии. Значение 0% делает изображение полностью прозрачным. Значение 100% оставляет изображение без изменений. Значения между 0%и 100% являются линейными множителями эффекта. Если параметр отсутствует, используется значение 1. Эта функция похожа на более устоявшееся opacity свойство; разница в том, что с фильтрами некоторые браузеры обеспечивают аппаратное ускорение для повышения производительности.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterOpacity"
                  type="number"
                  min="0"
                  max="100"
                >
                <span>%</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterOpacity"
                  type="range"
                  step="0.005"
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
                saturate
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Насыщенность. Определяет интенсивность тонов в изображении. Значение определяет долю конверсии. Значение 0% делает изображение полностью ненасыщенным. Значение 100% оставляет изображение без изменений. Остальные значения являются линейными множителями эффекта. Допускаются значения суммы выше 100%, что обеспечивает сверхнасыщенные результаты. Если параметр отсутствует, используется значение 1.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterSaturate"
                  type="number"
                  min="0"
                  max="200"
                >
                <span>%</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterSaturate"
                  type="range"
                  min="0"
                  max="200"
                  class="control__range-input"
                >
              </p>
            </div>
          </div>
          <div class="flexbox-item__content">
            <div class="flexbox-item__div1">
              <div class="settings__grid-text">
                sepia
                <div class="tooltip tooltip-settings">
                  <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                  <span class="tooltiptext">Сепия. Определяет иммитацию обработки изображения сепией. Значение определяет долю конверсии. Значение 0% делает изображение полностью ненасыщенным. Значение 100% оставляет изображение без изменений. Остальные значения являются линейными множителями эффекта. Допускаются значения суммы выше 100%, что обеспечивает сверхнасыщенные результаты. Если параметр отсутствует, используется значение 1.</span>
                </div>
              </div>
            </div>

            <div class="flexbox-item__div2">
              <p class="control">
                <input
                  v-model="filterSepia"
                  type="number"
                  min="0"
                  max="100"
                >
                <span>%</span>
              </p>
            </div>

            <div class="flexbox-item__div3">
              <p class="control">
                <input
                  v-model="filterSepia"
                  type="range"
                  min="0"
                  max="100"
                  class="control__range-input"
                >
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
          <pre><code><span class="element">&lt;figure</span> id="fdt-filter"<span class="element">&gt;</span>
  <span class="element">&lt;img</span><span> src=""</span><span class="element">&gt;</span>
<span class="element">&lt;figure/&gt;</span></code></pre>
        </template>
      </base-code-field>

      <base-code-field :unique-id="'css-code-selector'">
        <template #header>
          CSS-код
        </template>
        <template #code>
          <pre><code><span class="element">#fdt-filter {</span>
  <span class="textArea">filter: {{ filterString }};</span>
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
  name: "VFilter",
  components: {BaseCodeField},
  data() {
    return {
      filterBlur: "0",
      filterBrightness: "100",
      filterContrast: "100",
      filterGrayscale: "0",
      filterHueRotate: "0",
      filterInvert: "0",
      filterOpacity: "100",
      filterSaturate: "100",
      filterSepia: "0",
    }
  },
  computed: {
      filterString() {
        return `blur(${this.filterBlur}px)
        brightness(${this.filterBrightness}%)
        contrast(${this.filterContrast}%)
        grayscale(${this.filterGrayscale}%)
        hue-rotate(${this.filterHueRotate}deg)
        invert(${this.filterInvert}%)
        opacity(${this.filterOpacity}%)
        saturate(${this.filterSaturate}%)
        sepia(${this.filterSepia}%)`
      }
  },
  methods: {
    loadFile(event) {
      let image = document.getElementById('myImage');
      image.src = URL.createObjectURL(event.target.files[0]);
      this.filterBlur = "0";
      this.filterBrightness = "100";
      this.filterContrast = "100";
      this.filterGrayscale = "0";
      this.filterHueRotate = "0";
      this.filterInvert = "0";
      this.filterOpacity = "100";
      this.filterSaturate = "100";
      this.filterSepia = "0";
    },
  }
}
</script>

<style lang="scss" scoped>
.upload-image__container {
  display: inline-block;
  position: absolute;
  right: 25px;
  top: 15px;
  i {
    position: relative;
  }
}

.working-area__cell {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.4);
  border: 1px solid #000;
  max-width: 45vw;
  max-height: 35vw;
  overflow: hidden;
}

.flexbox-item__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 30px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 15px 5px;
}

.flexbox-item__content__select {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 30px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 15px 5px;
}

.flexbox-item__div1 {
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
}

.input__percent-value::after {
  content: "%";
  background-color: #000;
  font-size: 0.8vw;
}

.upload-image__container {
  display: inline-block;
  position: absolute;
  right: 15px;
  top: 15px;
}

.upload-image__label {
  width: 15vw;
  min-height: 2vw;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: 1vw;
  line-height: 2vw;
  transition: 1s;
  display: flex;
  border: 2px solid #000;
  align-items: center;
  svg {
    margin-left: 5px;
    margin-right: 5px;
    height: 25px;
  }
}

.upload-image__label:hover {
  color: $mainBlueColor;
  background-color: #fff;
}

.upload-image__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
</style>