(function () {

    var app = angular.module('blog', []);

    app.controller('GuestBookController', [ '$http',function ($http) {
        var guestbook = this;
        guestbook.messages = []; // we initialize to avoid the page to look wierd while loading

            $http.get('/guestbook').success(function (data) {
                guestbook.messages = data;
            });
           /* guestbook.messages = [{"name":"john","date" : {$date: 1353441763974},"message":"You are great"},
                {"name":"peter","date": {$date: 1353441763666},"message":"You are not so great"},
                {"name":"float","date" : {$date:1353441453233},"message":"Awesome"}];*/
        }

        ]
    );

})();