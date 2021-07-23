<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive}
  }
}
</script>


<template>
  <router-link :to="to" class="menulink" :class="{ activemenu: isActivemenu }">
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
 transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.menulink {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  border-radius: 0.25em;
  height: 1.5em;

  color: gray;
  text-decoration: none;
}

.menulink:hover {
  background-color: lightblue;
  
}

.menulink.activemenu {
   background-color: lightblue
}
</style>
