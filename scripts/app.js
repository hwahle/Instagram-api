var feed = new Instafeed({
    get: 'user',
    userId: '641301337',
    accessToken: '641301337.c4d52ef.6dc4d6719ce645d0a8826ab507a419d9',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
})

feed.run()
