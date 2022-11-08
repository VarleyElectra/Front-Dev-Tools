<template>
  <header class="header">
    <nav id="menu">
      <input
        id="responsive-menu"
        type="checkbox"
        @onclick="updateMenu"
      >
      <ul id="menu__ul">
        <li id="menu__dropdown">
          <a
            class="dropdown-arrow"
            href="#"
          >
            <div class="header__burger__container">
              <div class="header__burger__container1">
                <div class="header__burger__item" />
                <div class="header__burger__item" />
                <div class="header__burger__item" />
              </div>
            </div>
          </a>
          <ul class="sub-menus">
            <li><span><router-link to="/grid">CSS Grid Generator</router-link></span></li>
            <li><span><router-link to="/flexbox">CSS Flexbox Generator</router-link></span></li>
            <li><span><router-link to="/shadow">Box-Shadow Generator</router-link></span></li>
            <li><span><router-link to="/filter">CSS-Filters Generator</router-link></span></li>
            <li><span><router-link to="/gradient">CSS-Gradient Generator</router-link></span></li>
            <li><span><router-link to="/text">Text Generator</router-link></span></li>
          </ul>
        </li>
      </ul>

      <div class="header__container">
        <router-link to="/">
          <div class="header__element">
            <p>Front Dev</p>
            <p>Tools</p>
          </div>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: "VHeader",
    methods: {
        updateMenu(event) {
            console.log(event);
            if (document.getElementById('responsive-menu').checked === true) {
                document.getElementById('menu').style.borderBottomRightRadius = '0';
                document.getElementById('menu').style.borderBottomLeftRadius = '0';
            } else {
                document.getElementById('menu').style.borderRadius = '0px';
            }
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    flex: 0 0 auto;
    position: sticky;
    z-index: 1;
    top: 0;
}

nav a.router-link-exact-active {
    color: $mainBlueColor;
}

a:visited {
    color: black;
}

#menu {
    background: $subBlueColor;
    background: linear-gradient(to bottom, $subBlueColor, $mainBlueColor);
    color: #fff;
    min-height: 100px;
    border-radius: 0;
}

#menu ul,
#menu li {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    transition: 0.5s;
}

#menu__ul:hover {
    transition: 0.5s;
    .header__burger__item {
        background-color: #000;
    }
}

#menu ul {
    width: 100%;
}

#menu li {
    float: left;
    display: inline;
    position: relative;
}

.dropdown-arrow {
  display: block;
  padding: 0 15px;
}

#menu span {
  display: block;
  line-height: 4;
  padding: 0 15px;
  text-decoration: none;
  color: #ffffff;
  font-size: 2.5 * $fontSize;
}

#menu li span:hover {
  color: #ffffff;
}

#menu__dropdown {
    width: 65px;
}

#menu input {
    display: none;
    margin: 0;
    padding: 0;
    height: 80px;
    width: 100%;
    opacity: 0;
    cursor: pointer;
}

#menu ul.sub-menus {
    height: auto;
    overflow: hidden;
    min-width: 250px;
    background: #ffffff;
    position: absolute;
    z-index: 99;
    display: none;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
}

#menu ul.sub-menus li {
    display: block;
    width: 100%;
}

#menu ul.sub-menus span {
  color: #000000;
  font-size: 1.5 * $fontSize;
  transition: 1s;
  font-weight: 400;
}

#menu li:hover ul.sub-menus {
    display: block;
}

#menu ul.sub-menus span:hover {
  background-color: #0099cc;
  color: #fff;
  box-shadow: 0 0 7px 3px rgba(34, 60, 80, 0.4);
}

.header__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
}

.header__element {
    color: #fff;
    text-shadow: 1.5px 1.5px 1.5px #05dbeb;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5 * $fontSize;
    transition: 1s;
    cursor: pointer;
    text-align: center;
}

.header__element:hover {
    color: $mainBlueColor;
    transition: 1s;
}

.header__burger__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
    .header__burger__item {
        transition: 1s;
    }
}

.header__burger__container1:hover {
    .header__burger__item {
        background-color: #000;
    }
}

.header__burger__item {
    width: 45px;
    height: 5px;
    background-color: #ffffff;
    margin: 7.5px 0;
}

@media screen and (max-width: 800px) {
    #menu {
        position: relative;
    }

    #menu ul {
        background: #111;
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        z-index: 3;
        height: auto;
        display: none;
    }

    #menu ul.sub-menus {
        width: 100%;
        position: static;
    }

    #menu ul.sub-menus a {
        padding-left: 30px;
    }

    #menu li {
        display: block;
        float: none;
        width: auto;
    }

    #menu input {
        z-index: 4;
    }

    #menu input:checked ~ ul {
        display: block;
    }
}
</style>