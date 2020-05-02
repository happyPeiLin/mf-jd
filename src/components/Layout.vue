<template>
  <div class="layout">
      <app-navbar></app-navbar>
      <app-header></app-header>
      <app-main></app-main>
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from './AppNavbar'
import AppHeader from './AppHeader'
import AppMain from './AppMain'
import AppFooter from './AppFooter'

export default {
    components: {AppNavbar,AppHeader,AppMain,AppFooter}
}
</script>

<style lang="scss" scoped>

</style>