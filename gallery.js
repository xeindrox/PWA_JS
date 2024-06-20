const images = [
    'https://img.freepik.com/darmowe-zdjecie/osoba-podrozujaca-i-cieszaca-sie-wakacjami_23-2151382978.jpg?w=1800&t=st=1718708825~exp=1718709425~hmac=b58c6df04e40f3159f4f85377542d39ecd45d7f72b3c105e08e77124498e6d08',
    'https://img.freepik.com/darmowe-zdjecie/roznorodni-mlodzi-ludzie-sa-cyfrowymi-nomadami-i-pracuja-zdalnie-z-wymarzonych-miejsc_23-2151187946.jpg?t=st=1718708886~exp=1718712486~hmac=825ee8a93a7d3846cc8680b28f629cd844c4b58505f200b53a537813773d9908&w=1800',
    'https://img.freepik.com/darmowe-zdjecie/kobieta-lubi-wedrowke-letnie-wakacje-na-swiezym-powietrzu-przebywanie-sam-na-sam-z-natura_273609-26937.jpg?t=st=1718708912~exp=1718712512~hmac=4459c0077b8d71cba09f333d46a9d7779396553d0b7ecad313f63c64cbfe3128&w=1800',
    'https://img.freepik.com/darmowe-zdjecie/podrozowanie-samochodem-terenowym_23-2151473045.jpg?t=st=1718708936~exp=1718712536~hmac=076c0ce443ac6f4993b63ef6647e4b8eb7150ac139288c7f36d35b96ef57b46e&w=1800',
    'https://img.freepik.com/darmowe-zdjecie/podrozowanie-samochodem-terenowym_23-2151472958.jpg?t=st=1718708950~exp=1718712550~hmac=3b11b21c6d5de33aa0f025d234ea8c6676091c8f4b8eb4c77c6ea2030fc1cbed&w=2000',
    'https://img.freepik.com/darmowe-zdjecie/slodki-zolw-na-pustyni_23-2150537321.jpg?t=st=1718708963~exp=1718712563~hmac=71a6146229304dc7b0d16e94f1acdc549144c3b0ab21d0661e3606817a693661&w=1800',
    'https://img.freepik.com/darmowe-zdjecie/podrozowanie-samochodem-terenowym_23-2151473123.jpg?t=st=1718708992~exp=1718712592~hmac=b7dd79e5ced42098018697e11401120a6bfa857c7dc8b19c841a8f11a0c38bc5&w=1800',
    'https://img.freepik.com/darmowe-zdjecie/podrozowanie-samochodem-terenowym_23-2151473111.jpg?t=st=1718709005~exp=1718712605~hmac=4dc0894e51b0aa71f961845d9058aea5b2ba0d96069904c00bdb73b680c90a8f&w=1800',
    'https://img.freepik.com/darmowe-zdjecie/podrozowanie-samochodem-terenowym_23-2151473117.jpg?t=st=1718709325~exp=1718712925~hmac=10a4eaa18854969620b5d9d4dd6b7ce3aebcf9bcc8a863e3cd9bbf657a72ea86&w=1800',
    'https://img.freepik.com/darmowe-zdjecie/podrozowanie-samochodem-terenowym_23-2151473112.jpg?t=st=1718709354~exp=1718712954~hmac=662d0715772bc48a8cdc3d303b04aa195ff39de577a8860d1aab7a0038744134&w=1800'
];

let currentIndex = 0;

const imgElement = document.getElementById('gallery-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    imgElement.src = images[currentIndex];
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    imgElement.src = images[currentIndex];
});
