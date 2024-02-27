import { projectCategories } from "./contsants";

export const projects = [
  {
    id: 1,
    category: projectCategories.advanced,
    title: "The Wild Oasis",
    description: {
      short: "Hotel management app",
      long: {
        body: `Gestionale per alberghi. Effettuato il login l'utente potrà visualizzare le operazioni del giorno e i grafici relativi ai clienti, vedere tutte le prenotazioni (unconfirmed, checked in, checked out), vedere i dettagli di ciascuna prenotazione e cambiare lo stato/eliminare ciascuna prenotazione. Potrà creare delle camere d'albergo, registrare un nuovo utente per l'utilizzo del gestionale, modificare i suoi dati e il tema dell'app. Backand in Supabase.`,
        stack: [
          "Vite",
          "React",
          "Javascript",
          "Styled Components",
          "React-router-DOM",
          "React Hook Form",
          "React error boundary",
          "Recharts",
          "Supabase",
        ],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/the-wild-oasis/image1.png",
    link: "https://github.com/LorenzoLoPresti/the-wild-oasis",
  },
  {
    id: 2,
    category: projectCategories.advanced,
    title: "NoteMark",
    description: {
      short: "Markdown note editor",
      long: {
        body: `Un semplice editor di testo per creare e modificare note in formato md e salvate nel file system, realizzato con Electron e React + Typescript. Applicazione desktop per windows`,
        stack: [
          "Electron",
          "React",
          "Typescript",
          "Tailwind",
          "Lodash",
          "Jotai",
        ],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/note-mark/image1.png",
    link: "https://github.com/LorenzoLoPresti/note-mark",
  },
  {
    id: 3,
    category: projectCategories.advanced,
    title: "Worldwise",
    description: {
      short: "Travel app",
      long: {
        body: `Applicazione è pensata come un diario di viaggio. L'utente può selezionare dalla mappa un qualsiasi luogo che ha visitato nel mondo e appuntare delle considerazioni attraverso un form. Saranno presenti i marker sulla mappa per ogni luogo selezionato, sarà possibile selezionare i luoghi visitati da una lista e cliccandovi la mappa si sposterà alle coordinate del luogo selezionato.`,
        stack: [
          "Vite",
          "React",
          "Javascript",
          "React-router-DOM",
          "Leaflet",
          "Json server",
        ],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/worldwise/image2.png",
    link: "https://github.com/LorenzoLoPresti/worldwise",
  },
  {
    id: 4,
    category: projectCategories.advanced,
    title: "React Image Gallery",
    description: {
      short: "Image gallery",
      long: {
        body: `Semplice applicazione che mostra una serie di foto ottenute dalla API di Unsplash. Cliccando su un'immagine si apre la singola foto. È possibile passare alla foto precedente/successiva o mostrare i dettagli dell'artista che l'ha realizzata cliccando sulla foto. Infine è possibile cambiare il tema dell'applicazione. Realizzata cercando di seguire l'Atomic design metodology.
        `,
        stack: [
          "Vite",
          "React",
          "Typescript",
          "Tailwind",
          "React Query",
          "React-router-DOM",
          "React-intersection-observer",
          "Transition kit",
          "Unsplash API",
        ],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/react-image-gallery/image2.png",
    link: "https://github.com/LorenzoLoPresti/react-image-gallery",
  },
  {
    id: 5,
    category: projectCategories.didactical,
    title: "TCJ space landing",
    description: {
      short: "Landing page",
      long: {
        body: `Semplice front di una landing page, realizzata cercando di seguire l'Atomic design metodology.`,
        stack: ["Vite", "React", "Typescript", "Tailwind", "Aos"],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/tcj-space/image1.png",
    link: "https://github.com/LorenzoLoPresti/tcj-space-landing",
  },
  {
    id: 6,
    category: projectCategories.didactical,
    title: "Bankist landing",
    description: {
      short: "Landing page",
      long: {
        body: `Landing didattica in HTML, CSS e JS per una web bank.`,
        stack: ["HTML", "CSS", "Javascript"],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/bankist/image1.png",
    link: "",
  },
  {
    id: 7,
    category: projectCategories.didactical,
    title: "The Quiz",
    description: {
      short: "Quiz game",
      long: {
        body: `Semplice quiz game in react. L'utente effettua le sue risposte e otterrà un feedback positivo o negativo in base alla risposta. Alla fine potrà accedere a una pagina di risultati e salvare il suo record personale se lo desidera. Creato cercando di seguire l'Atomic Design Metodology.`,
        stack: [
          "Vite",
          "React",
          "Typescript",
          "Tailwind",
          "Redux & RTK",
          "React-router-DOM",
        ],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/the-quiz/image1.png",
    link: "https://github.com/LorenzoLoPresti/the-quiz",
  },
  {
    id: 8,
    category: projectCategories.other,
    title: "Pig game",
    description: {
      short: "Game",
      long: {
        body: `Simpatico gioco per due giocatori realizzato in HTML, CSS e JS. Il primo a raggiungere 100 punti vince!`,
        stack: ["HTML", "CSS", "Javascript"],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/pig-game/image1.png",
    link: "https://github.com/LorenzoLoPresti/progetti_ripasso_javascript",
  },
  {
    id: 9,
    category: projectCategories.other,
    title: "Guess my number",
    description: {
      short: "Game",
      long: {
        body: `Semplice gioco in cui il player dovrà indovinare un numero misterioso generato randomicamente.`,
        stack: ["HTML", "CSS", "Javascript"],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/guess-my-number/image1.png",
    link: "https://github.com/LorenzoLoPresti/progetti_ripasso_javascript",
  },
  {
    id: 10,
    category: projectCategories.other,
    title: "Landscape wheater",
    description: {
      short: "Meteo app",
      long: {
        body: `Prima web app React realizzata per il bootcamp Epicode. L'utente può inserire il nome di una città e ottenere le previsioni atmosferiche del tempo attuale. Può inoltre visualizzare il tempo di alcune città del mondo di default.`,
        stack: ["React", "Javascript", "Bootstrap", "Redux & RTK"],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/landscape-weather/image1.png",
    link: "https://github.com/LorenzoLoPresti/landscape-weather",
  },
  {
    id: 11,
    category: projectCategories.other,
    title: "Spotify-clone-react-app",
    description: {
      short: "Spotify-clone",
      long: {
        body: `Seconda web app realizzata per il bootcamp Epicode. Implementata l'interfaccia di main-page, artist-page e album-page di spotify. L'utente può cercare per artista o brano tramite la barra di ricerca. Il player non è funzionante.`,
        stack: [
          "React",
          "Javascript",
          "Bootstrap",
          "Redux, RTK & Redux Persist",
        ],
      },
    },
    imgUrl:
      "https://raw.githubusercontent.com/LorenzoLoPresti/images/main/spotify-clone-react-app/image1.png",
    link: "https://github.com/LorenzoLoPresti/spotify-clone-react-app",
  },
];
