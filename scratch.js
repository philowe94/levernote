$.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: {
        email: 'qwer@qwer.com',
        password: 'qwer'
    }}
}).then(res => console.log(res))

heroku stack:set heroku-18