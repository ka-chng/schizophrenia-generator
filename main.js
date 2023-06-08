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
    'https://i.pinimg.com/564x/4d/5e/04/4d5e0407f70713e8250b07cc80678aee.jpg',
    'https://i.pinimg.com/564x/72/21/80/7221802e6a9274cb8d8c0465673c4be4.jpg',
    'https://i.pinimg.com/564x/6b/4e/d9/6b4ed9e68e3b150269493b9232e9e6bf.jpg',
    'https://i.pinimg.com/564x/6b/4e/d9/6b4ed9e68e3b150269493b9232e9e6bf.jpg',
    'https://i.pinimg.com/564x/f0/1a/6c/f01a6c28f300846116a44f0ce14f2409.jpg',
    'https://i.pinimg.com/564x/54/b7/d6/54b7d6b0316138685ab6c9749dc8ca9b.jpg',
    'https://i.pinimg.com/564x/78/56/d6/7856d67a5e6e20a1d9885b769a5f7717.jpg',
    'https://i.pinimg.com/564x/a8/8f/e7/a88fe78c45e8961f240ed5a294173718.jpg',
    'https://i.pinimg.com/564x/a1/4a/56/a14a566ed3fce5de46bd99bd17ea95bb.jpg',
    'https://i.pinimg.com/564x/7a/67/c5/7a67c526fe14110eb969d11a43fdb4c4.jpg',
    'https://i.pinimg.com/564x/1e/98/b2/1e98b2ef4fcd86dca21eed3dac6c1092.jpg',
    'https://i.pinimg.com/564x/94/f8/92/94f89201b7b40a4804bb83f909c471f6.jpg',
    'https://i.pinimg.com/564x/02/a1/49/02a14907e0b792513c9d7fe1cad5720c.jpg',
    'https://i.pinimg.com/564x/72/30/04/7230041e04a17322c5761fd844cb8a7d.jpg',
    'https://i.pinimg.com/564x/ec/aa/70/ecaa703754cdb522be0ba77dad438aa0.jpg',
    'https://i.pinimg.com/736x/a1/01/90/a101900c4bb4caabecd2e931ee949fe4.jpg',
    'https://i.pinimg.com/564x/81/5d/99/815d9988e1d459671b8006b45388be4c.jpg',
    'https://i.pinimg.com/564x/11/1a/d5/111ad56a230d39009b0b6eba20441b50.jpg',
    'https://i.pinimg.com/564x/f3/04/79/f30479a585fe8886553d3970c3871ff4.jpg',
    'https://i.pinimg.com/564x/ea/86/d9/ea86d92bd46b0c575c53a13631560718.jpg',
    'https://i.pinimg.com/564x/78/51/0f/78510f987eabae5e84060568874e2ea0.jpg',
    'https://i.pinimg.com/564x/06/88/01/068801ab950c299afd90c839ce28db0d.jpg',
    'https://i.pinimg.com/564x/a3/be/be/a3bebe15f396d2decb4971c3d2fb0eac.jpg',
    'https://i.pinimg.com/564x/0f/0d/f3/0f0df3f0cd55ba45221f704090472a53.jpg',
    'https://i.pinimg.com/564x/01/8d/6c/018d6c3c06d69b143a3a0ddfe9769506.jpg',
    'https://i.pinimg.com/564x/28/ba/c7/28bac7fdf3d16d8f0f20301c98b4f74b.jpg',
    'https://i.pinimg.com/564x/3b/78/68/3b7868c3318d2689eb6a5b889a63a610.jpg',
    'https://i.pinimg.com/564x/23/67/cd/2367cd20ed6a945cc0c2a8752291c3f7.jpg',
    'https://i.pinimg.com/564x/32/e1/d0/32e1d07f95a4cfaf5e3788ef72adab1f.jpg',
    'https://i.pinimg.com/564x/9c/a1/59/9ca15984ff17ed19a301dd9812babd92.jpg',
    'https://i.pinimg.com/564x/0e/5f/76/0e5f76680ba73efbfb4b9b904aba6fea.jpg',
    'https://i.pinimg.com/564x/fd/0c/24/fd0c24e8e08e9c26c1b248a9b895414d.jpg',
    'https://i.pinimg.com/564x/17/37/ec/1737ec5ca3b663b11c797f150af99448.jpg',
    'https://i.pinimg.com/564x/e9/60/e7/e960e741070ed9d2ae0a6d4805e732f7.jpg',   
    'https://i.pinimg.com/736x/23/90/56/239056ef7032e002942217fe6dd9dcd7.jpg',
    'https://i.pinimg.com/564x/6a/bf/f7/6abff78a3bbcdadf47d9ca858053bf0e.jpg',
    'https://i.pinimg.com/736x/aa/6f/f8/aa6ff8da6a53ba96c9e34d39fd8c5af2.jpg',
];

function generateRandomCat() {
    const randomIndex = Math.floor(Math.random() * schizoImages.length);
    const randomSchizoImage = schizoImages[randomIndex];
    schizoImage.src = randomSchizoImage;
}

generateBtn.addEventListener('click', generateRandomCat);
