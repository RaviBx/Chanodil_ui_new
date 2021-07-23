<!--This View Displays My Inquiry page after clicking My Inquiry from Navigation Bar--->

<template>
  <div class="home">
    
    <MenuBar />
    <MessageBox />
    <MessageBoxBar />
    <Footer />
    <Rightpanel />


  </div>
</template>

<script>

import Rightpanel from '@/components/Rightpanel.vue'
import Footer from '@/components/Footer.vue'
import MessageBoxBar from '@/components/MessageBoxBar.vue'
import MenuBar from '@/components/MenuBar.vue'
import MessageBox from '@/components/MessageBox.vue'

export default {
  name: 'Myinquiry',
  components: {
    MenuBar,MessageBox,
    MessageBoxBar,Footer,
    Rightpanel
  }
}
</script>
