$(document).ready(function(){
var feed = new Instafeed({
    get: 'user',
    userId: '641301337',
    resolution: 'standard_resolution',
    accessToken: '641301337.c4d52ef.6dc4d6719ce645d0a8826ab507a419d9',
    template: '<a href="#" data-featherlight="{{image}}"><img src="{{image}}" width="150" height="150" /><div class="likes">&hearts; {{likes}}</div></a>'
})


feed.run()
})


