import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import store from './redux/store';
import { changeLanguage } from './redux/languageReducer';

// 翻译资源
const resources = {
  en: {
    translation: {
      // Header
      "searchPlaceholder": "Please enter destination, theme or keywords",
      "makeTravelHappier": "Make Travel Happier",
      "reactTravelWebsite": "React Travel Website",
      "login": "Login",
      "register": "Register",
      // Navigation
      "home": "Home",
      "tickets": "Tickets",
      "hotels": "Hotels",
      "attractions": "Attractions",
      "groupTours": "Group Tours",
      "privateTours": "Private Tours",
      "localGuides": "Local Guides",
      "carRentals": "Car Rentals",
      // Languages
      "chinese": "Chinese",
      "english": "English",
      
      // HomePage
      "hotRecommendations": "Hot Recommendations",
      "newArrivals": "New Arrivals",
      "domesticRecommendations": "Domestic Travel Recommendations",
      
      // BusinessPartners
      "businessPartners": "Business Partners",
      
      // Footer
      "footerCopyright": "React Travel Website ©2025 Created by Susie",
      
      // Pages
      "signInPage": "Sign In Page",
      "registerPage": "Register Page"
    }
  },
  zh: {
    translation: {
      // Header
      "searchPlaceholder": "请输入旅游目的地、主题或关键字",
      "makeTravelHappier": "让旅游更幸福",
      "reactTravelWebsite": "React 旅游网",
      "login": "登录",
      "register": "注册",
      // Navigation
      "home": "首页",
      "tickets": "门票",
      "hotels": "酒店",
      "attractions": "景点",
      "groupTours": "跟团游",
      "privateTours": "自由行",
      "localGuides": "当地向导",
      "carRentals": "租车",
      // Languages
      "chinese": "中文",
      "english": "英文",
      
      // HomePage
      "hotRecommendations": "爆款推荐",
      "newArrivals": "新品上市",
      "domesticRecommendations": "国内游推荐",
      
      // BusinessPartners
      "businessPartners": "合作企业",
      
      // Footer
      "footerCopyright": "React 旅游网 ©2025 Created by Susie",
      
      // Pages
      "signInPage": "登录页面",
      "registerPage": "注册页面"
    }
  }
};

// 从localStorage获取保存的语言
const savedLanguage = localStorage.getItem('language') || 'zh';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // 使用保存的语言或默认中文
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false
    }
  });

// 监听语言变化并同步到Redux
i18n.on('languageChanged', (lng) => {
  store.dispatch(changeLanguage(lng as 'en' | 'zh'));
});

export default i18n;