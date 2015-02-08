function getImage(){
    var images = [  'http://images.nationalgeographic.com/wpf/media-live/photos/000/771/cache/bengal-1460839_77100_600x450.jpg',
                    'http://images.nationalgeographic.com/wpf/media-live/photos/000/002/cache/baby-harp-seal_230_600x450.jpg',
                    'http://images.nationalgeographic.com/wpf/media-live/photos/000/058/cache/king-cobra-snakes_5896_600x450.jpg',
                    'http://images.nationalgeographic.com/wpf/media-live/photos/000/058/cache/gorillas-move-vir_5893_600x450.jpg'
    ];
    var img = document.getElementById("image");
    img.src = images[Math.floor(Math.random()*images.length)];
}

