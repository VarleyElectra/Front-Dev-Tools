<template>
  <main>
    <div class="main__container-vmain">
      <div class="main__instrument-card">
        <div class="main__instrument-card__content">
          <div class="main__instrument-card__image">
            <router-link
              to="/grid"
              href="grid.html"
            >
              <img
                :src=" require('../assets/images/grid-layout.svg') "
                alt="grid icon"
                class="card__image"
              >
            </router-link>
          </div>

          <div class="main__instrument-card__text">
            <h3>
              <router-link to="/grid">
                CSS Grid-Layout Generator
              </router-link>
            </h3>
            <p>
              <router-link
                to="/grid"
                class="main__instrument-card__text__href"
              >
                Генератор создания двумерной сетки (Grid Layout). Grid можно
                использовать для размещения основных областей страницы или
                небольших элементов пользовательского интерфейса.
              </router-link>
            </p>
          </div>
        </div>
      </div>

      <div class="main__instrument-card">
        <div class="main__instrument-card__content">
          <div class="main__instrument-card__image">
            <router-link to="/flexbox">
              <img
                :src=" require('../assets/images/flexbox-layout.svg') "
                alt="flexbox icon"
                class="card__image"
              >
            </router-link>
          </div>

          <div class="main__instrument-card__text">
            <h3>
              <router-link to="/flexbox">
                CSS Flexbox Generator
              </router-link>
            </h3>
            <p>
              <router-link
                class="main__instrument-card__text__href"
                to="/flexbox"
              >
                Генератор создания гибких блоков (Flex Box). Flexbox
                предоставляет инструменты для быстрого создания сложных,
                гибких макетов, и функции, которые были сложны в традиционных
                методах CSS.
              </router-link>
            </p>
          </div>
        </div>
      </div>

      <div class="main__instrument-card">
        <div class="main__instrument-card__content">
          <div class="main__instrument-card__image">
            <router-link to="/shadow">
              <img
                :src=" require('../assets/images/shadow.svg') "
                alt=""
                class="card__image"
              >
            </router-link>
          </div>

          <div class="main__instrument-card__text">
            <h3>
              <router-link to="/shadow">
                Box-Shadow Generator
              </router-link>
            </h3>
            <p>
              <router-link
                class="main__instrument-card__text__href"
                to="/shadow"
              >
                Генератор создания теней для блоков. Свойство тени
                представляет собой описанные смещения по x и y от элемента,
                радиус размытия, цвет и т.д.
              </router-link>
            </p>
          </div>
        </div>
      </div>

      <div class="main__instrument-card">
        <div class="main__instrument-card__content">
          <div class="main__instrument-card__image">
            <router-link to="/filter">
              <img
                :src=" require('../assets/images/filter.svg') "
                alt=""
                class="card__image"
              >
            </router-link>
          </div>

          <div class="main__instrument-card__text">
            <h3>
              <router-link to="/filter">
                CSS-Filters Generator
              </router-link>
            </h3>
            <p>
              <router-link
                class="main__instrument-card__text__href"
                to="/filter"
              >
                Генератор создания фильтров для изображений. Генератор
                позволяет вам применять к элементу различные графические
                эффекты. Фильтры обычно используются для регулировки
                рендеринга изображений, фонов и рамок.
              </router-link>
            </p>
          </div>
        </div>
      </div>

      <div class="main__instrument-card">
        <div class="main__instrument-card__content">
          <div class="main__instrument-card__image">
            <router-link to="/gradient">
              <img
                :src=" require('../assets/images/gradient.svg') "
                alt=""
                class="card__image"
              >
            </router-link>
          </div>

          <div class="main__instrument-card__text">
            <h3>
              <router-link to="/gradient">
                CSS-Gradient Generator
              </router-link>
            </h3>
            <p>
              <router-link
                class="main__instrument-card__text__href"
                to="/gradient"
              >
                Генератор создания градиентов. Градиент — вид заливки в
                компьютерной графике, которая по заданным параметрам цвета в
                ключевых точках рассчитывает промежуточные цвета остальных
                точек.
              </router-link>
            </p>
          </div>
        </div>
      </div>

      <div class="main__instrument-card">
        <div class="main__instrument-card__content">
          <div class="main__instrument-card__image">
            <router-link to="/text">
              <img
                :src=" require('../assets/images/text.svg') "
                alt=""
                class="card__image"
              >
            </router-link>
          </div>

          <div class="main__instrument-card__text">
            <h3>
              <router-link to="/text">
                Text Generator
              </router-link>
            </h3>
            <p>
              <router-link
                class="main__instrument-card__text__href"
                to="/text"
              >
                Генератор создания текста. Позволяет редактировать различные
                свойства текста, такие как размер, стиль, жирность, цвет и
                т.д.
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    name: "VMain",
}
</script>

<style lang="scss">
.main__container-vmain {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 25px;
  grid-row-gap: 25px;
}

.main__instrument-card {
  margin: 15px;
  border: 5px solid #000;
  position: relative;
  font-size: 1vw;
  line-height: 1.5;
  transition: 0.5s;
  min-height: 400px;
}

.main__instrument-card:hover {
  border: 5px solid $mainBlueColor;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.main__instrument-card__image {
  cursor: pointer;
  min-width: 100%;
  position: relative;
  padding: 16px 0;
  margin-bottom: 25px;
}

.main__instrument-card:nth-child(1) {
  .main__instrument-card__image {
    background-color: rgb(253, 84, 84);
    background-size: contain;
  }
}

.main__instrument-card:nth-child(2) {
  .main__instrument-card__image {
    background-color: rgb(131, 224, 70);
  }
}

.main__instrument-card:nth-child(3) {
  .main__instrument-card__image {
    background-color: rgb(106, 220, 240);
  }
}

.main__instrument-card:nth-child(4) {
  .main__instrument-card__image {
    background-color: rgb(240, 106, 233);
  }
}

.main__instrument-card:nth-child(5) {
  .main__instrument-card__image {
    background-color: rgb(37, 236, 143);
  }
}

.main__instrument-card:nth-child(6) {
  .main__instrument-card__image {
    background-color: rgba(32, 9, 231, 0.6);
  }
}

.card__image {
  width: 150px;
  height: 150px;
  display: table;
  margin: 0 auto;
}

.main__instrument-card__text {
  padding: 0 16px 16px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-size: 1.5 * $fontSize;
  h3 {
    font-size: 2 * $fontSize;
    a {
      color: $mainBlueColor;
    }
    a:visited {
      color: $mainBlueColor;
    }
  }
}

.main__instrument-card__text__href {
  color: #000;
}
</style>