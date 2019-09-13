var fs = require('fs');

function home(response) {
    console.log('Executing "home" handler');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
}
function review(response) {
    console.log('Executing "review" handler');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response);
}
function api_records(response, params) {
    console.log('Executing "api_records" handler');
    response.writeHead(200, { 'Content-Type': 'application/json' });
    // var jsonObj = {
    //     name: "hfpp2012"
    // };
    response.end(JSON.stringify(params));
}

module.exports = {
    home: home,
    review: review,
    api_records: api_records
}
