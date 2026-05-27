export const WEDDINGS = [
  {
    city: "Toshkent",
    datetime: "2026-06-18T18:00:00",
    date: "18-iyun, 2026",
    time: "18:00",
    venue: "Shodiyona Restorani, Toshkent",
    address: "Qumariq MFY, Sergeli tumani, Toshkent",
    mapLink: "https://yandex.ru/maps/-/CPsHQ2JJ",
  },
  {
    city: "Urganch",
    datetime: "2026-06-20T18:00:00",
    date: "20-iyun, 2026",
    time: "18:00",
    venue: "Omad Restorani, Urganch",
    address: "Saxovat MFY, Amudaryo ko'chasi, 3",
    mapLink: "https://yandex.ru/maps/-/CPsTyKmD",
  },
];

export function getVisibleWeddings(): typeof WEDDINGS {
  const param = new URLSearchParams(window.location.search).get("city");
  if (param) {
    const match = WEDDINGS.find(
      (w) => w.city.toLowerCase() === param.toLowerCase(),
    );
    if (match) return [match];
  }
  return WEDDINGS;
}
