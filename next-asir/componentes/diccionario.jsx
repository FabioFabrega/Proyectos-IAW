const dictionaries = {
    en: {
      title: 'Welcome to my multilingual page',
      description: 'This is a simple page that can be translated into Spanish, English and Italian.',
      home:'Home',
      Gen: 'Generation',
      Gens: 'Generations',
    },
    es: {
      title: 'Bienvenido a mi página multilingüe',
      description: 'Esta es una página sencilla que se puede traducir al español, al inglés y al italiano.',
      home:'Inicio',
      Gen: 'Generación',
      Gens: 'Generationes',
    },
    it: {
      title: 'Benvenuti nella mia pagina multilingue',
      description: 'Questa è una semplice pagina che può essere tradotta in spagnolo, inglese e italiano.',
      home:'Inizio',
      Gen: 'Generazione',
      Gens: 'Generaziones',
    },
  }
  export const getDictionary = (lang) => dictionaries[lang ]