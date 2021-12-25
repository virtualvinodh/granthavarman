<template>
  <q-card inline class="cards q-ma-sm non-selectable" :color="highlight ? 'grey-10': ''">
    <q-card-title>
      <p v-if="script=='devanagari'">{{text}}</p>
      <p v-if="script=='roman'">{{convertDR(text)}}</p>
      <p v-if="script=='tamil'">{{convertDTm(text)}}</p>
    </q-card-title>
    <q-card-main align="center">
      <font :size="typeof(size) !== 'undefined' ? size : '6'" class="sharada"><p>{{convertDS(text)}}</p></font>
    </q-card-main>
  </q-card>
</template>

<script>
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions} from 'quasar'
import { ScriptMixin } from '../mixins/ScriptMixin'

export default {
  // name: 'ComponentName',
  props: ['text', 'script', 'highlight', 'size'],
  mixins: [ScriptMixin],
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardActions
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.cards {
  width:130px;
}
</style>
