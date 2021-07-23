<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      
      <span v-if="collapsed">
        <div></div>
        <div></div>
      </span>
      <span v-else></span>
    </h1>
     

    <SidebarLink to="/" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/makeinq" icon="fas fa-plus-square">Make Inquiry</SidebarLink>
    <SidebarLink to="/myinq" icon="fas fa-list-ul">My Inquiry</SidebarLink>
    <SidebarLink to="/completedinq" icon="fas fa-clipboard-list">Completed Inquiry</SidebarLink>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #448aff;
  --sidebar-item-hover: #CBC3E3;
  --sidebar-item-active: 	#b2beb5;
}
</style>


<!-- Added "scoped" attribute to limit CSS to this component only -->

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 12%;
    width: 70%;
    height: auto;
    padding: 20px;
    bottom: 0;
   transition: 0.3s ease;
   display: flex;
   flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
