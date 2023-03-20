export const ScriptMixin = {
// name: 'ComponentName',
  data () {
    return {
      vowelsB: '𑌅 𑌆 𑌇 𑌈 𑌉 𑌊 𑌋 𑍠 𑌌 𑍡 𑌏 𑌐 𑌓 𑌔 𑌅𑌂 𑌅𑌃 𑌅𑌁'.split(' '),
      vowelsT: 'अ आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ अं अः अँ'.split(' '),
      vowelsR: 'a ā i ī u ū ṛ ṝ ḷ ḹ e ai o au aṃ aḥ am̐'.split(' '),
      vowelsTm: 'அ ஆ இ ஈ உ ஊ ருʼ ரூʼ லுʼ லூʼ ஏ ஐ ஓ ஔ அம்ʼ அ꞉ அம்ˮ'.split(' '),
      consonantsB: '𑌕 𑌖 𑌗 𑌘 𑌙 𑌚 𑌛 𑌜 𑌝 𑌞 𑌟 𑌠 𑌡 𑌢 𑌣 𑌤 𑌥 𑌦 𑌧 𑌨 𑌪 𑌫 𑌬 𑌭 𑌮 𑌯 𑌰 𑌲 𑌵 𑌶 𑌷 𑌸 𑌹 𑌳'.split(' '),
      consonantsT: 'क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह ळ'.split(' '),
      consonantsTm: 'க க² க³ க⁴ ங ச ச² ஜ ஜ² ஞ ட ட² ட³ ட⁴ ண த த² த³ த⁴ ந ப ப² ப³ ப⁴ ம ய ர ல வ ஶ ஷ ஸ ஹ ள'.split(' '),
      consonantsR: 'k& kh& g& gh& ṅ& c& ch& j& jh& ñ& ṭ& ṭh& ḍ& ḍh& ṇ& t& th& d& dh& n& p& ph& b& bh& m& y& r& l& v& ś& ṣ& s& h& l̤&'.split(' '),
      vowelSignsB: '𑌾 𑌿 𑍀 𑍁 𑍂 𑍃 𑍄 𑍢 𑍣 𑍇 𑍈 𑍋 𑍗 𑍍 𑌂 𑌃 𑌁'.split(' '),
      vowelSignsT: 'ा ि ी ु ू ृ ॄ ॢ ॣ े ै ो ौ ् ं ः ँ'.split(' '),
      vowelSignsTm: 'ா ி ீ ு ூ ்ருʼ ்ரூʼ ்லுʼ ்லூʼ ே ை ோ ௌ ் ம்ʼ ꞉ ம்ˮ'.split(' '),
      vowelSignsR: 'ā i ī u ū ṛ ṝ ḷ ḹ e ai o au x $ṃ $ḥ $m̐'.split(' '),
      othersB: '𑌽 । ॥ 𑌼 ௦ ௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯ 𑍐 ᳴ ॑ ॒ 𑍞 𑍟'.split(' '),
      othersT: 'ऽ । ॥ ़ ० १ २ ३ ४ ५ ६ ७ ८ ९ ॐ ॑ ᳚ ॒ ꣳ ꣴ'.split(' '),
      othersR: '\' . .. ̈ 0 1 2 3 4 5 6 7 8 9 oṃ ̍ ̎ ̱ gͫ gͫ̄'.split(' '),
      othersTm: '(அ) . ..  0 1 2 3 4 5 6 7 8 9 ௐ ॑ ᳚ ॒ ꣳ ꣴ'.split(' '),
      vowels: 'अ आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ अं अः अँ'.split(' '),
      vowelska: 'ऽ ॐ अ॑ अ᳚ अ॒ ꣳ ꣴ'.split(' '),
      consonants: 'क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल ळ व श ष स ह'.split(' '),
      consonantska: ''.split(' '),
      vowelSigns: 'ा ि ी ु ू ृ ॄ ॢ ॣ े ै ो ौ ं ः ँ ्'.split(' '),
      vowelSignsG: 'ा ि ी ु ू ृ े ै ो ौ ं ः ँ ्'.split(' '),
      vowelSignska: ''.trim().split(' '),
      conjuncts2: 'क्क क्ख क्च क्छ क्ण क्त क्थ क्न क्प क्फ क्म क्य क्र क्ल क्व क्श क्ष क्स ख्ख ख्न ख्य ख्व ग्ग ग्घ ग्ज ग्ड ग्ण ग्द ग्ध ग्न ग्ब ग्भ ग्म ग्य ग्र ग्ल ग्व घ्न घ्म घ्य घ्र घ्व ङ्क ङ्ख ङ्ग ङ्घ ङ्ङ ङ्च ङ्ज ङ्त ङ्द ङ्ध ङ्न ङ्प ङ्भ ङ्म ङ्य ङ्र ङ्व ङ्श ङ्स ङ्ह च्च च्छ च्ञ च्म च्य च्र च्व छ्य ज्ज ज्झ ज्ञ ज्म ज्य ज्र ज्व झ झ्ञ छ ञ्ज ञ्झ ञ्ञ ञ्श ञ्ह ट्क ट्ख ट्च ट्छ ट्ट ट्ण ट्त ट्प ट्फ ट्म ट्य ट्व ट्श ट्ष ट्स ठ्य ड्ग ड्घ ड्ज ड्ड ड्ढ ड्द ड्ध ड्ब ड्भ ड्म ड्य ड्र ड्ल ड्व ढ्य ढ्र ढ्व ण्ट ण्ठ ण्ड ण्ढ ण्ण ण्न ण्म ण्य ण्व ण्ह त्क त्ख त्त त्थ त्न त्प त्फ त्म त्य त्र त्व त्ष त्स थ्न थ्य थ्र थ्व द्ग द्घ द्द द्ध द्न द्ब द्भ द्म द्य द्र द्व ध्न ध्म ध्य ध्र ध्व न्क न्ख न्ग न्घ न्त न्थ न्द न्ध न्न न्प न्फ न्ब न्भ न्म न्य न्र न्व न्ष न्स न्ह प्क प्ख प्च प्छ प्ट प्ण प्त प्न प्प प्फ प्म प्य प्र प्ल प्व प्श प्स ब्ग ब्ज ब्द ब्ध ब्ब ब्भ ब्य ब्र ब्ल ब्व भ्ण भ्न भ्म भ्य भ्र भ्ल भ्व म्ण म्न म्प म्फ म्ब म्भ म्म म्य म्र म्ल म्व म्ह य्य य्व र्क ह्र घ र्च र्छ र्ज ट्र ढ र्ण र्त र्थ र्द र्ध र्न र्प र्फ र्ब र्भ र्म र्य र्ल र्व र्श र्ष र्स र्ह ल्क ल्ग ल्द ल्प ल्फ ल्ब ल्भ ल्म ल्य ल्ल ल्व ल्श ल्ह व्ण व्न व्य व्र व्ल श्च श्छ श्न श्प श्म श्य श्र श्ल श्व श्श ष्क ष्ख ष्ट ष्ठ ष्ण ष्प ष्फ ष्म ष्य ष्र ष्व ष्ष स्क स्ख स्त स्थ स्न स्प स्फ स्म स्य स्र स्व स्स ह्ण ह्न ह्म ह्य ह्ल ह्व ळ्ह'.split(' '),
      conjuncts3: 'क्क्र क्क्ल क्क्व क्क्ष क्त्य क्त्र क्त्व क्थ्न क्थ्य क्न्य क्प्र क्प्ल क्म्य क्र्य क्ल्य क्श्म क्श्र क्श्ल क्श्व क्ष्ण क्ष्म क्ष्य क्ष्र क्ष्व क्स्त क्स्थ क्स्न क्स्प क्स्फ क्स्म क्स्य क्स्र क्स्व ग्ग्र ग्घ्य ग्घ्र ग्ज्ञ ग्ज्य ग्ज्व ग्द्य ग्द्र ग्द्व ग्ध्य ग्ध्र ग्ध्व ग्न्य ग्ब्र ग्भ्य ग्भ्र ग्म्य ग्र्य ग्र्व ग्व्य ग्व्र घ्न्य घ्र्य घ्व्य ङ्क्त ङ्क्थ ङ्क्य ङ्क्र ङ्क्ल ङ्क्व ङ्क्ष ङ्क्स ङ्ख्य ङ्ग्ध ङ्ग्य ङ्ग्र ङ्ग्व ङ्घ्न ङ्घ्य ङ्घ्र ङ्त्र ङ्त्व ङ्ध्य ङ्न्य ङ्न्र ङ्प्र ङ्व्य ङ्व्र ङ्स्व च्च्य च्छ्म च्छ्य च्छ्र च्छ्ल च्छ्व च्ञ्य ज्ज्ञ ज्ज्य ज्ज्व ज्झ्य ज्ञ्य ज्ञ्व ज्म्य ज्र्य ज्व्य ञ्च्म ञ्च्य ञ्च्व ञ्छ्न ञ्छ्य ञ्छ्र ञ्छ्ल ञ्छ्व ञ्ज्ञ ञ्ज्म ञ्ज्य ञ्ज्व ञ्श्म ञ्श्य ञ्श्र ञ्श्ल ञ्श्व ट्क्र ट्क्ष ट्ट्य ट्त्र ट्त्व ट्प्र ट्श्र ट्श्ल ट्स्त ट्स्थ ट्स्न ट्स्प ट्स्व ड्ग्य ड्ग्र ड्घ्र ड्ज्ञ ड्ज्य ड्ढ्य ड्ढ्व ड्द्व ड्ब्र ड्भ्य ड्भ्र ड्व्य ण्ट्य ण्ठ्य ण्ड्ढ ण्ड्य ण्ड्र ण्ड्व ण्ढ्य ण्ढ्र ण्व्य त्क्य त्क्र त्क्ल त्क्व त्क्ष त्ख्य त्त्न त्त्म त्त्य त्त्र त्त्व त्त्स त्थ्य त्न्य त्न्व त्प्र त्प्ल त्म्य त्य्व त्र्य त्र्व त्व्य त्स्क त्स्ख त्स्त त्स्थ त्स्न त्स्प त्स्फ त्स्म त्स्य त्स्र त्स्व थ्न्य थ्व्य द्ग्र द्ग्ल द्घ्न द्घ्र द्द्य द्द्र द्द्व द्ध्म द्ध्य द्ध्र द्ध्व द्ब्र द्भ्य द्भ्र द्भ्व द्म्य द्र्य द्र्व द्व्य द्व्र ध्न्य ध्र्य ध्व्य ध्व्र न्क्र न्क्ल न्क्व न्क्ष न्ख्य न्ग्र न्ग्ल न्घ्न न्घ्र न्त्त न्त्थ न्त्म न्त्य न्त्र न्त्व न्त्स न्थ्य न्द्ध न्द्म न्द्य न्द्र न्द्व न्ध्म न्ध्य न्ध्र न्ध्व न्न्य न्न्व न्प्र न्प्ल न्प्स न्ब्र न्भ्र न्म्य न्म्र न्म्ल न्य्व न्व्य न्व्र न्स्क न्स्ख न्स्त न्स्थ न्स्न न्स्प न्स्फ न्स्म न्स्य न्स्र न्स्व न्ह्य न्ह्र न्ह्व प्क्ष प्त्य प्त्र प्त्व प्न्य प्प्र प्र्य प्श्य प्स्न प्स्य प्स्व ब्ग्र ब्ज्य ब्द्य ब्ध्य ब्ध्व ब्ब्र ब्भ्य ब्व्य भ्र्य भ्र्व भ्व्य म्न्य म्प्य म्प्र म्प्ल म्प्स म्ब्य म्ब्र म्ब्व म्भ्य म्भ्र म्म्य म्म्र म्म्ल म्र्य र्क्च र्क्त र्क्थ र्क्प र्क्य र्क्ष र्क्स र्ख्य र्ग्ग र्ग्घ र्ग्ज र्ग्भ र्ग्य र्ग्र र्ग्ल र्ग्व र्घ्न र्घ्य र्घ्र र्ङ्ख र्ङ्ग र्च्छ र्च्य र्ज्ञ र्ज्म र्ज्य र्ज्व र्ञ्ज र्ड्य र्ढ्य र्ण्ण र्ण्य र्ण्व र्त्त र्त्न र्त्म र्त्य र्त्र र्त्व र्त्स र्थ्य र्द्ध र्द्म र्द्य र्द्र र्द्व र्ध्न र्ध्म र्ध्य र्ध्र र्ध्व र्न्य र्न्व र्प्य र्ब्र र्भ्य र्भ्र र्भ्व र्म्य र्म्र र्म्ल र्य्य र्व्य र्व्र र्व्ल र्श्म र्श्य र्श्व र्ष्ट र्ष्ठ र्ष्ण र्ष्म र्ष्य र्ष्व र्स्र र्स्व र्ह्य र्ह्र र्ह्ल र्ह्व ल्क्य ल्ग्व ल्प्य ल्ब्य ल्भ्य ल्ल्य ल्व्य ल्ह्य व्न्य श्च्य श्न्य श्म्य श्र्य श्र्व श्व्य ष्क्य ष्क्र ष्क्ल ष्क्व ष्क्ष ष्ट्य ष्ट्र ष्ट्व ष्ठ्य ष्ठ्व ष्ण्य ष्ण्व ष्प्य ष्प्र ष्प्ल ष्म्य स्क्र स्त्म स्त्य स्त्र स्त्व स्त्स स्थ्न स्थ्य स्न्य स्प्र स्फ्य स्म्य स्र्य स्व्य स्स्य स्स्व ह्न्य ह्म्य ह्व्य'.split(' '),
      conjuncts4: 'क्त्र्य क्त्व्य क्ष्ण्य क्ष्म्य क्स्त्र ग्द्व्य ग्ध्र्य ङ्क्त्य ङ्क्त्र ङ्क्त्व ङ्क्ष्ण ङ्क्ष्म ङ्क्ष्य ङ्क्ष्व ङ्ग्ध्य ङ्ग्ध्व ङ्घ्र्य त्क्ष्म त्क्ष्व त्त्र्य त्स्त्र त्स्थ्य त्स्प्र त्स्फ्य द्द्व्य न्त्त्व न्त्र्य न्त्व्य न्त्स्त न्त्स्थ न्त्स्न न्त्स्प न्त्स्य न्त्स्र न्त्स्व न्द्ध्य न्द्ध्व न्द्र्य न्द्व्य न्ध्र्य न्स्त्र न्स्फ्य प्त्र्य प्स्न्य र्क्ष्ण र्क्ष्य र्क्स्व र्ङ्ग्य र्ज्म्य र्त्त्र र्त्न्य र्त्र्य र्त्व्य र्त्स्न र्त्स्य र्द्ध्य र्द्र्य र्द्व्य र्ध्न्य र्श्व्य र्ष्ट्य र्ष्ण्य ल्ग्व्य ष्ट्र्य स्त्र्य स्थ्न्य'.split(' '),
      conjuncts5: 'र्त्स्न्य',
      confusables: ['अ क ञ'.split(' '), 'इ ङ'.split(' '), 'उ द ओ'.split(' '), 'ख प व'.split(' '), 'य ध थ'.split(' ')],
      variantsCompounds: 'ङा जा टा णा कु कू कृ कॄ कॢ कॣ गु गू झु झू डु डू तु तू भु भू रु ळु ळू शु शू प्रु प्रू'.split(' '),
      sampleCompound: 'ग् गा गि गी गु गू गृ गॄ गॢ गॣ गे गै गो गौ गं गः गँ'.split(' '),
      secondCons: 'क्ष क्त ञ्च ज्ञ ज्ज त्थ त्व न्थ न्द न्ध न्म न्व श्च ष्ट ह्म त्र'.split(' '),
      firstCons: 'ञ्च ज्ञ न्त न्न द्ध द्व म्म'.split(' '),
      special: 'र्क क्र क्य र्क्य'.split(' '),
      purecons: 'न् म् त्'.split(' '),
      conjvs1: 'त्व् त्वा त्वि त्वी त्वु त्वू त्वृ त्वॄ त्वॢ त्वॣ त्वे त्वै त्वो त्वौ त्वं त्वः त्वँ'.split(' '),
      conjvs2: 'प्त् प्ता प्ति प्ती प्तु प्तू प्तृ प्तॄ प्तॢ प्तॣ प्ते प्तै प्तो प्तौ प्तं प्तः प्तँ'.split(' '),
      conjvs3: 'क्र् क्रा क्रि क्री क्रु क्रू क्रे क्रै क्रो क्रौ क्रं क्रः क्रँ'.split(' '),
      conjvs4: 'र्क् र्का र्कि र्की र्कु र्कू र्कृ र्कॄ र्कॢ र्कॣ र्के र्कै र्को र्कौ र्कं र्कः र्कँ'.split(' '),
      conjvs5: 'क्य् क्या क्यि क्यी क्यु क्यू क्ये क्यै क्यो क्यौ क्यं क्यः क्यँ'.split(' '),
      stacks: 'प्क प्ख प्ग प्घ प्ङ प्च प्छ प्ज प्झ प्ञ प्ट प्ठ प्ड प्ढ प्ण प्त प्थ प्द प्ध प्म प्ल प्व प्श प्ष प्स प्ह प्ळ'.split(' '),
      specialConjuncts: 'क्ष ज्ञ'.split(' '),
      specialRepha: 'र्ख र्ग र्ङ र्च र्ज र्ज्ञ र्झ र्ञ र्थ र्ध र्श र्ण र्य र्व'.split(' ')
    }
  },
  computed: {
    compounds: function () {
      var compounds = []
      var consonantsAll = []
      var vowelSignsAll = []
      var vowelsAll = []

      consonantsAll = consonantsAll.concat(this.consonants)
      vowelSignsAll = vowelSignsAll.concat(this.vowelSignsG)
      vowelsAll = vowelsAll.concat(this.vowels)

      if (this.kashmiri) {
        consonantsAll = consonantsAll.concat(this.consonantska)
        vowelSignsAll = vowelSignsAll.concat(this.vowelSignska)
        vowelsAll = vowelsAll.concat(this.vowelska)
      }

      if (this.difficulty === 'easy') {
        compounds = compounds.concat(vowelsAll)
        compounds = compounds.concat(consonantsAll)
      } else if (this.difficulty === 'medium') {
        for (let i = 0; i < consonantsAll.length; i++) {
          for (let j = 0; j < vowelSignsAll.length; j++) {
            compounds.push(consonantsAll[i] + vowelSignsAll[j])
          }
        }
      } else if (this.difficulty === 'difficult') {
        for (let i = 0; i < this.conjuncts2.length; i++) {
          for (let j = 0; j < vowelSignsAll.length; j++) {
            compounds.push(this.conjuncts2[i] + vowelSignsAll[j])
          }
        }
      } else if (this.difficulty === 'verydifficult') {
        consonantsAll = consonantsAll.concat(this.conjuncts3)

        for (let i = 0; i < this.conjuncts3.length; i++) {
          for (let j = 0; j < vowelSignsAll.length; j++) {
            compounds.push(this.conjuncts3[i] + vowelSignsAll[j])
          }
        }
      }

      return compounds
    }
  },
  methods: {
    convertRDS: function (text) {
      // for IAST
      text = text.replace(/𑇀ö/g, '᳐', text)
      text = text.replace(/𑇀ȫ/g, '𑆳᳐', text)

      text = text.replace(/𑇀ü/g, '᳘', text)
      text = text.replace(/𑇀ǖ/g, '᳕', text)

      text = text.replace(/𑇀ĕ/g, 'ᳮ', text)
      text = text.replace(/𑇀ŏ/g, 'ᳯ', text)

      text = text.replace(/ö/g, '𑆃᳐', text)
      text = text.replace(/ȫ/g, '𑆄᳐', text)

      text = text.replace(/ü/g, '𑆃᳘', text)
      text = text.replace(/ǖ/g, '𑆃᳕', text)

      text = text.replace(/ĕ/g, '𑆍ᳮ', text)
      text = text.replace(/ŏ/g, '𑆃ᳯ', text)

      // For HK & Itrans

      text = text.replace(/𑆃\^/g, '𑆃᳐', text)
      text = text.replace(/𑆄\^/g, '𑆄᳐', text)

      text = text.replace(/𑆇\^/g, '𑆃᳘', text)
      text = text.replace(/𑆈\^/g, '𑆃᳕', text)

      text = text.replace(/𑆍\^/g, '𑆍ᳮ', text)
      text = text.replace(/𑆏\^/g, '𑆃ᳯ', text)

      text = text.replace(/𑆳\^/g, '𑆳᳐', text)

      text = text.replace(/𑆶\^/g, '᳘', text)
      text = text.replace(/𑆷\^/g, '᳕', text)

      text = text.replace(/𑆼\^/g, 'ᳮ', text)
      text = text.replace(/𑆾\^/g, 'ᳯ', text)

      text = text.replace(/\^/g, '᳐', text)

      return text
    },
    convertDS: function (text) {
      var brahmiText = text
      var i, re

      for (i = 0; i < this.vowelsT.length; i++) {
        re = new RegExp(this.vowelsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelsB[i])
      }

      for (i = 0; i < this.consonantsT.length; i++) {
        re = new RegExp(this.consonantsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.consonantsB[i])
      }

      for (i = 0; i < this.vowelSignsT.length; i++) {
        re = new RegExp(this.vowelSignsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelSignsB[i])
      }

      for (i = 0; i < this.othersT.length; i++) {
        re = new RegExp(this.othersT[i], 'g')
        brahmiText = brahmiText.replace(re, this.othersB[i])
      }

      return brahmiText
    },
    convertDTm: function (text) {
      var brahmiText = text
      var i, re

      for (i = 0; i < this.vowelsT.length; i++) {
        re = new RegExp(this.vowelsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelsTm[i])
      }

      for (i = 0; i < this.consonantsT.length; i++) {
        re = new RegExp(this.consonantsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.consonantsTm[i])
      }

      for (i = 0; i < this.vowelSignsT.length; i++) {
        re = new RegExp(this.vowelSignsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelSignsTm[i])
      }

      for (i = 0; i < this.othersTm.length; i++) {
        re = new RegExp(this.othersT[i], 'g')
        brahmiText = brahmiText.replace(re, this.othersTm[i])
      }

      var num = ['²', '³', '⁴']
      var vows = 'ா ி ீ ு ூ ே ை ோ ௌ ்'.split(' ')

      num.forEach(function (num) {
        vows.forEach(function (vow) {
          brahmiText = brahmiText.replaceAll(num + vow, vow + num)
        })
      })

      return brahmiText
    },
    convertDTe: function (text) {
      var brahmiText = text
      var i, re

      for (i = 0; i < this.vowelsTm.length; i++) {
        re = new RegExp(this.vowelsTm[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelsB[i])
      }

      for (i = 0; i < this.consonantsTm.length; i++) {
        re = new RegExp(this.consonantsTm[i], 'g')
        brahmiText = brahmiText.replace(re, this.consonantsB[i])
      }

      for (i = 0; i < this.vowelSignsTm.length; i++) {
        re = new RegExp(this.vowelSignsTm[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelSignsB[i])
      }

      for (i = 0; i < this.othersTm.length; i++) {
        re = new RegExp(this.othersTm[i], 'g')
        brahmiText = brahmiText.replace(re, this.othersB[i])
      }

      return brahmiText
    },
    convertDR: function (text) {
      var brahmiText = text
      var i, re

      for (i = 0; i < this.vowelsT.length; i++) {
        re = new RegExp(this.vowelsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelsR[i])
      }

      for (i = 0; i < this.consonantsT.length; i++) {
        re = new RegExp(this.consonantsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.consonantsR[i])
      }

      for (i = 0; i < this.vowelSignsT.length; i++) {
        re = new RegExp(this.vowelSignsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelSignsR[i])
      }

      for (i = 0; i < this.othersT.length; i++) {
        re = new RegExp(this.othersT[i], 'g')
        brahmiText = brahmiText.replace(re, this.othersR[i])
      }

      for (i = 0; i < this.vowelSignsR.length; i++) {
        re = new RegExp('&' + this.vowelSignsR[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelSignsR[i])
      }

      for (i = 0; i < this.vowelsR.length; i++) {
        re = new RegExp(this.vowelsR[i] + '\\$', 'g')
        brahmiText = brahmiText.replace(re, this.vowelsR[i])
      }

      re = new RegExp('x', 'g')
      brahmiText = brahmiText.replace(re, '')

      re = new RegExp('&', 'g')
      brahmiText = brahmiText.replace(re, 'a')

      re = new RegExp('\\$', 'g')
      brahmiText = brahmiText.replace(re, '')

      return brahmiText
    }
  }
}
