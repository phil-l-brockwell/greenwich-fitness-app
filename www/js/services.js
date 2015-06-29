angular.module('greenwichFitness.services', [])

.factory('Settings', function() {

  var o = { notifications: false };

  o.switchOnNotifications = function() {
    o.notifications = true;
  };

  o.switchOffNotifications = function() {
    o.notifications = false;
  };

  return o;
})

.factory('Consultants', function() {

  var o = { consultants: [
    {
      name: 'Alan Smith',
      title: 'Cardio Coach',
      profile: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.',
      img: 'http://www.lifestylebypoliquin.com/Portals/0/personaltrainer.jpg',
      mainImg: 'http://www.theissnscoop.com/wp-content/uploads/2013/08/cardio-gym2.jpg'
    },
    {
      name: 'Ben Selby',
      title: 'Muscle Builder',
      profile: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.',
      img: 'http://i.telegraph.co.uk/multimedia/archive/02655/PD68583783_dtho201_2655530b.jpg',
      mainImg: 'http://www.muscleandfitness.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/Bodybuilder%203-14_0.jpg?itok=7dLs3CsB'
    },
    {
      name: 'Paul Mitchel',
      title: 'Weight Loss Specialist',
      profile: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium mi ut purus iaculis ultrices. Donec vel diam vel tortor posuere tempus ac a lorem. Ut fringilla mattis vestibulum. Morbi.',
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkHC8GxDqWN4LIGwBVSKceosYNwT_DQMaZ_0FbNUU9Ewmw0TO4',
      mainImg: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSe4Lcuan6Ea2cTOgSuU1hUM_1tiEb2u2O0ep4xiMp-GvPecrcCog'
    }
    ]}

  return o;
})

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
