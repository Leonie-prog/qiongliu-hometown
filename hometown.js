
var image_url_list, url;

image_url_list = ['https://upload.wikimedia.org/wikipedia/commons/5/51/Xiamen_night_cityscape_2018_-_Flickr_-_Jaykhuang.jpg', 
                'https://teach-english-in-china.co.uk/wp-content/uploads/2018/03/XIamen.jpg', 
                'https://jugglingonrollerskates.com/wp-content/uploads/2023/12/Temple-e1701626523781.webp'];


document.getElementById('prev').addEventListener('click', (event) => {
    url = image_url_list.pop();
    image_url_list.unshift(url);
    console.log(url);
    var element = document.getElementById('pic');
    element.style.background = 'url('+url+')';

});

document.getElementById('next').addEventListener('click', (event) => {
    url = image_url_list.shift();
    image_url_list.push(url);
    console.log(url);

    let element = document.getElementById('pic');
    element.style.background = 'url('+url+')';


});