


utils.request({
    method: 'POST',
    url: '/allposts',
    params: post
}, function(err, data) {
    console.log('data', data);
    getallposts();

    if (err) {
        utils.handleError('Error:');
        cb(err, undefined);
        return;
    }
});
