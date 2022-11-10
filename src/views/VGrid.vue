<template>
  <main>
    <div class="main__header">
      <h1>CSS-Grid Генератор</h1>
    </div>
    <div class="main__container">
      <div class="main__working-area">
        <div class="main__grid-container">
          <p>Рабочая область</p>
          <div
            class="main__working-area__grid"
            :style="{ 'grid-template-columns': gridTemplateColumnString, 
                      'grid-template-rows': gridTemplateRowString, 
                      'grid-column-gap': `${columnsGap}px`, 
                      'grid-row-gap': `${rowsGap}px` }"
          >
            <div
              v-for="num in cells"
              :key="num"
              class="working-area__cell"
            />
          </div>
        </div>
      </div>
      <div class="main__grid-settings-container">
        <div class="main__grid-settings">
          <h2>
            Настройки
            <div class="tooltip">
              <font-awesome-icon icon="fa-solid fa-clipboard-question" />
              <span class="tooltiptext">Columns - количество столбцов. <br>
                Rows - количество строк. <br>
                Columns Gap - отступ между столбцами.<br>
                Rows Gap - отступ между строками</span>
            </div>
          </h2>
          <fieldset class="grid-settings__fieldset">
            <label for="settings-columns">Columns:</label>
            <input
              id="settings-columns"
              v-model="gridColumns"
              type="number"
              min="0"
              max="12"
            >
          </fieldset>

          <fieldset class="grid-settings__fieldset">
            <label for="settings-rows">Rows:</label>
            <input
              id="settings-rows"
              v-model="gridRows"
              type="number"
              min="0"
              max="12"
            >
          </fieldset>

          <fieldset class="grid-settings__fieldset">
            <label for="settings-column-gap">Columns Gap (px):</label>
            <input
              id="settings-column-gap"
              v-model="columnsGap"
              type="number"
              min="0"
              max="50"
            >
          </fieldset>

          <fieldset class="grid-settings__fieldset">
            <label for="settings-row-gap">Rows Gap (px):</label>
            <input
              id="settings-row-gap"
              v-model="rowsGap"
              type="number"
              min="0"
              max="50"
            >
          </fieldset>

          <div class="grid-settings__control-panel">
            <div class="control-panel__container">
              <div class="control-panel__info-field">
                <h2>
                  Grid Template Columns
                  <div class="tooltip">
                    <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                    <span class="tooltiptext">Свойство Grid Template Columns - определяет, как элементы
                      будут разделены на вертикальные столбцы, а также какие размеры
                      они будут иметь</span>
                  </div>
                </h2>
              </div>

              <transition-group name="element-list">
                <div
                  v-for="(colArr, index) in gridTemplateColumns"
                  :key="colArr.id"
                  class="control-panel__control-field"
                >
                  <p class="control-text">
                    Column {{ index + 1 }}
                  </p>
                  <p class="control">
                    <input
                      v-model="colArr.sizeValue"
                      type="number"
                      min="1"
                    >
                  </p>
                  <p class="contol">
                    <span class="select">
                      <select
                        v-model="colArr.sizeUnit"
                        aria-label="Grid Template Columns"
                      >
                        <option value="px">px</option>
                        <option value="fr">fr</option>
                        <option value="%">%</option>
                        <option value="auto">auto</option>
                      </select>
                    </span>
                  </p>
                  <div class="delete-button-container">
                    <p class="control">
                      <base-delete-button
                        :id="`delete-button__${index}`"
                        data-type="column"
                        @deleteElement="deleteItem"
                      />
                    </p>
                  </div>
                </div>
              </transition-group>
              <div
                id="add-new-column"
                class="add-new-element-button-container"
              >
                <base-button
                  @click="addNewColumn"
                >
                  <font-awesome-icon icon="fa-solid fa-plus" /> Добавить столбец
                </base-button>
              </div>
            </div>
          </div>

          <div class="grid-settings__control-panel">
            <div class="control-panel__container">
              <div class="control-panel__info-field">
                <h2>
                  Grid Template Rows
                  <div class="tooltip">
                    <font-awesome-icon icon="fa-solid fa-clipboard-question" />
                    <span class="tooltiptext">Свойство Grid Template Rows - определяет, как элементы будут
                      разделены на горизонтальные строки, а также какие размеры они
                      будут иметь</span>
                  </div>
                </h2>
              </div>

              <transition-group name="element-list">
                <div
                  v-for="(rowArr, index) in gridTemplateRows"
                  :key="rowArr.id"
                  class="control-panel__control-field"
                >
                  <p class="control-text">
                    Row {{ index + 1 }}
                  </p>
                  <p class="control">
                    <input
                      v-model="rowArr.sizeValue"
                      type="number"
                      min="1"
                    >
                  </p>
                  <p class="contol">
                    <span class="select">
                      <select
                        v-model="rowArr.sizeUnit"
                        aria-label="Grid Template Columns"
                      >
                        <option value="px">px</option>
                        <option value="fr">fr</option>
                        <option value="%">%</option>
                        <option value="auto">auto</option>
                      </select>
                    </span>
                  </p>
                  <div class="delete-button-container">
                    <p class="control">
                      <base-delete-button
                        :id="`delete-button__${index}`"
                        data-type="row"
                        @deleteElement="deleteItem"
                      />
                    </p>
                  </div>
                </div>
              </transition-group>
              <div class="add-new-element-button-container">
                <base-button
                  @click="addNewRow"
                >
                  <font-awesome-icon icon="fa-solid fa-plus" /> Добавить строку
                </base-button>
              </div>
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
          <pre><code><span class="element">&lt;div</span> id="fdt-grid__container"<span class="element">&gt;</span>
  <span
          v-for="gridItem in cells"
          :key="gridItem.id"
  >
  <span class="element">&lt;div</span> class="fdt-grid__item"<span class="element">&gt;</span><span class="element">&lt;div/&gt;</span>
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
          <pre><code><span class="element">#fdt-grid__container {</span>
  <span class="textArea">grid-template-columns: {{ gridTemplateColumnString }};</span>
  <span class="textArea">grid-template-rows: {{ gridTemplateRowString }};</span>
  <span class="textArea">grid-column-gap: {{ columnsGap }}px;</span>
  <span class="textArea">grid-row-gap: {{ rowsGap }}px;</span>
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
    name: "VGrid",
    components: {BaseCodeField, BaseButton, BaseDeleteButton},
    data() {
      return {
        gridColumns: 4,
        gridRows: 3,
        columnsGap: 0,
        rowsGap: 0,
        gridTemplateColumns: [
          {
            sizeValue: 100,
            sizeUnit: 'px',
            id: Date.now() + Math.round(Math.random() * 100),
          },
          {
            sizeValue: 100,
            sizeUnit: 'px',
            id: Date.now() + Math.round(Math.random() * 100),
          },
          {
            sizeValue: 100,
            sizeUnit: 'px',
            id: Date.now() + Math.round(Math.random() * 100),
          },
          {
            sizeValue: 100,
            sizeUnit: 'px',
            id: Date.now() + Math.round(Math.random() * 100),
          },
        ],
        gridTemplateRows: [
          {
            sizeValue: 100,
            sizeUnit: 'px',
            id: Date.now() + Math.round(Math.random() * 100),
          },
          {
            sizeValue: 100,
            sizeUnit: 'px',
            id: Date.now() + Math.round(Math.random() * 100),
          },
          {
            sizeValue: 100,
            sizeUnit: 'px',
            id: Date.now() + Math.round(Math.random() * 100),
          },
        ],
      }
    },
    computed: {
      gridTemplateColumnString() {
        return this.gridTemplateColumns
            .reduce((acc, cell) => acc + `${cell.sizeValue}${cell.sizeUnit} `, "");
      },

      gridTemplateRowString() {
        return this.gridTemplateRows
            .reduce((acc, cell) => acc + `${cell.sizeValue}${cell.sizeUnit} `, "");
      },

      cells() {
        return Number(this.gridColumns) * Number(this.gridRows);
      },
    },
    watch: {
      gridColumns() {
        let columnsArrLength = Number(this.gridColumns);
        while (this.gridTemplateColumns.length !== columnsArrLength) {
          if (this.gridTemplateColumns.length < columnsArrLength) {
            this.gridTemplateColumns.push({
              sizeValue: 100,
              sizeUnit: 'px',
              id: Date.now()
            });
          } else {
            this.gridTemplateColumns.pop();
          }
        }
      },

      gridRows() {
        let rowsArrLength = Number(this.gridRows);
        while (this.gridTemplateRows.length !== rowsArrLength) {
          if (this.gridTemplateRows.length < rowsArrLength) {
            this.gridTemplateRows.push({
              sizeValue: 100,
              sizeUnit: 'px',
              id: Date.now()
            });
          } else {
            this.gridTemplateRows.pop();
          }
        }
      }
    },
    methods: {
      addNewColumn() {
        this.gridTemplateColumns.push({
          sizeValue: 100,
          sizeUnit: 'px',
          id: Date.now()
        });
        this.gridColumns += 1;
      },

      addNewRow() {
        this.gridTemplateRows.push({
          sizeValue: 100,
          sizeUnit: 'px',
          id: Date.now()
        });
        this.gridRows += 1;
      },

      deleteItem({id, target}) {
        let button = target.closest('.delete-button')
        let type = button.dataset.type;

        switch (type) {
          case 'row':
            this.gridTemplateRows.splice(id, 1);
            this.gridRows -= 1;
            break;
          case 'column':
            this.gridTemplateColumns.splice(id, 1);
            this.gridColumns -= 1;
            break;
          default:
            break;
        }
      },
    }
}
</script>

<style lang="scss" scoped>
.main__working-area__grid {
    display: grid;
    min-height: 88%;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(4, 100px);
    margin: 50px;
}

.working-area__cell {
    box-shadow: 0 0 0 1px $shadowColor;
    background-color: #fff;
    overflow: hidden;
}

.grid-settings__fieldset {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: 1s;
  border: 1px solid transparent;
  margin: 0 10px 10px;
    label {
        padding-right: 5px;
        padding-left: 1em;
    }
    input {
        height: 1.75em;
        box-shadow: 0 0 0 1px $shadowColor;
        max-width: 40%;
    }
}

.grid-settings__fieldset:nth-child(1) {
    margin-top: 15px;
}

.grid-settings__fieldset:hover {
    background-color: #fff;
    border: 1px solid #000;
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
    padding: 10px;
}

.control-panel__control-field {
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid transparent;
    transition: 1s;
    padding: 5px;
    position: relative;
}

.control-panel__container:last-child {
    margin-bottom: -10px;
}

.control-panel__control-field:hover {
    background-color: #fff;
    border: 1px solid #000;
}

.control-text {
    margin-right: 5px;
    min-width: 100px;
    height: 30px;
    line-height: 30px;
}

.control {
    position: relative;
    text-align: left;
    display: block;
    height: 30px;
    margin: 5px;
    max-width: 30% !important;
    input {
        border: 1px solid #000;
        color: rgb(54, 54, 54);
        padding: 5px 5px 5px 10px;
        height: 30px;
    }
}

.select {
    select {
        line-height: 1;
        padding: 5px;
    }
}

#add-new-column {
    margin-bottom: 0;
}
</style>