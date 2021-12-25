<template>
  <q-page padding>
  <q-field
  icon="cloud"
  label="Count"
  helper="Enter the number of letters that you want to test"
  :count="3"
>
  <q-input suffix="letters" v-model="countTotal" @input="reset"/>
</q-field>
Guide Script
    <q-btn-toggle
      class="q-ma-md"
      v-model = "script"
      toggle-color="faded"
      :options="[
        {label: 'Tamil', value: 'tamil'},
        {label: 'Devanagari', value: 'devanagari'},
        {label: 'Roman', value: 'roman'},
      ]"
    />
<br/>
Difficulty
    <q-btn-toggle
      class="q-ma-md"
      v-model = "difficulty"
      toggle-color="faded"
      :options="[
        {label: 'Easy', value: 'easy'},
        {label: 'Medium', value: 'medium'},
        {label: 'Difficult', value: 'difficult'},
        {label: 'Very Difficult', value: 'verydifficult'}
      ]"
    />
  <p class="q-body-1 q-ma-md"> Click a card in one deck and then click a card on the other deck to find a match </p>
  <transition
   enter-active-class="animated fadeIn"
   leave-active-class="animated fadeOut"
   mode="out-in"
    >
    <span :key="resetV">
    <transition-group
    name="flip-list"
    >
      <q-card v-for="(i,index) in randomList" :key="i" inline class="cards q-ma-sm"
       @click.native="select(parseInt(index), 1)" :color="typeof colors1[index] === 'undefined' ? '' : colors1[index]">
        <q-card-main align="center">
          <font :size="6"><p class="sharada">{{convertDS(compounds[i])}}</p></font>
        </q-card-main>
      </q-card>
    </transition-group>
    </span>
  </transition>
  <hr/>
  <transition
   enter-active-class="animated fadeIn"
   leave-active-class="animated fadeOut"
   mode="out-in"
    >
    <span :key="resetV">
  <transition-group
    name="flip-list"
    >
      <q-card v-for="(i,index) in randomList2" :key="i" inline class="cards q-ma-sm"
       @click.native="select(parseInt(index), 2)" :color="typeof colors2[index] === 'undefined' ? '' : colors2[index]">
        <q-card-main align="center">
          <font :size="6" v-if="script === 'devanagari'">
            <p>{{compounds[i]}}</p>
          </font>
          <font :size="5" v-if="script === 'roman'">
            <p>{{convertDR(compounds[i])}}</p>
          </font>
          <font :size="5" v-if="script === 'tamil'">
            <p>{{convertDTm(compounds[i])}}</p>
          </font>
        </q-card-main>
      </q-card>
    </transition-group>
    </span>
  </transition>
  <br/>
  <q-btn label = "Shuffle" class="q-ma-lg" color="faded" @click="shuffleCard"
          :class="{disabled:!isEmpty(colors1) && !isEmpty(colors2)}"></q-btn>
  <q-btn label = "Show answers" class="q-ma-lg" color="faded" @click="show"></q-btn>
  <q-btn label = "Play again" class="q-ma-lg" color="faded" @click="reset"></q-btn>
  <br/>
  </q-page>
</template>

<script>
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions, QField, QInput, QBtnToggle, QToggle, Notify} from 'quasar'
import { ScriptMixin } from '../mixins/ScriptMixin'
var _ = require('underscore')

export default {
  // name: 'PageName',
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardActions,
    QField,
    QInput,
    QBtnToggle,
    QToggle
  },
  mixins: [ScriptMixin],
  plugins: [Notify],
  mounted: function () {
    this.randomListGen()
  },
  data () {
    return {
      script: 'tamil',
      kashmiri: false,
      countTotal: 12,
      difficulty: 'easy',
      answers: {},
      colors1: {},
      colors2: {},
      selected1: ['', ''],
      selected2: ['', ''],
      randomList: [],
      randomList2: [],
      randomListOld: [],
      resetV: true
    }
  },
  watch: {
    difficulty: function () {
      this.reset()
    },
    kashmiri: function () {
      this.reset()
    }
  },
  methods: {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getRandomCompound: function () {
      return this.getRandomInt(0, this.compounds.length - 1)
    },
    randomListGen: function () {
      this.randomListOld = this.randomList.slice()
      this.randomList = []
      while (this.randomList.length < this.countTotal) {
        let random = this.getRandomCompound()
        if (!this.randomList.includes(random) && !this.randomListOld.includes(random)) {
          this.randomList.push(random)
        }
      }
      this.randomList2 = this.shuffle(this.randomList)
    },
    verify: function () {
    },
    reset: function () {
      this.results = []
      this.answers = []
      this.colors1 = {}
      this.colors2 = {}
      this.resetV = !this.resetV
      this.randomListGen()
    },
    shuffleCard: function () {
      if (this.isEmpty(this.colors1)) {
        this.randomList = this.shuffle(this.randomList)
      }
      if (this.isEmpty(this.colors2)) {
        this.randomList2 = this.shuffle(this.randomList)
      }
    },
    show: function () {
      this.$set(this, 'colors1', [])
      this.$set(this, 'colors2', [])
      this.randomList2 = this.randomList.slice()
    },
    isEmpty: function (obj) {
      return Object.keys(obj).length === 0 && obj.constructor === Object
    },
    select: function (index, script) {
      if (this['colors' + script][this['selected' + script][0]] !== 'dark') {
        this.$set(this['colors' + script], this['selected' + script][0], '')
      }

      this['selected' + script][0] = index
      this['selected' + script][1] = true

      this.$set(this, 'selected' + script, this['selected' + script])

      if (this['colors' + script][index] !== 'dark') {
        this.$set(this['colors' + script], index, 'light')
      }
      if (script === 1) {
        if (this.compounds[this.randomList[index]] === this.compounds[this.randomList2[this['selected2'][0]]]) {
          this.$set(this['colors' + script], index, 'dark')
          this.$set(this['colors' + 2], this['selected2'][0], 'dark')

          this.$q.notify({
            type: 'positive',
            message: 'Match!',
            position: 'center',
            timeout: 250
          })
        }
      } else {
        if (this.compounds[this.randomList2[index]] === this.compounds[this.randomList[this['selected1'][0]]]) {
          this.$set(this['colors' + script], index, 'dark')
          this.$set(this['colors' + 1], this['selected1'][0], 'dark')

          this.$q.notify({
            type: 'positive',
            message: 'Match!',
            position: 'center',
            timeout: 250
          })
        }
      }
    },
    shuffle: function (arr) {
      return _.shuffle(arr)
    }
  }
}
</script>

<style scoped>
.cards {
  width: 100px;
}
.flip-list-move {
  transition: transform 1s;
}

</style>
