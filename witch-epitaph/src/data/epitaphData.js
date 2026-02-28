/**
 id       : unique key .map() untuk rendering agar tidak error  
 twilight : pengurutan twilight (null kalau bukan twilight line)
 text     : teka teki yang ditampilkan
 type     : "normal"     → standar warna emas hangat dengan aksen border kiri yang halus
            "special"    → warna merah darah dengan bayangan merah gelap yang mencolok (baris bahaya)
            "conclusion" → warna emas cerah, lebih besar, terpusat, dengan kilau ekstra  */

const epitaphData = [
  {
    id: 1,
    twilight: null,
    text: "Behold the sweetfish river running through my beloved hometown. You who seek the Golden Land, follow its path downstream in search of the key.",
    type: "normal",
  },
  {
    id: 2,
    twilight: null,
    text: "As you travel down it, you will see a village. In that village, look for the shore the two will tell you of. There sleeps the key to the Golden Land.",
    type: "normal",
  },
  {
    id: 3,
    twilight: null,
    text: "The one who obtains the key must then travel to the Golden Land in accordance with these rules.",
    type: "normal",
  },
  {
    id: 4,
    twilight: "First",
    text: "On the first twilight, offer the six chosen by the key as sacrifices.",
    type: "special",
  },
  {
    id: 5,
    twilight: "Second",
    text: "On the second twilight, those who remain shall tear apart the two who are close.",
    type: "special",
  },
  {
    id: 6,
    twilight: "Third",
    text: "On the third twilight, those who remain shall praise my noble name.",
    type: "special",
  },
  {
    id: 7,
    twilight: "Fourth",
    text: "On the fourth twilight, gouge the head and kill.",
    type: "special",
  },
  {
    id: 8,
    twilight: "Fifth",
    text: "On the fifth twilight, gouge the chest and kill.",
    type: "special",
  },
  {
    id: 9,
    twilight: "Sixth",
    text: "On the sixth twilight, gouge the stomach and kill.",
    type: "special",
  },
  {
    id: 10,
    twilight: "Seventh",
    text: "On the seventh twilight, gouge the knee and kill.",
    type: "special",
  },
  {
    id: 11,
    twilight: "Eighth",
    text: "On the eighth twilight, gouge the leg and kill.",
    type: "special",
  },
  {
    id: 12,
    twilight: "Ninth",
    text: "On the ninth twilight, the witch shall revive, and none shall be left alive.",
    type: "special",
  },
  {
    id: 13,
    twilight: "Tenth",
    text: "On the tenth night, the journey will end, and you shall reach the capital in which the gold dwells.",
    type: "special",
  },
  {
    id: 14,
    twilight: null,
    text: "The witch shall praise the wise and bestow four treasures. One shall be all the gold from the Golden Land.",
    type: "normal",
  },
  {
    id: 15,
    twilight: null,
    text: "One shall be the resurrection of all the dead souls.",
    type: "normal",
  },
  {
    id: 17,
    twilight: null,
    text: "One shall be the resurrection of the love that was lost.",
    type: "normal",
  },
  {
    id: 18,
    twilight: null,
    text: "And One shall be to put the witch to sleep for all time.",
    type: "conclusion",
  },
  {
    id: 19,
    twilight: null,
    text: "Sleep peacefully, my beloved witch, Beatrice.",
    type: "conclusion",
  },
];

export default epitaphData;
