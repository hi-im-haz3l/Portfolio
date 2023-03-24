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
      { src: '/works/ambersbakery_thumbnail_large.webp', caption: 'Home Page' },
      {
        src: '/works/ambersbakery_customizer_large.webp',
        caption: 'Customizer Page'
      },
      {
        src: '/works/ambersbakery_customizer_mobile.webp',
        caption: 'Mobile Customizer'
      },
      { src: '/works/ambersbakery_cart_large.webp', caption: 'Shopping Cart' }
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
      { src: '/works/stickynote_thumbnail_large.webp', caption: 'Sticky Note' },
      {
        src: '/works/stickynote_merge_large.webp',
        caption: 'Merge Confirmation'
      }
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
    images: [
      {
        src: '/works/cronus_thumbnail_large.webp',
        caption: 'Cronus deployed at Hacklab'
      }
    ]
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
      {
        src: '/works/khanhsportfolio_thumbnail_large.webp',
        caption: 'My Portfolio'
      }
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
    images: [
      {
        src: '/works/loadbalancer_thumbnail_large.webp',
        caption: 'Load Balancer Diagram'
      }
    ]
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
    images: [{ src: '/works/elasticity_thumbnail.webp', caption: 'Elasticity' }]
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
    images: [
      { src: '/works/badapple_thumbnail_large.webp', caption: 'Bad Apple!!' }
    ]
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
      { src: '/works/docgi_thumbnail_large.webp', caption: 'Welcome Page' },
      { src: '/works/docgi_home_large.webp', caption: 'Home Page' },
      { src: '/works/docgi_profile_large.webp', caption: 'Profile Page' },
      { src: '/works/docgi_profile_edit_large.webp', caption: 'Profile Edit' },
      { src: '/works/docgi_followers_large.webp', caption: 'Followers List' },
      { src: '/works/docgi_review_large.webp', caption: 'Review Content' },
      { src: '/works/docgi_create_large.webp', caption: 'Create Review' },
      {
        src: '/works/docgi_content_manage_large.webp',
        caption: 'Manage Content'
      },
      { src: '/works/docgi_api_edit_large.webp', caption: 'Generate API' },
      { src: '/works/docgi_api_manage_large.webp', caption: 'Manage API' },
      {
        src: '/works/docgi_search_function_large.webp',
        caption: 'Search Function'
      }
    ]
  }
}

export default worksDetail
