<template>
  <div class="cards">
    <div v-for="monster in monsters" :key="monster.id" class="card">
      <portrait :public-id="monster.publicId"></portrait>
    </div>
  </div>
</template>
<script>
import * as Monsters from '~/helpers/monsters.js'
import Portrait from '~/components/portrait'

export default {
  layout: 'gallery',
  components: {
    Portrait
  },
  data() {
    return {
      monsters: []
    }
  },
  async asyncData(context) {
    const monsters = await Monsters.list()
    return {
      monsters
    }
  }
}
</script>
<style>
.cards {
  display: flex;
}
</style>
