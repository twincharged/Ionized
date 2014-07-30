angular.module('starter.services', [])


.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
    { id: 4, name: 'Mr. Frizzle' },
    { id: 5, name: 'Carlos Ghosn' },
    { id: 6, name: 'Jimmy Dean' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Blogs', function() {

  var blogs = [
    { userId: 0, title: 'Scruff\'s blog!', body: 'The blog text of Scruff!' },
    { userId: 1, title: 'Joe\'s blog!', body: 'The blog text of Joe!' },
    { userId: 2, title: 'Frizzle\'s blog!', body: 'The blog text Miss F.!' },
    { userId: 3, title: 'Gotta catch em all!', body: 'The blog text Ash!' },
    { userId: 4, title: 'Frizzle blogging!', body: 'The blog text Mr F.!' },
    { userId: 5, title: 'Ghosn Blogging', body: 'My R35 just stomped a Scuderia.' },
    { userId: 6, title: 'Jimmys blog', body: 'Nothin like a breakfast sandwich...' }
  ];

  return {
    all: function() {
      return blogs;
    },
    get: function(userId) {
      return blogs[userId];
    }
  }
});