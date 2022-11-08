<template>
  <footer class="footer">
    <div class="footer__top-container" />

    <div class="footer__bottom-container">
      <div class="footer__row">
        <h2>О Front Dev Tools</h2>
        <p>
          Сайт Front Dev Tools содержит различные инструменты для генерации
          кода с помощью удобного графического интерфейса. Такие инструменты
          экономят время разработчикам, а новички в области
          frontend-разработки смогут наглядным способом ознакомиться с тем,
          как работают различные инструменты frontend-разработки.
        </p>
      </div>

      <div class="footer__row">
        <h2>Навигация</h2>
        <ul>
          <li><span><router-link to="/grid">CSS Grid Generator</router-link></span></li>
          <li><span><router-link to="/flexbox">CSS Flexbox Generator</router-link></span></li>
          <li><span><router-link to="/shadow">Box-Shadow Generator</router-link></span></li>
          <li><span><router-link to="/filter">CSS-Filters Generator</router-link></span></li>
          <li><span><router-link to="/gradient">CSS-Gradient Generator</router-link></span></li>
          <li><span><router-link to="/text">Text Generator</router-link></span></li>
        </ul>
      </div>

      <div class="footer__row">
        <h2>Ссылки</h2>

        <ul class="social-links">
          <li class="social-links__item">
            <a
              target="_blank"
              href="https://www.instagram.com/varley.electra/"
            ><font-awesome-icon
              icon="fa-brands fa-instagram"
              size="2x"
            /></a>
          </li>
          <li class="social-links__item">
            <a
              target="_blank"
              href="https://vk.com/varley_electra"
            ><font-awesome-icon
              icon="fa-brands fa-vk"
              size="2x"
            /></a>
          </li>
          <li class="social-links__item">
            <a
              target="_blank"
              href="https://github.com/VarleyElectra"
            ><font-awesome-icon
              icon="fa-brands fa-github"
              size="2x"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "VFooter"
}
</script>

<style scoped lang="scss">
.footer {
  flex: 0 0 auto;
}

.footer__top-container {
  background: linear-gradient(to bottom, $subBlueColor, $mainBlueColor);
  height: 50px;
}

.footer__bottom-container {
  background-color: $blackColor;
  color: #fff;
  padding-top: 15px;
  display: flex;
  justify-content: center;
}

.footer__row {
  max-width: 30vw;
  margin: 25px auto;
  h2 {
    font-size: 2.5 * $fontSize;
    line-height: 1.25;
    padding-bottom: 15px;
    transition: 0.5s;
  }
  p {
    font-size: 1.5 * $fontSize;
  }
  li {
    margin-bottom: 5px;
  }

  h2::after {
    content: "";
    display: block;
    margin-top: 3px;
    width: 40px;
    height: 2px;
    background: linear-gradient(to bottom, $subBlueColor, $mainBlueColor);
    transition: 0.5s;
  }
  p {
    line-height: 1.25;
  }
  a {
    color: #fff;
    line-height: 1.25;
    transition: 0.5s;
  }

  a:hover {
    color: $subBlueColor;
  }
}

.footer__row:hover {
  h2 {
    color: $subBlueColor;
  }
  h2::after {
    width: 80px;
  }
}

.social-links {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}

.social-links__item {
  margin: 0 auto;
  transition: 0.5s;
}

.social-links__item:hover {
  color: $subBlueColor;
}
</style>