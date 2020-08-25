const displayToggle = () => {
  const el = document.querySelector('#shatter-menue')
  el.style.display = 'block'
}

const nonDisplayToggle = () => {
  const el = document.querySelector('#shatter-menue')
  el.style.display = 'none';
}

const TopPage = {
  template: '#top-page',
  data: function() {
    return {
      snsIcons: snsIcons,
      anime: animationClass,
      isActiveA: false,
      isAcitveB: false,
      isActiveC: false,
      classObject: '',
      toggleMessage: '↻more',
      qiitaToken: qiitaToken,
      infoAll: {}
    }
  },
  methods: {
    openingAnimation: function() {
      setTimeout(() => {
        try {
          this.isActiveA = true
        } catch(e) {
          console.error();
        }}, 3000)
      setTimeout(() => {
        try {
          this.isAcitveB = true
          this.$refs.more.classList.add('fadein-plean');
          this.$refs.updateInfo.classList.add('fadein-plean');
        } catch(e) {
          console.error();
        }}, 4000)
      setTimeout(() => {
        try {
          this.$refs.more.style.opacity = 1;
          this.$refs.updateInfo.style.opacity = 1;
        } catch(e) {
          console.error();
        }}, 5000)
    },
    getAPIs: function() {
      axios
      .get(`https://qiita.com/api/v2/users/sukeo-sukeo/items`, {
        headers: {
          Authorization: `Bearer ${this.qiitaToken}`
        }
      })
      .then(res => {
        this.infoAll = res.data
        console.log(this.infoAll);
        const today = new Date()
        //日付とタイトルを指定の文字数に加工
        this.infoAll.forEach((info, i) => {
          const updateday = new Date(this.infoAll[i].updated_at);
          //３日前までの投稿記事の日付に「New!」をつける判定
          if ((today - updateday) / 1000 / 60 / 60 / 24 < 3) {
          this.infoAll[i].updated_at = this.strCountToCut(info.updated_at, 10) + 'New!'
          } else {
            this.infoAll[i].updated_at = this.strCountToCut(info.updated_at, 10)
          }
          this.infoAll[i].title = this.strCountToCut(info.title, 20)
        })
      })
    },
    strCountToCut: function(tage, count) {
      if (tage.length > count) {
        const a = tage.substr(0, count)
        return a + '...'
      } else {
        return tage
      }
    },
    moreMove: function() {
      this.isActiveC = !this.isActiveC
      console.log(this.isActiveC);
      if (this.isActiveC) {
        setTimeout(() => {
          this.toggleMessage = '✗close'
        }, 1000)
      } else {
        this.toggleMessage = '↻more'
      }
      // if (this.isActiveC) {
      //   this.classObject = 'more-move'
      //   setTimeout(() => {
      //     this.toggleMessage = '✗close'
      //   }, 1000)
      // } else {
      //   this.classObject = ''
      //   this.toggleMessage = '↻more'
      // }

    }
  },
  created: function() {
    this.getAPIs()
  },
  mounted: function() {
    this.openingAnimation()
    nonDisplayToggle()
  }
}

const ProfilePage = {
  template: '#profile-page',
  data: function() {
    return {
      profiles: profileData,
      anime: animationClass,
      isActive: false
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.isActive = true
      displayToggle()
    }, 1800)
  }
}



const StudyPage = {
  template: '#study-page',
  data: function() {
    return {
      // メインスキル:８個まで（スマホサイズの一画面に収めるため）
      deviconNomal: deviconNomal,
      deviconColor: deviconColor,
      // 追加スキル:ここから（画面サイズ５００px以上のときに追加されます）
      deviconOtherNomal: deviconOtherNomal,
      deviconOtherColor: deviconOtherColor,
      anime: animationClass
    }
  },
  methods: {
    rand: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    openingAnimation: function() {
      const els = document.querySelectorAll('[class^=devicon-]')
      els.forEach(el => {
        el.style.transform = `translate(${this.rand(-100, 100)}%, ${this.rand(-100, 100)}%)`
        el.classList.add('icon-move')
        setInterval(() => {
          el.style.zIndex = this.rand(-1, 1)
        }, this.rand(4000, 8000))
      })
    }
  },
  created: function() {
    if (this.deviconNomal.includes(this.deviconOtherNomal[0])) {
      //lengthを可変長にする！
      console.log('追加しない');
      return
    } else {
      if (innerWidth >= 500) {
        this.deviconOtherNomal.forEach(item => {
          this.deviconNomal.push(item)
        })
        this.deviconOtherColor.forEach(item => {
          this.deviconColor.push(item)
        })
      }
    }
  },
  mounted: function() {
    this.openingAnimation()
    setTimeout(() => displayToggle(),1800)
  }
}

const MadePage = {
  template: '#made-page',
  data: function() {
    return {
      madeItemData: madeItemData,
      madeItemDataMov: madeItemDataMov,
      visible: false,
      anime: animationClass
    }
  },
  methods: {
    fadinItems: function() {
      const items = document.querySelectorAll('.animation-point')
      const cb = function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('inview')
            entry.target.classList.remove('outview')
          } else {
            entry.target.classList.add('outview')
            entry.target.classList.remove('inview')
          }
        })
      }
      const options = {
        root: null,
        rootMargin: '-200px 0px -100px 0px',
        threshold: 0
      }
      const io = new IntersectionObserver(cb, options)
      items.forEach(item => {
        io.observe(item)
      })
    },
    opacityOne: function() {
      const items = document.querySelectorAll('.animation-point')
      items.forEach(item => {
        item.style.opacity = 1;
      })
    }
  },
  mounted: function() {
    this.fadinItems()
    setTimeout(() => displayToggle(),1800)
  }
}


const ContactPage = {
  template: '#contact-page',
  data: function() {
    return {
      message: lastMessage,
      twitterDmURL: twitterDmURL,
      btnText: `send message`,
      sendMessage: ``,
      anime: animationClass,
      isActive: false
    }
  },
  methods: {
    AddMessage: function() {
      this.twitterDmURL = this.twitterDmURL + encodeURIComponent(this.sendMessage)
      window.open(this.twitterDmURL, '_blank');
    }
  },
  mounted: function() {
    setTimeout(() => this.isActive = true, 1500)
    setTimeout(() => displayToggle(),1800)
  }
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: TopPage
    },
    {
      path: '/profile',
      component: ProfilePage
    },
    {
      path: '/study',
      component: StudyPage
    },
    {
      path: '/made',
      component: MadePage
    },
    {
      path: '/contact',
      component: ContactPage
    }
  ]
});

Vue.component('shatter', {
  template: '#shatter',
  data: function() {
    return {
      snsIcons: snsIcons,
      isActive: false,
      btnMessage: '>>',
      classObject: '',
      styleObject: {
        textShadow: '2px 2px 2px white, 2px 2px 30px white',
        margin: '0px 5px'
      }
    }
  },
  methods: {
    shatterToggle: function() {
      this.isActive = !this.isActive
      if (this.isActive) {
        this.btnMessage = '✗'
        this.classObject = 'shatter-open'
      } else {
        this.btnMessage = '>>'
        this.classObject = 'shatter-close'
      }
    }
  },
  mounted: function() {

  }
})
new Vue({ el: '#shatter-menue' })

const app = new Vue({
  router: router
}).$mount('#app')
