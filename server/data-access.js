var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost/magnets-temp';

module.exports.initialize = function () {
    var insertSampleData = function (db, callback) {
        var createDate = new Date();
        db.collection('magnets').remove({});
        db.collection('magnets').insert([
            {
                batch: 1,
                created: createDate,
                visits: [
                    {
                        lat: 41.521707,
                        long: -81.484941,
                        date: new Date(2015, 6, 15, 8, 26, 45, 238),
                        user: 'Martin Van Buren'
                    },
                    {
                        lat: 41.502270,
                        long: -81.499865,
                        date: new Date(2015, 6, 18, 10, 18, 45, 238),
                        user: 'James K. Polk'
                    }
                ]
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
};

module.exports.getMagnets = function (message) {
    return db.collection('magnets').find().skip(message.skip).limit(message.take).toArray();
};