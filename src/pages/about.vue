<template>
    <q-page padding>
        <div class="q-mb-lg">
          <div class="invoc q-ma-sm q-display-1"><span class="sharada">𑍐 𑌵𑌾𑌗𑍀𑌶𑍍𑌵𑌰 𑌮𑍁𑌃</span> </div>
        </div>
        <div>
        <div class="q-body-1 quote-comm q-mb-md sharada">
𑌭𑌗𑍍𑌨𑌪𑍃𑌷𑍍𑌟𑌕𑌟𑌿𑌗𑍍𑌰𑍀𑌵𑌃 𑌸𑍍𑌤𑌬𑍍𑌧𑌦𑍃𑌷𑍍𑌟𑌿𑌰𑍍 𑌅𑌧𑍋𑌮𑍁𑌖𑌃  । <br/>
𑌕𑌷𑍍𑌟𑍇𑌨 𑌲𑌿𑌖𑌿𑌤𑌂 𑌗𑍍𑌰𑌨𑍍𑌥𑌂 𑌯𑌤𑍍𑌨𑍇𑌨 𑌪𑍍𑌰𑌤𑌿𑌪𑌾𑌲𑌯 ॥
        </div>
<div class="q-body-1 quote-comm q-mb-md tamilextended">
ഭഗ്‌നപൃഷ്‌ടകടിഗ്‌രീവഃ സ്‌തബ്‌ധദൃഷ്‌ടിര്‌ അധോമുഖഃ  ।  <br/>
കഷ്‌ടേന ലിഖിതം ഗ്‌രന്‌ഥം യത്‌നേന പ്‌രതിപാലയ ॥
        </div>
        <div class="q-body-1 quote-comm q-mb-md tamil">
ப⁴க்³நப்ருʼஷ்டகடிக்³ரீவ꞉ ஸ்தப்³த⁴த்³ருʼஷ்டிர் அதோ⁴முக²꞉  . <br/>
கஷ்டேந லிகி²தம்ʼ க்³ரந்த²ம்ʼ யத்நேந ப்ரதிபாலய ..
        </div>
        <div class="q-body-1 quote-comm q-mb-md iast">
bhagnapṛṣṭakaṭigrīvaḥ stabdhadṛṣṭir adhomukhaḥ  . <br/>
kaṣṭena likhitaṃ granthaṃ yatnena pratipālaya ..
        </div>

        </div>
        <br/>
        <div class="q-body-1">This is meant to be a portal for the Grantha script. It provides various functionalities such as converting Devanagari/Romanized text into Grantha, directly composing in Grantha and various learning resources to practice Grantha.</div> <br/>

        <div class="q-body-1">The source code is released under GNU AGPL and can be found in <a href="https://github.com/virtualvinodh/granthavarman">Github</a>.</div>

        <div class="q-display-1 q-mt-lg q-mb-md">Feedback</div>
        <div class="q-body-1">Please send your feedback/comments to vinodh@virtualvinodh.com</div>

  </q-page>
</template>

<script>
import QToolTip from 'quasar'

export default {
  // name: 'PageName',
  components: {
    QToolTip
  }
}
</script>

<style>
.invoc {
  display:inline;
  font-size:225%;
}
.invoc-img {
  margin-top: -30px;
  display:inline-block;
}
.quote-comm {
  text-align: left;
  font-size: 16px;
}
.quote-comm.sharada {
  text-align: left;
  font-size: 20px;
  line-height: 2.2em;
}
</style>
