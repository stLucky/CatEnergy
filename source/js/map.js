const DESKTOP_WIDTH = "(min-width: 1440px)";
const TABLET_WIDTH = "(min-width: 768px)";

const isUpperDesktop = window.matchMedia(DESKTOP_WIDTH).matches;
const isUpperTablet = window.matchMedia(TABLET_WIDTH).matches;
const mapCenter = isUpperDesktop ? [59.938641, 30.319456] : [59.938635, 30.323118];
const mapZoom = isUpperDesktop ? 16 : isUpperTablet ? 15 : 14;

const mapSettings = {
  center: mapCenter,
  zoom: mapZoom,
  controls: [

    'zoomControl',
    'rulerControl',
    'routeButtonControl',
    'trafficControl',
    'typeSelector',
    'fullscreenControl',
  ]
}

const iconSettings = {
  iconLayout: "default#image",
  iconImageHref: "img/mark_mobile.png",
  iconImageSize: isUpperTablet ? [100, 100] : [55, 55],
  iconImageOffset: isUpperTablet ? [-50, -90] : [-30, -50]
}

function init() {
  const myMap = new ymaps.Map("map", mapSettings);

  const myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
    balloonContent: "Наш КотоШтаб"
  }, iconSettings);

  myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init);
