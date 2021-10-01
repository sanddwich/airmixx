import ProductCardInterface from '../Redux/interfaces/AdditionalInterfaces/ProductCardInterface'

interface SocialLink {
  name: string
  url: string
}

interface MailSettings {
  apiPath: string
  senderMail: string
  senderMailPass?: string
  senderMailServer: string
  senderMailInfo: string
  recipientMail: string
  userName: string
  userPhone: string
}

interface ConfigInterface {
  url: string
  productCards: ProductCardInterface[]
  socialLinks: SocialLink[]
  mailSettings: MailSettings
}

export const Config: ConfigInterface = {
  // url: 'http://localhost:3000/',
  url: 'https://airmixx.ru/',

  productCards: [
    {title: 'Ледяной арбуз', img: '/img/1-1.png'},
    {title: 'Клубничный йогурт', img: '/img/1-2.png'},
    {title: 'Леденая вишня', img: '/img/1-3.png'},
    {title: 'Энергетик Red Bull', img: '/img/1-4.png'},
    {title: 'Ананас и маракуйя', img: '/img/1-5.png'},
    {title: 'Кокос и дыня', img: '/img/1-6.png'},
    {title: 'Персик и улун', img: '/img/1-7.png'},
    {title: 'Апельсин и груша', img: '/img/1-8.png'},
    {title: 'Ароматный зеленый чай', img: '/img/1-9.png'},
    {title: 'Имперский табак', img: '/img/1-10.png'},
  ],

  socialLinks: [
    {name: 'whatsapp', url: 'https://api.whatsapp.com/send?phone=+79608586777'},
    {name: 'telegram', url: 'https://t.me/+79299250008'},
    {name: 'insta', url: 'https://www.instagram.com/airmix_pods/'},
  ],

  mailSettings: {
    apiPath: '/api/index.php',
    senderMail: 'info@airmixx.ru',
    senderMailInfo: 'AIRMIXX Info',
    senderMailServer: 'ssl://mail.hostland.ru',
    userName: '',
    userPhone: '',
    // recipientMail: 'bck-dkiselev@yandex.ru',
    recipientMail: 'airmix_pods@mail.ru',
  },
}
