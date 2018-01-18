$(document).ready((() => {
  //  Retrieve the images from Picsum API
  $.ajax({ url: 'https://picsum.photos/list' }).done(( (data) => {
    //  Get lenght array object's keys
    const tot = Object.keys(data).length;
    //  Random number generator max is tot
    const i = Math.floor(Math.random() * tot) + 1;
    //  Random picture selected
    const picture = data[i];
    //  Picture url with the right size
    const url = `https://picsum.photos/1280/1080?image=${picture.id}`;
    //  console.log(`my random number is: ${i}/${tot}`)
    $('body').css('background-image',`url(${url})` );
    $('#photographer a').text(`${picture.author}`);
    $('#photographer a').attr('href', `${picture.author_url}`);
  }));
  //  Retrieve a random quote
  $.ajax({ url: 'https://talaikis.com/api/quotes/random/' }).done(( (data) => {
    $('#quote').text(`${data.quote}`);
    $('#author').text(`{ ${data.author} }`);
  }));
  //  Assign date using Moment js
  $('#date').text(moment().format('DD.MM.YYYY'));
  //  Function for the live time with seconds
  let update;
  (update = () => {
      $('#time').text(moment().format('HH:mm:ss'));
  })();
  //  Update seconds every second
  setInterval(update, 1000);
}));