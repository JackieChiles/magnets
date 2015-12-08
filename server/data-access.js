var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost/magnets-temp';

var insertSampleData = function (db, callback) {
    var createDate = new Date();
    db.collection('magnets').remove({});
    db.collection('magnets').insert([
        {
            batch: 1,
            created: createDate,
            visits: []
        },
        {
            batch: 1,
            created: createDate,
            visits: []
        }
    ], function (err, result) {
        assert.equal(err, null);
        console.log('Inserted sample data.');
        callback(result);
    });
};

MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    insertSampleData(db, function() {
        db.close();
    });
});
