db.movies.find({
    "runtime": {
        "$lte": 180
    }
})