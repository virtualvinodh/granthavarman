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
        {label: 'Easy', value: 'wordsSimple'},
        {label: 'Medium', value: 'wordsMedium'},
        {label: 'Difficult', value: 'wordsCompl'}
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
      <q-card v-for="(i,index) in randomList" :key="i" inline class="q-ma-sm"
       @click.native="select(parseInt(index), 1)" :color="typeof colors1[index] === 'undefined' ? '' : colors1[index]">
        <q-card-main align="center">
          <font :size="3"><p class="sharada">{{convertDS(words[i])}}</p></font>
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
      <q-card v-for="(i,index) in randomList2" :key="i" inline class="q-ma-sm"
       @click.native="select(parseInt(index), 2)" :color="typeof colors2[index] === 'undefined' ? '' : colors2[index]">
        <q-card-main align="center">
          <font :size="3" v-if="script === 'devanagari'" class="noto">
            <p>{{words[i]}}</p>
          </font>
          <font :size="3" v-if="script === 'roman'" class="noto">
            <p>{{convertDR(words[i])}}</p>
          </font>
          <font :size="3" v-if="script === 'tamil'" class="tamil">
            <p>{{convertDTm(words[i])}}</p>
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
import wordssimple from '../statics/words_simple.json'
import wordsmedium from '../statics/words_medium.json'
import wordscompl from '../statics/words_compl.json'

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
      wordsSimple: wordssimple,
      wordsMedium: wordsmedium,
      wordsCompl: wordscompl,
      kashmiri: false,
      countTotal: 8,
      difficulty: 'wordsSimple',
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
  computed: {
    words: function () {
      return this[this.difficulty]
    }
  },
  methods: {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getRandomCompound: function () {
      return this.getRandomInt(0, this.words.length - 1)
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
        if (this.words[this.randomList[index]] === this.words[this.randomList2[this['selected2'][0]]]) {
          this.$set(this['colors' + script], index, 'dark')
          this.$set(this['colors' + 2], this['selected2'][0], 'dark')

          this.$q.notify({
            type: 'positive',
            message: 'Match!',
            position: 'center',
            timeout: 250
          })
        } else {
          if (this.selected1[0] !== '' && this.selected2[0] !== '') {
            /* this.$set(this['colors' + script], index, '')
            this.$set(this['colors' + 2], this['selected2'][0], '')
            this.selected1 = ['', '']
            this.selected2 = ['', ''] */
          }
        }
      } else {
        if (this.words[this.randomList2[index]] === this.words[this.randomList[this['selected1'][0]]]) {
          this.$set(this['colors' + script], index, 'dark')
          this.$set(this['colors' + 1], this['selected1'][0], 'dark')

          this.$q.notify({
            type: 'positive',
            message: 'Match!',
            position: 'center',
            timeout: 250
          })
        } else {
          if (this.selected1[0] !== '' && this.selected2[0] !== '') {
            /* this.$set(this['colors' + script], index, 'dark')
            this.$set(this['colors' + 1], this['selected1'][0], 'dark')
            this.selected1 = ['', '']
            this.selected2 = ['', ''] */
          }
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
}
.flip-list-move {
  transition: transform 1s;
}

</style>
