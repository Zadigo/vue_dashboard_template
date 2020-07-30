<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- STATS -->
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Capacity</p>
              <h4 class="card-title">105GB</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatsCard from '../components/cards/StatsCard.vue'
export default {
  name: 'Home',
  components: {
    'stats-card': StatsCard
  }
}
</script>
