<template>
<div>
  <DashboardNavbar/>
    <Alert/>
    <div class="container-fluid">
      <div class="row">
        <DashboardSidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNavbar from '@/components/DashboardNavbar.vue'
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import Alert from '../components/AlertMessage'

export default {
  name: 'dashboard',
  components: {
    DashboardNavbar,
    DashboardSidebar,
    Alert
  }
}

</script>
<style  lang="scss" scoped>
  @import "../assets/all";
</style>
