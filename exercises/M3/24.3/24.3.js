// #1
db.movies.find(
  { category: { $all: ["action", "adventure"] } }
);
// #2
db.movies.find(
  {
    category: { $all: ["action"] },
    imdbRating: { $gt: 7 }
  }
);
// #3
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      ratings: {
        $each: [85, 100, 102, 105],
      }
    }
  }
);
// #4
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $push: {
      ratings: {
        $each: [78, 52, 95, 102],
      }
    }
  }
);
// #5
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      ratings: {
        $each: [200, 99, 65],
      }
    }
  }
);
// #6
db.movies.find(
  { ratings: { $elemMatch: { $gt: 103 } } },
  { _id: 0, title: 1, ratings: 1 },
);
// #7
// #8
// #9
// #10
// #11
// #12
// #13
// #14
// #15
// #16
// #17
// #18
// #19
// #20
// #21
// #22
// #23