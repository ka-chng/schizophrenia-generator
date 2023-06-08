const generateBtn = document.getElementById('generate-btn');
const schizoImage = document.getElementById('schizo-image');

const schizoImages = [
    'https://i.pinimg.com/564x/57/87/21/57872121894be016235a3f8955f0e8ef.jpg',
    'https://i.pinimg.com/564x/3d/39/40/3d3940d1c7952f3af6898fce7509eb32.jpg',
    'https://i.pinimg.com/564x/90/ab/04/90ab04a8c4266d2d8e2395906de57504.jpg',
    'https://i.pinimg.com/564x/25/fb/ba/25fbbaa330824461252b62aaa338521c.jpg',
    'https://i.pinimg.com/564x/7e/a7/a5/7ea7a5673cf05fdf06688fa26fd04518.jpg',
    'https://i.pinimg.com/564x/91/7c/ee/917cee76e7ef2b106731590a745a692d.jpg',
    'https://i.pinimg.com/564x/97/9c/72/979c7265615f677f8660fad0db711ee9.jpg',
    'https://i.pinimg.com/564x/fc/95/35/fc9535a05d1990da8fce61236ce26798.jpg',
    'https://i.pinimg.com/564x/67/5f/df/675fdf3d42f0697d3f07c6a21f7df6fb.jpg',
    'https://i.pinimg.com/564x/0e/4b/b9/0e4bb98b04501c240477d3ecb346b2a5.jpg',
    'https://i.pinimg.com/564x/3a/c0/25/3ac025f8ea5a9071a871fed264cc2772.jpg',
    'https://i.pinimg.com/564x/33/b6/df/33b6df9caf538ba635ca8ec26e751c8e.jpg',
    'https://i.pinimg.com/564x/ae/e4/ef/aee4ef067e6af1870749f560ec25f0f1.jpg',
    'https://i.pinimg.com/736x/f2/de/1c/f2de1c1b01ba57048e53c810589495cd.jpg',
    'https://i.pinimg.com/736x/43/5a/50/435a50c5b55f3e41b7d3dbf2f1ac2588.jpg',
    'https://i.pinimg.com/736x/17/28/fc/1728fc80b3e2a74dd3e58e72012dfc2e.jpg',
    'https://i.pinimg.com/736x/ea/df/7d/eadf7dd3ac90221e0f46235867dabba7.jpg',
    'https://i.pinimg.com/564x/28/c4/b8/28c4b87300950b2466591884c5ea4008.jpg',
];

function generateRandomCat() {
    const randomIndex = Math.floor(Math.random() * schizoImages.length);
    const randomSchizoImage = schizoImages[randomIndex];
    schizoImage.src = randomSchizoImage;
}

generateBtn.addEventListener('click', generateRandomCat);
