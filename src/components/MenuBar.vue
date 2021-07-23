<template>
  <nav>
    <p><i class="arrow left"></i></p>
    <div class="menu-item">
      <MenuBarLink to="/">INQUIRY PROGRESS</MenuBarLink>
    </div>
    <div class="menu-item">
      <MenuBarLink to="/messagechanodil">MESSAGE WITH CHANODIL</MenuBarLink>
    </div>
    <div class="menu-item">
      <MenuBarLink to="/billing">BILLING DETAILS</MenuBarLink>
    </div>
  </nav>
</template>


<script>
import MenuBarLink from './MenuBarLink'
export default {
  components:{MenuBarLink
  }
  
}
</script>



<style>
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 2%;
  width: 71%;
  height: auto;
  padding: 16px;
  bottom: 0;
  position: relative;
  left: 200px;
}

nav .menu-item {
  padding: 10px 70px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  
}


nav .menu-item:hover {
  border-bottom-color: lightskyblue;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
