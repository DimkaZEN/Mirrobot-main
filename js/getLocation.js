const currentCity = document.getElementById('currentCity').textContent;
changeCity(currentCity);


function handleGeolocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({ 'location': latLng }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                const addressComponents = results[0].address_components;

                for (let i = 0; i < addressComponents.length; i++) {
                    const types = addressComponents[i].types;
                    if (types.includes('locality')) {
                        const city = addressComponents[i].long_name;
                        document.getElementById('currentCity').textContent = city;
                        changeCity(city);
                    }
                }
            }
        } else {
            console.log('Ошибка геокодирования: ' + status);
        }
    });
}

function changeCity(city) {
    document.getElementById('currentCity').textContent = city;

    const phoneNumberElement = document.querySelector('.phone');
    const phoneConnectElement = document.querySelector('.number_right_bottom');
    const instagramLinkElement = document.querySelector('.link_inst');
    const instagramLinkFooterElement = document.querySelector('.link_inst_footer');
    const unpNumberElement = document.querySelector('.unpNumber span');
    const emailElement = document.querySelector("#mailTo");
    const studentsCountElement = document.querySelector('.studentsCount');
    const placeWorkElement = document.querySelector('.addressPlace span');

    if (city === 'Новополоцк') {
        phoneNumberElement.textContent = '+375 (44) 750-88-33';
        phoneConnectElement.textContent = '+375447508833';
        instagramLinkElement.href = 'https://www.instagram.com/mir_robot_nvp/';
        instagramLinkFooterElement.href = 'https://www.instagram.com/mir_robot_nvp/';
        unpNumberElement.textContent = '693234955';
        emailElement.value = 'mir-robbo-nvp@yandex.by';
        studentsCountElement.textContent = '120';
        placeWorkElement.textContent = 'ул. Молодёжная 169, этаж 2-й';
    } else if (city === 'Полоцк') {
        phoneNumberElement.textContent = '+375 (44) 750-88-33';
        phoneConnectElement.textContent = '+375447508833';
        instagramLinkElement.href = 'https://www.instagram.com/mir_robot_nvp/';
        instagramLinkFooterElement.href = 'https://www.instagram.com/mir_robot_nvp/';
        unpNumberElement.textContent = '693234730';
        emailElement.value = 'mir-robbo-pl@yandex.by';
        studentsCountElement.textContent = '160';
        placeWorkElement.textContent = 'Ул Шенягина 54, пом 302 3-й этаж';
    } else if (city === 'Витебск') {
        phoneNumberElement.textContent = '+375 (44) 584-88-55';
        phoneConnectElement.textContent = '+375445848855';
        instagramLinkElement.href = 'https://www.instagram.com/mir_robot_vitebsk/';
        instagramLinkFooterElement.href = 'https://www.instagram.com/mir_robot_vitebsk/';
        unpNumberElement.textContent = '693234955';
        emailElement.value = 'mir-robor-vitebsk@yandex.by';
        studentsCountElement.textContent = '150';
        placeWorkElement.textContent = 'Улица Чкалова 49, второй этаж';
    } else if (city === 'Лида') {
        phoneNumberElement.textContent = '+375 (29) 844-44-11';
        phoneConnectElement.textContent = '+375298444411';
        instagramLinkElement.href = 'https://www.instagram.com/mir_robot_grobl/';
        instagramLinkFooterElement.href = 'https://www.instagram.com/mir_robot_grobl/';
        unpNumberElement.textContent = '693235844';
        emailElement.value = 'mir-robbo-pl@yandex.by';
        studentsCountElement.textContent = '120';
        placeWorkElement.textContent = 'Проспект Победы 30';
    }
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleGeolocation);
} else {
    console.log('Геолокация не поддерживается вашим браузером');
}