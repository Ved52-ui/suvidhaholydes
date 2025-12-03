// src/data/justdialPackages.js
// Package list for Suvidha Turism — titles/excerpts/prices taken from Justdial listing.
// NOTE: Justdial list page does not include day-by-day itineraries; "itinerary" entries
// below are reasonable default/suggested day-wise plans created to show a rich UI. Replace them with official itineraries if available.

export const justdialPackages = [
  {
    id: "manali",
    title: "Packages For Manali",
    price: "₹7,200 onwards",
    excerpt:
      "Experience the majesty of Manali — snow-capped vistas, river valleys and adventure activities.",
    image: "https://t4.ftcdn.net/jpg/02/57/91/21/360_F_257912197_ySuBhefKYPQIZNa3xeGiObLpgYBnH9U5.jpg",
    days: "4 Days / 3 Nights",
    
    includes: "AC coach/volvo, 3-star hotels, breakfast, sightseeing",
    places: [
      "Hadimba Temple",
      "Solang Valley",
      "Rohtang Pass (optional)",
      "Mall Road",
      "Old Manali & cafes"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival at Manali",
        details:
          "Travel to Manali (overnight coach or morning flight + transfer). Check-in to hotel, local evening walk on Mall Road and light dinner."
      },
      {
        day: "Day 2",
        title: "Local sightseeing",
        details:
          "Visit Hadimba Temple, Vashisht hot springs, Old Manali cafes; optional river-rafting or local shopping."
      },
      {
        day: "Day 3",
        title: "Solang Valley / Rohtang (optional)",
        details:
          "Day trip to Solang Valley for adventure sports (paragliding/ropeway). If Rohtang Pass is open and you have permit, drive to Rohtang (extra cost)."
      },
      {
        day: "Day 4",
        title: "Departure",
        details:
          "Check-out and return journey to your origin city with memories."
      }
    ]
  },

  {
    id: "goa",
    title: "Packages For Goa",
    price: "₹7,200 onwards",
    excerpt:
      "Goa: beaches, nightlife, water-sports and heritage forts. Packages designed for coastal fun and relaxation.",
    image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    days: "3 Days / 2 Nights",
    
    includes: "Hotel stay, transfers, breakfast, North/ South Goa sightseeing",
    places: ["Baga Beach", "Calangute", "Dudhsagar (optional)", "Fort Aguada", "Old Goa churches"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Beach Time",
        details:
          "Arrive Goa, check-in to beach hotel. Relax at Baga/Calangute in the evening, try local seafood."
      },
      {
        day: "Day 2",
        title: "North Goa Sightseeing",
        details:
          "Visit Fort Aguada, Anjuna flea market (if on Wednesday), and enjoy water sports or a cruise."
      },
      {
        day: "Day 3",
        title: "South Goa or Departure",
        details:
          "Option: South Goa beaches and Old Goa churches, then transfer to station/airport for departure."
      }
    ]
  },

  {
    id: "kerala",
    title: "Packages For Kerala",
    price: "₹14,400 onwards",
    excerpt:
      "Kerala: backwaters, hill stations, houseboat cruises, Ayurveda and beaches — a relaxing cultural escape.",
    image: "https://static.toiimg.com/thumb/115812747/Munnar-tea-gardens.jpg?width=636&height=358&resize=4",
    days: "5 Days / 4 Nights",
    
    includes: "Hotel stay, houseboat, transfers, breakfast",
    places: ["Alleppey backwaters", "Munnar tea estates", "Kochi Fort", "Kovalam beach"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival — Kochi",
        details:
          "Arrive Kochi, check-in, evening at Fort Kochi — St. Francis Church, Chinese fishing nets."
      },
      {
        day: "Day 2",
        title: "Munnar",
        details:
          "Drive to Munnar, visit tea plantations, Mattupetty Dam and viewpoints."
      },
      {
        day: "Day 3",
        title: "Munnar to Alleppey — Houseboat",
        details:
          "Drive to Alleppey and board a houseboat for backwater cruise with meals and overnight stay."
      },
      {
        day: "Day 4",
        title: "Alleppey / Kovalam",
        details:
          "Disembark and proceed to Kovalam / beach stay and relaxation."
      },
      {
        day: "Day 5",
        title: "Departure",
        details:
          "Check-out and transfer to airport for return journey."
      }
    ]
  },

  {
    id: "darjeeling",
    title: "Packages For Darjeeling",
    price: "₹8,100 onwards",
    excerpt:
      "Darjeeling: tea gardens, Himalayan views and monasteries. Customizable sightseeing tours and packages.",
    image: "https://media.istockphoto.com/id/670688480/photo/green-tea-plantations-munnar-kerala-india.jpg?s=612x612&w=0&k=20&c=b09pbKjviHDfBg4sviMO5Pjwq_KhcpgsMHquKrLQBdU=",
    days: "3 Days / 2 Nights",
    includes: "Hotel, breakfast, local sightseeing",
    places: ["Tiger Hill (sunrise)", "Batasia Loop", "Tea Gardens", "Ghoom Monastery"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival — Darjeeling",
        details:
          "Arrive Siliguri/Gangtok transfer to Darjeeling, relax and explore Mall Road in the evening."
      },
      {
        day: "Day 2",
        title: "Sunrise & Sightseeing",
        details:
          "Early morning trip to Tiger Hill for sunrise (Kanchenjunga view), then Batasia Loop and tea gardens."
      },
      {
        day: "Day 3",
        title: "Departure",
        details:
          "Relaxed morning and check-out for onward journey."
      }
    ]
  },

  {
    id: "ladakh",
    title: "Packages For Ladakh",
    price: "₹22,500 onwards",
    excerpt:
      "Ladakh: surreal landscapes, Pangong Lake, Leh sightseeing and high-altitude adventures.",
    image: "https://w0.peakpx.com/wallpaper/656/103/HD-wallpaper-bike-himalayan-bike-trip-chitkul-himachal-pradesh-himalayan-kaza-mountains-india-royal-enfield-spiti-valley.jpg",
    days: "6 Days / 5 Nights",
    includes: "Leh hotel, sightseeing, permits guidance",
    places: ["Leh Bazaar", "Pangong Lake", "Nubra Valley", "Magnetic Hill"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive Leh — Acclimatize",
        details:
          "Fly to Leh, rest to acclimatize. Short local walk (Leh market) in the evening."
      },
      {
        day: "Day 2",
        title: "Leh Local Sightseeing",
        details:
          "Visit Shanti Stupa, Leh Palace, and local monasteries."
      },
      {
        day: "Day 3",
        title: "Pangong Lake",
        details:
          "Drive to Pangong Tso (approx. 5-6 hrs), enjoy sunset by the lake and overnight at camp/homestay."
      },
      {
        day: "Day 4",
        title: "Nubra Valley",
        details:
          "Drive via Khardung La to Nubra Valley — sand dunes and Bactrian camel ride."
      },
      {
        day: "Day 5",
        title: "Return to Leh",
        details:
          "Relaxed drive back to Leh, evening at leisure."
      },
      {
        day: "Day 6",
        title: "Departure",
        details:
          "Fly back to origin city after check-out."
      }
    ]
  },

  {
    id: "himachal",
    title: "Packages For Himachal Pradesh",
    price: "₹10,800 onwards",
    excerpt:
      "Himachal: Shimla, Manali, Dharamshala and more — adventure sports, trekking and scenic touring.",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    days: "5 Days / 4 Nights",
    includes: "Hotel, transfers, sightseeing",
    places: ["Shimla", "Manali", "Dharamshala", "Kullu"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival to Shimla",
        details:
          "Arrive Shimla: Mall Road and evening at Ridge."
      },
      {
        day: "Day 2",
        title: "Shimla to Manali",
        details:
          "Drive to Manali, overnight in Manali."
      },
      {
        day: "Day 3",
        title: "Manali Sightseeing",
        details:
          "Hadimba Temple, Vashisht Baths, Old Manali."
      },
      {
        day: "Day 4",
        title: "Solang/Local activities",
        details:
          "Solang Valley adventure sports or local sightseeing."
      },
      {
        day: "Day 5",
        title: "Departure",
        details:
          "Return journey."
      }
    ]
  },

  {
    id: "munnar",
    title: "Packages For Munnar",
    price: "₹6,300 onwards",
    excerpt:
      "Munnar: tea plantations, waterfalls and mountain retreats — ideal for nature lovers.",
    image: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww",
    days: "3 Days / 2 Nights",
    includes: "Hotel, sightseeing, breakfast",
    places: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival — Munnar",
        details:
          "Arrive and check-in, local viewpoints in the evening."
      },
      {
        day: "Day 2",
        title: "Sightseeing",
        details:
          "Eravikulam Park, Mattupetty Dam, Echo Point."
      },
      {
        day: "Day 3",
        title: "Departure",
        details:
          "Drive back to Cochin / onward travel."
      }
    ]
  },

  {
    id: "uttarakhand",
    title: "Packages For Uttarakhand",
    price: "₹9,000 onwards",
    excerpt:
      "Uttarakhand: pilgrimage and trekking — Haridwar, Rishikesh, Nainital and the Garhwal Himalayas.",
    image: "https://t4.ftcdn.net/jpg/05/81/89/79/360_F_581897975_DLw9vTi0W52gbODjNdkPOap322Tnqs3M.jpg",
    days: "4 Days / 3 Nights",
    includes: "Hotel, transfers, puja arrangements (where applicable)",
    places: ["Haridwar", "Rishikesh", "Nainital", "Mussoorie (optional)"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive Haridwar",
        details:
          "Ganga Aarti at Har Ki Pauri (evening), overnight in Haridwar/Rishikesh."
      },
      {
        day: "Day 2",
        title: "Rishikesh sightseeing",
        details:
          "Laxman Jhula, Beatles Ashram, optional river-rafting and yoga."
      },
      {
        day: "Day 3",
        title: "Hill-station visit",
        details:
          "Drive to Nainital/Mussoorie for scenic views (package dependent)."
      },
      {
        day: "Day 4",
        title: "Departure",
        details:
          "Return to origin city."
      }
    ]
  },

  {
    id: "jaipur",
    title: "Packages For Jaipur",
    price: "₹7,200 onwards",
    excerpt:
      "Jaipur: forts, bazaars and culture — the Pink City’s royal heritage and sightseeing tours.",
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/01/27143910/Jaipur-itinerary-Amber-Fort-FI-1600x900.jpg",
    days: "3 Days / 2 Nights",
    includes: "Hotel, local sightseeing, guide",
    places: ["Amber Fort", "Hawa Mahal", "City Palace", "Local bazaars"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Local stroll",
        details:
          "Check-in and evening at local markets (Johari Bazaar)."
      },
      {
        day: "Day 2",
        title: "Full day sightseeing",
        details:
          "Amber Fort, City Palace, Jantar Mantar and Hawa Mahal."
      },
      {
        day: "Day 3",
        title: "Departure",
        details:
          "Return journey after breakfast."
      }
    ]
  },

  {
    id: "ooty",
    title: "Packages For Ooty",
    price: "₹6,300 onwards",
    excerpt:
      "Ooty: cool climes, tea gardens and rolling hills — a comforting hill-station getaway.",
    image: "https://blog.mangohillhotels.com/wp-content/uploads/2023/10/OOTY-1557144864.jpg",
    days: "3 Days / 2 Nights",
    
    includes: "Hotel, sightseeing, breakfast",
    places: ["Ooty Lake", "Doddabetta Peak", "Tea gardens", "Botanical Gardens"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival — Ooty",
        details:
          "Check-in and evening boat ride at Ooty Lake."
      },
      {
        day: "Day 2",
        title: "Local sightseeing",
        details:
          "Botanical Garden, Doddabetta Peak and tea-estate visit."
      },
      {
        day: "Day 3",
        title: "Departure",
        details:
          "Return to origin city."
      }
    ]
  },

  {
    id: "kedarnath",
    title: "Packages For Kedarnath",
    price: "₹13,500 onwards",
    excerpt:
      "Kedarnath pilgrimage packages — spiritual yatra with tailored pilgrimage logistics.",
    image: "https://media.istockphoto.com/id/530814852/photo/kedarnath-in-india.jpg?s=612x612&w=0&k=20&c=WlUdHmPcLSDLfFgvV8YaymG43SwUkleagJlEUse9TLU=",
    days: "3 Days / 2 Nights",
    
    includes: "Puja assistance, basic stay, porter options (extra)",
    places: ["Kedarnath Temple", "Gaurikund", "Sonprayag"],
    itinerary: [
      {
        day: "Day 1",
        title: "Gaurikund — Trek start",
        details:
          "Drive to Gaurikund and begin the trek to Kedarnath (or helicopter if selected)."
      },
      {
        day: "Day 2",
        title: "Kedarnath Darshan",
        details:
          "Early morning darshan at Kedarnath, rituals and blessings, evening rest."
      },
      {
        day: "Day 3",
        title: "Return",
        details:
          "Return trek to Gaurikund and onward transfer to base city."
      }
    ]
  },

  {
    id: "udaipur",
    title: "Packages For Udaipur",
    price: "₹7,200 onwards",
    excerpt:
      "Udaipur: the City of Lakes — palaces, lakes and romantic sightseeing tours.",
    image: "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/221.jpg",
    days: "3 Days / 2 Nights",
    
    includes: "Hotel, boat rides, sightseeing",
    places: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Lake Pichola",
        details:
          "Evening boat ride on Lake Pichola and sunset views."
      },
      {
        day: "Day 2",
        title: "Palaces & City tour",
        details:
          "City Palace, Jagdish Temple and local bazaars."
      },
      {
        day: "Day 3",
        title: "Departure",
        details:
          "Check-out and transfer to origin."
      }
    ]
  },

  {
    id: "coorg",
    title: "Packages For Coorg",
    price: "₹6,300 onwards",
    excerpt:
      "Coorg: coffee plantations and waterfalls — ideal for nature & adventure lovers.",
    image: "https://www.easeindiatrip.com/blog/wp-content/uploads/2025/02/Karnataka-Coorg-04.jpg",
    days: "3 Days / 2 Nights",
    
    includes: "Hotel, plantation visit, breakfast",
    places: ["Coffee Plantations", "Abbey Falls", "Raja's Seat", "Talakaveri"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival — Coorg",
        details:
          "Check-in and visit Raja's Seat for sunset."
      },
      {
        day: "Day 2",
        title: "Coffee plantation & waterfalls",
        details:
          "Visit local plantations, Abbey Falls and local markets."
      },
      {
        day: "Day 3",
        title: "Departure",
        details:
          "Return to origin city."
      }
    ]
  },

  {
    id: "mysore",
    title: "Packages For Mysore",
    price: "₹5,400 onwards",
    excerpt:
      "Mysore: palaces, gardens and heritage — curated sightseeing packages.",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/2e/f7.jpg",
    days: "2 Days / 1 Night",
    
    includes: "Hotel, Mysore Palace entry, local transport",
    places: ["Mysore Palace", "Chamundi Hill", "Brindavan Gardens"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Palace Visit",
        details:
          "Visit Mysore Palace and local shopping."
      },
      {
        day: "Day 2",
        title: "Chamundi & Brindavan",
        details:
          "Chamundi Hill and evening at Brindavan Gardens (musical fountain)."
      }
    ]
  },

  {
    id: "lakshadweep",
    title: "Packages For Lakshadweep",
    price: "₹22,500 onwards",
    excerpt:
      "Lakshadweep: island hopping, pristine coral beaches and water activities.",
    image: "https://www.gokitetours.com/wp-content/uploads/2024/09/LAKSHADWEEP--1200x675.webp",
    days: "4 Days / 3 Nights",
    
    includes: "Island transfers, stays, snorkeling (where available)",
    places: ["Bangaram", "Agatti", "Kadmat", "Coral reefs"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive & Beach time",
        details:
          "Arrive and relax on the beach, short island exploration."
      },
      {
        day: "Day 2",
        title: "Island hopping / Snorkeling",
        details:
          "Water activities, snorkeling and boat rides (subject to permits)."
      },
      {
        day: "Day 3",
        title: "Local exploration",
        details:
          "Local island sightseeing, relaxation and beach time."
      },
      {
        day: "Day 4",
        title: "Return",
        details:
          "Check-out and return via Kochi."
      }
    ]
  },

  
  {
    id: "Andaman",
    title: "Packages For Andaman",
    price: "₹22,500 onwards",
    excerpt:
      "Andaman: island hopping, pristine coral beaches and water activities.Explore the pristine beauty of the Andaman Islands, a tropical paradise known for its white-sand beaches, turquoise waters, and vibrant coral reefs. Ideal for beach lovers, adventure seekers ",
    image: "https://www.indiantempletour.com/wp-content/uploads/2022/08/Andaman-and-Nicobar-Islands-Package-1.jpg",
    days: "4 Days / 3 Nights",
    
    includes: "Island transfers, stays, snorkeling (where available)",
    places: ["Bangaram", "Agatti", "Kadmat", "Coral reefs"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive & Beach time",
        details:
          "Arrive and relax on the beach, short island exploration."
      },
      {
        day: "Day 2",
        title: "Port Blair",
        details:
          "Water activities, snorkeling and boat rides (subject to permits)."
      },
      {
        day: "Day 3",
        title: "Havelock Island (Swaraj Dweep)",
        details:
          "Local island sightseeing, relaxation and beach time."
      },
      {
        day: "Day 4",
        title: "Neil Island (Shaheed Dweep)",
        details:
          "Check-out and return via Kochi."
      }
    ]
  },

  
  {
    id: "Shimla ",
    title: "Packages For Shimla",
    price: "5400 onwards",
    excerpt:
      "Shimla : Hill Station In Himachal.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3f/89/e2/church-at-ridge.jpg?w=900&h=-1&s=1",
    days: "4 Days / 3 Nights",
    
    includes: "Island transfers, stays, snorkeling (where available)",
    places: ["Bangaram", "Agatti", "Kadmat", "Coral reefs"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive & Beach time",
        details:
          "Arrive and relax on the beach, short island exploration."
      },
      {
        day: "Day 2",
        title: "Island hopping / Snorkeling",
        details:
          "Water activities, snorkeling and boat rides (subject to permits)."
      },
      {
        day: "Day 3",
        title: "Local exploration",
        details:
          "Local island sightseeing, relaxation and beach time."
      },
      {
        day: "Day 4",
        title: "Return",
        details:
          "Check-out and return via Kochi."
      }
    ]
  },

  
  {
    id: "Kashmir",
    title: "Packages For Kashmir",
    price: "₹13,500 onwards",
    excerpt:
      "Kashmir: Beactiful valley, pristine lakes and mountain scenery.",
    image: "https://static.toiimg.com/thumb/msid-92821055,width-748,height-499,resizemode=4,imgsize-214606/.jpg",
    days: "4 Days / 3 Nights",
    
    includes: "Island transfers, stays, snorkeling (where available)",
    places: ["Bangaram", "Agatti", "Kadmat", "Coral reefs"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive & Beach time",
        details:
          "Arrive and relax on the beach, short island exploration."
      },
      {
        day: "Day 2",
        title: "Island hopping / Snorkeling",
        details:
          "Water activities, snorkeling and boat rides (subject to permits)."
      },
      {
        day: "Day 3",
        title: "Local exploration",
        details:
          "Local island sightseeing, relaxation and beach time."
      },
      {
        day: "Day 4",
        title: "Return",
        details:
          "Check-out and return via Kochi."
      }
    ]
  },

  
  {
    id: "Rajasthan",
    title: "Packages For Rajastham",
    price: "₹16,200 onwards",
    excerpt:
      "Rajasthan: Royal palaces, desert forts and vibrant culture.",
    image: "https://static.toiimg.com/thumb/msid-115886096,width-748,height-499,resizemode=4,imgsize-79566/.jpg",
    days: "4 Days / 3 Nights",
    
    includes: "Island transfers, stays, snorkeling (where available)",
    places: ["Bangaram", "Agatti", "Kadmat", "Coral reefs"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive & Beach time",
        details:
          "Arrive and relax on the beach, short island exploration."
      },
      {
        day: "Day 2",
        title: "Island hopping / Snorkeling",
        details:
          "Water activities, snorkeling and boat rides (subject to permits)."
      },
      {
        day: "Day 3",
        title: "Local exploration",
        details:
          "Local island sightseeing, relaxation and beach time."
      },
      {
        day: "Day 4",
        title: "Return",
        details:
          "Check-out and return via Kochi."
      }
    ]
  },

  
  {
    id: "Tirupati",
    title: "Packages For Tirupati",
    price: "₹5400 onwards",
    excerpt:
      "Tirupati: Spiritual journey to the sacred Tirumala Venkateswara Temple.",
    image: "https://c9admin.cottage9.com/uploads/2292/Our-Temples-Our-Heritage-Tirumala-Venkateshwara-Temple-Tirupati-Balaji.jpg",
    days: "4 Days / 3 Nights",
    
    includes: "Island transfers, stays, snorkeling (where available)",
    places: ["Bangaram", "Agatti", "Kadmat", "Coral reefs"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive & Beach time",
        details:
          "Arrive and relax on the beach, short island exploration."
      },
      {
        day: "Day 2",
        title: "Island hopping / Snorkeling",
        details:
          "Water activities, snorkeling and boat rides (subject to permits)."
      },
      {
        day: "Day 3",
        title: "Local exploration",
        details:
          "Local island sightseeing, relaxation and beach time."
      },
      {
        day: "Day 4",
        title: "Return",
        details:
          "Check-out and return via Kochi."
      }
    ]
  }




];
