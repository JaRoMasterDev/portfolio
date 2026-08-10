import type { Locale } from "@/i18n-config";

export type LandingContent = {
  tagline: string;
  intro: string;
  featuresTitle: string;
  features: { title: string; text: string }[];
  screenshotsTitle: string;
  shots: [string, string, string];
  privacyTitle: string;
  privacyText: string;
  privacyLink: string;
  supportTitle: string;
  supportText: string;
  back: string;
};

export type PrivacyContent = {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  contactHeading: string;
  contactText: string;
  back: string;
};

export const landing: Record<Locale, LandingContent> = {
  de: {
    tagline: "Deine persönliche Bibliothek für iPhone und iPad",
    intro:
      "Lolili hilft dir, deine Bücher zu ordnen – und zu wissen, wer sie gerade hat. Scannen, sortieren, verleihen. Ohne Konto und ohne Werbung.",
    featuresTitle: "Was Lolili kann",
    features: [
      {
        title: "Bücher scannen",
        text: "Scanne den Barcode auf der Rückseite, und Titel, Autor, Umschlag und Seitenzahl stehen schon da. Die ISBN kannst du auch von Hand eingeben.",
      },
      {
        title: "Eigene Kategorien",
        text: "Lege farbige Kategorien an, ordne jedem Buch beliebig viele zu und filtere deine Sammlung mit einem Tippen.",
      },
      {
        title: "Ausleihen im Blick",
        text: "Notiere, wer welches Buch mitgenommen hat und bis wann. Überfälliges siehst du sofort, Zurückgegebenes markierst du mit einem Wisch.",
      },
      {
        title: "Import und Export",
        text: "Bring deine bestehende Liste als CSV-Datei mit und nimm deine Sammlung jederzeit wieder als CSV mit.",
      },
    ],
    screenshotsTitle: "Ein Blick in die App",
    shots: ["Alle Bücher", "Buchdetails", "Ausleihen"],
    privacyTitle: "Deine Daten bleiben bei dir",
    privacyText:
      "Kein Konto, keine Anmeldung, kein Tracking. Deine Bibliothek wird ausschließlich auf deinem Gerät gespeichert. Nur für die Buchsuche fragt Lolili die öffentliche Datenbank von OpenLibrary ab.",
    privacyLink: "Zur Datenschutzerklärung",
    supportTitle: "Support",
    supportText:
      "Fragen, ein Fehler oder ein Wunsch für die nächste Version? Schreib mir – ich antworte in der Regel innerhalb weniger Tage.",
    back: "Zurück zur Startseite",
  },
  en: {
    tagline: "Your personal library for iPhone and iPad",
    intro:
      "Lolili helps you organise your books – and remember who currently has them. Scan, sort, lend. No account and no ads.",
    featuresTitle: "What Lolili does",
    features: [
      {
        title: "Scan your books",
        text: "Scan the barcode on the back and the title, author, cover and page count are filled in for you. You can also type the ISBN by hand.",
      },
      {
        title: "Your own categories",
        text: "Create colour-coded categories, assign as many as you like to each book and filter your collection with a single tap.",
      },
      {
        title: "Keep track of loans",
        text: "Note who took which book and until when. Overdue loans stand out immediately, and returned books are one swipe away.",
      },
      {
        title: "Import and export",
        text: "Bring an existing list along as a CSV file, and export your collection back to CSV whenever you want.",
      },
    ],
    screenshotsTitle: "A look inside",
    shots: ["All books", "Book details", "Loans"],
    privacyTitle: "Your data stays with you",
    privacyText:
      "No account, no sign-up, no tracking. Your library is stored only on your device. Lolili contacts the public OpenLibrary database for book lookups and nothing else.",
    privacyLink: "Read the privacy policy",
    supportTitle: "Support",
    supportText:
      "A question, a bug or a wish for the next version? Drop me a line – I usually reply within a few days.",
    back: "Back to the home page",
  },
  fr: {
    tagline: "Votre bibliothèque personnelle pour iPhone et iPad",
    intro:
      "Lolili vous aide à organiser vos livres – et à savoir qui les a en ce moment. Scannez, classez, prêtez. Sans compte et sans publicité.",
    featuresTitle: "Ce que fait Lolili",
    features: [
      {
        title: "Scanner vos livres",
        text: "Scannez le code-barres au dos : le titre, l'auteur, la couverture et le nombre de pages sont renseignés automatiquement. Vous pouvez aussi saisir l'ISBN à la main.",
      },
      {
        title: "Vos propres catégories",
        text: "Créez des catégories colorées, attribuez-en autant que vous voulez à chaque livre et filtrez votre collection d'un simple toucher.",
      },
      {
        title: "Vos prêts en un coup d'œil",
        text: "Notez qui a emprunté quel livre et jusqu'à quand. Les retards se repèrent immédiatement, et un balayage suffit pour marquer un livre comme rendu.",
      },
      {
        title: "Import et export",
        text: "Importez une liste existante au format CSV et exportez votre collection en CSV quand vous le souhaitez.",
      },
    ],
    screenshotsTitle: "Un aperçu de l'application",
    shots: ["Tous les livres", "Détails du livre", "Prêts"],
    privacyTitle: "Vos données restent chez vous",
    privacyText:
      "Pas de compte, pas d'inscription, pas de suivi. Votre bibliothèque est stockée uniquement sur votre appareil. Lolili interroge la base de données publique OpenLibrary pour rechercher des livres, et rien d'autre.",
    privacyLink: "Lire la politique de confidentialité",
    supportTitle: "Assistance",
    supportText:
      "Une question, un bug ou une idée pour la prochaine version ? Écrivez-moi – je réponds généralement en quelques jours.",
    back: "Retour à l'accueil",
  },
  es: {
    tagline: "Tu biblioteca personal para iPhone y iPad",
    intro:
      "Lolili te ayuda a ordenar tus libros – y a saber quién los tiene ahora mismo. Escanea, clasifica, presta. Sin cuenta y sin publicidad.",
    featuresTitle: "Qué hace Lolili",
    features: [
      {
        title: "Escanea tus libros",
        text: "Escanea el código de barras de la contraportada y el título, el autor, la portada y el número de páginas se rellenan solos. También puedes escribir el ISBN a mano.",
      },
      {
        title: "Tus propias categorías",
        text: "Crea categorías de colores, asigna a cada libro las que quieras y filtra tu colección con un solo toque.",
      },
      {
        title: "Préstamos bajo control",
        text: "Anota quién se llevó cada libro y hasta cuándo. Los retrasos se ven al instante y basta un deslizamiento para marcar un libro como devuelto.",
      },
      {
        title: "Importar y exportar",
        text: "Trae una lista existente como archivo CSV y exporta tu colección a CSV cuando quieras.",
      },
    ],
    screenshotsTitle: "Un vistazo a la app",
    shots: ["Todos los libros", "Detalles del libro", "Préstamos"],
    privacyTitle: "Tus datos se quedan contigo",
    privacyText:
      "Sin cuenta, sin registro, sin seguimiento. Tu biblioteca se guarda solo en tu dispositivo. Lolili consulta la base de datos pública OpenLibrary para buscar libros y nada más.",
    privacyLink: "Leer la política de privacidad",
    supportTitle: "Soporte",
    supportText:
      "¿Una pregunta, un error o una idea para la próxima versión? Escríbeme: suelo responder en pocos días.",
    back: "Volver al inicio",
  },
  nl: {
    tagline: "Jouw persoonlijke bibliotheek voor iPhone en iPad",
    intro:
      "Lolili helpt je je boeken te ordenen – en te weten wie ze op dit moment heeft. Scannen, sorteren, uitlenen. Zonder account en zonder advertenties.",
    featuresTitle: "Wat Lolili kan",
    features: [
      {
        title: "Boeken scannen",
        text: "Scan de barcode op de achterkant en de titel, auteur, omslag en het aantal pagina's staan er al. Je kunt het ISBN ook met de hand invoeren.",
      },
      {
        title: "Eigen categorieën",
        text: "Maak gekleurde categorieën aan, koppel er zoveel als je wilt aan elk boek en filter je collectie met één tik.",
      },
      {
        title: "Uitleningen in beeld",
        text: "Noteer wie welk boek heeft meegenomen en tot wanneer. Wat te laat is zie je meteen, en met één veeg markeer je een boek als terugbezorgd.",
      },
      {
        title: "Import en export",
        text: "Neem een bestaande lijst mee als CSV-bestand en exporteer je collectie wanneer je wilt weer naar CSV.",
      },
    ],
    screenshotsTitle: "Een kijkje in de app",
    shots: ["Alle boeken", "Boekdetails", "Uitleningen"],
    privacyTitle: "Jouw gegevens blijven bij jou",
    privacyText:
      "Geen account, geen aanmelding, geen tracking. Je bibliotheek wordt alleen op je apparaat opgeslagen. Lolili raadpleegt de openbare database OpenLibrary om boeken op te zoeken en verder niets.",
    privacyLink: "Lees het privacybeleid",
    supportTitle: "Support",
    supportText:
      "Een vraag, een fout of een wens voor de volgende versie? Stuur me een bericht – ik reageer meestal binnen een paar dagen.",
    back: "Terug naar de startpagina",
  },
};

export const privacy: Record<Locale, PrivacyContent> = {
  de: {
    title: "Datenschutzerklärung für Lolili",
    updated: "Stand: August 2026",
    intro:
      "Lolili verwaltet deine Büchersammlung vollständig auf deinem Gerät. Es gibt kein Benutzerkonto, keine Anmeldung und keine Server, auf denen deine Bibliothek gespeichert wird.",
    sections: [
      {
        heading: "Welche Daten die App speichert",
        paragraphs: [
          "In der App entstehen die Daten, die du selbst einträgst: Bücher mit Titel, Untertitel, Autoren, Beschreibung, Umschlagbild, Seitenzahl, Erscheinungsdatum und ISBN, die Kategorien, die du anlegst, sowie deine Ausleihen mit dem Namen der Person, dem Ausleihdatum, einem optionalen Fälligkeitsdatum und dem Rückgabedatum.",
          "Zusätzlich merkt sich die App, ob du die Einführung beim ersten Start bereits gesehen hast.",
        ],
      },
      {
        heading: "Wo diese Daten liegen",
        paragraphs: [
          "Alle genannten Daten werden ausschließlich lokal auf deinem Gerät gespeichert. Sie werden nicht an mich und nicht an Dritte übertragen.",
          "Wenn du dein Gerät über iCloud oder deinen Computer sicherst, ist die Bibliothek Teil dieses Backups. Dieses Backup liegt in deinem eigenen Apple-Konto, nicht bei mir.",
          "Wenn du die App löschst, werden die gespeicherten Daten mit entfernt.",
        ],
      },
      {
        heading: "Verbindungen ins Internet",
        paragraphs: [
          "Wenn du ein Buch über den Barcode oder die ISBN suchst, fragt Lolili die öffentliche Datenbank OpenLibrary ab (openlibrary.org und covers.openlibrary.org), um Titel, Autoren, Umschlagbild und weitere Angaben zu laden. Übertragen wird dabei nur die gesuchte ISBN beziehungsweise die Kennung des Umschlagbildes.",
          "Wie bei jedem Aufruf einer Internetseite ist für den Betreiber dabei deine IP-Adresse sichtbar. OpenLibrary wird vom Internet Archive betrieben; es gelten dessen Datenschutzbestimmungen.",
          "Darüber hinaus baut Lolili keine Verbindungen ins Internet auf.",
        ],
      },
      {
        heading: "Kamera",
        paragraphs: [
          "Für das Scannen von Barcodes fragt Lolili den Zugriff auf die Kamera an. Das Kamerabild wird ausschließlich auf dem Gerät ausgewertet, um den Barcode zu erkennen. Es werden keine Fotos gespeichert und keine Bilddaten übertragen.",
          "Du kannst den Zugriff jederzeit in den Einstellungen deines Geräts widerrufen. Bücher lassen sich dann weiterhin über die ISBN oder von Hand hinzufügen.",
        ],
      },
      {
        heading: "Kein Tracking, keine Werbung",
        paragraphs: [
          "Lolili enthält keine Analyse-, Tracking- oder Werbedienste. Es wird kein Nutzungsverhalten aufgezeichnet und keine Werbekennung verwendet. Es werden keine Daten verkauft oder weitergegeben.",
        ],
      },
      {
        heading: "Export",
        paragraphs: [
          "Wenn du deine Sammlung als CSV-Datei exportierst, entscheidest du selbst, wohin diese Datei geht. Die App legt sie nur temporär auf dem Gerät ab und übergibt sie an das von dir gewählte Ziel.",
        ],
      },
      {
        heading: "Deine Rechte",
        paragraphs: [
          "Da ich keine personenbezogenen Daten von dir erhebe oder speichere, gibt es bei mir auch keine Daten, über die ich Auskunft geben oder die ich löschen könnte. Die in der App gespeicherten Inhalte kannst du jederzeit selbst ändern oder löschen.",
        ],
      },
    ],
    contactHeading: "Verantwortlich und Kontakt",
    contactText: "Bei Fragen zum Datenschutz in Lolili erreichst du mich unter:",
    back: "Zurück zu Lolili",
  },
  en: {
    title: "Privacy Policy for Lolili",
    updated: "Last updated: August 2026",
    intro:
      "Lolili manages your book collection entirely on your device. There is no user account, no sign-up and no server that stores your library.",
    sections: [
      {
        heading: "What the app stores",
        paragraphs: [
          "The app holds the data you enter yourself: books with title, subtitle, authors, description, cover image, page count, publication date and ISBN; the categories you create; and your loans with the borrower's name, the lending date, an optional due date and the return date.",
          "It also remembers whether you have already seen the introduction shown on first launch.",
        ],
      },
      {
        heading: "Where that data lives",
        paragraphs: [
          "All of it is stored locally on your device only. None of it is transmitted to me or to any third party.",
          "If you back up your device via iCloud or your computer, the library is part of that backup. That backup lives in your own Apple account, not with me.",
          "Deleting the app removes the stored data with it.",
        ],
      },
      {
        heading: "Internet connections",
        paragraphs: [
          "When you look up a book by barcode or ISBN, Lolili queries the public OpenLibrary database (openlibrary.org and covers.openlibrary.org) to retrieve the title, authors, cover image and further details. Only the ISBN being searched, or the identifier of the cover image, is sent.",
          "As with any website request, your IP address is visible to the operator. OpenLibrary is run by the Internet Archive and its privacy terms apply.",
          "Lolili makes no other internet connections.",
        ],
      },
      {
        heading: "Camera",
        paragraphs: [
          "Lolili requests camera access in order to scan barcodes. The camera image is processed on the device only, purely to recognise the barcode. No photos are stored and no image data is transmitted.",
          "You can revoke access at any time in your device settings. Books can still be added by ISBN or by hand.",
        ],
      },
      {
        heading: "No tracking, no advertising",
        paragraphs: [
          "Lolili contains no analytics, tracking or advertising services. No usage behaviour is recorded and no advertising identifier is used. No data is sold or shared.",
        ],
      },
      {
        heading: "Export",
        paragraphs: [
          "When you export your collection as a CSV file, you decide where that file goes. The app only writes it temporarily on the device and hands it to the destination you choose.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Since I neither collect nor store any personal data from you, there is no data on my side to disclose or delete. You can change or delete the content stored in the app yourself at any time.",
        ],
      },
    ],
    contactHeading: "Controller and contact",
    contactText:
      "If you have questions about privacy in Lolili, you can reach me at:",
    back: "Back to Lolili",
  },
  fr: {
    title: "Politique de confidentialité de Lolili",
    updated: "Dernière mise à jour : août 2026",
    intro:
      "Lolili gère votre collection de livres entièrement sur votre appareil. Il n'y a ni compte utilisateur, ni inscription, ni serveur sur lequel votre bibliothèque serait stockée.",
    sections: [
      {
        heading: "Les données enregistrées par l'application",
        paragraphs: [
          "L'application contient les données que vous saisissez vous-même : les livres avec leur titre, sous-titre, auteurs, description, couverture, nombre de pages, date de parution et ISBN ; les catégories que vous créez ; et vos prêts avec le nom de la personne, la date du prêt, une date d'échéance facultative et la date de retour.",
          "Elle retient également si vous avez déjà vu l'introduction affichée au premier lancement.",
        ],
      },
      {
        heading: "Où ces données sont conservées",
        paragraphs: [
          "Toutes ces données sont enregistrées uniquement en local sur votre appareil. Elles ne me sont pas transmises, ni à des tiers.",
          "Si vous sauvegardez votre appareil via iCloud ou votre ordinateur, la bibliothèque fait partie de cette sauvegarde. Celle-ci se trouve dans votre propre compte Apple, pas chez moi.",
          "Si vous supprimez l'application, les données enregistrées sont supprimées avec elle.",
        ],
      },
      {
        heading: "Connexions à Internet",
        paragraphs: [
          "Lorsque vous recherchez un livre par code-barres ou par ISBN, Lolili interroge la base de données publique OpenLibrary (openlibrary.org et covers.openlibrary.org) afin de récupérer le titre, les auteurs, la couverture et d'autres informations. Seul l'ISBN recherché, ou l'identifiant de l'image de couverture, est transmis.",
          "Comme pour toute consultation d'un site web, votre adresse IP est visible par l'exploitant. OpenLibrary est géré par l'Internet Archive et ses règles de confidentialité s'appliquent.",
          "Lolili n'établit aucune autre connexion à Internet.",
        ],
      },
      {
        heading: "Appareil photo",
        paragraphs: [
          "Lolili demande l'accès à l'appareil photo pour scanner les codes-barres. L'image est analysée uniquement sur l'appareil, dans le seul but de reconnaître le code-barres. Aucune photo n'est enregistrée et aucune donnée d'image n'est transmise.",
          "Vous pouvez révoquer cet accès à tout moment dans les réglages de votre appareil. Les livres peuvent alors toujours être ajoutés par ISBN ou à la main.",
        ],
      },
      {
        heading: "Aucun suivi, aucune publicité",
        paragraphs: [
          "Lolili ne contient aucun service d'analyse, de suivi ou de publicité. Aucun comportement d'utilisation n'est enregistré et aucun identifiant publicitaire n'est utilisé. Aucune donnée n'est vendue ni communiquée.",
        ],
      },
      {
        heading: "Export",
        paragraphs: [
          "Lorsque vous exportez votre collection au format CSV, vous décidez vous-même de la destination du fichier. L'application l'écrit uniquement de façon temporaire sur l'appareil et le transmet à la destination que vous choisissez.",
        ],
      },
      {
        heading: "Vos droits",
        paragraphs: [
          "Comme je ne collecte ni ne conserve aucune donnée personnelle vous concernant, il n'existe de mon côté aucune donnée dont je pourrais vous donner communication ou que je pourrais supprimer. Vous pouvez modifier ou supprimer vous-même à tout moment le contenu enregistré dans l'application.",
        ],
      },
    ],
    contactHeading: "Responsable et contact",
    contactText:
      "Pour toute question concernant la confidentialité dans Lolili, vous pouvez me joindre à :",
    back: "Retour à Lolili",
  },
  es: {
    title: "Política de privacidad de Lolili",
    updated: "Última actualización: agosto de 2026",
    intro:
      "Lolili gestiona tu colección de libros por completo en tu dispositivo. No hay cuenta de usuario, ni registro, ni servidores en los que se guarde tu biblioteca.",
    sections: [
      {
        heading: "Qué datos guarda la app",
        paragraphs: [
          "La app contiene los datos que introduces tú: los libros con título, subtítulo, autores, descripción, portada, número de páginas, fecha de publicación e ISBN; las categorías que creas; y tus préstamos con el nombre de la persona, la fecha de préstamo, una fecha de vencimiento opcional y la fecha de devolución.",
          "Además recuerda si ya has visto la introducción que se muestra al abrir la app por primera vez.",
        ],
      },
      {
        heading: "Dónde se guardan esos datos",
        paragraphs: [
          "Todos esos datos se almacenan únicamente de forma local en tu dispositivo. No se transmiten ni a mí ni a terceros.",
          "Si haces una copia de seguridad de tu dispositivo con iCloud o con tu ordenador, la biblioteca forma parte de esa copia. Esa copia está en tu propia cuenta de Apple, no en la mía.",
          "Si eliminas la app, los datos guardados se eliminan con ella.",
        ],
      },
      {
        heading: "Conexiones a internet",
        paragraphs: [
          "Cuando buscas un libro por código de barras o por ISBN, Lolili consulta la base de datos pública OpenLibrary (openlibrary.org y covers.openlibrary.org) para obtener el título, los autores, la portada y otros datos. Solo se envía el ISBN buscado o el identificador de la imagen de portada.",
          "Como en cualquier visita a un sitio web, tu dirección IP es visible para quien lo gestiona. OpenLibrary está gestionada por Internet Archive y se aplican sus condiciones de privacidad.",
          "Aparte de eso, Lolili no establece ninguna conexión a internet.",
        ],
      },
      {
        heading: "Cámara",
        paragraphs: [
          "Lolili solicita acceso a la cámara para escanear códigos de barras. La imagen de la cámara se analiza únicamente en el dispositivo, solo para reconocer el código de barras. No se guardan fotos ni se transmiten datos de imagen.",
          "Puedes revocar el acceso en cualquier momento en los ajustes de tu dispositivo. Los libros se pueden seguir añadiendo por ISBN o a mano.",
        ],
      },
      {
        heading: "Sin seguimiento, sin publicidad",
        paragraphs: [
          "Lolili no incluye servicios de análisis, seguimiento ni publicidad. No se registra el comportamiento de uso ni se utiliza ningún identificador publicitario. No se venden ni se ceden datos.",
        ],
      },
      {
        heading: "Exportación",
        paragraphs: [
          "Cuando exportas tu colección como archivo CSV, tú decides adónde va ese archivo. La app solo lo escribe temporalmente en el dispositivo y lo entrega al destino que elijas.",
        ],
      },
      {
        heading: "Tus derechos",
        paragraphs: [
          "Dado que no recojo ni almaceno ningún dato personal tuyo, por mi parte no existen datos sobre los que pueda informarte o que pueda eliminar. El contenido guardado en la app puedes modificarlo o eliminarlo tú mismo en cualquier momento.",
        ],
      },
    ],
    contactHeading: "Responsable y contacto",
    contactText:
      "Si tienes preguntas sobre la privacidad en Lolili, puedes escribirme a:",
    back: "Volver a Lolili",
  },
  nl: {
    title: "Privacybeleid voor Lolili",
    updated: "Laatst bijgewerkt: augustus 2026",
    intro:
      "Lolili beheert je boekencollectie volledig op je eigen apparaat. Er is geen gebruikersaccount, geen aanmelding en geen server waarop je bibliotheek wordt opgeslagen.",
    sections: [
      {
        heading: "Welke gegevens de app opslaat",
        paragraphs: [
          "In de app staan de gegevens die je zelf invoert: boeken met titel, ondertitel, auteurs, beschrijving, omslag, aantal pagina's, verschijningsdatum en ISBN; de categorieën die je aanmaakt; en je uitleningen met de naam van de persoon, de uitleendatum, een optionele vervaldatum en de datum van teruggave.",
          "Daarnaast onthoudt de app of je de introductie bij de eerste start al hebt gezien.",
        ],
      },
      {
        heading: "Waar die gegevens staan",
        paragraphs: [
          "Al deze gegevens worden uitsluitend lokaal op je apparaat opgeslagen. Ze worden niet naar mij en niet naar derden verstuurd.",
          "Als je een back-up van je apparaat maakt via iCloud of je computer, maakt de bibliotheek deel uit van die back-up. Die back-up staat in je eigen Apple-account, niet bij mij.",
          "Als je de app verwijdert, worden de opgeslagen gegevens mee verwijderd.",
        ],
      },
      {
        heading: "Verbindingen met internet",
        paragraphs: [
          "Wanneer je een boek opzoekt via de barcode of het ISBN, raadpleegt Lolili de openbare database OpenLibrary (openlibrary.org en covers.openlibrary.org) om de titel, auteurs, het omslag en overige gegevens op te halen. Daarbij wordt alleen het gezochte ISBN of de aanduiding van het omslag verstuurd.",
          "Zoals bij elk bezoek aan een website is je IP-adres daarbij zichtbaar voor de beheerder. OpenLibrary wordt beheerd door het Internet Archive; daarvoor geldt hun privacybeleid.",
          "Verder maakt Lolili geen verbinding met internet.",
        ],
      },
      {
        heading: "Camera",
        paragraphs: [
          "Voor het scannen van barcodes vraagt Lolili toegang tot de camera. Het camerabeeld wordt uitsluitend op het apparaat verwerkt, alleen om de barcode te herkennen. Er worden geen foto's opgeslagen en geen beeldgegevens verstuurd.",
          "Je kunt de toegang op elk moment intrekken in de instellingen van je apparaat. Boeken kun je dan nog steeds via het ISBN of met de hand toevoegen.",
        ],
      },
      {
        heading: "Geen tracking, geen advertenties",
        paragraphs: [
          "Lolili bevat geen analyse-, tracking- of advertentiediensten. Er wordt geen gebruiksgedrag vastgelegd en geen advertentie-id gebruikt. Er worden geen gegevens verkocht of gedeeld.",
        ],
      },
      {
        heading: "Export",
        paragraphs: [
          "Wanneer je je collectie als CSV-bestand exporteert, bepaal je zelf waar dat bestand naartoe gaat. De app schrijft het alleen tijdelijk op het apparaat en geeft het door aan de bestemming die jij kiest.",
        ],
      },
      {
        heading: "Jouw rechten",
        paragraphs: [
          "Omdat ik geen persoonsgegevens van je verzamel of opsla, zijn er bij mij ook geen gegevens waarover ik inzage kan geven of die ik kan verwijderen. De inhoud die in de app is opgeslagen kun je zelf op elk moment wijzigen of verwijderen.",
        ],
      },
    ],
    contactHeading: "Verantwoordelijke en contact",
    contactText:
      "Heb je vragen over privacy in Lolili, dan bereik je mij via:",
    back: "Terug naar Lolili",
  },
};
