import { FaFileAlt, FaFileSignature } from 'react-icons/fa'
import { GiPlatform } from 'react-icons/gi'
import { RiCodeSSlashFill, RiPantoneLine } from 'react-icons/ri'
import { SiGithub } from 'react-icons/si'

const worksDetail = {
  AmbersBakery: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Works.Badge.Demo',
          icon: <FaFileAlt />,
          link: 'https://portfolio.haz3l.duckdns.org/prototype/AmbersBakery',
          content: 'Prototype/AmbersBakery'
        },
        {
          title: 'Works.Badge.Backend',
          icon: <FaFileSignature />,
          link: 'https://portfolio.haz3l.duckdns.org/prototype/AmbersBakery/management',
          localeId: 'Works.Management'
        }
      ]
    },
    stack: 'PHP 7.4, Bootstrap 5.1, jQuery 3.6 & MariaDB 10.7',
    images: [
      '/images/works/ambersbakery_thumbnail_large.webp',
      '/images/works/ambersbakery_customize.webp',
      '/images/works/ambersbakery_cart.webp'
    ]
  },
  Stickynote: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Works.Badge.Demo',
          icon: <FaFileAlt />,
          link: 'https://portfolio.haz3l.duckdns.org/prototype/Stickynote',
          content: 'Prototype/Stickynote'
        }
      ]
    },
    stack: 'PHP 7.4, jQuery 3.6, Bootstrap 5.1 & MariaDB 10.7',
    images: [
      '/images/works/stickynote_thumbnail_large.webp',
      '/images/works/stickynote_edit.webp',
      '/images/works/stickynote_merge.webp'
    ]
  },
  Cronus: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Works.Badge.Demo',
          icon: <FaFileAlt />,
          link: 'https://portfolio.haz3l.duckdns.org/prototype/Cronus',
          content: 'Prototype/Cronus'
        },
        {
          title: 'Navbar.Source',
          icon: <RiCodeSSlashFill />,
          leftIcon: <SiGithub />,
          link: 'https://github.com/hacklabmikkeli/cronus-bot',
          content: 'Hacklabmikkeli/Cronus-bot'
        }
      ]
    },
    stack: 'PHP 7.4, jQuery 3.6, Python 3.8 & Discord.py 1.7',
    images: ['/images/works/cronus_thumbnail_large.webp']
  },
  KhanhsPortfolio: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      internal: [
        {
          title: 'Works.Badge.Demo',
          icon: <FaFileAlt />,
          rightIcon: <RiPantoneLine />,
          link: '/',
          localeId: '404.Return'
        }
      ],
      external: [
        {
          title: 'Navbar.Source',
          icon: <RiCodeSSlashFill />,
          leftIcon: <SiGithub />,
          link: 'https://github.com/hi-im-haz3l/portfolio',
          content: 'hi-im-haz3l/Portfolio'
        }
      ]
    },
    stack: 'Next.js, Chakra UI, Emotion, Three.js & Framer Motion',
    images: [
      '/images/works/khanhsportfolio_thumbnail_large.webp',
      '/images/works/khanhsportfolio_works.webp'
    ]
  },
  LoadBalancer: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Embedded.LoadBalancer.Platform'
        }
      ]
    },
    stack: 'NodeMCU (ESP-12), C++11 & Esp8266 3.0.2',
    images: ['/images/works/loadbalancer_thumbnail_large.webp']
  },
  Elasticity: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Hobbies.Elasticity.Platform'
        }
      ]
    },
    stack: 'Adobe Illustrator & Adobe Photoshop',
    images: ['/images/works/elasticity_thumbnail.webp']
  },
  BadApple: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Works.Badge.Demo',
          icon: <FaFileAlt />,
          link: 'https://portfolio.haz3l.duckdns.org/prototype/BadApple/',
          content: 'Prototype/BadApple'
        }
      ]
    },
    stack: 'aalib.js 2.0 & Bad Apple!! ＰＶ',
    images: ['/images/works/badapple_thumbnail_large.webp']
  },
  Docgi: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Works.Badge.Demo',
          icon: <FaFileAlt />,
          link: 'https://docgi.haz3l.dev/user/634bfc297a4867c5c1faf117',
          content: 'My DocGi profile'
        }
      ]
    },
    stack:
      'Next.js, Chakra UI, Framer Motion, Next-Auth, Firebase, Firestore & Nodemailer',
    images: [
      '/images/works/docgi_thumbnail_large.webp',
      '/images/works/docgi_home_large.webp',
      '/images/works/docgi_profile_large.webp',
      '/images/works/docgi_review_large.webp'
    ]
  }
}

export default worksDetail
