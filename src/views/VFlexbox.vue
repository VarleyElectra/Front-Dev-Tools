<template>
  <main>
    <div class="main__header">
      <h1>CSS-Flexbox Генератор</h1>
    </div>
    <div class="main__container">
      <div class="main__working-area">
        <div class="main__grid-container">
          <p>Рабочая область</p>
          <div
            class="main__working-area__flex-vflex"
            :style="{ 'flex-direction': flexDirection, 
                      'flex-wrap': flexWrap, 'justify-content': justifyContent, 
                      'align-items': alignItems, 'align-content': alignContent}"
          >
            <div
              v-for="(flexItem, index) in flexBoxCells"
              :key="flexItem.id"
              class="working-area__cell"
              :style="{'order': flexItem.order, 'flex-grow': flexItem.flexGrow, 
                       'flex-shrink': flexItem.flexShrink, 'flex-basis': flexItem.flexBasis, 
                       'align-self': flexItem.alignSelf}"
            >
              {{ index + 1 }}
            </div>
          </div>
        </div>
      </div>
      <div class="main__grid-settings-container">
        <div class="main__grid-settings">
          <h2>Настройки</h2>
          <div class="settings__grid">
            <div class="settings__grid-text-top div1">
              flex-direction
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">flex-direction - CSS свойство, указывающее на то, как flex-элементы
                  располагаются во flex-контейнере по главной оси и направлению (normal или reversed).</span>
              </div>
            </div>

            <div class="control__container div2">
              <p class="contol">
                <span class="select-vflex">
                  <select
                    v-model="flexDirection"
                    aria-label="Grid Template Columns"
                  >
                    <option value="row">row</option>
                    <option value="row-reverse">row-reverse</option>
                    <option value="column">column</option>
                    <option value="column-reverse">column-reverse</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="settings__grid">
            <div class="settings__grid-text-top div1">
              flex-wrap
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">Свойство CSS flex-wrap задаёт правила вывода flex-элементов — в одну строку
                  или в несколько, с переносом блоков. Если перенос разрешён, то возможно задать направление, в котором
                  выводятся блоки.</span>
              </div>
            </div>

            <div class="control__container div2">
              <p class="contol">
                <span class="select-vflex">
                  <select
                    v-model="flexWrap"
                    aria-label="Grid Template Columns"
                  >
                    <option value="wrap">wrap</option>
                    <option value="nowrap">nowrap</option>
                    <option value="wrap-reverse">wrap-reverse</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="settings__grid">
            <div class="settings__grid-text-top div1">
              justify-content
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">CSS свойство justify-content определяет, как браузер распределяет пространство
                  между и вокруг элементов контента вдоль главной оси flex контейнера, или вдоль строчной оси grid
                  контейнера.</span>
              </div>
            </div>
            <div class="control__container div2">
              <p class="contol">
                <span class="select-vflex">
                  <select
                    v-model="justifyContent"
                    aria-label="Grid Template Columns"
                  >
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="space-between">space-between</option>
                    <option value="space-around">space-around</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="settings__grid">
            <div class="settings__grid-text-top div1">
              align-content
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">CSS-свойство align-content устанавливает распределение пространства между и
                  вокруг элементами контента вдоль поперечной оси flexbox контейнера</span>
              </div>
            </div>
            <div class="control__container div2">
              <p class="contol">
                <span class="select-vflex">
                  <select
                    v-model="alignContent"
                    aria-label="Grid Template Columns"
                  >
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="space-between">space-between</option>
                    <option value="space-around">space-around</option>
                    <option value="space-around">stretch</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <div class="settings__grid">
            <div class="settings__grid-text-top div1">
              align-items
              <div class="tooltip tooltip-settings">
                <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                <span class="tooltiptext">CSS свойство align-items выравнивает flex-элементы текущей flex-линии таким же
                  образом, как и justify-content, но в перпендикулярном направлении.</span>
              </div>
            </div>
            <div class="control__container div2">
              <p class="contol">
                <span class="select-vflex">
                  <select
                    v-model="alignItems"
                    aria-label="Grid Template Columns"
                  >
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="space-between">baseline</option>
                    <option value="space-around">stretch</option>
                  </select>
                </span>
              </p>
            </div>
          </div>




          <div class="grid-settings__control-panel">
            <div class="control-panel__container">
              <div class="control-panel__info-field">
                <h2>Flexbox-элементы</h2>
              </div>
            </div>
          </div>
          
          <transition-group name="element-list">
            <div
              v-for="(flexItem, index) in flexBoxCells"
              :key="flexItem.id"
              class="flexbox-item__container"
            >
              <h3>Элемент №{{ index + 1 }}</h3>
              <div class="delete-button-container">
                <p class="control">
                  <base-delete-button
                    :id="`delete-button__${index}`"
                    @deleteElement="deleteFlexItem"
                  />
                </p>
              </div>

              <div class="flexbox-item__content">
                <div class="flexbox-item__div1">
                  <div class="settings__grid-text">
                    order
                    <div class="tooltip tooltip-settings">
                      <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                      <span class="tooltiptext">CSS свойство  order определяет порядок, используемый для размещения flex элементов в их flex контейнере. Элементы располагаются в восходящем порядке по значению order. Элементы с одинаковым значением order  располагаются в том порядке, в каком они находятся в исходном коде.</span>
                    </div>
                  </div>
                </div>

                <div class="flexbox-item__div2">
                  <p class="control">
                    <input
                      v-model="flexItem.order"
                      type="number"
                      min="0"
                    >
                  </p>
                </div>
              </div>

              <div class="flexbox-item__content">
                <div class="flexbox-item__div1">
                  <div class="settings__grid-text">
                    flex
                    <div class="tooltip tooltip-settings">
                      <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                      <span class="tooltiptext">Свойство flex: <br>
                        flex-grow: определяет как много свободного пространства во flex-контейнере должно быть назначено
                        текущему элементу<br>
                        flex-shrink: определяет коэффициент сжатия flex-элемента.<br>
                        flex-basis: задаёт базовый размер флекс элемента по основной оси. Это свойство определяет размер
                        контент-бокса, если не задано иначе через box-sizing.</span>
                    </div>
                  </div>
                </div>

                <div class="flexbox-item__div2">
                  <p class="control">
                    <input
                      v-model="flexItem.flexGrow"
                      type="number"
                      min="0"
                    >
                  </p>
                </div>

                <div class="flexbox-item__div3">
                  <p class="control">
                    <input
                      v-model="flexItem.flexShrink"
                      type="number"
                      min="0"
                    >
                  </p>
                </div>

                <div class="flexbox-item__div4">
                  <p class="control">
                    <input
                      v-model="flexItem.flexBasis"
                      type="text"
                      min="0"
                    >
                  </p>
                </div>
              </div>

              <div
                id="flexbox__input"
                class="flexbox-item__content"
              >
                <div class="flexbox-item__div1">
                  <div class="settings__grid-text">
                    align-self
                    <div class="tooltip tooltip-settings">
                      <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                      <span class="tooltiptext">Свойство CSS align-self выравнивает flex-элементы по текущей flex-линии, переопределяя значение свойства align-items. Если у какого-либо flex-элемента margin в поперечной оси выставлен в auto, то align-self игнорируется.</span>
                    </div>
                  </div>
                </div>

                <div class="flexbox-item__div2">
                  <p
                    id="flexbox__control"
                    class="contol"
                  >
                    <span class="select-vflex">
                      <select
                        v-model="flexItem.alignSelf"
                        aria-label="Grid Template Columns"
                      >
                        <option value="auto">auto</option>
                        <option value="flex-start">flex-start</option>
                        <option value="flex-end">flex-end</option>
                        <option value="center">center</option>
                        <option value="baseline">baseline</option>
                        <option value="stretch">stretch</option>
                      </select>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </transition-group>

          <div class="add-new-element-button-container">
            <base-button
              @click="addNewFlexItem"
            >
              <font-awesome-icon icon="fa-solid fa-plus" /> Добавить элемент
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
          <pre><code><span class="element">&lt;div</span> id="fdt-flexbox__container"<span class="element">&gt;</span>
  <span
          v-for="flexItem in flexBoxCells"
          :key="flexItem.id"
  >
    <span class="element">&lt;div</span> class="fdt-flexbox__item"<span class="element">&gt;</span><span class="element">&lt;div/&gt;</span>
  </span>
<span class="element">&lt;div/&gt;</span>

</code></pre>
        </template>
      </base-code-field>

      <base-code-field :unique-id="'css-code-selector'">
        <template #header>
          CSS-код
        </template>
        <template #code>
          <pre><code><span class="element">#fdt-flexbox__container {</span>
  <span class="textArea">flex-direction: {{ flexDirection }};</span>
  <span class="textArea">flex-wrap: {{ flexWrap }};</span>
  <span class="textArea">justify-content: {{ justifyContent }};</span>
  <span class="textArea">align-content: {{ alignContent }};</span>
  <span class="textArea">align-items: {{ alignItems }};</span>
<span class="element">}</span>

<span
        v-for="(flexItem, index) in flexBoxCells"
        :key="flexItem.id"
>
<span class="element">.fdt-flexbox__item:nth-child({{ index + 1 }}) {</span>
  <span class="textArea">order: {{ flexItem.order }};</span>
  <span class="textArea">flex: {{ flexItem.flexGrow }} {{ flexItem.flexShrink }} {{ flexItem.flexBasis }};</span>
  <span class="textArea">align-self: {{ flexItem.alignSelf }};</span>
<span class="element">}</span>
</span>
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
    name: "VFlexbox",
    components: {BaseCodeField, BaseButton, BaseDeleteButton},
    data() {
        return {
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignContent: "flex-start",
            flexBoxCells: [
              {
                order: 0,
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'auto',
                alignSelf: 'auto',
                id: Date.now() + Math.round(Math.random() * 100),
              },
              {
                order: 0,
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'auto',
                alignSelf: 'auto',
                id: Date.now() + Math.round(Math.random() * 100),
              },
              {
                order: 0,
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'auto',
                alignSelf: 'auto',
                id: Date.now() + Math.round(Math.random() * 100),
              },
              {
                order: 0,
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'auto',
                alignSelf: 'auto',
                id: Date.now() + Math.round(Math.random() * 100),
              },
            ]
        }
    },
    methods: {
        addNewFlexItem() {
            this.flexBoxCells.push({
              order: 0,
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: 'auto',
              alignSelf: 'auto',
              id: Date.now() + Math.round(Math.random() * 100),
            })
        },

        deleteFlexItem({id}) {
            this.flexBoxCells.splice(id, 1);
        },
    }
}
</script>

<style lang="scss" scoped>
.settings__grid-text-top {
    height: 2vw;
    line-height: 2vw;
    padding-right: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
}

.control__container {
    .control {
        padding-right: 15px;
        color: #fff;
    }
}

.main__working-area__flex-vflex {
    display: flex;
    min-height: 88%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    margin: 50px;
}

.working-area__cell {
    box-shadow: 0 0 0 1px $shadowColor;
    background-color: #fff;
    width: 7.5vw;
    height: 7.5vw;
    padding: 5px;
    overflow: hidden;
}

.control-panel__info-field {
    padding-bottom: 10px;
    h2 {
        font-size: 1.5vw;
        margin-bottom: 10px;
        text-align: center;
    }
}

.control-panel__info-field::before {
    content: " ";
    width: 75%;
    text-align: center;
    height: 1px;
    display: block;
    margin: 0 auto 10px;
    background-color: #000;
}

.grid-settings__control-panel {
    padding: 1em 0;
}

.control-panel__container:last-child {
    margin-bottom: -10px;
}

.control {
    position: relative;
    text-align: left;
    display: block;
    height: 2vw;
    margin: 5px;
}

.select-vflex {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, 0.1);
    height: 2vw;
    margin-right: 20px;
    width: 100%;
    select {
      line-height: 1;
      box-shadow: 0 0 0 1px $shadowColor;
      height: 100%;
      width: 100%;
    }
}

.settings__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 10px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
}

.flexbox-item__content{
    display: grid;
    grid-template-columns: 4fr repeat(3, 3fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;
}

.flexbox-item__div1 {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    align-items: center;
    min-width: 90px;
}

.flexbox-item__div2 {
    grid-area: 1 / 2 / 2 / 3;
}

.flexbox-item__div3 {
    grid-area: 1 / 3 / 2 / 4;
}

.flexbox-item__div4 {
    grid-area: 1 / 4 / 2 / 5;
}

.flexbox-item__div5 {
    grid-area: 1 / 5 / 2 / 6;
}

#flexbox__input {
    grid-template-columns: 4fr 9fr;
}

#flexbox__control {
    padding: 5px;
}
</style>