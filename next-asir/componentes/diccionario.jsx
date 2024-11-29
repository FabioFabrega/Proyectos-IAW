const dictionaries = {
    en: {
      title: 'Welcome to my multilingual page',
      description: 'This is a simple page that can be translated into Spanish, English and Italian.',
      home:'Home',
    },
    es: {
      title: 'Bienvenido a mi página multilingüe',
      description: 'Esta es una página sencilla que se puede traducir al español, al inglés y al italiano.',
      home:'Inicio',
    },
    it: {
      title: 'Benvenuti nella mia pagina multilingue',
      description: 'Questa è una semplice pagina che può essere tradotta in spagnolo, inglese e italiano.',
      home:'Inizio',
    },
  }
  export const getDictionary = (lang) => dictionaries[lang ]