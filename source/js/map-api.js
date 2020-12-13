ymaps.ready(init);

  function init() {
    let myMap = new ymaps.Map("map", {
      center: [59.938635, 30.323118],

      zoom: 14,

      controls: []
    });

    let myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
      balloonContent: "Наш КотоШтаб"
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/mark_mobile.svg",
      iconImageSize: [55, 55],
      iconImageOffset: [-30, -50]
    });

    myMap.geoObjects.add(myPlacemark);
  }
