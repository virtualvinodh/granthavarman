<template>
  <q-page padding>
  <div>
    <q-page-sticky position="top-right" :offset="[18,18]">
      <q-toggle v-model="flip" icon="copy" color="faded"
        label="As flipcards" left-label class="q-ml-sm q-mb-md print-hide" @input="notification"></q-toggle>
        <br/>

    </q-page-sticky>
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
<q-tabs color="dark" two-lines>
  <!-- Tabs - notice slot="title" -->
  <q-tab default slot="title" name="basic" label="Basic 1"/>
  <q-tab slot="title" name="compounds" label="Basic 2"/>
  <q-tab slot="title" name="conjuncts"  label="Conjuncts"/>
  <q-tab slot="title" name="conjuncts2"  label="Conjuncts +"/>

  <!-- Targets -->
  <q-tab-pane name="basic">
<transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <span :key="flip">
        <p>Vowels</p>
        <component v-for="vowel in vowels" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
                     :is="flip ? 'flipcard' : 'learncard' ">
        </component>
        <br/><br/>
        <p>Other Signs</p>
        <component v-for="vowel in vowelska" :key="vowel" :script="script"  :text="vowel" class="q-ma-sm"
                     :is="flip ? 'flipcard' : 'learncard' ">
        </component>
        <br/><br/>
        <p>Consonants</p>
        <component v-for="vowel in consonants" :key="vowel" :script="script"  :text="vowel" class="q-ma-sm"
                     :is="flip ? 'flipcard' : 'learncard' ">
        </component>
        <br/><br/>
        <br/><br/>
        <p> Confusables </p>
        <span v-for="(confusable, j) in confusables" :key="'confus' + j">
          <component v-for="vowel in confusable" :key="vowel + 'k'" :script="script"  :text="vowel" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard'" :highlight="true">
          </component>
          <br/>
        </span>
        <br/>
      </span>
</transition>
  </q-tab-pane>
  <q-tab-pane name="compounds">
   Display
      <q-btn-toggle
        class="q-ma-md"
        v-model = "showCompound"
        toggle-color="faded"
        :options="[
          {label: 'Summary', value: 'summary'},
          {label: 'All: Consonant Sorted', value: 'consonant'},
          {label: 'All: Consonant Sorted', value: 'vowel'}
        ]"
      />
   <div v-if="showCompound=='summary'">
          <p> Vowel Signs </p>
          <component v-for="vowel in sampleCompound" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard' " :highlight = "variantsCompounds.includes(consonant+vowelSign) && variant">
          </component> <br/><br/>
          <p> Special Consonant Forms </p>
          <component v-for="vowel in purecons" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard' " :highlight = "variantsCompounds.includes(consonant+vowelSign) && variant">
          </component> <br/><br/>
  </div>
   <div v-if="showCompound=='consonant'">
   <span v-for="consonant in consonants" :key="consonant + 'c'">
        <span v-for="vowelSign in vowelSigns" :key="vowelSign + consonant + 'c'">
          <component :script="script"  :text="consonant + vowelSign" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard' " :highlight = "variantsCompounds.includes(consonant+vowelSign) && variant">
          </component>
        </span>
        <br/>
        <br/>
    </span>
  </div>
   <div v-if="showCompound=='vowel'">
   <span v-for="vowelSign in vowelSigns" :key="vowelSign + 'c'">
        <span v-for="consonant in consonants" :key="vowelSign + consonant + 'c'">
          <component :script="script"  :text="consonant + vowelSign" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard'" :highlight = "variantsCompounds.includes(consonant+vowelSign) && variant">
          </component>
        </span>
        <br/>
        <br/><br/>
    </span>
    </div>
  </q-tab-pane>
  <q-tab-pane name="conjuncts">
      Display
      <q-btn-toggle
        class="q-ma-md"
        v-model = "showConjunct"
        toggle-color="faded"
        :options="[
          {label: 'Overview', value: 'summary'},
          {label: 'All: Consonant Sorted', value: 'all'},
          {label: 'Vowel Sign', value: 'conjvs'}
        ]"
      />
`   <div v-if="showConjunct=='conjvs'">
      <component v-for="vowel in conjvs1" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
          :is="flip ? 'flipcard' : 'learncard' ">
      </component> <br/><br/>
      <component v-for="vowel in conjvs2" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
          :is="flip ? 'flipcard' : 'learncard' ">
      </component> <br/><br/>
      <component v-for="vowel in conjvs3" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
          :is="flip ? 'flipcard' : 'learncard' ">
      </component> <br/><br/>
      <component v-for="vowel in conjvs4" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
          :is="flip ? 'flipcard' : 'learncard' ">
      </component> <br/><br/>
      <component v-for="vowel in conjvs5" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
          :is="flip ? 'flipcard' : 'learncard' ">
      </component> <br/>
  </div>
      <div v-if="showConjunct=='summary'">
          <h5> Fused Conjuncts </h5>
          <p> Second-consonant fused </p>
          <component v-for="vowel in secondCons" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard' ">
          </component>   <br/>
          <br><p> First-consonant fused </p>
          <component v-for="vowel in firstCons" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard' ">
          </component> <br/>
          <br><p> Special forms </p>
          <component v-for="vowel in special" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard' ">
          </component> <br/>
          <br><p> Stacked </p>
          <component v-for="vowel in stacks" :key="vowel" :script="script" :text="vowel" class="q-ma-sm"
                      :is="flip ? 'flipcard' : 'learncard' ">
          </component> <br/>
   </div>
      <div v-if="showConjunct=='all'">
      <div><q-toggle
        class="q-ma-md"
        v-model = "reverse"
        label = "Reverse Conjunct Order"
        color="faded"
      /></div>
      <q-btn v-for="consonant in consonants" :key="consonant + 'cc'" :label="convertDS(consonant)" class="q-ma-sm sharada" @click="cons1=consonant"
      :color="cons1 == consonant ? 'dark' : ''"
      />
      <br/>
      <span v-if="!reverse">
      <component v-for="vowel in consonants" :key="vowel" :script="script"  :text="cons1 + '्' + vowel" class="q-ma-sm"
                     :is="flip ? 'flipcard' : 'learncard' " :highlight="conjuncts2.includes(cons1 + '्' + vowel) && attested">
      </component>
      </span>
      <span v-else>
      <component v-for="vowel in consonants" :key="vowel" :script="script"  :text="vowel + '्' + cons1" class="q-ma-sm"
                     :is="flip ? 'flipcard' : 'learncard' " :highlight="conjuncts2.includes(vowel + '्' + cons1) && attested">
      </component>
      </span>
      </div>

  </q-tab-pane>

  <q-tab-pane name="conjuncts2">
      <p> Frequently used complex conjuncts </p>
      <component v-for="vowel in conjuncts3" :key="vowel" :script="script"  :text="vowel" class="q-ma-sm"
                     :is="flip ? 'flipcard' : 'learncard' ">
      </component><br/><br/>
      <component v-for="vowel in conjuncts4" :key="vowel" :script="script"  :text="vowel" class="q-ma-sm"
                     :is="flip ? 'flipcard' : 'learncard' " :size="6">
      </component><br/><br/>
      <component :text="conjuncts5" class="q-ma-sm"
                     :is="flip ? 'flipcard' : 'learncard' " :size="6">
      </component><br/><br/>

  </q-tab-pane>
</q-tabs>

 </div>
 </q-page>
</template>

<script>
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions, QToggle, QPageSticky, QTabs, QTab, QTabPane, Notify, QBtnToggle} from 'quasar'
import VueFlip from 'vue-flip'
import Learncard from '../components/Learncard'
import Flipcard from '../components/Flipcard'
import { ScriptMixin } from '../mixins/ScriptMixin'

export default {
  // name: 'PageName',
  components: {
    QCard,
    QCardTitle,
    QBtnToggle,
    QCardMain,
    QCardMedia,
    QCardActions,
    VueFlip,
    QToggle,
    Learncard,
    Flipcard,
    QPageSticky,
    QTabs,
    QTab,
    QTabPane
  },
  mixins: [ScriptMixin],
  plugins: [Notify],
  data () {
    return {
      script: 'tamil',
      variant: false,
      cons1: 'स',
      showCompound: 'summary',
      showConjunct: 'summary',
      flip: false,
      attested: false,
      reverse: false
    }
  },
  computed: {
    consonantList: function () {
      var cl = []
      this.consonants.forEach(function (cons) {
        cl.push({value: cons, label: cons})
      })
      return cl
    }
  },
  methods: {
    notification: function () {
      if (this.flip) {
        this.$q.notify({
          type: 'info',
          message: 'Click on a card to flip it over',
          color: 'positive',
          position: 'top-right',
          timeout: 5000
        })
      }
    }
  }
}
</script>

<style scoped>
.cards {
  width:130px;
  height:170px;
}
</style>
