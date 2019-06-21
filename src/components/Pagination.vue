<template>
  <div>
    <!-- Pagination -->
    <nav aria-label="Page navigation example d-flex">
      <ul class="pagination justify-content-center">
        <li class="page-item"
          :class="{'disabled' : !paginationComponent.has_pre}">
          <a class="page-link" href="#" aria-label="Previous"
            @click.prevent="turnPage(paginationComponent.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"
          v-for="(page, index) in paginationComponent.total_pages" :key="index"
          :class="{'active' : paginationComponent.current_page === page}">
          <a class="page-link" href="#" @click.prevent="turnPage(page)">{{ page }}</a>
        </li>
        <li class="page-item"
          :class="{'disabled' : !paginationComponent.has_next}">
          <a class="page-link" href="#" aria-label="Next"
            @click.prevent="turnPage(paginationComponent.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: ['paginationComponent'],
  methods: {
    turnPage (page) {
      // console.log('page', page)
      this.$emit('turnpage', page)
    }
  }
}

</script>
<style lang="scss" scoped>
  @import '../assets/all.scss'
</style>
