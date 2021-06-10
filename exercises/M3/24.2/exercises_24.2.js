// #1
db.movies.updateOne({ title: "Batman" }, { $push: { category: "superhero" } });

// #2
db.movies.updateOne({ title: "Batman"}, { $push: { category: { $each: ["villain", "comic-bases"] } } });

// #3
db.movies.updateOne({ title: "Batman" }, { $pull: { category: "action" } });

// #4

db.movies.updateOne({ title: "Batman" }, { $pop: { category: -1 } });

// #5
db.movies.updateOne({ title: "Batman" }, { $pop: { category: 1 } });

// #6
db.movies.updateOne({ title: "Batman" }, { $addToSet: { category: "action" } });

// #7
db.movies.updateMany({ title: { $in: ["Batman", "Home Alone"] } }, { $addToSet: { category: "90's" } });

// #8
db.movies.updateOne(
  { title: "Home Alone" },
  { $push: {
    cast: {
      $each: [
        {"actor": "Macaulay Culkin", "character": "Kevin"},
        {"actor": "Joe Pesci", "character": "Harry"},
        {"actor": "Daniel Stern"}
      ]
    }
  }}
);

// #9
db.movies.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  {
    $set: { "cast.$.character": "Marv" },
  }
);

// #10
db.movies.updateOne({
  title: "Batman",
}, {
  $push: {
    cast: {
      $each: [
        {"character": "Batman"},
        {"character": "Alfred"},
        {"character": "Coringa"},
      ]
    }
  }
});

// #11.1
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: { "cast.$.actor": "Christian Bale" },
  }
);

// #11.2
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Alfred",
  },
  {
    $push: { "cast.$.actor": "Michael Caine" },
  }
);

// #11.3
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Coringa",
  },
  {
    $push: { "cast.$.actor": "Heath Ledger" },
  },
);

// #12
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: {
      "cast.$.actor": {
        $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
        $sort: 1,
      },
    },
  },
);
