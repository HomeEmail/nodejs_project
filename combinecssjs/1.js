var fs=require('fs'),
	path=require('path');
	
var MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript'
};

function parseURL(root, url) {
    var base, pathnames, parts;

    if (url.indexOf('??') === -1) {
        url = url.replace('/', '/??');
    }
	console.log(url);
    parts = url.split('??');
	console.log(parts);
    base = parts[0];
    pathnames = parts[1].split(',').map(function (value) {
        return path.join(root, base, value);
    });

    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    };
}

/*
http://assets.example.com/foo/??bar.js,baz.js
http://assets.example.com/foo/bar.js
*/
var aryurl=parseURL('.','http://assets.example.com/foo/bar.js');
console.log(aryurl.mime);
console.log(aryurl.pathnames);
console.log(aryurl.pathnames[0]);

