const animationClass = {
  left: [
    'inview-from-the-left'
  ],
  right: [

  ],
  top: [

  ],
  bottom: [
    'inview-from-the-bottom',
    'inview-from-the-bottom-delay',
  ]
}

const TopPage = {
  template: '#top-page',
  data: function() {
    return {
      snsIcons: snsIcons,
      anime: animationClass,
      navPadding: null
    }
  },
  methods: {
    animeA: function() {
      document.querySelector('.message-one').classList.add('enchant-color-g')
      document.querySelector('.message-two').classList.add('enchant-color-g')
    },
    animeB: function() {
      document.querySelector('.convery-message').classList.add('enchant-color')
    },
    getHeight: function() {
      document.querySelector('.navbar').style.paddingBottom = this.navPadding
      console.log(this.navPadding);
    }
  },
  created: function() {
    this.navPadding = outerHeight - innerHeight
  },
  mounted: function() {
    setTimeout(() => {
      try {
        this.animeA()
      } catch(e) {
        console.error();
      }}, 3000)
    setTimeout(() => {
      try {
        this.animeB()
      } catch(e) {
        console.error();
      }}, 4000)
    this.getHeight()
  }
}

const ProfilePage = {
  template: '#profile-page',
  data: function() {
    return {
      profiles: {
        from: ' 岐阜',
        message: `
        こんにちは！ポートフォリオをご覧頂きありがとうございます！
        プログラミングを０から独学で学習。
        コードからモノを生み出す事に楽しさを見出し、
        今後も極めるべく日々成長中。
        デザインも勉強中です。
        `,
        favoriteWord: ` 今の自分が残りの人生で一番若い`,
      },
      anime: animationClass
    }
  },
  methods: {
    rand: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    animeA: function() {
      document.querySelector('.face').classList.add('enchant-shadow')
      document.querySelector('.names').classList.add('enchant-color-small')
    }
  },
  mounted: function() {
    setTimeout(() => this.animeA(), 1800)
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
    }
  },
  created: function() {
    if (innerWidth >= 500) {
      this.deviconOtherNomal.forEach(item => {
        this.deviconNomal.push(item)
      })
      this.deviconOtherColor.forEach(item => {
        this.deviconColor.push(item)
      })
    }
  },
  mounted: function() {
    const els = document.querySelectorAll('[class^=devicon-]')
    els.forEach(el => {
      el.style.transform = `translate(${this.rand(-100, 100)}%, ${this.rand(-100, 100)}%)`
      el.classList.add('icon-move')
      setInterval(() => {
        el.style.zIndex = this.rand(-1, 1)
      }, this.rand(4000, 8000))
    })
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
  }
}


const ContactPage = {
  template: '#contact-page',
  data: function() {
    return {
      message: `
      最後までご覧頂きありがとうございました。
      まだまだ勉強中の身ですが、お役に立てることがあればぜひお手伝いさせてください!
      `,
      btnText: `send message`,
      sendMessage: ``,
      twitterDmURL: `https://twitter.com/messages/compose?recipient_id=987213746056474624&text=`,
      anime: animationClass
    }
  },
  methods: {
    AddMessage: function() {
      this.twitterDmURL = this.twitterDmURL + encodeURIComponent(this.sendMessage)
      window.open(this.twitterDmURL, '_blank');
    },
    animeA: function() {
      document.querySelector('.btn').classList.add('enchant-shadow-page5')
    }
  },
  mounted: function() {
    setTimeout(() => this.animeA(), 1500)
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


const app = new Vue({
  router: router
}).$mount('#app')
