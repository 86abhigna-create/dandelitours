// src/App.tsx
import { useState as useState9, useEffect } from "react";

// src/mockData.ts
var INITIAL_STAYS = [
  {
    id: "stay-1",
    title: "Hornbill River Resort & Treehouses",
    subtitle: "River View Deluxe Cottage with Balcony",
    category: "Luxury Resorts",
    image: "https://res-console.cloudinary.com/jn4npnn4/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/QndpbmRpX1RyZWV0b3BzX19fVGhlX0J3aW5kaV9JbXBlbmV0cmFibGVfRm9yZXN0X2lzX3Jlbm93bmVkX2Zvcl9pdHNfcG9wdWxhdGlvbl9vZl9tb3VudGFpbl9nb3JpbGxhc19ob3N0aW5nX25lYXJseV9oYWxmX29mX3RoZV93b3JsZF9zX3RvdGFsX2FzX3dlbGxfYXNfb3Zlcl80MDBfcGxhbnRfc3BlY2llc18zNTBfYmlyZF9zcGVjaWVzX2FuZF9udW1lcm91c19t/template_primary",
    gallery: [
      "https://res-console.cloudinary.com/jn4npnn4/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/QndpbmRpX1RyZWV0b3BzX19fVGhlX0J3aW5kaV9JbXBlbmV0cmFibGVfRm9yZXN0X2lzX3Jlbm93bmVkX2Zvcl9pdHNfcG9wdWxhdGlvbl9vZl9tb3VudGFpbl9nb3JpbGxhc19ob3N0aW5nX25lYXJseV9oYWxmX29mX3RoZV93b3JsZF9zX3RvdGFsX2FzX3dlbGxfYXNfb3Zlcl80MDBfcGxhbnRfc3BlY2llc18zNTBfYmlyZF9zcGVjaWVzX2FuZF9udW1lcm91c19t/template_primary",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    reviewCount: 342,
    badges: ["Riverfront", "Featured"],
    features: ["1 King Bed", "Max 3 Guests", "380 sq.ft"],
    amenities: ["Free Breakfast", "Infinity Pool", "Bonfire Night", "Nature Walk", "Kayaking Access", "Free Wi-Fi"],
    scarcityText: "Only 2 rooms left for your dates!",
    policyText: "Free cancellation up to 48 hrs before check-in",
    originalPrice: 5500,
    price: 4200,
    priceUnit: "/ night",
    taxesText: "+ \u20B9504 Taxes & fees",
    description: "Perched on the banks of the majestic Kali River, Hornbill River Resort offers luxurious treehouses and wooden cottages immersed in the dense Western Ghats canopy. Enjoy morning mist views, guided bird watching, and world-class hospitality.",
    location: "Ganeshgudi, Kali River Bank, Dandeli",
    roomsLeft: 2
  },
  {
    id: "stay-2",
    title: "Dandeli Jungle Nest Wildlife Camp",
    subtitle: "Safari Glamping Tent with Attached Bath",
    category: "Riverside Camps",
    image: "https://res-console.cloudinary.com/jn4npnn4/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/R29sZGVuX01lYWRvd19OYXR1cmVfQ2FtcGluZw==/template_primary",
    gallery: [
      "https://res-console.cloudinary.com/jn4npnn4/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/R29sZGVuX01lYWRvd19OYXR1cmVfQ2FtcGluZw==/template_primary",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    reviewCount: 219,
    badges: ["Eco Lodge"],
    features: ["Queen Bed", "Private Deck", "Forest Perimeter"],
    amenities: ["All Meals Included (Veg/Non-Veg)", "Bird Watching Walk", "Campfire Included", "Safari Guide"],
    scarcityText: "High demand for weekend safari tours",
    policyText: "Free cancellation up to 24 hours prior",
    price: 2600,
    priceUnit: "/ person / night",
    taxesText: "Includes all 3 meals & trek",
    description: "Experience authentic wildlife camping at the edge of the Dandeli Wildlife Sanctuary. Spacious weather-proof glamping tents equipped with comfortable bedding, attached modern washrooms, and private wooden verandas.",
    location: "Anshi Reserve Buffer Zone, Dandeli",
    roomsLeft: 5
  },
  {
    id: "stay-3",
    title: "Kali Wilderness Riverside Retreat",
    subtitle: "Riverfront Wooden Chalet",
    category: "Riverside Camps",
    image: "https://res-console.cloudinary.com/jn4npnn4/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/UmVnZW5lcmF0aXZlX1JldHJlYXRfVmlzaW9u/template_primary",
    gallery: [
      "https://res-console.cloudinary.com/jn4npnn4/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/UmVnZW5lcmF0aXZlX1JldHJlYXRfVmlzaW9u/template_primary",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    reviewCount: 180,
    badges: ["River Activity Access"],
    features: ["Teak Wood Balcony", "River View", "Attached Bath"],
    amenities: ["Direct Kali River Access", "Complimentary Coracle Ride", "Free Breakfast", "Bonfire"],
    policyText: "Flexible cancellation policy",
    price: 3500,
    priceUnit: "/ night",
    taxesText: "+ Taxes \u2022 Free Breakfast",
    description: "A secluded wooden chalet retreat designed for nature lovers and adventure seekers alike. Wake up to the soothing sound of rapids and enjoy direct access to river kayaking and coracle rides right from your doorstep.",
    location: "Kali River Rapids Zone, Dandeli",
    roomsLeft: 3
  },
  {
    id: "stay-5",
    title: "Syntheri Rock Jungle Cottages",
    subtitle: "Granite Valley View Cottage",
    category: "Jungle Cottages",
    image: "https://res-console.cloudinary.com/jn4npnn4/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/ZG93bmxvYWRfNQ==/template_primary",
    gallery: [
      "https://res-console.cloudinary.com/jn4npnn4/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/ZG93bmxvYWRfNQ==/template_primary"
    ],
    rating: 4.6,
    reviewCount: 112,
    badges: ["Scenic View"],
    features: ["King Bed \u2022 Valley View", "Private Balcony"],
    amenities: ["Guided Trek to Syntheri Rocks", "Campfire", "Parking", "Restaurant"],
    price: 3200,
    priceUnit: "/ night",
    taxesText: "+ Taxes",
    description: "Located close to the magnificent 300ft monolithic granite monolith of Syntheri Rocks. Perfect base for trekking enthusiasts and nature photographers.",
    location: "Near Syntheri Rocks, Dandeli",
    roomsLeft: 4
  }
];
var INITIAL_ACTIVITIES = [
  {
    id: "act-1",
    title: "Kali River White-Water Rafting (Grade III)",
    category: "Water Sports",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewCount: 1420,
    duration: "3.5 Hours",
    difficulty: "Intense",
    price: 1350,
    description: "Conquer the thrilling rapids of the Kali River with certified international rafting instructors. Includes 12km of turbulent white-water rapids, safety briefing, gear, and GoPro action photos.",
    highlights: ["12km Rapids Run", "Certified Instructors", "All Safety Gear Included", "Complimentary Action Photos"]
  },
  {
    id: "act-2",
    title: "Dandeli Wildlife Jeep Safari & Night Trail",
    category: "Wildlife Safari",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewCount: 890,
    duration: "4 Hours",
    difficulty: "Moderate",
    price: 950,
    description: "Explore the dense deciduous forests of Anshi-Dandeli Tiger Reserve in an open-top 4x4 Jeep with expert naturalists. Spot Black Panthers, Hornbills, Indian Bisons, and spotted deer.",
    highlights: ["Open 4x4 Safari Vehicle", "Government Certified Naturalist", "Binoculars Provided", "Morning & Evening Slots"]
  },
  {
    id: "act-3",
    title: "Traditional Coracle Boat Ride & Natural Jacuzzi",
    category: "Water Sports",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviewCount: 650,
    duration: "2 Hours",
    difficulty: "Easy",
    price: 600,
    description: "Float gently in circular wicker coracle boats along calm stretches of the Kali River, followed by an exhilarating natural water jacuzzi bath in the river rapids.",
    highlights: ["Traditional Basket Boat Ride", "Natural River Jacuzzi", "Life Jackets Mandatory", "Great for Families"]
  },
  {
    id: "act-4",
    title: "Kavala Caves Spelunking & Trek",
    category: "Trekking",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewCount: 310,
    duration: "5 Hours",
    difficulty: "Moderate",
    price: 800,
    description: "Trek through 4km of dense bamboo forest leading up to ancient limestone volcanic caves. Climb down 375 metal steps into the dark subterranean sanctum housing a natural Shiva lingam.",
    highlights: ["Ancient Volcanic Caves", "Guided Jungle Trek", "Torch Lights Provided", "Panoramic Valley Views"]
  },
  {
    id: "act-5",
    title: "Zipline Across Kali River Gorge",
    category: "Water Sports",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewCount: 520,
    duration: "45 Mins",
    difficulty: "Moderate",
    price: 750,
    description: "Soar high above the emerald waters of Kali River on a thrilling 500-meter zipline cable run with breathtaking panoramic views of the Western Ghats.",
    highlights: ["500-meter Aerial Glide", "International Safety Harness", "Professional Instructors"]
  }
];
var INITIAL_PACKAGES = [
  {
    id: "pkg-student",
    title: "\u{1F393} Dandeli Student Explorer Camp (1N/2D)",
    duration: "1 Night / 2 Days",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewCount: 310,
    inclusions: [
      "1 Night Jungle Glamping Tent Stay",
      "3 Nutritious Meals (Veg & Non-Veg Buffet)",
      "Kali River Rafting & Safety Gear",
      "Campfire with Music & Team Games",
      "Guided Nature & Bird Watching Walk",
      "Student Group Discount & ID Verification"
    ],
    originalPrice: 4500,
    price: 2999,
    description: "Specially designed budget-friendly adventure package for college and school student groups looking for thrilling whitewater rafting and wilderness camping."
  },
  {
    id: "pkg-group",
    title: "\u{1F465} Group Squad Adrenaline Thrill Pass (2N/3D)",
    duration: "2 Nights / 3 Days",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewCount: 245,
    inclusions: [
      "2 Nights Riverside Wooden Chalets",
      "All 6 Meals & Evening Barbecue",
      "Grade III White-Water Rafting Expedition",
      "Anshi-Dandeli Jeep Safari for the Squad",
      "Zipline Across River Gorge",
      "Coracle Ride & Natural Jacuzzi"
    ],
    originalPrice: 11999,
    price: 8999,
    description: "The ultimate group adventure package for friends and corporate teams seeking team bonding, high-adrenaline water sports, and campfires."
  },
  {
    id: "pkg-family",
    title: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} Family Heritage & Wilderness Holiday (3N/4D)",
    duration: "3 Nights / 4 Days",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewCount: 198,
    inclusions: [
      "3 Nights Family Cottage Accommodation",
      "All Meals featuring Authentic Malnad Cuisine",
      "Safe Family Coracle Boat Ride",
      "Guided Coffee Plantation & Spice Tour",
      "Kavala Caves Family Trek",
      "Complimentary Kids Activities & Board Games"
    ],
    originalPrice: 15500,
    price: 11499,
    description: "A wholesome, relaxing multi-day holiday tailored for families with children and seniors, combining comfortable eco-stays with cultural and nature experiences."
  },
  {
    id: "pkg-couple",
    title: "\u2764\uFE0F Romantic Riverside Treehouse Getaway (2N/3D)",
    duration: "2 Nights / 3 Days",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewCount: 142,
    inclusions: [
      "2 Nights Luxury Treehouse Stay with Balcony",
      "Candlelight Riverside Dinner under the Stars",
      "Private Coracle Ride on Kali River",
      "Flower Bed Decoration & Welcome Mocktails",
      "All Meals & Breakfast in Bed Service"
    ],
    originalPrice: 14e3,
    price: 10999,
    description: "Designed exclusively for couples seeking tranquil luxury amidst the misty canopy of Dandeli with private dining and romantic touches."
  }
];
var INITIAL_BOOKINGS = [
  {
    id: "bk-101",
    bookingCode: "DT-849201",
    itemName: "Hornbill River Resort & Treehouses",
    itemType: "stay",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0S790XoEZUF80A5zVImTxzLdIGB2P4HMeNKiYqXYZayRx1Xd-YYEtqJ5cbZ2x0LlruIB3qwSPMK4oimZ66_qtgRNd9L3ukTV0WQZyArw1iEvrUOFcljDr8zWabiywYMK0lc3jLWryd14pE0GHq9L94QEcTj4DffpnP6GTYpFTKrmK9dpgLBLVLVliej99WSo767nurqBH0qp5_XBTvY8P27khBd2YYmkTkL9gsurxDLtKGTpysphe",
    dates: "18 Oct \u2013 20 Oct 2026",
    guests: "2 Guests \u2022 1 Room",
    totalPrice: 8904,
    status: "Confirmed",
    createdAt: "2026-09-01",
    location: "Ganeshgudi, Kali River Bank, Dandeli"
  },
  {
    id: "bk-102",
    bookingCode: "DT-736291",
    itemName: "Kali River White-Water Rafting (Grade III)",
    itemType: "activity",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1200&q=80",
    dates: "19 Oct 2026 (09:00 AM)",
    guests: "2 Persons",
    totalPrice: 2700,
    status: "Confirmed",
    createdAt: "2026-09-02",
    location: "Dandeli Rafting Start Point"
  }
];

// src/components/Header.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Header = ({
  onOpenMenu,
  onOpenSearch,
  onOpenAiConcierge,
  setActiveTab,
  bookingsCount,
  isDarkMode = false,
  onToggleTheme
}) => {
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-50 bg-[#f9f9ff]/85 backdrop-blur-xl pt-safe shadow-[0_4px_20px_-4px_rgba(27,67,50,0.06)]", children: /* @__PURE__ */ jsxs("div", { className: "h-16 px-4 flex items-center justify-between gap-2 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Navigation Menu",
          onClick: onOpenMenu,
          className: "w-11 h-11 flex items-center justify-center rounded-xl text-[#161c27] hover:bg-[#e8eeff] active:scale-95 transition-all",
          type: "button",
          children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-[24px]", children: "menu" })
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: "flex items-center gap-2 cursor-pointer",
          onClick: () => setActiveTab("explore"),
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-lg bg-[#1b4332] flex items-center justify-center text-white shadow-sm", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-[20px]", children: "kayaking" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("span", { className: "font-epilogue text-[16px] font-bold text-[#012d1d] leading-tight tracking-tight", children: "DandeliTours" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-[#006688]", children: [
                /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-[14px]", children: "location_on" }),
                /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-[#414844]", children: "Dandeli, Karnataka" })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      onToggleTheme && /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onToggleTheme,
          className: "px-2.5 sm:px-3 py-1.5 rounded-full bg-[rgba(27,67,50,0.08)] hover:bg-[rgba(27,67,50,0.15)] text-[#161c27] flex items-center gap-1.5 font-semibold text-[13px] active:scale-95 transition-all shadow-sm",
          title: isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
          "aria-label": "Toggle Light and Dark Mode",
          type: "button",
          children: [
            /* @__PURE__ */ jsx("span", { className: `material-symbols-outlined text-[18px] ${isDarkMode ? "text-amber-400" : "text-[#012d1d]"}`, children: isDarkMode ? "light_mode" : "dark_mode" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-[12px]", children: isDarkMode ? "Light" : "Dark" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onOpenAiConcierge,
          className: "px-3 py-1.5 rounded-full bg-[#1b4332]/10 hover:bg-[#1b4332]/20 text-[#1b4332] flex items-center gap-1.5 font-semibold text-[13px] active:scale-95 transition-all shadow-sm",
          title: "Ask AI Trip Guide",
          children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-[18px] text-[#1b4332]", children: "smart_toy" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "AI Guide" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveTab("my-bookings"),
            className: "w-11 h-11 flex items-center justify-center rounded-full p-0.5 hover:bg-[#e8eeff] transition-all",
            title: "My Bookings",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                alt: "Profile",
                className: "w-8 h-8 rounded-full object-cover shadow-[0_2px_6px_rgba(27,67,50,0.15)]",
                src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              }
            )
          }
        ),
        bookingsCount > 0 && /* @__PURE__ */ jsx("span", { className: "absolute top-1 right-1 w-4 h-4 rounded-full bg-[#e76f51] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white", children: bookingsCount })
      ] })
    ] })
  ] }) });
};

// src/components/SearchSummaryBar.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SearchSummaryBar = ({
  searchParams,
  onModify
}) => {
  return /* @__PURE__ */ jsx2("section", { className: "px-4 py-3 bg-[#f9f9ff]", children: /* @__PURE__ */ jsxs2("div", { className: "bg-[#f1f3ff] rounded-xl p-3 shadow-sm flex items-center justify-between gap-2 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-3 min-w-0", children: [
      /* @__PURE__ */ jsx2("div", { className: "w-9 h-9 rounded-lg bg-[#e3e8f9] flex items-center justify-center text-[#006688] shrink-0", children: /* @__PURE__ */ jsx2("span", { className: "material-symbols-outlined text-[20px]", children: "travel_explore" }) }),
      /* @__PURE__ */ jsxs2("div", { className: "flex flex-col min-w-0", children: [
        /* @__PURE__ */ jsx2("span", { className: "font-epilogue text-[16px] font-semibold text-[#161c27] truncate", children: searchParams.location }),
        /* @__PURE__ */ jsxs2("span", { className: "text-[13px] text-[#414844] truncate", children: [
          searchParams.checkIn,
          " \u2013 ",
          searchParams.checkOut,
          " \u2022 ",
          searchParams.guests,
          " Guests, ",
          searchParams.rooms,
          " Room"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx2(
      "button",
      {
        onClick: onModify,
        className: "px-3 py-1.5 bg-[#dde2f3] hover:bg-[#c1ecd4] active:scale-95 text-[#012d1d] font-semibold text-[13px] rounded-full transition-all shrink-0 shadow-xs",
        type: "button",
        children: "Modify"
      }
    )
  ] }) });
};

// src/components/CategoryChips.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var CategoryChips = ({
  selectedCategory,
  onSelectCategory,
  counts
}) => {
  const categories = [
    "All",
    "Luxury Resorts",
    "Riverside Camps",
    "Cozy Homestays",
    "Jungle Cottages",
    "Budget Hotels"
  ];
  return /* @__PURE__ */ jsx3("section", { className: "py-2 bg-[#f9f9ff]", children: /* @__PURE__ */ jsx3("div", { className: "flex items-center gap-2 overflow-x-auto px-4 scrollbar-none py-1 max-w-7xl mx-auto", children: categories.map((cat) => {
    const isSelected = selectedCategory === cat;
    const count = cat === "All" ? 48 : counts[cat] || 10;
    return /* @__PURE__ */ jsxs3(
      "button",
      {
        onClick: () => onSelectCategory(cat),
        className: `px-3.5 py-2 rounded-full font-semibold text-[13px] whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 transition-all shadow-sm ${isSelected ? "bg-[#012d1d] text-white shadow-md" : "bg-[#e8eeff] text-[#414844] hover:text-[#161c27]"}`,
        type: "button",
        children: [
          /* @__PURE__ */ jsx3("span", { children: cat }),
          /* @__PURE__ */ jsx3("span", { className: `px-1.5 py-0.2 rounded-full text-[11px] font-bold ${isSelected ? "bg-[#1b4332] text-[#c1ecd4]" : "text-[#006688]"}`, children: count })
        ]
      },
      cat
    );
  }) }) });
};

// src/components/FilterSortBar.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var FilterSortBar = ({
  sortBy,
  setSortBy,
  minRating,
  setMinRating,
  onOpenFilters,
  activeFilterCount
}) => {
  return /* @__PURE__ */ jsxs4("section", { className: "px-4 py-2 bg-[#f9f9ff] flex items-center justify-between gap-2 overflow-x-auto scrollbar-none max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 shrink-0", children: [
      /* @__PURE__ */ jsxs4(
        "button",
        {
          onClick: onOpenFilters,
          className: "px-3.5 py-2 rounded-lg bg-[#e3e8f9] text-[#161c27] flex items-center gap-1.5 font-semibold text-[13px] active:scale-95 transition-all shadow-xs",
          type: "button",
          children: [
            /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[16px]", children: "tune" }),
            /* @__PURE__ */ jsx4("span", { children: "Filters" }),
            activeFilterCount > 0 && /* @__PURE__ */ jsx4("span", { className: "w-4 h-4 rounded-full bg-[#006688] text-white text-[10px] flex items-center justify-center font-bold", children: activeFilterCount })
          ]
        }
      ),
      /* @__PURE__ */ jsx4("div", { className: "relative", children: /* @__PURE__ */ jsxs4(
        "select",
        {
          value: sortBy,
          onChange: (e) => setSortBy(e.target.value),
          className: "px-3 py-2 rounded-lg bg-[#f1f3ff] text-[#161c27] font-semibold text-[13px] border-0 outline-none cursor-pointer hover:bg-[#e3e8f9] transition-all",
          children: [
            /* @__PURE__ */ jsx4("option", { value: "popularity", children: "Sort: Popularity" }),
            /* @__PURE__ */ jsx4("option", { value: "price-low", children: "Price: Low to High" }),
            /* @__PURE__ */ jsx4("option", { value: "price-high", children: "Price: High to Low" }),
            /* @__PURE__ */ jsx4("option", { value: "rating", children: "Highest Rated" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 shrink-0", children: [
      /* @__PURE__ */ jsxs4(
        "button",
        {
          onClick: () => setSortBy("price-low"),
          className: "px-3 py-2 rounded-lg bg-[#f1f3ff] text-[#414844] hover:text-[#012d1d] font-semibold text-[13px] flex items-center gap-1 transition-all",
          children: [
            /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[15px]", children: "swap_vert" }),
            /* @__PURE__ */ jsx4("span", { children: "Price" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs4(
        "button",
        {
          onClick: () => setMinRating(minRating >= 4.8 ? 0 : 4.5),
          className: `px-3 py-2 rounded-lg font-semibold text-[13px] flex items-center gap-1 transition-all ${minRating > 0 ? "bg-[#c1ecd4] text-[#002114]" : "bg-[#f1f3ff] text-[#414844]"}`,
          children: [
            /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[15px] text-amber-500", style: { fontVariationSettings: "'FILL' 1" }, children: "star" }),
            /* @__PURE__ */ jsx4("span", { children: "4.5+" })
          ]
        }
      )
    ] })
  ] });
};

// src/components/StayCard.tsx
import { useState } from "react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var StayCard = ({ stay, onSelect, onBook }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  return /* @__PURE__ */ jsxs5(
    "article",
    {
      onClick: () => onSelect(stay),
      className: "bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(27,67,50,0.06)] hover:shadow-[0_12px_28px_-4px_rgba(27,67,50,0.1)] overflow-hidden flex flex-col transition-all cursor-pointer max-w-7xl mx-auto w-full border border-[rgba(27,67,50,0.06)]",
      children: [
        /* @__PURE__ */ jsxs5("div", { className: "relative w-full h-52 overflow-hidden bg-[#dde2f3]", children: [
          /* @__PURE__ */ jsx5(
            "img",
            {
              className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
              src: stay.image,
              alt: stay.title
            }
          ),
          /* @__PURE__ */ jsx5("div", { className: "absolute inset-0 bg-gradient-to-t from-[#012d1d]/70 via-transparent to-transparent" }),
          /* @__PURE__ */ jsx5("div", { className: "absolute top-3 left-3 flex items-center gap-2", children: stay.badges.map((badge, idx) => /* @__PURE__ */ jsxs5(
            "span",
            {
              className: `px-2.5 py-1 rounded-full backdrop-blur-md text-[12px] font-semibold flex items-center gap-1 shadow-sm ${badge === "Riverfront" ? "bg-white/90 text-[#012d1d]" : badge === "Featured" ? "bg-[#5dcafd]/90 text-[#001e2c]" : "bg-white/90 text-[#012d1d]"}`,
              children: [
                badge === "Riverfront" && /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-[14px] text-[#006688]", children: "water" }),
                badge
              ]
            },
            idx
          )) }),
          /* @__PURE__ */ jsx5(
            "button",
            {
              "aria-label": "Save to Wishlist",
              onClick: (e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              },
              className: "absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#414844] hover:text-[#ba1a1a] active:scale-90 transition-all shadow-sm",
              type: "button",
              children: /* @__PURE__ */ jsx5(
                "span",
                {
                  className: "material-symbols-outlined text-[20px]",
                  style: { fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" },
                  children: "favorite"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx5("div", { className: "absolute bottom-3 left-3 flex items-center gap-2", children: /* @__PURE__ */ jsxs5("div", { className: "px-2.5 py-1 rounded-full bg-[#1b4332]/90 backdrop-blur-md text-white text-[12px] font-semibold flex items-center gap-1 shadow-sm", children: [
            /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-[14px] text-amber-300", style: { fontVariationSettings: "'FILL' 1" }, children: "star" }),
            /* @__PURE__ */ jsx5("span", { children: stay.rating }),
            /* @__PURE__ */ jsxs5("span", { className: "text-[#c1ecd4] text-[11px]", children: [
              "(",
              stay.reviewCount,
              ")"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs5("div", { className: "absolute bottom-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full", children: [
            /* @__PURE__ */ jsx5("span", { className: "w-1.5 h-1.5 rounded-full bg-white" }),
            /* @__PURE__ */ jsx5("span", { className: "w-1.5 h-1.5 rounded-full bg-white/50" }),
            /* @__PURE__ */ jsx5("span", { className: "w-1.5 h-1.5 rounded-full bg-white/50" }),
            /* @__PURE__ */ jsx5("span", { className: "w-1.5 h-1.5 rounded-full bg-white/50" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "p-4 sm:p-5 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxs5("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx5("h2", { className: "font-epilogue text-[20px] font-bold text-[#161c27] leading-snug", children: stay.title }),
            /* @__PURE__ */ jsx5("span", { className: "font-semibold text-[15px] text-[#012d1d] mt-0.5", children: stay.subtitle }),
            /* @__PURE__ */ jsxs5("span", { className: "text-[13px] text-[#414844] flex items-center gap-1 mt-1", children: [
              /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-[15px] text-[#006688]", children: "king_bed" }),
              stay.features.join(" \u2022 ")
            ] })
          ] }),
          /* @__PURE__ */ jsx5("div", { className: "flex flex-wrap gap-1.5", children: stay.amenities.slice(0, 3).map((amenity, idx) => /* @__PURE__ */ jsxs5(
            "span",
            {
              className: "px-2.5 py-1 rounded-md bg-[#f1f3ff] text-[#414844] text-[12px] font-medium flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-[14px] text-[#1b4332]", children: "check_circle" }),
                amenity
              ]
            },
            idx
          )) }),
          (stay.scarcityText || stay.policyText) && /* @__PURE__ */ jsxs5("div", { className: "bg-[#f1f3ff] rounded-xl p-2.5 flex flex-col gap-1 text-[12px]", children: [
            stay.scarcityText && /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-1.5 text-[#ba1a1a] font-semibold", children: [
              /* @__PURE__ */ jsx5("span", { className: "w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping inline-block shrink-0" }),
              /* @__PURE__ */ jsx5("span", { children: stay.scarcityText })
            ] }),
            stay.policyText && /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-1.5 text-[#274e3d] font-medium", children: [
              /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-[14px] text-[#1b4332]", children: "verified" }),
              /* @__PURE__ */ jsx5("span", { children: stay.policyText })
            ] })
          ] }),
          /* @__PURE__ */ jsxs5("div", { className: "flex items-end justify-between pt-2 border-t border-[rgba(27,67,50,0.06)]", children: [
            /* @__PURE__ */ jsxs5("div", { className: "flex flex-col", children: [
              stay.originalPrice && /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs5("span", { className: "line-through text-[#414844] text-[12px]", children: [
                  "\u20B9",
                  stay.originalPrice.toLocaleString()
                ] }),
                /* @__PURE__ */ jsx5("span", { className: "bg-[#ffdad2] text-[#3c0700] text-[11px] px-1.5 py-0.2 rounded-full font-bold", children: "Discount" })
              ] }),
              /* @__PURE__ */ jsxs5("div", { className: "flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsxs5("span", { className: "font-epilogue text-[24px] font-bold text-[#012d1d]", children: [
                  "\u20B9",
                  stay.price.toLocaleString()
                ] }),
                /* @__PURE__ */ jsx5("span", { className: "text-[13px] text-[#414844]", children: stay.priceUnit })
              ] }),
              /* @__PURE__ */ jsx5("span", { className: "text-[11px] text-[#414844]", children: stay.taxesText })
            ] }),
            /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx5(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    onSelect(stay);
                  },
                  className: "px-3 py-2 text-[#012d1d] font-semibold text-[13px] hover:underline",
                  type: "button",
                  children: "Details"
                }
              ),
              /* @__PURE__ */ jsx5(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    onBook(stay);
                  },
                  className: "px-4 py-2.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md active:scale-95 transition-all",
                  type: "button",
                  children: "Book Now"
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
};

// src/components/ActivityCard.tsx
import { useState as useState2 } from "react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var ActivityCard = ({ activity, onBook }) => {
  const [isWishlisted, setIsWishlisted] = useState2(false);
  const difficultyColor = activity.difficulty === "Intense" ? "bg-[#ffdad6] text-[#93000a]" : activity.difficulty === "Moderate" ? "bg-[#c2e8ff] text-[#004d68]" : "bg-[#c1ecd4] text-[#002114]";
  return /* @__PURE__ */ jsxs6("article", { className: "bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(27,67,50,0.06)] hover:shadow-[0_12px_28px_-4px_rgba(27,67,50,0.1)] overflow-hidden flex flex-col transition-all border border-[rgba(27,67,50,0.06)]", children: [
    /* @__PURE__ */ jsxs6("div", { className: "relative w-full h-48 overflow-hidden bg-[#dde2f3]", children: [
      /* @__PURE__ */ jsx6(
        "img",
        {
          src: activity.image,
          alt: activity.title,
          className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-gradient-to-t from-[#012d1d]/70 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxs6("div", { className: "absolute top-3 left-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs6("span", { className: "px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#012d1d] text-[12px] font-semibold flex items-center gap-1 shadow-sm", children: [
          /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[14px] text-[#006688]", children: "kayaking" }),
          activity.category
        ] }),
        /* @__PURE__ */ jsx6("span", { className: `px-2.5 py-1 rounded-full backdrop-blur-md text-[12px] font-bold shadow-sm ${difficultyColor}`, children: activity.difficulty })
      ] }),
      /* @__PURE__ */ jsx6(
        "button",
        {
          "aria-label": "Save to Wishlist",
          onClick: () => setIsWishlisted(!isWishlisted),
          className: "absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#414844] hover:text-[#ba1a1a] active:scale-90 transition-all shadow-sm",
          type: "button",
          children: /* @__PURE__ */ jsx6(
            "span",
            {
              className: "material-symbols-outlined text-[20px]",
              style: { fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" },
              children: "favorite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs6("div", { className: "absolute bottom-3 left-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs6("div", { className: "px-2.5 py-1 rounded-full bg-[#1b4332]/90 backdrop-blur-md text-white text-[12px] font-semibold flex items-center gap-1 shadow-sm", children: [
          /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[14px] text-amber-300", style: { fontVariationSettings: "'FILL' 1" }, children: "star" }),
          /* @__PURE__ */ jsx6("span", { children: activity.rating }),
          /* @__PURE__ */ jsxs6("span", { className: "text-[#c1ecd4] text-[11px]", children: [
            "(",
            activity.reviewCount,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#161c27] text-[12px] font-semibold flex items-center gap-1", children: [
          /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[14px] text-[#006688]", children: "schedule" }),
          activity.duration
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "p-4 sm:p-5 flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx6("h3", { className: "font-epilogue text-[18px] font-bold text-[#161c27] leading-snug", children: activity.title }),
      /* @__PURE__ */ jsx6("p", { className: "text-[13px] text-[#414844] line-clamp-2", children: activity.description }),
      /* @__PURE__ */ jsx6("div", { className: "flex flex-wrap gap-1.5 pt-1", children: activity.highlights.map((h, i) => /* @__PURE__ */ jsxs6("span", { className: "px-2 py-0.5 rounded bg-[#f1f3ff] text-[#414844] text-[11px] font-medium flex items-center gap-1", children: [
        /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[12px] text-[#012d1d]", children: "check" }),
        h
      ] }, i)) }),
      /* @__PURE__ */ jsxs6("div", { className: "flex items-end justify-between pt-3 border-t border-[rgba(27,67,50,0.06)] mt-auto", children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx6("span", { className: "text-[11px] text-[#414844]", children: "Per person rate" }),
          /* @__PURE__ */ jsxs6("div", { className: "flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxs6("span", { className: "font-epilogue text-[22px] font-bold text-[#012d1d]", children: [
              "\u20B9",
              activity.price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx6("span", { className: "text-[13px] text-[#414844]", children: "/ slot" })
          ] })
        ] }),
        /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: () => onBook(activity),
            className: "px-4 py-2.5 rounded-xl bg-[#006688] hover:bg-[#005370] text-white font-semibold text-[14px] shadow-md active:scale-95 transition-all",
            type: "button",
            children: "Reserve Slot"
          }
        )
      ] })
    ] })
  ] });
};

// src/components/PackageCard.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var PackageCard = ({ pkg, onBook }) => {
  return /* @__PURE__ */ jsxs7("article", { className: "bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(27,67,50,0.06)] hover:shadow-[0_12px_28px_-4px_rgba(27,67,50,0.1)] overflow-hidden flex flex-col transition-all border border-[rgba(27,67,50,0.06)]", children: [
    /* @__PURE__ */ jsxs7("div", { className: "relative w-full h-52 overflow-hidden bg-[#dde2f3]", children: [
      /* @__PURE__ */ jsx7(
        "img",
        {
          src: pkg.image,
          alt: pkg.title,
          className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsx7("div", { className: "absolute inset-0 bg-gradient-to-t from-[#012d1d]/70 via-transparent to-transparent" }),
      /* @__PURE__ */ jsx7("div", { className: "absolute top-3 left-3 flex items-center gap-2", children: /* @__PURE__ */ jsxs7("span", { className: "px-3 py-1 rounded-full bg-[#1b4332]/90 backdrop-blur-md text-white text-[12px] font-semibold flex items-center gap-1 shadow-sm", children: [
        /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[14px] text-[#c1ecd4]", children: "local_activity" }),
        pkg.duration
      ] }) }),
      /* @__PURE__ */ jsx7("div", { className: "absolute bottom-3 left-3 flex items-center gap-2", children: /* @__PURE__ */ jsxs7("div", { className: "px-2.5 py-1 rounded-full bg-[#1b4332]/90 backdrop-blur-md text-white text-[12px] font-semibold flex items-center gap-1 shadow-sm", children: [
        /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[14px] text-amber-300", style: { fontVariationSettings: "'FILL' 1" }, children: "star" }),
        /* @__PURE__ */ jsx7("span", { children: pkg.rating }),
        /* @__PURE__ */ jsxs7("span", { className: "text-[#c1ecd4] text-[11px]", children: [
          "(",
          pkg.reviewCount,
          ")"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "p-4 sm:p-5 flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx7("h3", { className: "font-epilogue text-[20px] font-bold text-[#161c27] leading-snug", children: pkg.title }),
      /* @__PURE__ */ jsx7("p", { className: "text-[13px] text-[#414844]", children: pkg.description }),
      /* @__PURE__ */ jsxs7("div", { className: "bg-[#f1f3ff] rounded-xl p-3 flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx7("span", { className: "text-[12px] font-bold text-[#012d1d] uppercase tracking-wider", children: "Package Inclusions:" }),
        /* @__PURE__ */ jsx7("div", { className: "grid grid-cols-1 gap-1", children: pkg.inclusions.map((inc, i) => /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-1.5 text-[13px] text-[#414844]", children: [
          /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[15px] text-[#1b4332]", children: "check_circle" }),
          /* @__PURE__ */ jsx7("span", { children: inc })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "flex items-end justify-between pt-3 border-t border-[rgba(27,67,50,0.06)] mt-auto", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex flex-col", children: [
          pkg.originalPrice && /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs7("span", { className: "line-through text-[#414844] text-[12px]", children: [
              "\u20B9",
              pkg.originalPrice.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx7("span", { className: "bg-[#ffdad2] text-[#3c0700] text-[11px] px-1.5 py-0.2 rounded-full font-bold", children: "Best Value" })
          ] }),
          /* @__PURE__ */ jsxs7("div", { className: "flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxs7("span", { className: "font-epilogue text-[24px] font-bold text-[#012d1d]", children: [
              "\u20B9",
              pkg.price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx7("span", { className: "text-[13px] text-[#414844]", children: "/ package" })
          ] })
        ] }),
        /* @__PURE__ */ jsx7(
          "button",
          {
            onClick: () => onBook(pkg),
            className: "px-5 py-2.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md active:scale-95 transition-all",
            type: "button",
            children: "Book Package"
          }
        )
      ] })
    ] })
  ] });
};

// src/components/BookingCard.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var BookingCard = ({ booking, onCancel }) => {
  return /* @__PURE__ */ jsxs8("article", { className: "bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(27,67,50,0.06)] overflow-hidden flex flex-col sm:flex-row border border-[rgba(27,67,50,0.06)] transition-all", children: [
    /* @__PURE__ */ jsxs8("div", { className: "relative sm:w-48 h-44 sm:h-auto bg-[#dde2f3] shrink-0", children: [
      /* @__PURE__ */ jsx8("img", { src: booking.image, alt: booking.itemName, className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsx8("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsx8("span", { className: "px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#012d1d] text-[11px] font-bold shadow-sm", children: booking.bookingCode }) })
    ] }),
    /* @__PURE__ */ jsxs8("div", { className: "p-4 sm:p-5 flex flex-col justify-between flex-grow gap-3", children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx8("h3", { className: "font-epilogue text-[18px] font-bold text-[#161c27]", children: booking.itemName }),
          /* @__PURE__ */ jsx8("span", { className: "px-2.5 py-1 rounded-full bg-[#c1ecd4] text-[#002114] text-[11px] font-bold", children: booking.status })
        ] }),
        /* @__PURE__ */ jsxs8("span", { className: "text-[13px] text-[#414844] flex items-center gap-1", children: [
          /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[15px] text-[#006688]", children: "location_on" }),
          booking.location
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-wrap gap-4 mt-2 text-[13px] text-[#161c27]", children: [
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1 bg-[#f1f3ff] px-2.5 py-1 rounded-lg", children: [
            /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[15px] text-[#1b4332]", children: "calendar_month" }),
            /* @__PURE__ */ jsx8("span", { children: booking.dates })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1 bg-[#f1f3ff] px-2.5 py-1 rounded-lg", children: [
            /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[15px] text-[#1b4332]", children: "group" }),
            /* @__PURE__ */ jsx8("span", { children: booking.guests })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between pt-3 border-t border-[rgba(27,67,50,0.06)]", children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx8("span", { className: "text-[11px] text-[#414844]", children: "Total Paid" }),
          /* @__PURE__ */ jsxs8("span", { className: "font-epilogue text-[20px] font-bold text-[#012d1d]", children: [
            "\u20B9",
            booking.totalPrice.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx8(
            "button",
            {
              onClick: () => alert(`Downloading E-Ticket & Itinerary for booking ${booking.bookingCode}`),
              className: "px-3 py-1.5 rounded-lg bg-[#e8eeff] hover:bg-[#dde2f3] text-[#006688] font-semibold text-[13px] active:scale-95 transition-all",
              type: "button",
              children: "Download Ticket"
            }
          ),
          /* @__PURE__ */ jsx8(
            "button",
            {
              onClick: () => {
                if (window.confirm("Are you sure you want to cancel this booking?")) {
                  onCancel(booking.id);
                }
              },
              className: "px-3 py-1.5 rounded-lg bg-[#ffdad6]/50 hover:bg-[#ffdad6] text-[#ba1a1a] font-semibold text-[13px] active:scale-95 transition-all",
              type: "button",
              children: "Cancel"
            }
          )
        ] })
      ] })
    ] })
  ] });
};

// src/components/PropertyDetailsModal.tsx
import { useState as useState3 } from "react";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var PropertyDetailsModal = ({
  stay,
  onClose,
  onConfirmBooking
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState3(0);
  const [step, setStep] = useState3(1);
  const [checkInDate, setCheckInDate] = useState3("2026-10-18");
  const [checkOutDate, setCheckOutDate] = useState3("2026-10-20");
  const [guestsCount, setGuestsCount] = useState3(2);
  const [roomsCount, setRoomsCount] = useState3(1);
  const [roomType, setRoomType] = useState3("Standard Room (Included)");
  const [guestName, setGuestName] = useState3("");
  const [guestEmail, setGuestEmail] = useState3("");
  const [guestPhone, setGuestPhone] = useState3("");
  const [specialRequests, setSpecialRequests] = useState3("");
  const [paymentMethod, setPaymentMethod] = useState3("upi");
  const nights = 2;
  const roomExtra = roomType.includes("Premium") ? 1e3 : roomType.includes("Luxury") ? 2500 : roomType.includes("Private") ? 4e3 : 0;
  const totalPrice = (stay.price + roomExtra) * nights * roomsCount + 504;
  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      onConfirmBooking({
        itemName: `${stay.title} - ${roomType.split("(")[0].trim()}`,
        itemType: "stay",
        image: stay.image,
        dates: `${checkInDate} to ${checkOutDate} (${nights} Nights)`,
        guests: `${guestsCount} Guests \u2022 ${roomsCount} Room`,
        totalPrice,
        location: stay.location
      });
    }
  };
  return /* @__PURE__ */ jsx9("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 overflow-y-auto", children: /* @__PURE__ */ jsxs9("div", { className: "bg-white w-full max-w-4xl min-h-screen sm:min-h-0 sm:max-h-[92vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxs9("div", { className: "sticky top-0 z-25 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs9("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs9("span", { className: "text-[12px] font-bold text-[#006688] uppercase tracking-wider", children: [
            "Step ",
            step,
            " of 3"
          ] }),
          /* @__PURE__ */ jsxs9("span", { className: "text-[12px] text-[#414844]", children: [
            "\u2022 ",
            step === 1 ? "Select Stay & Room Type" : step === 2 ? "Guest Details & Notes" : "Secure Payment"
          ] })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-2 mt-0.5", children: [
          /* @__PURE__ */ jsx9("span", { className: "px-2.5 py-0.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-[11px] font-bold", children: stay.category }),
          /* @__PURE__ */ jsx9("h2", { className: "font-epilogue text-[18px] sm:text-[20px] font-bold text-[#161c27] truncate max-w-md", children: stay.title })
        ] })
      ] }),
      /* @__PURE__ */ jsx9(
        "button",
        {
          onClick: onClose,
          className: "w-10 h-10 rounded-full bg-[#f1f3ff] hover:bg-[#e3e8f9] flex items-center justify-center text-[#161c27] transition-all",
          type: "button",
          children: /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[20px]", children: "close" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "flex-grow overflow-y-auto p-4 sm:p-8 flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx9("div", { className: "w-full bg-[#f1f3ff] h-2 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx9(
        "div",
        {
          className: "bg-[#012d1d] h-full transition-all duration-300",
          style: { width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }
        }
      ) }),
      step === 1 && /* @__PURE__ */ jsxs9("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-200", children: [
        /* @__PURE__ */ jsxs9("div", { className: "md:col-span-2 flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxs9("div", { className: "relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#dde2f3] shadow-md", children: [
            /* @__PURE__ */ jsx9(
              "img",
              {
                src: stay.gallery[activeImageIdx] || stay.image,
                alt: stay.title,
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxs9("div", { className: "absolute top-3 left-3 bg-[#1b4332]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[12px] font-semibold", children: [
              "Photo ",
              activeImageIdx + 1,
              " of ",
              stay.gallery.length
            ] })
          ] }),
          /* @__PURE__ */ jsx9("div", { className: "flex gap-2 overflow-x-auto pb-2", children: stay.gallery.map((img, idx) => /* @__PURE__ */ jsx9(
            "button",
            {
              onClick: () => setActiveImageIdx(idx),
              className: `w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${activeImageIdx === idx ? "border-[#012d1d] scale-105 shadow-md" : "border-transparent opacity-70 hover:opacity-100"}`,
              children: /* @__PURE__ */ jsx9("img", { src: img, alt: "thumb", className: "w-full h-full object-cover" })
            },
            idx
          )) }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx9("h3", { className: "font-epilogue text-[20px] font-bold text-[#161c27]", children: stay.subtitle }),
            /* @__PURE__ */ jsx9("p", { className: "text-[14px] text-[#414844] mt-2 leading-relaxed", children: stay.description })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "bg-[#f1f3ff] rounded-2xl p-4 flex flex-col gap-3", children: [
            /* @__PURE__ */ jsx9("h4", { className: "font-epilogue text-[16px] font-bold text-[#161c27]", children: "Resort Amenities" }),
            /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: stay.amenities.map((amenity, i) => /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-2 text-[13px] text-[#414844]", children: [
              /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[18px] text-[#1b4332]", children: "check_circle" }),
              /* @__PURE__ */ jsx9("span", { children: amenity })
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "bg-[#f9f9ff] border border-[rgba(27,67,50,0.1)] rounded-2xl p-5 shadow-lg flex flex-col gap-4 h-fit", children: [
          /* @__PURE__ */ jsxs9("div", { className: "flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsxs9("div", { children: [
              /* @__PURE__ */ jsxs9("span", { className: "font-epilogue text-[26px] font-bold text-[#012d1d]", children: [
                "\u20B9",
                (stay.price + roomExtra).toLocaleString()
              ] }),
              /* @__PURE__ */ jsxs9("span", { className: "text-[13px] text-[#414844]", children: [
                " ",
                stay.priceUnit
              ] })
            ] }),
            /* @__PURE__ */ jsx9("span", { className: "text-[12px] text-[#006688] font-semibold", children: "Free cancellation" })
          ] }),
          /* @__PURE__ */ jsxs9("form", { onSubmit: handleNextStep, className: "flex flex-col gap-4 pt-2", children: [
            /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsx9("label", { className: "text-[11px] font-bold text-[#414844] uppercase", children: "Select Room / Accommodation Type" }),
              /* @__PURE__ */ jsxs9(
                "select",
                {
                  value: roomType,
                  onChange: (e) => setRoomType(e.target.value),
                  className: "px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium focus:ring-2 focus:ring-[#1b4332]",
                  children: [
                    /* @__PURE__ */ jsx9("option", { value: "Standard Room (Included)", children: "Standard Room (Included)" }),
                    /* @__PURE__ */ jsx9("option", { value: "Premium Riverside View Room (+\u20B91,000/night)", children: "Premium Riverside View Room (+\u20B91,000/night)" }),
                    /* @__PURE__ */ jsx9("option", { value: "Luxury Suite with Balcony (+\u20B92,500/night)", children: "Luxury Suite with Balcony (+\u20B92,500/night)" }),
                    /* @__PURE__ */ jsx9("option", { value: "Private Cottage with Jacuzzi (+\u20B94,000/night)", children: "Private Cottage with Jacuzzi (+\u20B94,000/night)" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs9("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx9("label", { className: "text-[11px] font-bold text-[#414844] uppercase", children: "Check-in" }),
                /* @__PURE__ */ jsx9(
                  "input",
                  {
                    type: "date",
                    value: checkInDate,
                    onChange: (e) => setCheckInDate(e.target.value),
                    className: "px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx9("label", { className: "text-[11px] font-bold text-[#414844] uppercase", children: "Check-out" }),
                /* @__PURE__ */ jsx9(
                  "input",
                  {
                    type: "date",
                    value: checkOutDate,
                    onChange: (e) => setCheckOutDate(e.target.value),
                    className: "px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs9("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx9("label", { className: "text-[11px] font-bold text-[#414844] uppercase", children: "Guests" }),
                /* @__PURE__ */ jsxs9(
                  "select",
                  {
                    value: guestsCount,
                    onChange: (e) => setGuestsCount(Number(e.target.value)),
                    className: "px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium",
                    children: [
                      /* @__PURE__ */ jsx9("option", { value: 1, children: "1 Guest" }),
                      /* @__PURE__ */ jsx9("option", { value: 2, children: "2 Guests" }),
                      /* @__PURE__ */ jsx9("option", { value: 3, children: "3 Guests" }),
                      /* @__PURE__ */ jsx9("option", { value: 4, children: "4 Guests" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx9("label", { className: "text-[11px] font-bold text-[#414844] uppercase", children: "Rooms" }),
                /* @__PURE__ */ jsxs9(
                  "select",
                  {
                    value: roomsCount,
                    onChange: (e) => setRoomsCount(Number(e.target.value)),
                    className: "px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium",
                    children: [
                      /* @__PURE__ */ jsx9("option", { value: 1, children: "1 Room" }),
                      /* @__PURE__ */ jsx9("option", { value: 2, children: "2 Rooms" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs9("div", { className: "border-t border-[rgba(27,67,50,0.1)] pt-3 flex flex-col gap-1.5 text-[13px] text-[#414844]", children: [
              /* @__PURE__ */ jsxs9("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxs9("span", { children: [
                  "\u20B9",
                  (stay.price + roomExtra).toLocaleString(),
                  " \xD7 ",
                  nights,
                  " nights \xD7 ",
                  roomsCount,
                  " room"
                ] }),
                /* @__PURE__ */ jsxs9("span", { children: [
                  "\u20B9",
                  ((stay.price + roomExtra) * nights * roomsCount).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs9("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx9("span", { children: "Taxes & Service Fees" }),
                /* @__PURE__ */ jsx9("span", { children: "\u20B9504" })
              ] }),
              /* @__PURE__ */ jsxs9("div", { className: "flex justify-between font-bold text-[#161c27] text-[15px] pt-2 border-t border-[rgba(27,67,50,0.1)]", children: [
                /* @__PURE__ */ jsx9("span", { children: "Total Amount" }),
                /* @__PURE__ */ jsxs9("span", { className: "text-[#012d1d]", children: [
                  "\u20B9",
                  totalPrice.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs9(
              "button",
              {
                type: "submit",
                className: "w-full py-3.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-epilogue font-bold text-[16px] shadow-lg active:scale-95 transition-all mt-2 flex items-center justify-center gap-2",
                children: [
                  /* @__PURE__ */ jsx9("span", { children: "Proceed to Guest Details" }),
                  /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[18px]", children: "arrow_forward" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      step === 2 && /* @__PURE__ */ jsxs9("form", { onSubmit: handleNextStep, className: "max-w-2xl mx-auto w-full flex flex-col gap-6 animate-in fade-in duration-200 py-4", children: [
        /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx9("h3", { className: "font-epilogue text-[22px] font-bold text-[#161c27]", children: "Primary Guest Information" }),
          /* @__PURE__ */ jsx9("p", { className: "text-[14px] text-[#414844]", children: "Enter lead guest contact details for booking confirmation and e-ticket dispatch." })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "bg-[#f1f3ff] p-4 rounded-xl flex items-center justify-between text-[13px] text-[#161c27]", children: [
          /* @__PURE__ */ jsxs9("span", { children: [
            "Selected Property: ",
            /* @__PURE__ */ jsx9("strong", { children: stay.title })
          ] }),
          /* @__PURE__ */ jsx9("span", { className: "px-2 py-0.5 bg-white rounded-md font-bold text-[#012d1d]", children: roomType.split("(")[0] })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx9("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Full Name (as per Govt ID)" }),
          /* @__PURE__ */ jsx9(
            "input",
            {
              type: "text",
              required: true,
              placeholder: "e.g. Anand Kumar",
              value: guestName,
              onChange: (e) => setGuestName(e.target.value),
              className: "px-4 py-3 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx9("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Email Address" }),
            /* @__PURE__ */ jsx9(
              "input",
              {
                type: "email",
                required: true,
                placeholder: "anand@example.com",
                value: guestEmail,
                onChange: (e) => setGuestEmail(e.target.value),
                className: "px-4 py-3 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx9("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Phone Number" }),
            /* @__PURE__ */ jsx9(
              "input",
              {
                type: "tel",
                required: true,
                placeholder: "+91 98765 43210",
                value: guestPhone,
                onChange: (e) => setGuestPhone(e.target.value),
                className: "px-4 py-3 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx9("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Special Requests or Dietary Notes (Optional)" }),
          /* @__PURE__ */ jsx9(
            "textarea",
            {
              rows: 3,
              placeholder: "e.g. Extra mattress needed, airport pickup inquiry...",
              value: specialRequests,
              onChange: (e) => setSpecialRequests(e.target.value),
              className: "px-4 py-3 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "flex items-center justify-between pt-4 border-t border-[rgba(27,67,50,0.1)]", children: [
          /* @__PURE__ */ jsx9(
            "button",
            {
              type: "button",
              onClick: () => setStep(1),
              className: "px-5 py-3 rounded-xl bg-[#f1f3ff] text-[#161c27] font-semibold text-[14px] hover:bg-[#e3e8f9]",
              children: "Back"
            }
          ),
          /* @__PURE__ */ jsxs9(
            "button",
            {
              type: "submit",
              className: "px-6 py-3.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-[15px] shadow-lg flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx9("span", { children: "Proceed to Payment" }),
                /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[18px]", children: "arrow_forward" })
              ]
            }
          )
        ] })
      ] }),
      step === 3 && /* @__PURE__ */ jsxs9("form", { onSubmit: handleNextStep, className: "max-w-2xl mx-auto w-full flex flex-col gap-6 animate-in fade-in duration-200 py-4", children: [
        /* @__PURE__ */ jsxs9("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx9("h3", { className: "font-epilogue text-[22px] font-bold text-[#161c27]", children: "Select Payment Method" }),
          /* @__PURE__ */ jsx9("p", { className: "text-[14px] text-[#414844]", children: "Choose your preferred secure payment channel to instantly confirm your reservation." })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxs9(
            "label",
            {
              onClick: () => setPaymentMethod("upi"),
              className: `p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === "upi" ? "border-[#012d1d] bg-[#f1f3ff]" : "border-[rgba(27,67,50,0.1)] bg-white hover:bg-[#fafbfc]"}`,
              children: [
                /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[24px] text-[#006688]", children: "qr_code_scanner" }),
                /* @__PURE__ */ jsxs9("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsx9("span", { className: "font-bold text-[14px] text-[#161c27]", children: "UPI / QR Code" }),
                  /* @__PURE__ */ jsx9("span", { className: "text-[12px] text-[#414844]", children: "GPay, PhonePe, Paytm" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs9(
            "label",
            {
              onClick: () => setPaymentMethod("card"),
              className: `p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === "card" ? "border-[#012d1d] bg-[#f1f3ff]" : "border-[rgba(27,67,50,0.1)] bg-white hover:bg-[#fafbfc]"}`,
              children: [
                /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[24px] text-[#006688]", children: "credit_card" }),
                /* @__PURE__ */ jsxs9("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsx9("span", { className: "font-bold text-[14px] text-[#161c27]", children: "Credit / Debit Card" }),
                  /* @__PURE__ */ jsx9("span", { className: "text-[12px] text-[#414844]", children: "Visa, MasterCard, RuPay" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs9(
            "label",
            {
              onClick: () => setPaymentMethod("netbanking"),
              className: `p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === "netbanking" ? "border-[#012d1d] bg-[#f1f3ff]" : "border-[rgba(27,67,50,0.1)] bg-white hover:bg-[#fafbfc]"}`,
              children: [
                /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[24px] text-[#006688]", children: "account_balance" }),
                /* @__PURE__ */ jsxs9("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsx9("span", { className: "font-bold text-[14px] text-[#161c27]", children: "Net Banking" }),
                  /* @__PURE__ */ jsx9("span", { className: "text-[12px] text-[#414844]", children: "All Major Indian Banks" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs9(
            "label",
            {
              onClick: () => setPaymentMethod("resort"),
              className: `p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === "resort" ? "border-[#012d1d] bg-[#f1f3ff]" : "border-[rgba(27,67,50,0.1)] bg-white hover:bg-[#fafbfc]"}`,
              children: [
                /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[24px] text-[#006688]", children: "payments" }),
                /* @__PURE__ */ jsxs9("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsx9("span", { className: "font-bold text-[14px] text-[#161c27]", children: "Pay at Resort" }),
                  /* @__PURE__ */ jsx9("span", { className: "text-[12px] text-[#414844]", children: "Cash or Card upon check-in" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.1)] flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx9("span", { className: "font-epilogue text-[15px] font-bold text-[#161c27]", children: "Booking Summary" }),
          /* @__PURE__ */ jsxs9("div", { className: "flex justify-between text-[13px] text-[#414844]", children: [
            /* @__PURE__ */ jsxs9("span", { children: [
              stay.title,
              " (",
              roomType.split("(")[0],
              ", ",
              nights,
              " Nights)"
            ] }),
            /* @__PURE__ */ jsxs9("span", { children: [
              "\u20B9",
              ((stay.price + roomExtra) * nights * roomsCount).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "flex justify-between text-[13px] text-[#414844]", children: [
            /* @__PURE__ */ jsx9("span", { children: "Taxes & Fees" }),
            /* @__PURE__ */ jsx9("span", { children: "\u20B9504" })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "flex justify-between font-bold text-[16px] text-[#012d1d] pt-2 border-t border-[rgba(27,67,50,0.1)]", children: [
            /* @__PURE__ */ jsx9("span", { children: "Total Payable" }),
            /* @__PURE__ */ jsxs9("span", { children: [
              "\u20B9",
              totalPrice.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "flex items-center justify-between pt-4 border-t border-[rgba(27,67,50,0.1)]", children: [
          /* @__PURE__ */ jsx9(
            "button",
            {
              type: "button",
              onClick: () => setStep(2),
              className: "px-5 py-3 rounded-xl bg-[#f1f3ff] text-[#161c27] font-semibold text-[14px] hover:bg-[#e3e8f9]",
              children: "Back"
            }
          ),
          /* @__PURE__ */ jsx9(
            "button",
            {
              type: "submit",
              className: "px-8 py-4 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-epilogue font-bold text-[16px] shadow-xl flex items-center gap-2 active:scale-95 transition-all",
              children: /* @__PURE__ */ jsx9("span", { children: "Complete Secure Booking \u{1F389}" })
            }
          )
        ] })
      ] })
    ] })
  ] }) });
};

// src/components/MapViewModal.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
var MapViewModal = ({ stays, onClose, onSelectStay }) => {
  return /* @__PURE__ */ jsx10("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs10("div", { className: "bg-white w-full max-w-3xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxs10("div", { className: "px-5 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between bg-white z-10", children: [
      /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[24px] text-[#006688]", children: "map" }),
        /* @__PURE__ */ jsx10("h2", { className: "font-epilogue text-[20px] font-bold text-[#161c27]", children: "Dandeli Kali River Map View" })
      ] }),
      /* @__PURE__ */ jsx10(
        "button",
        {
          onClick: onClose,
          className: "w-10 h-10 rounded-full bg-[#f1f3ff] hover:bg-[#e3e8f9] flex items-center justify-center text-[#161c27] transition-all",
          type: "button",
          children: /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[20px]", children: "close" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: "relative flex-grow bg-[#1b4332] overflow-hidden flex items-center justify-center", children: [
      /* @__PURE__ */ jsx10("div", { className: "absolute inset-0 opacity-40 bg-cover bg-center", style: { backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80')` } }),
      /* @__PURE__ */ jsx10("div", { className: "absolute inset-0 bg-gradient-to-t from-[#012d1d] via-transparent to-transparent opacity-80" }),
      /* @__PURE__ */ jsx10("div", { className: "absolute inset-x-0 h-32 top-1/3 bg-[#006688]/30 transform -rotate-12 blur-sm" }),
      /* @__PURE__ */ jsx10("div", { className: "absolute inset-0 p-8 flex flex-wrap items-center justify-around gap-6 z-10", children: stays.map((stay, idx) => /* @__PURE__ */ jsxs10(
        "div",
        {
          onClick: () => {
            onSelectStay(stay);
            onClose();
          },
          className: "bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl cursor-pointer hover:scale-110 transition-all flex items-center gap-2 border-2 border-[#012d1d]",
          style: {
            position: "relative",
            top: `${(idx % 2 === 0 ? 1 : -1) * 30}px`,
            left: `${(idx - 1) * 20}px`
          },
          children: [
            /* @__PURE__ */ jsxs10("div", { className: "w-8 h-8 rounded-full bg-[#012d1d] text-white flex items-center justify-center font-bold text-[12px]", children: [
              "\u20B9",
              Math.round(stay.price / 1e3),
              "k"
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-epilogue text-[13px] font-bold text-[#161c27] truncate max-w-[140px]", children: stay.title }),
              /* @__PURE__ */ jsxs10("span", { className: "text-[11px] text-[#006688] font-medium", children: [
                "\u2B50 ",
                stay.rating,
                " \u2022 Kali River"
              ] })
            ] })
          ]
        },
        stay.id
      )) }),
      /* @__PURE__ */ jsxs10("div", { className: "absolute bottom-6 inset-x-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg flex items-center justify-between text-[13px] z-20", children: [
        /* @__PURE__ */ jsx10("span", { className: "font-medium text-[#161c27]", children: "\u{1F4CD} Click any resort pin to view details and check-in availability" }),
        /* @__PURE__ */ jsx10("span", { className: "font-bold text-[#012d1d]", children: "Kali River Basin, Karnataka" })
      ] })
    ] })
  ] }) });
};

// src/components/ModifySearchModal.tsx
import { useState as useState4 } from "react";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
var ModifySearchModal = ({
  searchParams,
  onClose,
  onSave
}) => {
  const [location, setLocation] = useState4(searchParams.location);
  const [checkIn, setCheckIn] = useState4(searchParams.checkIn);
  const [checkOut, setCheckOut] = useState4(searchParams.checkOut);
  const [guests, setGuests] = useState4(searchParams.guests);
  const [rooms, setRooms] = useState4(searchParams.rooms);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ location, checkIn, checkOut, guests, rooms });
    onClose();
  };
  return /* @__PURE__ */ jsx11("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs11("div", { className: "bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxs11("div", { className: "px-6 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between", children: [
      /* @__PURE__ */ jsx11("h2", { className: "font-epilogue text-[20px] font-bold text-[#161c27]", children: "Modify Search & Dates" }),
      /* @__PURE__ */ jsx11(
        "button",
        {
          onClick: onClose,
          className: "w-10 h-10 rounded-full bg-[#f1f3ff] hover:bg-[#e3e8f9] flex items-center justify-center text-[#161c27] transition-all",
          type: "button",
          children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[20px]", children: "close" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs11("form", { onSubmit: handleSubmit, className: "p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs11("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx11("label", { className: "text-[12px] font-bold text-[#414844] uppercase tracking-wider", children: "Destination" }),
        /* @__PURE__ */ jsx11(
          "input",
          {
            type: "text",
            value: location,
            onChange: (e) => setLocation(e.target.value),
            className: "px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxs11("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx11("label", { className: "text-[12px] font-bold text-[#414844] uppercase tracking-wider", children: "Check-in" }),
          /* @__PURE__ */ jsx11(
            "input",
            {
              type: "text",
              value: checkIn,
              onChange: (e) => setCheckIn(e.target.value),
              className: "px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx11("label", { className: "text-[12px] font-bold text-[#414844] uppercase tracking-wider", children: "Check-out" }),
          /* @__PURE__ */ jsx11(
            "input",
            {
              type: "text",
              value: checkOut,
              onChange: (e) => setCheckOut(e.target.value),
              className: "px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]",
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxs11("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx11("label", { className: "text-[12px] font-bold text-[#414844] uppercase tracking-wider", children: "Guests" }),
          /* @__PURE__ */ jsx11(
            "input",
            {
              type: "number",
              min: 1,
              max: 10,
              value: guests,
              onChange: (e) => setGuests(Number(e.target.value)),
              className: "px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx11("label", { className: "text-[12px] font-bold text-[#414844] uppercase tracking-wider", children: "Rooms" }),
          /* @__PURE__ */ jsx11(
            "input",
            {
              type: "number",
              min: 1,
              max: 5,
              value: rooms,
              onChange: (e) => setRooms(Number(e.target.value)),
              className: "px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]",
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-end gap-3 pt-4 border-t border-[rgba(27,67,50,0.08)]", children: [
        /* @__PURE__ */ jsx11(
          "button",
          {
            onClick: onClose,
            className: "px-5 py-2.5 rounded-xl bg-[#f1f3ff] text-[#414844] font-semibold text-[14px] hover:bg-[#e3e8f9] transition-all",
            type: "button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsx11(
          "button",
          {
            type: "submit",
            className: "px-6 py-2.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md transition-all",
            children: "Apply Changes"
          }
        )
      ] })
    ] })
  ] }) });
};

// src/components/MenuDrawer.tsx
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
var MenuDrawer = ({
  onClose,
  setActiveTab,
  onOpenAiConcierge,
  onOpenMap,
  isDarkMode = false,
  onToggleTheme
}) => {
  return /* @__PURE__ */ jsx12("div", { className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-start animate-in fade-in duration-200", children: /* @__PURE__ */ jsxs12("div", { className: "bg-white w-80 h-full shadow-2xl flex flex-col p-6 justify-between overflow-y-auto animate-in slide-in-from-left duration-200", children: [
    /* @__PURE__ */ jsxs12("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx12("div", { className: "h-10 w-10 rounded-xl bg-[#1b4332] flex items-center justify-center text-white shadow-sm", children: /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[24px]", children: "kayaking" }) }),
          /* @__PURE__ */ jsx12("span", { className: "font-epilogue text-[18px] font-bold text-[#012d1d]", children: "DandeliTours" })
        ] }),
        /* @__PURE__ */ jsx12(
          "button",
          {
            onClick: onClose,
            className: "w-9 h-9 rounded-full bg-[#f1f3ff] hover:bg-[#e3e8f9] flex items-center justify-center text-[#161c27] transition-all",
            type: "button",
            children: /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[18px]", children: "close" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: "bg-[#f1f3ff] rounded-2xl p-4 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-2 text-[#012d1d] font-bold text-[14px]", children: [
          /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[20px]", children: "smart_toy" }),
          /* @__PURE__ */ jsx12("span", { children: "Dandeli AI Trip Guide" })
        ] }),
        /* @__PURE__ */ jsx12("p", { className: "text-[13px] text-[#414844]", children: "Get personalized 3-day adventure itineraries and rafting safety tips instantly." }),
        /* @__PURE__ */ jsx12(
          "button",
          {
            onClick: () => {
              onClose();
              onOpenAiConcierge();
            },
            className: "mt-1 py-2 px-4 rounded-xl bg-[#012d1d] text-white font-semibold text-[13px] shadow-sm hover:bg-[#1b4332] transition-all",
            type: "button",
            children: "Launch AI Concierge \u{1F916}"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs12("nav", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxs12(
          "button",
          {
            onClick: () => {
              setActiveTab("explore");
              onClose();
            },
            className: "flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all",
            children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[#006688]", children: "home" }),
              /* @__PURE__ */ jsx12("span", { children: "Home" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs12(
          "button",
          {
            onClick: () => {
              setActiveTab("stays");
              onClose();
            },
            className: "flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all",
            children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[#006688]", children: "cottage" }),
              /* @__PURE__ */ jsx12("span", { children: "Stays & Resorts" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs12(
          "button",
          {
            onClick: () => {
              setActiveTab("activities");
              onClose();
            },
            className: "flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all",
            children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[#006688]", children: "kayaking" }),
              /* @__PURE__ */ jsx12("span", { children: "Rafting & Activities" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs12(
          "button",
          {
            onClick: () => {
              setActiveTab("packages");
              onClose();
            },
            className: "flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all",
            children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[#006688]", children: "local_activity" }),
              /* @__PURE__ */ jsx12("span", { children: "All-Inclusive Packages" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs12(
          "button",
          {
            onClick: () => {
              setActiveTab("my-bookings");
              onClose();
            },
            className: "flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all",
            children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[#006688]", children: "confirmation_number" }),
              /* @__PURE__ */ jsx12("span", { children: "My Bookings & E-Tickets" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs12(
          "button",
          {
            onClick: () => {
              setActiveTab("about");
              onClose();
            },
            className: "flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all",
            children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[#006688]", children: "info" }),
              /* @__PURE__ */ jsx12("span", { children: "About DandeliTours" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs12(
          "button",
          {
            onClick: () => {
              if (onOpenMap) onOpenMap();
              onClose();
            },
            className: "flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all",
            children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[#006688]", children: "map" }),
              /* @__PURE__ */ jsx12("span", { children: "View Map" })
            ]
          }
        ),
        onToggleTheme && /* @__PURE__ */ jsxs12(
          "button",
          {
            onClick: onToggleTheme,
            className: "flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all",
            type: "button",
            children: [
              /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx12("span", { className: `material-symbols-outlined ${isDarkMode ? "text-amber-400" : "text-[#012d1d]"}`, children: isDarkMode ? "light_mode" : "dark_mode" }),
                /* @__PURE__ */ jsx12("span", { children: isDarkMode ? "Light Mode" : "Dark Mode" })
              ] }),
              /* @__PURE__ */ jsx12("span", { className: "text-[12px] px-2.5 py-1 rounded-full bg-[#e8eeff] text-[#012d1d] font-bold", children: isDarkMode ? "Dark \u{1F319}" : "Light \u2600\uFE0F" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs12(
          "a",
          {
            href: "https://wa.me/919480123456?text=Hello%20DandeliTours!%20I%20would%20like%20to%20inquire%20about%20stays%20and%20rafting%20packages.",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#25D366]/15 text-[#161c27] font-semibold text-[15px] transition-all",
            children: [
              /* @__PURE__ */ jsx12("img", { src: "/assets/whatsapp_logo.png", alt: "WhatsApp", className: "w-5 h-5 object-contain" }),
              /* @__PURE__ */ jsxs12("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx12("span", { children: "WhatsApp Support" }),
                /* @__PURE__ */ jsx12("span", { className: "text-[11px] text-[#075e54] font-medium", children: "+91 94801 23456" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs12("div", { className: "pt-4 border-t border-[rgba(27,67,50,0.08)] flex flex-col gap-2 text-[12px] text-[#414844]", children: [
      /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[16px] text-[#1b4332]", children: "verified" }),
        /* @__PURE__ */ jsx12("span", { children: "Government Certified Eco-Tourism Partner" })
      ] }),
      /* @__PURE__ */ jsx12("span", { children: "\xA9 2026 DandeliTours Wild & Adventure" })
    ] })
  ] }) });
};

// src/components/AiConciergeModal.tsx
import { useState as useState5 } from "react";
import { jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
var AiConciergeModal = ({ onClose }) => {
  const [prompt, setPrompt] = useState5("Create a 3-day itinerary for white water rafting and jungle stay in Dandeli");
  const [travelDates] = useState5("18 Oct - 20 Oct 2026");
  const [loading, setLoading] = useState5(false);
  const [recommendation, setRecommendation] = useState5(null);
  const handleAskAI = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecommendation(null);
    try {
      const res = await fetch("/api/ai-recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, travelDates, groupSize: "2 guests" })
      });
      const data = await res.json();
      if (data.recommendation) {
        setRecommendation(data.recommendation);
      } else {
        setRecommendation(data.error || "Failed to generate recommendation.");
      }
    } catch (err) {
      setRecommendation("Network error or AI service unavailable. Please check your Gemini API key configuration.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx13("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs13("div", { className: "bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxs13("div", { className: "px-6 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between bg-[#012d1d] text-white", children: [
      /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[24px] text-[#c1ecd4]", children: "smart_toy" }),
        /* @__PURE__ */ jsxs13("div", { children: [
          /* @__PURE__ */ jsx13("h2", { className: "font-epilogue text-[18px] font-bold", children: "Dandeli Wilds & Waters AI Trip Guide" }),
          /* @__PURE__ */ jsx13("span", { className: "text-[12px] text-[#c1ecd4]", children: "Powered by Google Gemini" })
        ] })
      ] }),
      /* @__PURE__ */ jsx13(
        "button",
        {
          onClick: onClose,
          className: "w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all",
          type: "button",
          children: /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[18px]", children: "close" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "p-6 flex flex-col gap-5 overflow-y-auto flex-grow", children: [
      /* @__PURE__ */ jsxs13("form", { onSubmit: handleAskAI, className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx13("label", { className: "text-[13px] font-bold text-[#161c27]", children: "What would you like to know about your Dandeli trip?" }),
        /* @__PURE__ */ jsxs13("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx13(
            "input",
            {
              type: "text",
              value: prompt,
              onChange: (e) => setPrompt(e.target.value),
              placeholder: "e.g. Best rapids for rafting in October...",
              className: "flex-grow px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.2)] text-[14px] text-[#161c27] outline-none focus:border-[#012d1d]",
              required: true
            }
          ),
          /* @__PURE__ */ jsx13(
            "button",
            {
              type: "submit",
              disabled: loading,
              className: "px-5 py-3 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md transition-all disabled:opacity-50 shrink-0",
              children: loading ? "Thinking..." : "Ask AI"
            }
          )
        ] })
      ] }),
      loading && /* @__PURE__ */ jsxs13("div", { className: "flex flex-col items-center justify-center py-10 gap-3", children: [
        /* @__PURE__ */ jsx13("div", { className: "w-8 h-8 rounded-full border-4 border-[#012d1d] border-t-transparent animate-spin" }),
        /* @__PURE__ */ jsx13("span", { className: "text-[14px] text-[#414844]", children: "Consulting local naturalists and river rafting guides..." })
      ] }),
      recommendation && !loading && /* @__PURE__ */ jsxs13("div", { className: "bg-[#f1f3ff] rounded-2xl p-5 border border-[rgba(27,67,50,0.1)] flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2 text-[#012d1d] font-bold text-[15px]", children: [
          /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[20px]", children: "auto_awesome" }),
          /* @__PURE__ */ jsx13("span", { children: "AI Expert Recommendations" })
        ] }),
        /* @__PURE__ */ jsx13("div", { className: "prose text-[14px] text-[#161c27] leading-relaxed whitespace-pre-wrap", children: recommendation })
      ] })
    ] })
  ] }) });
};

// src/components/AboutView.tsx
import { useState as useState6 } from "react";
import { jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
var AboutView = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState6(0);
  const faqs = [
    {
      q: "What is the best time of year to visit Dandeli?",
      a: "The best time to visit Dandeli is between October and May. The weather is pleasant, temperatures range from 20\xB0C to 30\xB0C, and water levels in the Kali River are ideal for white-water rafting and water sports."
    },
    {
      q: "Is white-water rafting safe for beginners and non-swimmers?",
      a: "Yes, absolutely! The Kali River rafting stretch features Grade II and III rapids, supervised by internationally certified river guides. Mandatory high-buoyancy life jackets and safety briefings are provided, and swimming is not required."
    },
    {
      q: "Are meals included with resort stays and adventure packages?",
      a: "Most eco-resorts and packages include 3 nutritious meals daily (breakfast, lunch, and dinner) featuring authentic Malnad cuisine and multi-cuisine buffets, with both vegetarian and non-vegetarian options."
    },
    {
      q: "How do I reach Dandeli?",
      a: "The nearest airport is Hubli (HBX) at ~75 km. The nearest major railway stations are Alnavar (55 km) and Dharwad (60 km). Overnight AC luxury buses run daily from Bengaluru, Pune, Mumbai, and Goa."
    },
    {
      q: "What wildlife can I expect to see in the Dandeli Wildlife Sanctuary?",
      a: "Dandeli is part of the Anshi-Dandeli Tiger Reserve. You can spot black panthers, leopards, Indian bisons, spotted deer, crocodiles in the Kali River, and over 200 species of colorful birds including the Great Hornbill."
    },
    {
      q: "What is the cancellation and refund policy?",
      a: "We offer free cancellation up to 48 hours prior to your check-in date with a 100% instant refund. Modifications to dates or guest counts can also be done anytime via your My Bookings tab."
    }
  ];
  return /* @__PURE__ */ jsxs14("div", { className: "px-4 py-6 max-w-4xl mx-auto flex flex-col gap-8 animate-in fade-in duration-200", children: [
    /* @__PURE__ */ jsxs14("div", { className: "bg-gradient-to-r from-[#012d1d] to-[#1b4332] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx14("span", { className: "text-[#c1ecd4] font-semibold text-[13px] uppercase tracking-wider", children: "About DandeliTours" }),
      /* @__PURE__ */ jsx14("h1", { className: "font-epilogue text-[28px] sm:text-[42px] font-bold leading-tight", children: "Your Gateway to the Untamed Western Ghats" }),
      /* @__PURE__ */ jsx14("p", { className: "text-[15px] sm:text-[16px] text-[#e8eeff]/90 leading-relaxed max-w-2xl", children: "Founded in the heart of Karnataka's biodiversity hotspot, DandeliTours is dedicated to sustainable eco-tourism, thrilling whitewater adventures on the Kali River, and immersive wildlife conservation." })
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs14("div", { className: "bg-white p-6 rounded-2xl shadow-sm border border-[rgba(27,67,50,0.06)] flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx14("div", { className: "w-12 h-12 rounded-xl bg-[#c1ecd4] text-[#002114] flex items-center justify-center font-bold", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[24px]", children: "forest" }) }),
        /* @__PURE__ */ jsx14("h3", { className: "font-epilogue text-[18px] font-bold text-[#161c27]", children: "Eco-Tourism First" }),
        /* @__PURE__ */ jsx14("p", { className: "text-[14px] text-[#414844] leading-relaxed", children: "We partner exclusively with certified eco-resorts and local guides who protect the delicate Anshi-Dandeli Tiger Reserve and Kali River basin." })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "bg-white p-6 rounded-2xl shadow-sm border border-[rgba(27,67,50,0.06)] flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx14("div", { className: "w-12 h-12 rounded-xl bg-[#c2e8ff] text-[#004d68] flex items-center justify-center font-bold", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[24px]", children: "kayaking" }) }),
        /* @__PURE__ */ jsx14("h3", { className: "font-epilogue text-[18px] font-bold text-[#161c27]", children: "Certified Adventure" }),
        /* @__PURE__ */ jsx14("p", { className: "text-[14px] text-[#414844] leading-relaxed", children: "All white-water rafting instructors hold international certifications, and every expedition follows strict safety protocols with top-tier gear." })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "bg-white p-6 rounded-2xl shadow-sm border border-[rgba(27,67,50,0.06)] flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx14("div", { className: "w-12 h-12 rounded-xl bg-[#ffdad2] text-[#3c0700] flex items-center justify-center font-bold", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[24px]", children: "favorite" }) }),
        /* @__PURE__ */ jsx14("h3", { className: "font-epilogue text-[18px] font-bold text-[#161c27]", children: "Community Support" }),
        /* @__PURE__ */ jsx14("p", { className: "text-[14px] text-[#414844] leading-relaxed", children: "A portion of every booking directly supports local indigenous Malnad communities, village schools, and river cleanliness drives." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: "bg-[#f1f3ff] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-around gap-6 text-center", children: [
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx14("span", { className: "font-epilogue text-[32px] sm:text-[40px] font-bold text-[#012d1d]", children: "12,500+" }),
        /* @__PURE__ */ jsx14("span", { className: "text-[13px] text-[#414844] font-semibold", children: "Happy Adventurers" })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx14("span", { className: "font-epilogue text-[32px] sm:text-[40px] font-bold text-[#006688]", children: "48+" }),
        /* @__PURE__ */ jsx14("span", { className: "text-[13px] text-[#414844] font-semibold", children: "Verified Eco Stays" })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx14("span", { className: "font-epilogue text-[32px] sm:text-[40px] font-bold text-[#012d1d]", children: "4.9 / 5" }),
        /* @__PURE__ */ jsx14("span", { className: "text-[13px] text-[#414844] font-semibold", children: "Average Guest Rating" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: "bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(27,67,50,0.06)] shadow-sm flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsx14("span", { className: "text-[#006688] font-bold text-[12px] uppercase tracking-wider", children: "Got Questions?" }),
        /* @__PURE__ */ jsx14("h2", { className: "font-epilogue text-[22px] sm:text-[26px] font-bold text-[#161c27]", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx14("p", { className: "text-[14px] text-[#414844]", children: "Everything you need to know about planning your Dandeli trip, safety, and online bookings." })
      ] }),
      /* @__PURE__ */ jsx14("div", { className: "flex flex-col gap-3", children: faqs.map((faq, idx) => {
        const isOpen = openFaqIdx === idx;
        return /* @__PURE__ */ jsxs14(
          "div",
          {
            className: "border border-[rgba(27,67,50,0.1)] rounded-2xl overflow-hidden transition-all bg-[#f9f9ff]",
            children: [
              /* @__PURE__ */ jsxs14(
                "button",
                {
                  onClick: () => setOpenFaqIdx(isOpen ? null : idx),
                  className: "w-full px-5 py-4 flex items-center justify-between text-left font-epilogue font-bold text-[16px] text-[#161c27] hover:bg-[#f1f3ff] transition-all",
                  type: "button",
                  children: [
                    /* @__PURE__ */ jsx14("span", { children: faq.q }),
                    /* @__PURE__ */ jsx14("span", { className: `material-symbols-outlined text-[20px] transition-transform duration-200 ${isOpen ? "rotate-180 text-[#012d1d]" : "text-[#414844]"}`, children: "expand_more" })
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsx14("div", { className: "px-5 pb-5 text-[14px] text-[#414844] leading-relaxed border-t border-[rgba(27,67,50,0.06)] pt-3 bg-white", children: faq.a })
            ]
          },
          idx
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: "bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(27,67,50,0.06)] shadow-sm flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx14("h3", { className: "font-epilogue text-[20px] font-bold text-[#161c27]", children: "Get in Touch with Our Dandeli Base" }),
      /* @__PURE__ */ jsx14("p", { className: "text-[14px] text-[#414844] leading-relaxed", children: "Planning a customized corporate retreat, family adventure, or romantic treehouse getaway? Our local naturalists are here to assist you 24/7." }),
      /* @__PURE__ */ jsxs14("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2", children: [
        /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-3 bg-[#f1f3ff] p-3.5 rounded-2xl", children: [
          /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[24px] text-[#006688]", children: "location_on" }),
          /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx14("span", { className: "text-[12px] font-bold text-[#414844] uppercase", children: "Base Office" }),
            /* @__PURE__ */ jsx14("span", { className: "text-[14px] font-semibold text-[#161c27]", children: "Kali River Bank, Ganeshgudi, Dandeli" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-3 bg-[#f1f3ff] p-3.5 rounded-2xl", children: [
          /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[24px] text-[#1b4332]", children: "call" }),
          /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx14("span", { className: "text-[12px] font-bold text-[#414844] uppercase", children: "Support Hotline" }),
            /* @__PURE__ */ jsx14("span", { className: "text-[14px] font-semibold text-[#161c27]", children: "+91 94801 23456" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs14(
          "a",
          {
            href: "https://wa.me/919480123456?text=Hello%20DandeliTours!%20I%20would%20like%20to%20inquire%20about%20stays%20and%20rafting%20packages.",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-3 bg-[#e7f9ee] hover:bg-[#d8f5e2] p-3.5 rounded-2xl border border-[#25D366]/30 transition-all group",
            children: [
              /* @__PURE__ */ jsx14("img", { src: "/assets/whatsapp_logo.png", alt: "WhatsApp", className: "w-6 h-6 object-contain" }),
              /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx14("span", { className: "text-[12px] font-bold text-[#075e54] uppercase", children: "WhatsApp Chat" }),
                /* @__PURE__ */ jsx14("span", { className: "text-[14px] font-semibold text-[#161c27] group-hover:text-[#075e54] transition-colors", children: "Instant 24x7 Help" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
};

// src/components/TourismGuideSection.tsx
import { useState as useState7 } from "react";
import { jsx as jsx15, jsxs as jsxs15 } from "react/jsx-runtime";
var TourismGuideSection = () => {
  const [activeTab, setActiveTab] = useState7("overview");
  return /* @__PURE__ */ jsxs15("div", { className: "bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(27,67,50,0.08)] shadow-sm flex flex-col gap-6 my-6", children: [
    /* @__PURE__ */ jsxs15("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx15("span", { className: "text-[#006688] font-semibold text-[13px] uppercase tracking-wider", children: "Comprehensive Visitor Guide" }),
      /* @__PURE__ */ jsx15("h2", { className: "font-epilogue text-[24px] sm:text-[28px] font-bold text-[#161c27]", children: "Dandeli Tourism & Adventure Handbook" }),
      /* @__PURE__ */ jsx15("p", { className: "text-[14px] text-[#414844] max-w-3xl leading-relaxed", children: "Plan your escape to Karnataka's premier wildlife and whitewater destination. Explore expert insights on seasonal weather, river safety, tiger reserve guidelines, and travel itineraries." })
    ] }),
    /* @__PURE__ */ jsxs15("div", { className: "flex flex-wrap gap-2 border-b border-[rgba(27,67,50,0.08)] pb-4", children: [
      /* @__PURE__ */ jsx15(
        "button",
        {
          onClick: () => setActiveTab("overview"),
          className: `px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${activeTab === "overview" ? "bg-[#012d1d] text-white shadow-sm" : "bg-[#f1f3ff] text-[#414844] hover:bg-[#e8eeff]"}`,
          type: "button",
          children: "\u{1F332} Destination Overview"
        }
      ),
      /* @__PURE__ */ jsx15(
        "button",
        {
          onClick: () => setActiveTab("wildlife"),
          className: `px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${activeTab === "wildlife" ? "bg-[#012d1d] text-white shadow-sm" : "bg-[#f1f3ff] text-[#414844] hover:bg-[#e8eeff]"}`,
          type: "button",
          children: "\u{1F405} Wildlife & Tiger Reserve"
        }
      ),
      /* @__PURE__ */ jsx15(
        "button",
        {
          onClick: () => setActiveTab("rafting"),
          className: `px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${activeTab === "rafting" ? "bg-[#012d1d] text-white shadow-sm" : "bg-[#f1f3ff] text-[#414844] hover:bg-[#e8eeff]"}`,
          type: "button",
          children: "\u{1F6F6} Kali River Rafting"
        }
      ),
      /* @__PURE__ */ jsx15(
        "button",
        {
          onClick: () => setActiveTab("travel"),
          className: `px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${activeTab === "travel" ? "bg-[#012d1d] text-white shadow-sm" : "bg-[#f1f3ff] text-[#414844] hover:bg-[#e8eeff]"}`,
          type: "button",
          children: "\u{1F697} How to Reach & Weather"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs15("div", { className: "pt-2", children: [
      activeTab === "overview" && /* @__PURE__ */ jsxs15("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200", children: [
        /* @__PURE__ */ jsxs15("div", { className: "bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx15("span", { className: "text-[12px] font-bold text-[#006688] uppercase", children: "Location & Terrain" }),
          /* @__PURE__ */ jsx15("h4", { className: "font-epilogue text-[16px] font-bold text-[#161c27]", children: "Western Ghats Foothills" }),
          /* @__PURE__ */ jsx15("p", { className: "text-[13px] text-[#414844] leading-relaxed", children: "Situated on the banks of the Kali River in Uttara Kannada district, Dandeli is surrounded by dense evergreen and deciduous forests at an elevation of 1,551 ft." })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx15("span", { className: "text-[12px] font-bold text-[#006688] uppercase", children: "Best Time to Visit" }),
          /* @__PURE__ */ jsx15("h4", { className: "font-epilogue text-[16px] font-bold text-[#161c27]", children: "October to May" }),
          /* @__PURE__ */ jsx15("p", { className: "text-[13px] text-[#414844] leading-relaxed", children: "Pleasant weather (18\xB0C to 30\xB0C) with post-monsoon lush greenery ideal for wildlife safaris, bird watching, and white-water rafting on full river flows." })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx15("span", { className: "text-[12px] font-bold text-[#006688] uppercase", children: "Ideal Duration" }),
          /* @__PURE__ */ jsx15("h4", { className: "font-epilogue text-[16px] font-bold text-[#161c27]", children: "3 Days / 2 Nights" }),
          /* @__PURE__ */ jsx15("p", { className: "text-[13px] text-[#414844] leading-relaxed", children: "Perfect duration to experience a riverside eco-stay, 12km river rafting expedition, night jungle safari, and Syntheri Rocks limestone cave exploration." })
        ] })
      ] }),
      activeTab === "wildlife" && /* @__PURE__ */ jsx15("div", { className: "flex flex-col md:flex-row gap-6 items-center bg-[#f1f3ff] p-6 rounded-2xl animate-in fade-in duration-200", children: /* @__PURE__ */ jsxs15("div", { className: "flex flex-col gap-3 flex-1", children: [
        /* @__PURE__ */ jsx15("span", { className: "text-[12px] font-bold text-[#1b4332] uppercase", children: "Anshi-Dandeli Tiger Reserve" }),
        /* @__PURE__ */ jsx15("h3", { className: "font-epilogue text-[20px] font-bold text-[#161c27]", children: "Home of the Black Panther" }),
        /* @__PURE__ */ jsx15("p", { className: "text-[14px] text-[#414844] leading-relaxed", children: "Spanning over 834 square kilometers, the sanctuary is renowned for elusive black panthers, Bengal tigers, Indian bisons (gaur), leopards, sloth bears, and over 300 species of exotic birds such as the Great Hornbill and Malabar pied hornbill." }),
        /* @__PURE__ */ jsxs15("div", { className: "flex flex-wrap gap-3 pt-2", children: [
          /* @__PURE__ */ jsx15("span", { className: "px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs", children: "\u{1F43E} Jeep Safaris" }),
          /* @__PURE__ */ jsx15("span", { className: "px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs", children: "\u{1F99C} Bird Watching" }),
          /* @__PURE__ */ jsx15("span", { className: "px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs", children: "\u{1F33F} Naturalist Walks" })
        ] })
      ] }) }),
      activeTab === "rafting" && /* @__PURE__ */ jsx15("div", { className: "flex flex-col md:flex-row gap-6 items-center bg-[#f1f3ff] p-6 rounded-2xl animate-in fade-in duration-200", children: /* @__PURE__ */ jsxs15("div", { className: "flex flex-col gap-3 flex-1", children: [
        /* @__PURE__ */ jsx15("span", { className: "text-[12px] font-bold text-[#006688] uppercase", children: "Kali River Waters" }),
        /* @__PURE__ */ jsx15("h3", { className: "font-epilogue text-[20px] font-bold text-[#161c27]", children: "Grade III Rapids Adventure" }),
        /* @__PURE__ */ jsx15("p", { className: "text-[14px] text-[#414844] leading-relaxed", children: "Dandeli offers one of South India's finest whitewater rafting experiences over a 12km stretch featuring exhilarating Grade II and III rapids like 'Stanley's Gap' and 'Retainer'. Supervised by international-grade instructors with complete safety gear." }),
        /* @__PURE__ */ jsxs15("div", { className: "flex flex-wrap gap-3 pt-2", children: [
          /* @__PURE__ */ jsx15("span", { className: "px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs", children: "\u{1F6F6} 12km Rafting Run" }),
          /* @__PURE__ */ jsx15("span", { className: "px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs", children: "\u{1F9BA} Certified Instructors" }),
          /* @__PURE__ */ jsx15("span", { className: "px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs", children: "\u{1F30A} Kayaking & Boating" })
        ] })
      ] }) }),
      activeTab === "travel" && /* @__PURE__ */ jsxs15("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200", children: [
        /* @__PURE__ */ jsxs15("div", { className: "bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxs15("h4", { className: "font-epilogue text-[16px] font-bold text-[#161c27] flex items-center gap-2", children: [
            /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[#006688]", children: "directions_car" }),
            "How to Get There"
          ] }),
          /* @__PURE__ */ jsxs15("ul", { className: "text-[14px] text-[#414844] space-y-2", children: [
            /* @__PURE__ */ jsxs15("li", { children: [
              "\u2022 ",
              /* @__PURE__ */ jsx15("strong", { children: "By Air:" }),
              " Hubli Airport (HBX) is 75 km away; Goa International Airport (GOI) is 120 km away."
            ] }),
            /* @__PURE__ */ jsxs15("li", { children: [
              "\u2022 ",
              /* @__PURE__ */ jsx15("strong", { children: "By Rail:" }),
              " Alnavar Junction (32 km) or Londa Junction (48 km) are the nearest railway stations."
            ] }),
            /* @__PURE__ */ jsxs15("li", { children: [
              "\u2022 ",
              /* @__PURE__ */ jsx15("strong", { children: "By Road:" }),
              " Well connected by scenic highways from Bangalore (460 km), Goa (110 km), and Pune (450 km)."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxs15("h4", { className: "font-epilogue text-[16px] font-bold text-[#161c27] flex items-center gap-2", children: [
            /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[#1b4332]", children: "backpack" }),
            "Travel Essentials & Tips"
          ] }),
          /* @__PURE__ */ jsxs15("ul", { className: "text-[14px] text-[#414844] space-y-2", children: [
            /* @__PURE__ */ jsx15("li", { children: "\u2022 Carry comfortable outdoor clothing, sturdy trekking shoes, and insect repellent." }),
            /* @__PURE__ */ jsx15("li", { children: "\u2022 Valid government photo ID is mandatory for forest sanctuary entry and check-in." }),
            /* @__PURE__ */ jsx15("li", { children: "\u2022 Pre-booking adventure activities and eco-stays ensures confirmed slots during weekends." })
          ] })
        ] })
      ] })
    ] })
  ] });
};

// src/components/PackageBookingModal.tsx
import { useState as useState8 } from "react";
import { jsx as jsx16, jsxs as jsxs16 } from "react/jsx-runtime";
var PackageBookingModal = ({ pkg, onClose, onConfirm }) => {
  const [guests, setGuests] = useState8(2);
  const [checkInDate, setCheckInDate] = useState8("18 Oct 2026");
  const [guestName, setGuestName] = useState8("");
  const [guestEmail, setGuestEmail] = useState8("");
  const [guestPhone, setGuestPhone] = useState8("");
  const [specialRequests, setSpecialRequests] = useState8("");
  const totalPrice = pkg.price * (guests > 0 ? guests : 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      itemName: pkg.title,
      itemType: "package",
      image: pkg.image,
      dates: `${checkInDate} (${pkg.duration})`,
      guests: `${guests} Guest${guests > 1 ? "s" : ""}`,
      totalPrice,
      location: "Dandeli Eco-Resort & Tiger Sanctuary"
    });
  };
  return /* @__PURE__ */ jsx16("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200", children: /* @__PURE__ */ jsxs16("div", { className: "bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]", children: [
    /* @__PURE__ */ jsxs16("div", { className: "relative h-48 bg-[#012d1d]", children: [
      /* @__PURE__ */ jsx16("img", { src: pkg.image, alt: pkg.title, className: "w-full h-full object-cover opacity-80" }),
      /* @__PURE__ */ jsx16("div", { className: "absolute inset-0 bg-gradient-to-t from-[#012d1d] via-black/30 to-transparent" }),
      /* @__PURE__ */ jsx16(
        "button",
        {
          onClick: onClose,
          className: "absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#161c27] flex items-center justify-center shadow-md hover:bg-white",
          type: "button",
          children: /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-[20px]", children: "close" })
        }
      ),
      /* @__PURE__ */ jsxs16("div", { className: "absolute bottom-4 left-6 right-6", children: [
        /* @__PURE__ */ jsx16("span", { className: "px-2.5 py-0.5 rounded-full bg-[#c1ecd4] text-[#012d1d] text-[12px] font-bold", children: pkg.duration }),
        /* @__PURE__ */ jsx16("h2", { className: "font-epilogue text-[20px] font-bold text-white mt-1 drop-shadow-sm", children: pkg.title })
      ] })
    ] }),
    /* @__PURE__ */ jsxs16("form", { onSubmit: handleSubmit, className: "p-6 flex flex-col gap-4 overflow-y-auto", children: [
      /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx16("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Full Name" }),
        /* @__PURE__ */ jsx16(
          "input",
          {
            type: "text",
            required: true,
            placeholder: "e.g. Rahul Sharma",
            value: guestName,
            onChange: (e) => setGuestName(e.target.value),
            className: "px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx16("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Email Address" }),
          /* @__PURE__ */ jsx16(
            "input",
            {
              type: "email",
              required: true,
              placeholder: "rahul@example.com",
              value: guestEmail,
              onChange: (e) => setGuestEmail(e.target.value),
              className: "px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx16("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Phone Number" }),
          /* @__PURE__ */ jsx16(
            "input",
            {
              type: "tel",
              required: true,
              placeholder: "+91 98765 43210",
              value: guestPhone,
              onChange: (e) => setGuestPhone(e.target.value),
              className: "px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx16("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Check-in Date" }),
          /* @__PURE__ */ jsx16(
            "input",
            {
              type: "text",
              value: checkInDate,
              onChange: (e) => setCheckInDate(e.target.value),
              className: "px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx16("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Number of Guests" }),
          /* @__PURE__ */ jsx16(
            "input",
            {
              type: "number",
              min: "1",
              max: "20",
              value: guests,
              onChange: (e) => setGuests(parseInt(e.target.value) || 1),
              className: "px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx16("label", { className: "text-[13px] font-semibold text-[#161c27]", children: "Special Requests or Dietary Notes (Optional)" }),
        /* @__PURE__ */ jsx16(
          "textarea",
          {
            rows: 2,
            placeholder: "e.g. Vegetarian meals preferred, anniversary setup...",
            value: specialRequests,
            onChange: (e) => setSpecialRequests(e.target.value),
            className: "px-4 py-2 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "bg-[#f9f9ff] p-4 rounded-2xl flex items-center justify-between border border-[rgba(27,67,50,0.06)] mt-2", children: [
        /* @__PURE__ */ jsxs16("div", { children: [
          /* @__PURE__ */ jsx16("span", { className: "text-[12px] text-[#414844] block", children: "Total Online Price" }),
          /* @__PURE__ */ jsxs16("span", { className: "font-epilogue text-[22px] font-bold text-[#012d1d]", children: [
            "\u20B9",
            totalPrice.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsx16(
          "button",
          {
            type: "submit",
            className: "px-6 py-3 bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold rounded-xl text-[15px] shadow-lg active:scale-95 transition-transform",
            children: "Confirm Online Booking \u{1F680}"
          }
        )
      ] })
    ] })
  ] }) });
};

// src/components/WeatherWidget.tsx
import { jsx as jsx17, jsxs as jsxs17 } from "react/jsx-runtime";
var WeatherWidget = () => {
  return /* @__PURE__ */ jsxs17("div", { className: "bg-gradient-to-r from-[#1b4332] to-[#012d1d] rounded-2xl p-4 sm:p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 my-4", children: [
    /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-3.5", children: [
      /* @__PURE__ */ jsx17("div", { className: "w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-300", children: /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[28px]", children: "wb_sunny" }) }),
      /* @__PURE__ */ jsxs17("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx17("span", { className: "font-epilogue text-[18px] font-bold", children: "Dandeli, Karnataka" }),
          /* @__PURE__ */ jsx17("span", { className: "px-2 py-0.5 rounded-full bg-[#c1ecd4] text-[#012d1d] text-[11px] font-bold", children: "Live 28\xB0C" })
        ] }),
        /* @__PURE__ */ jsx17("span", { className: "text-[13px] text-[#e8eeff]/80", children: "Partly cloudy \u2022 Ideal for White-Water Rafting & Jungle Safari" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-3 sm:gap-6 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto justify-around", children: [
      /* @__PURE__ */ jsxs17("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx17("span", { className: "text-[11px] text-[#c1ecd4] font-semibold uppercase", children: "Kali River Flow" }),
        /* @__PURE__ */ jsx17("span", { className: "font-epilogue font-bold text-[15px] text-white", children: "Grade III (Optimal)" })
      ] }),
      /* @__PURE__ */ jsxs17("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx17("span", { className: "text-[11px] text-[#c1ecd4] font-semibold uppercase", children: "Air Quality" }),
        /* @__PURE__ */ jsx17("span", { className: "font-epilogue font-bold text-[15px] text-white", children: "Excellent (AQI 32)" })
      ] }),
      /* @__PURE__ */ jsxs17("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx17("span", { className: "text-[11px] text-[#c1ecd4] font-semibold uppercase", children: "Humidity" }),
        /* @__PURE__ */ jsx17("span", { className: "font-epilogue font-bold text-[15px] text-white", children: "68%" })
      ] })
    ] })
  ] });
};

// src/components/TestimonialsSection.tsx
import { jsx as jsx18, jsxs as jsxs18 } from "react/jsx-runtime";
var TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Family Vacationer from Bengaluru",
      comment: "The 12km white-water rafting on the Kali River was exhilarating! DandeliTours booked our riverside resort seamlessly and everything was exceptionally well-managed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya & Karthik",
      role: "Couple Getaway",
      comment: "Staying in the treehouse cottage surrounded by hornbills and emerald forests was magical. The step-by-step booking and instant e-ticket made our trip stress-free.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Vikramaditya Rao",
      role: "Wildlife Photographer",
      comment: "Spotting the black panther in Anshi-Dandeli Tiger Reserve was a dream come true. The local naturalists provided through DandeliTours are top-tier professionals.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ];
  return /* @__PURE__ */ jsxs18("div", { className: "bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(27,67,50,0.08)] shadow-sm flex flex-col gap-6 my-6", children: [
    /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx18("span", { className: "text-[#006688] font-semibold text-[13px] uppercase tracking-wider", children: "Trusted by 12,500+ Adventurers" }),
      /* @__PURE__ */ jsx18("h2", { className: "font-epilogue text-[24px] sm:text-[28px] font-bold text-[#161c27]", children: "What Travelers Say About DandeliTours" }),
      /* @__PURE__ */ jsx18("p", { className: "text-[14px] text-[#414844]", children: "Real experiences from guests who explored our eco-resorts and river expeditions." })
    ] }),
    /* @__PURE__ */ jsx18("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: testimonials.map((t, idx) => /* @__PURE__ */ jsxs18("div", { className: "bg-[#f9f9ff] p-6 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col justify-between gap-4", children: [
      /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx18("div", { className: "flex items-center gap-1 text-amber-500", children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[18px]", children: "star" }, i)) }),
        /* @__PURE__ */ jsxs18("p", { className: "text-[14px] text-[#414844] leading-relaxed italic", children: [
          '"',
          t.comment,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-3 pt-4 border-t border-[rgba(27,67,50,0.08)]", children: [
        /* @__PURE__ */ jsx18("img", { src: t.avatar, alt: t.name, className: "w-11 h-11 rounded-full object-cover shadow-sm" }),
        /* @__PURE__ */ jsxs18("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx18("span", { className: "font-epilogue font-bold text-[14px] text-[#161c27]", children: t.name }),
          /* @__PURE__ */ jsx18("span", { className: "text-[12px] text-[#414844]", children: t.role })
        ] })
      ] })
    ] }, idx)) })
  ] });
};

// src/components/HomeQuickHighlights.tsx
import { jsx as jsx19, jsxs as jsxs19 } from "react/jsx-runtime";
var HomeQuickHighlights = ({ setActiveTab }) => {
  const highlights = [
    {
      title: "Luxury Resorts & Stays",
      subtitle: "Treehouses & Riverside Cottages",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      tab: "stays",
      badge: "48+ Eco Stays"
    },
    {
      title: "Kali River Rafting",
      subtitle: "Grade III Rapids & Kayaking",
      image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=80",
      tab: "activities",
      badge: "Certified Experts"
    },
    {
      title: "Student, Family & Couple Packages",
      subtitle: "All-inclusive multi-day itineraries",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      tab: "packages",
      badge: "Best Value"
    }
  ];
  return /* @__PURE__ */ jsx19("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 my-6", children: highlights.map((h, idx) => /* @__PURE__ */ jsxs19(
    "div",
    {
      onClick: () => setActiveTab(h.tab),
      className: "group relative h-64 rounded-3xl overflow-hidden shadow-md cursor-pointer flex flex-col justify-end p-6 border border-[rgba(27,67,50,0.08)] transition-all hover:scale-[1.02] hover:shadow-xl",
      children: [
        /* @__PURE__ */ jsx19(
          "img",
          {
            src: h.image,
            alt: h.title,
            className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          }
        ),
        /* @__PURE__ */ jsx19("div", { className: "absolute inset-0 bg-gradient-to-t from-[#012d1d]/90 via-[#012d1d]/30 to-transparent" }),
        /* @__PURE__ */ jsx19("span", { className: "relative z-10 w-fit px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold mb-2", children: h.badge }),
        /* @__PURE__ */ jsxs19("div", { className: "relative z-10 flex flex-col", children: [
          /* @__PURE__ */ jsx19("h3", { className: "font-epilogue text-[20px] font-bold text-white group-hover:text-[#c1ecd4] transition-colors", children: h.title }),
          /* @__PURE__ */ jsx19("span", { className: "text-[13px] text-[#e8eeff]/90", children: h.subtitle })
        ] })
      ]
    },
    idx
  )) });
};

// src/App.tsx
import { Fragment, jsx as jsx20, jsxs as jsxs20 } from "react/jsx-runtime";
var heroBannerImage = "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1800&q=80";
function App() {
  const [activeTab, setActiveTab] = useState9("explore");
  const [stays] = useState9(INITIAL_STAYS);
  const [activities] = useState9(INITIAL_ACTIVITIES);
  const [packages] = useState9(INITIAL_PACKAGES);
  const [bookings, setBookings] = useState9(INITIAL_BOOKINGS);
  const [isDarkMode, setIsDarkMode] = useState9(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dandeli_theme");
      if (saved) return saved === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dandeli_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dandeli_theme", "light");
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  const [selectedCategory, setSelectedCategory] = useState9("All");
  const [sortBy, setSortBy] = useState9("popularity");
  const [minRating, setMinRating] = useState9(0);
  const [searchParams, setSearchParams] = useState9({
    location: "Dandeli, Karnataka",
    checkIn: "18 Oct",
    checkOut: "20 Oct",
    guests: 2,
    rooms: 1
  });
  const [selectedStay, setSelectedStay] = useState9(null);
  const [selectedPackage, setSelectedPackage] = useState9(null);
  const [packageCategory, setPackageCategory] = useState9("All");
  const [isMapModalOpen, setIsMapModalOpen] = useState9(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState9(false);
  const [isMenuOpen, setIsMenuOpen] = useState9(false);
  const [isAiConciergeOpen, setIsAiConciergeOpen] = useState9(false);
  const [toastMessage, setToastMessage] = useState9(null);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };
  const handleConfirmBooking = (bookingData) => {
    const newBooking = {
      id: `bk-${Date.now()}`,
      bookingCode: `DT-${Math.floor(1e5 + Math.random() * 9e5)}`,
      ...bookingData,
      status: "Confirmed",
      createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    setBookings([newBooking, ...bookings]);
    setSelectedStay(null);
    showToast(`Booking confirmed! Code: ${newBooking.bookingCode}`);
    setActiveTab("my-bookings");
  };
  const handleCancelBooking = (id) => {
    setBookings(bookings.map((b) => b.id === id ? { ...b, status: "Cancelled" } : b));
    showToast("Booking cancelled successfully.");
  };
  const filteredStays = stays.filter((stay) => {
    if (selectedCategory !== "All" && stay.category !== selectedCategory) return false;
    if (minRating > 0 && stay.rating < minRating) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  });
  const categoryCounts = stays.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1;
    return acc;
  }, {});
  return /* @__PURE__ */ jsxs20("div", { className: `min-h-screen ${isDarkMode ? "dark bg-[#07130e] text-[#edf2f7]" : "bg-[#f9f9ff] text-[#161c27]"} flex flex-col font-['Plus_Jakarta_Sans'] pb-12 transition-colors duration-200`, children: [
    /* @__PURE__ */ jsx20(
      Header,
      {
        onOpenMenu: () => setIsMenuOpen(true),
        onOpenSearch: () => setIsModifyModalOpen(true),
        onOpenAiConcierge: () => setIsAiConciergeOpen(true),
        activeTab,
        setActiveTab,
        bookingsCount: bookings.filter((b) => b.status === "Confirmed").length,
        isDarkMode,
        onToggleTheme: toggleTheme
      }
    ),
    /* @__PURE__ */ jsx20("nav", { className: `sticky top-16 inset-x-0 z-40 ${isDarkMode ? "bg-[#0a1b14]/95 border-[rgba(82,183,136,0.18)] shadow-[0_4px_16px_rgba(0,0,0,0.4)]" : "bg-[#f9f9ff]/90 border-[rgba(27,67,50,0.06)] shadow-[0_4px_12px_-4px_rgba(27,67,50,0.04)]"} backdrop-blur-xl border-b transition-colors`, children: /* @__PURE__ */ jsxs20("div", { className: "flex items-center justify-around sm:justify-start gap-1 sm:gap-4 h-14 px-4 max-w-7xl mx-auto overflow-x-auto no-scrollbar", children: [
      [
        { id: "explore", label: "Home", icon: "home" },
        { id: "stays", label: "Stays", icon: "cottage" },
        { id: "activities", label: "Activities", icon: "kayaking" },
        { id: "packages", label: "Packages", icon: "local_activity" },
        { id: "my-bookings", label: "Bookings", icon: "confirmation_number", hasBadge: true },
        { id: "about", label: "About", icon: "info" }
      ].map((tab) => {
        const isActive = activeTab === tab.id;
        const confirmedCount = bookings.filter((b) => b.status === "Confirmed").length;
        return /* @__PURE__ */ jsxs20(
          "button",
          {
            onClick: () => setActiveTab(tab.id),
            className: `flex items-center gap-2 px-4 py-2 rounded-xl text-[14px] font-semibold transition-all shrink-0 ${isActive ? "bg-[#1b4332] text-white shadow-md" : isDarkMode ? "text-[#cbd5e1] hover:bg-[#132e22] hover:text-[#a7f3d0]" : "text-[#414844] hover:bg-[#e8eeff] hover:text-[#012d1d]"}`,
            type: "button",
            children: [
              /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[18px]", children: tab.icon }),
              /* @__PURE__ */ jsx20("span", { children: tab.label }),
              tab.hasBadge && confirmedCount > 0 && /* @__PURE__ */ jsx20("span", { className: `ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${isActive ? "bg-[#c1ecd4] text-[#012d1d]" : "bg-[#e76f51] text-white"}`, children: confirmedCount })
            ]
          },
          tab.id
        );
      }),
      /* @__PURE__ */ jsxs20(
        "button",
        {
          onClick: () => setIsMapModalOpen(true),
          className: `flex items-center gap-2 px-4 py-2 rounded-xl text-[14px] font-semibold transition-all shrink-0 ${isDarkMode ? "text-[#cbd5e1] hover:bg-[#132e22] hover:text-[#a7f3d0]" : "text-[#414844] hover:bg-[#e8eeff] hover:text-[#012d1d]"} active:scale-95`,
          type: "button",
          children: [
            /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[18px] text-[#006688]", children: "map" }),
            /* @__PURE__ */ jsx20("span", { children: "View Map" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs20("main", { className: "flex flex-col relative w-full pt-4 flex-grow max-w-7xl mx-auto w-full px-4", children: [
      (activeTab === "explore" || activeTab === "stays") && /* @__PURE__ */ jsxs20("div", { className: "py-3 flex flex-col gap-6", children: [
        activeTab === "stays" && /* @__PURE__ */ jsxs20(Fragment, { children: [
          /* @__PURE__ */ jsx20(
            SearchSummaryBar,
            {
              searchParams,
              onModify: () => setIsModifyModalOpen(true)
            }
          ),
          /* @__PURE__ */ jsx20(
            CategoryChips,
            {
              selectedCategory,
              onSelectCategory: setSelectedCategory,
              counts: categoryCounts
            }
          ),
          /* @__PURE__ */ jsx20(
            FilterSortBar,
            {
              sortBy,
              setSortBy,
              minRating,
              setMinRating,
              onOpenFilters: () => setIsModifyModalOpen(true),
              activeFilterCount: minRating > 0 ? 1 : 0
            }
          )
        ] }),
        activeTab === "explore" && /* @__PURE__ */ jsxs20(Fragment, { children: [
          /* @__PURE__ */ jsxs20("div", { className: "rounded-3xl overflow-hidden shadow-2xl w-full h-[340px] sm:h-[480px] bg-[#012d1d] relative flex items-center justify-center group", children: [
            /* @__PURE__ */ jsx20(
              "img",
              {
                src: "https://res.cloudinary.com/jn4npnn4/image/upload/f_auto,q_auto/karnatak",
                alt: "Dandeli Karnataka Tourism",
                className: "w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105",
                referrerPolicy: "no-referrer",
                onError: (e) => {
                  e.currentTarget.src = heroBannerImage;
                }
              }
            ),
            /* @__PURE__ */ jsxs20("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10", children: [
              /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsx20("span", { className: "px-3 py-1 rounded-full bg-[#c1ecd4] text-[#002114] font-bold text-[11px] sm:text-[12px] uppercase tracking-wider shadow-sm", children: "Welcome to Dandeli" }),
                /* @__PURE__ */ jsx20("span", { className: "px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-[12px] font-semibold", children: "Kali River & Tiger Reserve" })
              ] }),
              /* @__PURE__ */ jsx20("h1", { className: "font-epilogue text-[26px] sm:text-[42px] font-bold text-white drop-shadow-md leading-tight max-w-2xl", children: "Gateway to Wilderness & Rapids" }),
              /* @__PURE__ */ jsx20("p", { className: "text-[#e8eeff]/90 text-[13px] sm:text-[15px] mt-1.5 max-w-xl hidden sm:block leading-relaxed", children: "Experience crystal-clear rapids, tranquil jungle stays, and rich Western Ghats biodiversity." })
            ] })
          ] }),
          /* @__PURE__ */ jsx20(WeatherWidget, {}),
          /* @__PURE__ */ jsx20(HomeQuickHighlights, { setActiveTab }),
          /* @__PURE__ */ jsx20(TourismGuideSection, {}),
          /* @__PURE__ */ jsx20(TestimonialsSection, {})
        ] }),
        /* @__PURE__ */ jsxs20("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx20("h2", { className: "font-epilogue text-[22px] font-bold text-[#161c27]", children: activeTab === "explore" ? "Featured Stays & Eco Resorts" : `${selectedCategory} (${filteredStays.length})` }),
          activeTab === "stays" && /* @__PURE__ */ jsxs20(
            "button",
            {
              onClick: () => setIsMapModalOpen(true),
              className: "flex items-center gap-1.5 text-[#006688] font-semibold text-[14px] hover:underline",
              type: "button",
              children: [
                /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[18px]", children: "map" }),
                /* @__PURE__ */ jsx20("span", { children: "View Map" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx20("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredStays.map((stay) => /* @__PURE__ */ jsx20(
          StayCard,
          {
            stay,
            onSelect: (s) => setSelectedStay(s),
            onBook: (s) => setSelectedStay(s)
          },
          stay.id
        )) }),
        filteredStays.length === 0 && /* @__PURE__ */ jsxs20("div", { className: "flex flex-col items-center justify-center py-16 gap-3 bg-white rounded-2xl shadow-sm", children: [
          /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[48px] text-[#414844]", children: "search_off" }),
          /* @__PURE__ */ jsx20("p", { className: "font-epilogue text-[18px] font-semibold text-[#161c27]", children: "No stays found matching your filters." }),
          /* @__PURE__ */ jsx20(
            "button",
            {
              onClick: () => {
                setSelectedCategory("All");
                setMinRating(0);
              },
              className: "px-4 py-2 bg-[#012d1d] text-white rounded-xl text-[13px] font-semibold",
              children: "Reset Filters"
            }
          )
        ] })
      ] }),
      activeTab === "activities" && /* @__PURE__ */ jsxs20("div", { className: "px-4 py-4 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx20("h1", { className: "font-epilogue text-[24px] font-bold text-[#161c27]", children: "Adventure Sports & Safaris" }),
          /* @__PURE__ */ jsx20("p", { className: "text-[14px] text-[#414844]", children: "Experience Grade III whitewater rafting, jungle safaris, and coracle rides on the Kali River." })
        ] }),
        /* @__PURE__ */ jsx20("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: activities.map((act) => /* @__PURE__ */ jsx20(
          ActivityCard,
          {
            activity: act,
            onBook: (a) => {
              handleConfirmBooking({
                itemName: a.title,
                itemType: "activity",
                image: a.image,
                dates: searchParams.checkIn + " 2026 (09:00 AM)",
                guests: "2 Persons",
                totalPrice: a.price * 2,
                location: "Dandeli Adventure Hub"
              });
            }
          },
          act.id
        )) })
      ] }),
      activeTab === "packages" && (() => {
        const filteredPackages = packages.filter((pkg) => {
          if (packageCategory === "All") return true;
          if (packageCategory === "Student") return pkg.id.includes("student");
          if (packageCategory === "Group") return pkg.id.includes("group");
          if (packageCategory === "Family") return pkg.id.includes("family");
          if (packageCategory === "Couple") return pkg.id.includes("couple");
          return true;
        });
        return /* @__PURE__ */ jsxs20("div", { className: "px-4 py-4 flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsx20("h1", { className: "font-epilogue text-[24px] font-bold text-[#161c27]", children: "Student, Group, Family & Couple Packages" }),
            /* @__PURE__ */ jsx20("p", { className: "text-[14px] text-[#414844]", children: "View, select, and book online curated multi-day adventure packages tailored for every group type." })
          ] }),
          /* @__PURE__ */ jsx20("div", { className: "flex items-center gap-2 overflow-x-auto no-scrollbar pb-2", children: ["All", "Student", "Group", "Family", "Couple"].map((cat) => /* @__PURE__ */ jsx20(
            "button",
            {
              onClick: () => setPackageCategory(cat),
              className: `px-4 py-2 rounded-xl text-[14px] font-semibold transition-all shrink-0 ${packageCategory === cat ? "bg-[#1b4332] text-white shadow-sm" : "bg-white text-[#414844] border border-[rgba(27,67,50,0.1)] hover:bg-[#e8eeff]"}`,
              type: "button",
              children: cat === "All" ? "\u{1F31F} All Packages" : cat === "Student" ? "\u{1F393} Student Camp" : cat === "Group" ? "\u{1F465} Group Pass" : cat === "Family" ? "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} Family Holiday" : "\u2764\uFE0F Couple Getaway"
            },
            cat
          )) }),
          /* @__PURE__ */ jsx20("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: filteredPackages.map((pkg) => /* @__PURE__ */ jsx20(
            PackageCard,
            {
              pkg,
              onBook: (p) => setSelectedPackage(p)
            },
            pkg.id
          )) }),
          filteredPackages.length === 0 && /* @__PURE__ */ jsxs20("div", { className: "flex flex-col items-center justify-center py-16 gap-3 bg-white rounded-2xl shadow-sm", children: [
            /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[48px] text-[#414844]", children: "travel_explore" }),
            /* @__PURE__ */ jsx20("p", { className: "font-epilogue text-[18px] font-semibold text-[#161c27]", children: "No packages found for this category." }),
            /* @__PURE__ */ jsx20(
              "button",
              {
                onClick: () => setPackageCategory("All"),
                className: "px-4 py-2 bg-[#012d1d] text-white rounded-xl text-[13px] font-semibold",
                children: "View All Packages"
              }
            )
          ] })
        ] });
      })(),
      activeTab === "my-bookings" && /* @__PURE__ */ jsxs20("div", { className: "px-4 py-4 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx20("h1", { className: "font-epilogue text-[24px] font-bold text-[#161c27]", children: "My Bookings & E-Tickets" }),
          /* @__PURE__ */ jsx20("p", { className: "text-[14px] text-[#414844]", children: "Manage your upcoming reservations, download e-tickets, or modify trip details." })
        ] }),
        /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-4", children: [
          bookings.map((booking) => /* @__PURE__ */ jsx20(
            BookingCard,
            {
              booking,
              onCancel: handleCancelBooking
            },
            booking.id
          )),
          bookings.length === 0 && /* @__PURE__ */ jsxs20("div", { className: "flex flex-col items-center justify-center py-20 gap-3 bg-white rounded-2xl shadow-sm", children: [
            /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[48px] text-[#414844]", children: "confirmation_number" }),
            /* @__PURE__ */ jsx20("p", { className: "font-epilogue text-[18px] font-semibold text-[#161c27]", children: "No active bookings found." }),
            /* @__PURE__ */ jsx20(
              "button",
              {
                onClick: () => setActiveTab("stays"),
                className: "px-5 py-2.5 bg-[#012d1d] text-white rounded-xl text-[14px] font-semibold",
                children: "Explore Stays Now"
              }
            )
          ] })
        ] })
      ] }),
      activeTab === "about" && /* @__PURE__ */ jsx20(AboutView, {})
    ] }),
    /* @__PURE__ */ jsx20("aside", { className: "fixed bottom-6 right-6 z-40", children: /* @__PURE__ */ jsxs20(
      "a",
      {
        href: "https://wa.me/919480123456?text=Hello%20DandeliTours!%20I%20would%20like%20to%20inquire%20about%20stays%20and%20rafting%20packages.",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] active:scale-95 transition-all duration-200",
        title: "Chat with Dandeli Expert on WhatsApp (+91 94801 23456)",
        children: [
          /* @__PURE__ */ jsxs20("div", { className: "relative flex items-center justify-center", children: [
            /* @__PURE__ */ jsx20(
              "img",
              {
                src: "/assets/whatsapp_logo.png",
                alt: "WhatsApp",
                className: "w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm"
              }
            ),
            /* @__PURE__ */ jsx20("span", { className: "absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx20("span", { className: "w-2 h-2 bg-[#25D366] rounded-full animate-ping" }) })
          ] }),
          /* @__PURE__ */ jsx20("span", { className: "hidden sm:inline font-bold text-[14px] pr-1 whitespace-nowrap tracking-wide", children: "Chat on WhatsApp" })
        ]
      }
    ) }),
    toastMessage && /* @__PURE__ */ jsxs20("div", { className: "fixed top-20 right-4 z-50 bg-[#012d1d] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-200", children: [
      /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[20px] text-[#c1ecd4]", children: "check_circle" }),
      /* @__PURE__ */ jsx20("span", { className: "text-[14px] font-semibold", children: toastMessage })
    ] }),
    selectedStay && /* @__PURE__ */ jsx20(
      PropertyDetailsModal,
      {
        stay: selectedStay,
        onClose: () => setSelectedStay(null),
        onConfirmBooking: handleConfirmBooking
      }
    ),
    isMapModalOpen && /* @__PURE__ */ jsx20(
      MapViewModal,
      {
        stays,
        onClose: () => setIsMapModalOpen(false),
        onSelectStay: (s) => setSelectedStay(s)
      }
    ),
    isModifyModalOpen && /* @__PURE__ */ jsx20(
      ModifySearchModal,
      {
        searchParams,
        onClose: () => setIsModifyModalOpen(false),
        onSave: setSearchParams
      }
    ),
    isMenuOpen && /* @__PURE__ */ jsx20(
      MenuDrawer,
      {
        onClose: () => setIsMenuOpen(false),
        setActiveTab,
        onOpenAiConcierge: () => setIsAiConciergeOpen(true),
        onOpenMap: () => setIsMapModalOpen(true),
        isDarkMode,
        onToggleTheme: toggleTheme
      }
    ),
    isAiConciergeOpen && /* @__PURE__ */ jsx20(
      AiConciergeModal,
      {
        onClose: () => setIsAiConciergeOpen(false)
      }
    ),
    selectedPackage && /* @__PURE__ */ jsx20(
      PackageBookingModal,
      {
        pkg: selectedPackage,
        onClose: () => setSelectedPackage(null),
        onConfirm: (bookingData) => {
          handleConfirmBooking(bookingData);
          setSelectedPackage(null);
          showToast("Package successfully booked online! E-ticket generated.");
        }
      }
    )
  ] });
}
export {
  App as default
};
