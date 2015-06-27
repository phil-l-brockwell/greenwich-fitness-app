angular.module('greenwichFitness.services', [])

.factory('Reviews', function() {

  var o = { reviews: [
    {
      author: 'Robert Pulson',
      text: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.',
      votes: 0
    },
    {
      author: 'Phil Brockwell',
      text: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.',
      votes: 0
    },
    {
      author: 'Lily Steel',
      text: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.',
      votes: 0
    }
    ]};

    o.create = function(review) {
      o.reviews.unshift(review)
    };

    o.upvote = function(review) {
      review.votes += 1;
    };

    o.downvote = function(review) {
      review.votes -= 1;
    };

    return o;
})

.factory('Equiptment', function() {

  var o = { items: [
    {
      id: 0,
      name: 'Weights',
      price: 1.99,
      image: 'http://gingeradventures55.files.wordpress.com/2013/02/8684442-weights.jpg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.'
    }, 
    {
      id: 1,
      name: 'Bench',
      price: 20.00,
      image: 'http://www.aiaangola.com/wp-content/uploads/2013/11/Olympic-Weight-Bench.jpg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.'
    },
    {
      id: 2,
      name: 'Protein Shakes',
      price: 15.00,
      image: 'https://thehealthymonkey.files.wordpress.com/2014/04/herbalife-formula-1.jpg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.'
    }]};

    o.get = function(itemId) {
      for (var i = 0; i < o.items.length; i++) {
        if (o.items[i].id === parseInt(itemId)) {
          return o.items[itemId];
        }
      }
      return null;
    }

  return o;
});
