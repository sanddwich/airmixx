import ProductCardInterface from '../Redux/interfaces/AdditionalInterfaces/ProductCardInterface'
import ProductOperation from '../Redux/interfaces/AdditionalInterfaces/ProductOperation'
import UploadFiles from '../Redux/interfaces/AdditionalInterfaces/UploadFiles'

interface ConfigInterface {
  url: string
  productCards: ProductCardInterface[]
  backConnectData: {
    backendURL: string
  }
  upload: UploadFiles
  productOperations: ProductOperation[]
  messageTimout: number
  uploadFilesCount: number
}

export const Config: ConfigInterface = {
  url: 'http://localhost:3000/',

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

  backConnectData: {
    backendURL: 'http://laravel:8000',
  },
  productOperations: [
    { httpMethod: 'POST', productMethod: 'CHANGE_PRODUCT', apiLink: '/api/admin/product/create-update' },
  ],
  messageTimout: 5000,
  uploadFilesCount: 10,
  upload: {
    images: {
      accept: '.jpg, .jpeg, .png',
      maxSize: 1024000,
    },
    pdf: {
      accept: '.pdf',
      maxSize: 1024000,
    },
    archives: {
      accept: '.rar, .7zip',
      maxSize: 1024000,
    },
  },
}
