var utils = {

    request: function(configObj, cb) {
        console.log(configObj);
        var users = [];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                cb(undefined, xhr.responseText);
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                cb(xhr.responseText, undefined);
            }
        };

        xhr.open(configObj.method, configObj.url, true);

        if (configObj.headers !== undefined) {
            configObj.headers.forEach(function(elm) {
                var header = elm.split(':');
                xhr.setRequestHeader(header[0], header[1]);
            });
        }

        xhr.send(JSON.stringify(configObj.params));
    }
};
