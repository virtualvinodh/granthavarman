<template>
  <div>
    Sharada Style &nbsp;&nbsp;
    <q-btn-toggle
      class="q-mb-md"
      v-model = "script"
      toggle-color="faded"
      @input = "update"
      :options="[
        {label: 'Normal', value: 'normal'},
        {label: 'Compact', value: 'compact'},
      ]"
    /> <br/><br/>
  </div>
</template>

<script>
import {QRadio, QField, QBtnToggle, QToggle} from 'quasar'

export default {
  // name: 'ComponentName',
  components: {
    QRadio,
    QField,
    QBtnToggle,
    QToggle
  },
  props: ['extra'],
  data () {
    return {
      script: 'normal'
    }
  },
  mounted: function () {
    this.update()
  },
  methods: {
    update: function () {
      var options = {}

      options['script'] = this.script

      this.$emit('input', options)
    },
    updateR: function () {
      var options = {}

      options['script'] = this.script

      this.$emit('input', options)
    }
  }
}
</script>

<style>
</style>
