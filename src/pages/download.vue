<template>
  <q-page padding>
    <div class="q-display-1 q-mt-lg q-mb-md">Grantha Font</div>
    <div class="q-body-1">
    The following fonts can be downloaded and be used to display Unicode Grantha text.
    <ul>
     <li><a href="https://github.com/googlefonts/noto-fonts/raw/master/hinted/ttf/NotoSansGrantha/NotoSansGrantha-Regular.ttf">Noto Sans Grantha </a> </li>
     <li><a href="https://github.com/googlefonts/noto-fonts/raw/master/hinted/ttf/NotoSerifGrantha/NotoSerifGrantha-Regular.ttf">Noto Serif Grantha </a></li>
     <li><a href="https://github.com/deepestblue/lankapuri/releases/">Kurukkal </a></li>
     <li><a href="https://github.com/deepestblue/lankapuri/releases/">Kunchitapada </a></li>
     <li><a href="https://github.com/deepestblue/Sampradaya">Sampradaya </a></li>
     </ul>
    </div>
    <div class="q-body-1">
     There is also a comprehensive list of all Grantha fonts (unicode and non-unicode) available over <a href="http://www.virtualvinodh.com/writings/grantha/fonts">here</a>.
    </div>
    <div class="q-display-1 q-mt-lg q-mb-md">Offline Keyboard</div>
    <div class="q-body-1">There is a Keyman keyboard available for any one who would like to type Grantha directly into their word processors. Keyman is a popularly used software to support input in different scripts.</div>
    <div class="q-ma-md"><img src="../statics/word-grantha-demo.png" width="70%" /> </div>
    <div class="q-body-1"><a href="https://github.com/virtualvinodh/grantha-keyman-keyboards/raw/main/-grantha_unicode.exe?raw=true">Integrated Keyman
    Keyboard (if you don't have Keyman installed in your system)</a></div>
    <div class="q-body-1"><a href="https://github.com/virtualvinodh/grantha-keyman-keyboards/raw/main/grantha_unicode.kmp"> Keyman Package (if Keyman is already installed)</a></div>
     <div class="q-body-1 q-mt-md">Double-clicking on the downloaded .exe file might result in a dialogue box that asks for your confirmation to proceed with the installation. Please select 'Yes' </div> <br/>
    <div class="q-body-1">You can read the instructions for using the keyboard <a href="https://github.com/virtualvinodh/grantha-keyman-keyboards/blob/main/src/how_to_use.pdf" target="_blank">here</a>.</div>
    <div class="q-display-1 q-mt-lg q-mb-md">App</div>
    <div class="q-body-1">Android app coming soon...</div>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
.q-body-1 {
  line-height: 1.75em;
  font-color: red;
}
</style>
