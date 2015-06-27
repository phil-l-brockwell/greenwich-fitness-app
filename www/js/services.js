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
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var equiptment = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return equiptment;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
