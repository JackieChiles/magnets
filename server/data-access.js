var Mongo = require('mongodb');
var MongoClient = Mongo.MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost/magnets-temp';

//Clears the database and populates it with sample data
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

//Retrieves magnets with the given skip and limit parameters
module.exports.getMagnets = function (skip, limit, callback) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('magnets').find().skip(skip).limit(limit).toArray(function (err, magnets) {
            assert.equal(null, err);
            callback(magnets);
            db.close();
        });
    });
};

//Retrieves visits for a magnet with the given skip and limit parameters
module.exports.getVisits = function (skip, limit, id, callback) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('magnets').findOne({ _id: new Mongo.ObjectId(id) }, { visits: { $slice: [skip, limit] } }, function (err, visits) {
            assert.equal(null, err);
            console.log('Visits for %s', id, visits);
            callback(visits);
            db.close();
        });
    });
};

//Records a visit for a magnet
module.exports.recordVisit = function (lat, long, user, id, callback) {
    MongoClient.connect(url, function (err, db) {
        //TODO
    });
};
