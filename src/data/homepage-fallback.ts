export type ContactEmailDetail = {
  id: number
  description: string
  email: string
  active: boolean
}

export type SectionTile = {
  title?: string
  titleEn?: string
  text?: string
  textEn?: string
  image?: string
}

export type MenuSection = {
  sectionTitle?: string
  sectionName?: string
  coverImage?: string
  sectionDesc?: string
  tiles?: SectionTile[]
  navLink?: string
}

export type MenuSectionResponse = {
  menuName?: string
  sections?: MenuSection[]
}

export type IssueItem = {
  title: string
  description?: string
  icon: string
  image?: string
  color: string
}

export const fallbackContactDetails: ContactEmailDetail[] = [
  {
    id: 1,
    description: 'మాతో ప్రకటన చేయండి',
    email: 'swatipublication2026@gmail.com',
    active: true,
  },
  {
    id: 2,
    description: 'మాతో చేరండి',
    email: 'swatipublication2026@gmail.com',
    active: true,
  },
  {
    id: 3,
    description: 'ఇతర విచారణలు',
    email: 'swatipublication2026@gmail.com',
    active: true,
  },
]

export const fallbackSectionDetails: MenuSectionResponse[] = [
  {
    menuName: 'మన స్వాతి',
    sections: [
      {
        sectionTitle: 'ఈ సంచిక',
        sectionName: 'Editions',
        navLink: '',
        coverImage: '',
        tiles: [
          {
            title: 'రుచుల ప్రపంచం',
            titleEn: 'A world of flavors',
            text: 'ఇండియను వంటలు,ఆరోగ్యకరమయిన ఆహరం ',
            textEn: 'Indian cuisine, healthy food',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/Food.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=LB%2BiKMRo%2F66jc6xFYfZFaD%2Bthcb0jld7xX8f%2FJfRtTo%3D',
          },
          {
            title: 'మన సంస్కృతి',
            titleEn: 'Our Culture',
            text: 'తెలుగు వారసత్వం,ప్రతిష్టుల నందవ్యాసం',
            textEn: 'Telugu heritage and distinguished personalities',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/temple.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=NQThLUPM2IfGwa4N7xo2XGTFCarDZp2iUJIEwq41o5I%3D',
          },
          {
            title: 'మన కుటుంబం',
            titleEn: 'Our Family',
            text: 'మహిళల ఆరోగ్యం,జీవన శైలి',
            textEn: 'Womens health and lifestyle',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/woman.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=G%2F7Cog9dr0s0lmhr9TpcuagBoKJLxvx%2Bf6vdB4Ye7ps%3D',
          },
          {
            title: 'పిల్లల ప్రపంచం',
            titleEn: "Children's World",
            text: 'పిల్లల కోసం ప్రత్యేక కథనాలు,చిట్టాలు',
            textEn: 'Special articles and tips for children',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/family.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=DcyWFjY9Nb4PEYeo4T4JnFfWQyIyVASSt3OZBGpHxig%3D',
          },
        ],
      },
      {
        sectionTitle: 'స్వాతి ప్రత్యేకం',
        sectionName: 'Special',
        navLink: 'special',
        coverImage: '',
        tiles: [
          {
            title: '2026',
            titleEn: '2026',
            text: '',
            textEn: '',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/family.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=DcyWFjY9Nb4PEYeo4T4JnFfWQyIyVASSt3OZBGpHxig%3D',
          },
          {
            title: 'అందం & ఆరోగ్యం',
            titleEn: 'Beauty & Health',
            text: 'సహజ సౌందర్యానికి చిట్కాలు',
            textEn: 'Tips for natural beauty',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/beauty.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=0C9Fatm1IYR4NMZ16Kam2S%2B4lzvev2tR3vbm16O%2FKCw%3D',
          },
          {
            title: 'కళలు & సంస్కృతి',
            titleEn: 'Arts & Culture',
            text: 'మన వారసత్వం మన గర్వం',
            textEn: 'Our heritage, our pride',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/arts.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=Tbow4GLE0elXp00CQP1PI2qoYQ1D1Du6194iaK%2B%2BL7Q%3D',
          },
          {
            title: 'ప్రయాణం',
            titleEn: 'Travel',
            text: 'ప్రపంచ అందాల వైపు',
            textEn: 'Towards the beautiful destinations of the world',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/journey.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=XHeeG3ywssUu1k4TCHeHPc%2Fv92z6iU7eQ8tf1UmN2Ew%3D',
          },
        ],
      },
      {
        sectionTitle: 'కథనాలు',
        sectionName: 'Articles',
        navLink: 'articles',
        coverImage: '',
        tiles: [
          {
            title: 'కుటుంబం',
            titleEn: 'Family',
            text: 'సంబంధాలు,సంభాషణలు,సంతోషాలు',
            textEn: 'Relationships, conversations and happiness',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-family.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=cjPeVwc1CQPKPumpOcmux3W91lkueQjXqUcofMYJsV8%3D',
          },
          {
            title: 'వంటలు',
            titleEn: 'Recipes',
            text: 'రుచికరమయిన వంటకాలు,ఆరోగ్యకరమయిన ఆహారం',
            textEn: 'Delicious recipes and healthy food',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-food.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=%2BuKqSOzOcTW%2Fxjevf40N5Z%2Fhj%2BoYov2vvGtYPYWJCrs%3D',
          },
          {
            title: 'ఆరోగ్యం',
            titleEn: 'Health',
            text: 'శారీరక,మానసిక ఆరోగ్యం',
            textEn: 'Physical and mental health',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-health.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=Uz9SAErrwlMS4UUk3eH8Y9og4RGceRasSqVRYMfuwas%3D',
          },
          {
            title: 'ఇల్లు అందంగా',
            titleEn: 'Beautiful Homes',
            text: 'గృహ అలంకరణ,జీవన శైలి',
            textEn: 'Home decoration and lifestyle',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-house.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=rkAkC3VdRE6Qj0XzVJ1yExjpVeWyxonghCSBz8J6uZk%3D',
          },
          {
            title: 'పిల్లల కోణం',
            titleEn: "Children's Corner",
            text: 'పిల్లల కథలు,విద్య,వినోదం ',
            textEn: "Children's stories, education and entertainment",
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-kids.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=95DscfgJPdODngsogaFLyyd4Z2znt4Tvgjisekycn4U%3D',
          },
          {
            title: 'పుస్తకాలు',
            titleEn: 'Books',
            text: 'పఠనం,సమీక్షలు,రచనలు ',
            textEn: 'Reading, reviews and writings',
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/story-books.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=lJ2uVP7TwCC%2BiTynyu3XTglbU1Bsx4rCVOLKQxHkAS0%3D',
          },
        ],
      },
      {
        sectionTitle: 'మా 43 ఏళ్ల ప్రయాణం',
        sectionName: 'Journey',
        navLink: 'journey',
        coverImage: '',
        tiles: [
          {
            title: '1984  -  2026',
            titleEn: '1984 - 2026',
            text: 'తెలుగు కుటుంబాల ప్రేమాభిమానాలతో \r\n\r\n43 సంవత్సరాల స్వాతి ప్రయాణం...',
            textEn: "Swathi's 43-year journey with the love and affection of Telugu families",
            image: 'https://swatipportalstorage01.blob.core.windows.net/swati-sections-test/43_image.jpg?sv=2026-10-06&se=2026-11-04T04%3A55%3A34Z&sr=b&sp=r&sig=%2BInCLSyrXQb5PWocUID6KQaAjJ5yqw2yHAI7IUFwEQU%3D',
          },
        ],
      },
      {
        sectionTitle: 'స్వాతి గురించి',
        sectionName: 'About Us',
        navLink: 'aboutus',
        coverImage: '',
        tiles: [
          {
            title: '43 సంవత్సరాలుగా తెలుగు కుటుంబంతో కలిసి\r\nప్రయాణిస్తున్న స్వాతి కథ... మన పాఠకుల ప్రేమ రచయితల స్ఫూర్తి, మా ప్రయాణం ఇంకా కొనసాగుతూనే ఉంది.',
            titleEn: "Swathi's 43-Year Journey",
            text: '43 సంవత్సరాలుగా తెలుగు కుటుంబంతో కలిసి ప్రయాణిస్తున్న స్వాతి కథ...',
            textEn: "The story of Swathi, which has journeyed alongside Telugu families for 43 years. With the love of our readers and the inspiration of our writers, our journey continues.",
            image: '',
          },
        ],
      },
      {
        sectionTitle: 'సంప్రదించండి',
        sectionName: 'Contact Us',
        navLink: 'contactus',
        coverImage: '',
        tiles: [
          {
            title: 'సంస్కార వికాసం',
            titleEn: 'Development of Values',
            text: 'క్రమశిక్షణ, బాధ్యతలు,సమాజంలో గౌరవం',
            textEn: 'Discipline, responsibilities and respect in society',
            image: '',
          },
          {
            title: 'విద్యాభివృద్ధి కోసం',
            titleEn: 'For Educational Development',
            text: 'పుస్తకాలు, జ్ఞానం సముపార్జన',
            textEn: 'Books and the acquisition of knowledge',
            image: '',
          },
          {
            title: 'సామాజిక సమభావం',
            titleEn: 'Social Harmony',
            text: 'ఇతర సమూహాలతో,విస్తృతాలు',
            textEn: 'Harmony with other communities and broader society',
            image: '',
          },
        ],
      },
    ],
  },
]

export const issueHighlights: IssueItem[] = [
  {
    title: 'రుచుల ప్రపంచం',
    description: 'ఇంటింటి వంటలు, ఆరోగ్యకరమైన ఆహారం',
    icon: 'రుచులు',
    color: 'bg-orange-50 text-orange-800',
  },
  {
    title: 'మన సంస్కృతి',
    description: 'తెలుగు వారసత్వం, మన సంప్రదాయాలు',
    icon: 'సంస్కృతి',
    color: 'bg-sky-50 text-sky-800',
  },
  {
    title: 'మన కుటుంబం',
    description: 'మహిళల ఆరోగ్యం, జీవన శైలి',
    icon: 'కుటుంబం',
    color: 'bg-emerald-50 text-emerald-800',
  },
]

export const specialStories = [
  {
    category: 'ప్రత్యేక కథనం',
    title: 'తెరపై కొత్త వెలుగులు',
    description: 'సినిమా ప్రపంచంలోని మధురమైన విశేషాలు',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91c442a14?auto=format&fit=crop&w=900&q=85',
    tone: 'from-rose-950/80',
  },
  {
    category: 'ప్రయాణం',
    title: 'ప్రపంచ అందాల వైపు',
    description: 'మనసు దోచే ప్రదేశాల పరిచయం',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85',
    tone: 'from-sky-950/80',
  },
  {
    category: 'ఆరోగ్యం',
    title: 'అందం & ఆరోగ్యం',
    description: 'ఆరోగ్యకరమైన జీవనానికి చిన్న చిట్కాలు',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=85',
    tone: 'from-emerald-950/80',
  },
  {
    category: 'కళలు',
    title: 'కళలు & సంస్కృతి',
    description: 'మన వారసత్వం, మన గర్వం',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=85',
    tone: 'from-amber-950/80',
  },
]

export const storyCategories = [
  { title: 'కుటుంబం', description: 'సంబంధాలు, అనుబంధాలు', image: 'photo-1511895426328-dc8714191300' },
  { title: 'వంటలు', description: 'రుచికరమైన వంటకాలు', image: 'photo-1509440159596-0249088772ff' },
  { title: 'ఆరోగ్యం', description: 'శారీరక, మానసిక ఆరోగ్యం', image: 'photo-1506126613408-eca07ce68773' },
  { title: 'ఇల్లు అందంగా', description: 'గృహ అలంకరణ, జీవన శైలి', image: 'photo-1616486338812-3dadae4b4ace' },
  { title: 'పిల్లల కోణం', description: 'కథలు, విద్య, వినోదం', image: 'photo-1503454537195-1dcabb73ffb9' },
  { title: 'పుస్తకాలు', description: 'పఠనం, సమీక్షలు, రచనలు', image: 'photo-1512820790803-83ca734da794' },
]
