const businessData = {
  construction: {
    title: "Construction & Engineering",
    heroImage: "/images/construction.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our engineering arm operates through multiple specialized divisions, including construction, electrical systems, and automobile engineering. We deliver large-scale projects with a unified approach that combines technical expertise, innovation, and long-term sustainability.",
      },

      {
        type: "grid",
        title: "Engineering Divisions",
        items: [
          {
            title: "Engineering",
            desc: "Infrastructure development including roads, bridges, and large-scale building projects.",
          },
          {
            title: "Electrical Engineering",
            desc: "Power systems, installations, and energy solutions for modern infrastructure.",
          },
          {
            title: "Automobile Engineering",
            desc: "Design, maintenance, and integration of vehicles and transport systems.",
          },
          {
            title: "Integrated Systems",
            desc: "Combining multiple engineering disciplines to deliver complete, efficient solutions.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "25+", label: "Projects Completed" },
          { value: "10+", label: "Countries Reached" },
          { value: "5000+", label: "Workforce" },
        ],
      },

      {
        type: "cta",
        title: "Work with us",
        desc: "Partner with our multi-disciplinary engineering team to build the future across industries.",
        button: "Contact Us",
      },
    ],

    // 🔥 SUB PAGES
    subPages: [
      {
        slug: "projects",
        title: "Our Projects",
        content:
          "Explore our construction, electrical, and engineering projects across multiple sectors.",
      },
      {
        slug: "divisions",
        title: "Engineering Divisions",
        content:
          "Learn more about our specialized wings including construction, electrical, and automobile engineering.",
      },
      {
        slug: "safety",
        title: "Safety Standards",
        content:
          "We follow international safety and engineering standards across all our divisions.",
      },
    ],
  },

  agriculture: {
    title: "Agriculture",
    heroImage: "/images/agric.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our agriculture division operates a large-scale, fully integrated system covering crop production, horticulture, livestock farming, and agro logistics. We produce a wide range of staple foods, cash crops, and animal products while managing processing, storage, and distribution across local and international markets. Through modern technology and sustainable practices, we ensure food security, efficiency, and long-term agricultural growth.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Staple Crop Production",
            desc: "Large-scale cultivation of staple foods including maize, rice, cassava, yam...",
            image: "/images/crops.jpg",
          },
          {
            title: "Cash Crops & Plantations",
            desc: "Production of cocoa, palm, olives and other commercial crops...",
            image: "/images/cashcrops.jpg",
          },
          {
            title: "Horticulture",
            desc: "Fruits and vegetables production for local and export markets...",
            image: "/images/horticulture.jfif",
          },
          {
            title: "Poultry Farming",
            desc: "Commercial poultry operations for eggs and meat...",
            image: "/images/poultry.jpg",
          },
          {
            title: "Livestock Farming",
            desc: "Cattle, goats, pigs and large-scale animal farming...",
            image: "/images/livestock.jpg",
          },
          {
            title: "Agro Processing & Logistics",
            desc: "Storage, processing and distribution across markets...",
            image: "/images/agrologistics.jpg",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "1000+", label: "Hectares Cultivated" },
          { value: "10,000+", label: "Livestock Managed" },
          { value: "50+", label: "Products Supplied" },
        ],
      },

      {
        type: "cta",
        title: "Grow with us",
        desc: "Partner with us to advance large-scale agriculture, food production, and supply chain distribution.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "staple-crops",
        title: "Staple Crop Production",
        content:
          "Explore our large-scale farming of maize, rice, cassava, yam, and other essential food crops.",
      },
      {
        slug: "cash-crops",
        title: "Cash Crops & Plantations",
        content:
          "Learn about our cocoa, palm, olive, and other plantation-based agricultural operations.",
      },
      {
        slug: "horticulture",
        title: "Horticulture",
        content:
          "Discover our fruit, vegetable, and specialty crop production systems.",
      },
      {
        slug: "poultry",
        title: "Poultry Farming",
        content:
          "Explore our commercial poultry systems focused on egg and meat production.",
      },
      {
        slug: "livestock",
        title: "Livestock Farming",
        content:
          "Learn about our cattle, goat, pig, and large-scale animal farming operations.",
      },
      {
        slug: "agro-logistics",
        title: "Agro Processing & Logistics",
        content:
          "See how we process, store, package, and distribute agricultural products across markets.",
      },
    ],
  },
  health: {
    title: "Healthcare",
    heroImage: "/images/health.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our healthcare division is dedicated to delivering high-quality medical services, advancing research, and improving public health outcomes. We operate through a network of hospitals, research centers, and healthcare initiatives focused on innovation, accessibility, and excellence in patient care.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Hospitals & Clinical Care",
            desc: "Provision of comprehensive medical services through modern hospitals and specialized care units.",
          },
          {
            title: "Health Research",
            desc: "Research centers focused on advancing medical knowledge, treatments, and healthcare solutions.",
          },
          {
            title: "Public Health",
            desc: "Community-based programs aimed at disease prevention, health education, and outreach.",
          },
          {
            title: "Medical Training",
            desc: "Training and development programs for healthcare professionals to maintain high standards of care.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "5+", label: "Healthcare Facilities" },
          { value: "100+", label: "Medical Professionals" },
          { value: "50,000+", label: "Patients Served" },
        ],
      },

      {
        type: "cta",
        title: "Partner with us",
        desc: "Join us in transforming healthcare delivery and improving lives.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "hospitals",
        title: "Our Hospitals",
        content: "Explore our healthcare facilities and clinical services.",
      },
      {
        slug: "research",
        title: "Research Centers",
        content: "Learn about our medical research and innovation initiatives.",
      },
      {
        slug: "public-health",
        title: "Public Health Programs",
        content: "Discover our outreach and community health programs.",
      },
    ],
  },
  power: {
    title: "Power & Energy",
    heroImage: "/images/power.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our power and energy division is focused on delivering reliable and sustainable energy solutions across multiple sources. From petroleum and gas to renewable energy such as solar, we operate across the energy value chain to meet growing industrial and consumer demands.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Petroleum & Gas",
            desc: "Supply, distribution, and management of petroleum products and natural gas.",
          },
          {
            title: "Renewable Energy",
            desc: "Development of solar and other clean energy solutions for sustainable power generation.",
          },
          {
            title: "Energy Distribution",
            desc: "Efficient delivery of energy through infrastructure including filling stations and supply networks.",
          },
          {
            title: "Energy Solutions",
            desc: "Integrated energy systems designed to meet residential, commercial, and industrial needs.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "20+", label: "Energy Projects" },
          { value: "15+", label: "Distribution Points" },
          { value: "1M+", label: "Liters Supplied" },
        ],
      },

      {
        type: "cta",
        title: "Power the future with us",
        desc: "Partner with us to deliver reliable and sustainable energy solutions.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "petroleum",
        title: "Petroleum & Gas",
        content:
          "Learn about our petroleum supply and gas distribution operations.",
      },
      {
        slug: "renewable",
        title: "Renewable Energy",
        content: "Explore our solar and clean energy initiatives.",
      },
      {
        slug: "distribution",
        title: "Distribution Network",
        content:
          "Discover our filling stations and energy distribution systems.",
      },
    ],
  },
  technology: {
    title: "Technology",
    heroImage: "/images/tech.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our technology division drives innovation across all our operations, building digital solutions, intelligent systems, and scalable platforms. We focus on software development, data systems, and emerging technologies to improve efficiency, decision-making, and user experience across industries.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Software Development",
            desc: "Design and development of web, mobile, and enterprise applications.",
          },
          {
            title: "Data & Systems",
            desc: "Data management, analytics, and systems that power smart decision-making.",
          },
          {
            title: "Automation & Integration",
            desc: "Streamlining operations through automation and connecting systems across divisions.",
          },
          {
            title: "Emerging Technologies",
            desc: "Exploration of AI, smart infrastructure, and next-generation digital solutions.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "30+", label: "Digital Solutions Built" },
          { value: "10+", label: "Platforms Deployed" },
          { value: "100K+", label: "Users Reached" },
        ],
      },

      {
        type: "cta",
        title: "Build with us",
        desc: "Partner with us to create innovative and scalable technology solutions.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "software",
        title: "Software Solutions",
        content:
          "Explore our web, mobile, and enterprise software development projects.",
      },
      {
        slug: "data",
        title: "Data & Analytics",
        content:
          "Learn how we use data to drive smarter decisions and efficiency.",
      },
      {
        slug: "innovation",
        title: "Innovation Lab",
        content:
          "Discover our work in AI, automation, and emerging technologies.",
      },
    ],
  },
  estate: {
    title: "Real Estate & Hospitality",
    heroImage: "/images/house.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our real estate and hospitality division focuses on developing high-quality residential, commercial, and lifestyle spaces. From modern housing to premium hotels, we create environments that combine comfort, functionality, and long-term value.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Residential Developments",
            desc: "Design and construction of modern homes and housing communities tailored for comfort and sustainability.",
          },
          {
            title: "Commercial Properties",
            desc: "Office spaces, business hubs, and retail centers built for productivity and growth.",
          },
          {
            title: "Hospitality & Hotels",
            desc: "Premium hotels and accommodation services delivering comfort, luxury, and world-class experiences.",
          },
          {
            title: "Property Management",
            desc: "Efficient management and maintenance of real estate assets to ensure long-term value and performance.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "50+", label: "Properties Developed" },
          { value: "10+", label: "Hospitality Locations" },
          { value: "5,000+", label: "Residents & Guests Served" },
        ],
      },

      {
        type: "cta",
        title: "Invest with us",
        desc: "Partner with us to develop and manage world-class real estate and hospitality projects.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "residential",
        title: "Residential Projects",
        content: "Explore our housing developments and modern living spaces.",
      },
      {
        slug: "commercial",
        title: "Commercial Properties",
        content:
          "Discover our office spaces, retail centers, and business hubs.",
      },
      {
        slug: "hospitality",
        title: "Hotels & Hospitality",
        content:
          "Learn more about our hotels and premium accommodation services.",
      },
    ],
  },
  education: {
    title: "Education",
    heroImage: "/images/education.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our education division is committed to building knowledge, developing skills, and empowering individuals through high-quality learning systems. We operate across academic institutions, vocational training, and digital learning platforms to prepare people for real-world impact across multiple industries.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Academic Institutions",
            desc: "Schools and learning centers providing structured academic education across key disciplines.",
          },
          {
            title: "Vocational Training",
            desc: "Practical skill development programs focused on engineering, agriculture, healthcare, and technical trades.",
          },
          {
            title: "Digital Learning",
            desc: "Online platforms and courses delivering accessible education anytime, anywhere.",
          },
          {
            title: "Professional Development",
            desc: "Continuous learning programs designed to upskill professionals across industries.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "20+", label: "Learning Programs" },
          { value: "5,000+", label: "Students Trained" },
          { value: "100+", label: "Certified Courses" },
        ],
      },

      {
        type: "cta",
        title: "Shape the future with us",
        desc: "Partner with us to deliver world-class education and empower the next generation.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "schools",
        title: "Academic Institutions",
        content: "Explore our schools and structured academic programs.",
      },
      {
        slug: "vocational",
        title: "Vocational Training",
        content:
          "Learn practical skills across engineering, health, and agriculture.",
      },
      {
        slug: "online",
        title: "Digital Learning",
        content: "Access our online courses and remote learning platforms.",
      },
    ],
  },
  logistics: {
    title: "Logistics & Supply Chain",
    heroImage: "/images/logistics.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our logistics and supply chain division ensures the efficient movement of goods, services, and resources across all our sectors. We provide integrated transportation, warehousing, and distribution solutions that connect production to people reliably and at scale.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Transportation Services",
            desc: "Road, rail, and freight transport systems for efficient movement of goods and materials.",
          },
          {
            title: "Warehousing & Storage",
            desc: "Secure storage facilities for agricultural produce, industrial goods, and commercial inventory.",
          },
          {
            title: "Supply Chain Management",
            desc: "End-to-end coordination of sourcing, production flow, and distribution across all divisions.",
          },
          {
            title: "Distribution Networks",
            desc: "Structured delivery systems ensuring timely supply of products to local and international markets.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "100+", label: "Delivery Routes" },
          { value: "50+", label: "Fleet Vehicles" },
          { value: "10+", label: "Warehouses & Hubs" },
        ],
      },

      {
        type: "cta",
        title: "Move the world with us",
        desc: "Partner with us to build efficient and scalable logistics and supply chain solutions.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "transport",
        title: "Transportation",
        content: "Explore our road, freight, and cargo transport services.",
      },
      {
        slug: "warehousing",
        title: "Warehousing",
        content: "Learn about our storage and inventory management systems.",
      },
      {
        slug: "distribution",
        title: "Distribution Network",
        content: "Discover how we move goods from production to end users.",
      },
    ],
  },
  manufacturing: {
    title: "Manufacturing & Industrial Production",
    heroImage: "/images/manufacturing.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our manufacturing division focuses on large-scale industrial production across multiple sectors. We transform raw materials into high-quality products that support our agriculture, energy, construction, healthcare, and technology operations, ensuring efficiency, self-reliance, and scalable industrial growth.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Industrial Manufacturing",
            desc: "Production of essential goods, equipment, and materials for infrastructure and commercial use.",
          },
          {
            title: "Food Processing",
            desc: "Processing agricultural produce into packaged and consumable food products for local and export markets.",
          },
          {
            title: "Energy Equipment",
            desc: "Manufacturing of tools, components, and systems used in petroleum, gas, and renewable energy operations.",
          },
          {
            title: "Construction Materials",
            desc: "Production of cement products, steel components, and building materials for infrastructure development.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "20+", label: "Production Lines" },
          { value: "500+", label: "Industrial Workers" },
          { value: "1000+", label: "Products Manufactured" },
        ],
      },

      {
        type: "cta",
        title: "Build with us",
        desc: "Partner with us to create scalable industrial manufacturing and production systems.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "industrial",
        title: "Industrial Production",
        content:
          "Explore our large-scale manufacturing operations and industrial output.",
      },
      {
        slug: "food-processing",
        title: "Food Processing",
        content:
          "Learn how we transform agricultural products into consumable goods.",
      },
      {
        slug: "materials",
        title: "Construction Materials",
        content:
          "Discover our production of cement, steel, and building materials.",
      },
      {
        slug: "energy-equipment",
        title: "Energy Equipment",
        content:
          "See how we manufacture components for energy and power systems.",
      },
    ],
  },
 sports: {
  title: "Sports & Athletics ",
  heroImage: "/images/sports.jpg",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "Our sports and athletics division is a pan-African sports development system focused on building world-class athletes, strengthening local competitions, and elevating sports infrastructure across Africa. Instead of only exporting talent abroad, we focus on developing strong domestic leagues, academies, and tournaments that can compete globally while empowering African nations to become sporting powerhouses.",
    },

    {
      type: "vision",
      title: "Vision",
      content:
        "To transform Africa into a global center for elite sports by developing structured academies, professional leagues, and international-standard competitions while nurturing homegrown talent and strengthening national sports ecosystems.",
    },

    {
      type: "grid",
      title: "Core Areas",
      items: [
        {
          title: "Sports Academies (Africa Wide)",
          desc: "High-performance training academies across African regions focusing on football, basketball, athletics, boxing, and more, designed to produce elite professional athletes.",
          image: "/images/sport-academy.jpg"
        },
        {
          title: "African Sports Leagues",
          desc: "Structured continental leagues that improve competition levels within Africa, reducing over-reliance on external leagues and strengthening local sports economies.",
            image: "/images/sport-league.jpg"
        },
        {
          title: "Talent Discovery Programs",
          desc: "Scouting systems across schools, communities, and grassroots competitions to identify and nurture young athletic talent early.",
          image: "/images/talents.jpg"
        },
        {
          title: "Sports Infrastructure Development",
          desc: "Building and upgrading stadiums, training centers, gyms, and rehabilitation facilities across African nations.",
          image: "/images/infrastructure.jpg"
        },
        {
          title: "International Partnerships",
          desc: "Collaborations with global clubs, federations, and sports organizations for exchange programs, training, and competition exposure.",
          image: "/images/international.jpg"
        },
        {
          title: "Athlete Management & Representation",
          desc: "Professional career management for athletes including contracts, sponsorships, branding, and global exposure.",
          image: "/images/sport-management.jpg",
        },
      ],
    },

   {
  type: "grid",
  title: "Key Sports Disciplines",
  items: [
    {
      title: "Football (Soccer)",
      desc: "Elite academies, national leagues, youth development systems, and African continental tournaments with a focus on producing world-class professional players.",
      image: "/images/football.jpg"
    },
    {
      title: "Athletics (Track & Field)",
      desc: "Sprint, middle-distance, long-distance, and field events with Olympic-level training systems to maintain African dominance globally.",
      image: "/images/atheletics.jpg"
    },
  
    {
      title: "Basketball",
      desc: "Structured youth leagues and professional pathways aimed at developing NBA-level African talent and strong continental competitions.",
      image: "/images/basketball.jpg"
    },
    {
      title: "Boxing",
      desc: "High-performance boxing academies focused on producing world champions across multiple weight divisions.",
      image: "/images/boxing.jpg"
    },
    {
      title: "Mixed Martial Arts (MMA)",
      desc: "Modern combat sports training programs combining wrestling, striking, and grappling for global competition.",
    image: "/images/mma.jpg"},
    {
      title: "Rugby",
      desc: "Development of national and regional rugby leagues to increase African competitiveness on the world stage.",
      image: "/images/rugby.jpg"
    },
    {
      title: "Handball",
      desc: "Fast-growing team sport with structured leagues and youth development programs across African nations.",
      image: "/images/handball.jpg"
    },
    {
      title: "Volleyball",
      desc: "Indoor and beach volleyball development programs for schools, clubs, and professional competition.",
      image: "/images/volleyball.jpg"
    },
    {
      title: "Cricket",
      desc: "Expansion of cricket infrastructure and leagues across African regions with international exposure pathways.",
      image: "/images/cricket.jpg"
    },
    {
      title: "Tennis",
      desc: "Individual and academy-based training systems to produce competitive African tennis players globally.",
    
      image: "/images/tennis.jpg"},
    {
      title: "Swimming",
      desc: "Aquatic sports development including competitive swimming, diving, and water safety programs.",
   image: "/images/swimming.jpg"
    },
    {
      title: "Cycling",
      desc: "Road and track cycling development programs focused on endurance sports and international competition.",
   image: "/images/cycling.jpg"
    },
    {
      title: "Table Tennis",
      desc: "Fast-reflex sport training programs for schools and competitive continental tournaments.",
      image: "/images/tablr-tennis.jpg"
    },
    {
      title: "Wrestling",
      desc: "Traditional and Olympic wrestling development rooted in African strength-based combat sports culture.",
    image: "/images/wrestling.jpg"
    },
    {
      title: "Esports",
      desc: "Digital competitive gaming leagues focusing on global esports participation and youth engagement.",
    image: "/images/esport.jpg"
    }
  ]
},

    {
      type: "stats",
      items: [
        { value: "20+", label: "African Sports Academies (Planned)" },
        { value: "50+", label: "Regional Leagues Development Goal" },
        { value: "1000+", label: "Athletes to be Trained Yearly" },
        { value: "54", label: "African Nations Target Coverage" },
      ],
    },

    {
      type: "cta",
      title: "Building Africa’s Sporting Future",
      desc:
        "Join us in transforming African sports into a globally competitive ecosystem through structured development, investment, and talent empowerment.",
      button: "Partner With Us",
    },
  ],

  subPages: [
    {
      slug: "academies",
      title: "Sports Academies",
      content:
        "Elite training academies across Africa focused on developing world-class athletes from grassroots to professional level.",
    },
    {
      slug: "leagues",
      title: "African Leagues",
      content:
        "Structured regional and continental leagues designed to improve competition quality within Africa.",
    },
    {
      slug: "scouting",
      title: "Talent Scouting",
      content:
        "Pan-African scouting programs identifying young talent in schools, communities, and local tournaments.",
    },
    {
      slug: "facilities",
      title: "Sports Infrastructure",
      content:
        "Development of modern stadiums, training complexes, and sports science centers across Africa.",
    },
    {
      slug: "international",
      title: "Global Partnerships",
      content:
        "Strategic collaborations with international clubs and federations for training, exposure, and development.",
    },
  ],
},
  media: {
    title: "Media & Communications",
    heroImage: "/images/media.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our media and communications division is responsible for storytelling, brand communication, and digital engagement across all our operations. We produce high-quality content, manage information flow, and operate media platforms that connect our work in engineering, health, agriculture, energy, and more to the public.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Digital Media Production",
            desc: "Creation of video, audio, and visual content for education, branding, and public engagement.",
          },
          {
            title: "Broadcast & Publishing",
            desc: "News, documentaries, and publications covering industry, health, education, and societal impact.",
          },
          {
            title: "Public Relations",
            desc: "Strategic communication and reputation management across all divisions and projects.",
          },
          {
            title: "Social & Digital Platforms",
            desc: "Management of online platforms, social media, and community engagement channels.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "100+", label: "Content Pieces Produced" },
          { value: "10+", label: "Media Channels" },
          { value: "1M+", label: "Audience Reach" },
        ],
      },

      {
        type: "cta",
        title: "Tell powerful stories with us",
        desc: "Partner with us to create impactful media that informs, educates, and inspires.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "production",
        title: "Media Production",
        content: "Explore our video, audio, and digital content creation work.",
      },
      {
        slug: "broadcast",
        title: "Broadcast & Publishing",
        content: "Learn about our news, documentaries, and publications.",
      },
      {
        slug: "pr",
        title: "Public Relations",
        content:
          "See how we manage communication and public image across divisions.",
      },
      {
        slug: "platforms",
        title: "Digital Platforms",
        content: "Discover our social media and online engagement systems.",
      },
    ],
  },
  music: {
    title: "Music & Arts",
    heroImage: "/images/music.jpg",

    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "Our music and arts division is dedicated to nurturing creativity, cultural expression, and artistic talent. We provide platforms for musicians, visual artists, performers, and creatives to develop their skills, showcase their work, and contribute to cultural and entertainment industries globally.",
      },

      {
        type: "grid",
        title: "Core Areas",
        items: [
          {
            title: "Music Production",
            desc: "Recording studios, sound engineering, and music development across multiple genres.",
          },
          {
            title: "Visual Arts",
            desc: "Support for painters, designers, sculptors, and digital artists to create and exhibit work.",
          },
          {
            title: "Performing Arts",
            desc: "Theatre, dance, and live performance development programs and events.",
          },
          {
            title: "Creative Development",
            desc: "Training and mentorship programs for emerging artists and creatives.",
          },
        ],
      },

      {
        type: "stats",
        items: [
          { value: "50+", label: "Artists Supported" },
          { value: "10+", label: "Creative Studios" },
          { value: "100+", label: "Performances & Projects" },
        ],
      },

      {
        type: "cta",
        title: "Create with us",
        desc: "Partner with us to develop and promote world-class creative talent and artistic expression.",
        button: "Contact Us",
      },
    ],

    subPages: [
      {
        slug: "music",
        title: "Music Production",
        content:
          "Explore our recording studios and music development programs.",
      },
      {
        slug: "visual-arts",
        title: "Visual Arts",
        content: "Discover painting, design, and digital art initiatives.",
      },
      {
        slug: "performing-arts",
        title: "Performing Arts",
        content: "Learn about theatre, dance, and live performance programs.",
      },
      {
        slug: "creatives",
        title: "Creative Development",
        content: "See how we train and support emerging artists.",
      },
    ],
  },
  marketing: {
  title: "Marketing, Trade & Distribution",
  heroImage: "/images/market.jpg",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "Our marketing and trade division drives the commercial growth of products and services developed across all our sectors. From agricultural goods and manufactured products to energy services and digital solutions, we manage branding, distribution, retail channels, exports, and market expansion strategies that connect production to consumers.",
    },

    {
      type: "grid",
      title: "Core Areas",
      items: [
        {
          title: "Product Marketing",
          desc: "Branding, advertising, and demand generation for products across all business divisions.",
          image: "/images/product.jpg",
        },
        {
          title: "Sales & Distribution",
          desc: "Wholesale, retail, dealership, and distribution channels connecting products to markets.",
          image: "/images/sales.jpg",
        },
        {
          title: "Trade & Exports",
          desc: "Regional and international trade operations for agricultural, industrial, and consumer products.",
          image: "/images/export.jpg",
        },
        {
          title: "Retail Networks",
          desc: "Shops, commercial outlets, and market systems for direct product sales.",
          image: "/images/retail.jpg",
        },
        {
          title: "Market Intelligence",
          desc: "Research, pricing analysis, and demand forecasting to support business growth.",
          image: "/images/research.jpg",
        },
        {
          title: "Corporate Marketing Services",
          desc: "Marketing support and promotion for all subsidiaries and strategic ventures.",
          image: "/images/corporate.jpg",
        },
      ],
    },

    {
      type: "stats",
      items: [
        { value: "100+", label: "Products Marketed" },
        { value: "25+", label: "Distribution Channels" },
        { value: "10+", label: "Regional Markets" },
      ],
    },

    {
      type: "cta",
      title: "Grow markets with us",
      desc: "Partner with us to expand products, reach consumers, and build strong commercial networks.",
      button: "Contact Us",
    },
  ],

  subPages: [
    {
      slug: "product-marketing",
      title: "Product Marketing",
      content:
        "Explore how we promote products from agriculture, manufacturing, energy, and technology.",
    },
    {
      slug: "distribution",
      title: "Sales & Distribution",
      content:
        "Learn about our supply and distribution channels connecting products to markets.",
    },
    {
      slug: "trade",
      title: "Trade & Exports",
      content:
        "Discover our regional and international trade operations.",
    },
    {
      slug: "retail",
      title: "Retail Networks",
      content:
        "See our stores, market outlets, and commercial sales platforms.",
    },
  ],
},
  
};

export default businessData;
