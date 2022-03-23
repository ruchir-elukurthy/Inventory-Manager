const data = [
  {
    price: 15.99,
    chapters: ["one", "two", "three"],
    year: 1999,
    title: "foo",
    author: "mary",
    type: "book",
  },
  {
    price: 14.99,
    chapters: ["one", "two", "three"],
    year: 1999,
    title: "foo",
    author: "had",
    type: "book",
  },
  {
    price: 13.99,
    chapters: ["one", "two", "three"],
    year: 1999,
    title: "1984",
    author: "a",
    type: "book",
  },
  {
    price: 12.99,
    chapters: ["one", "two", "three"],
    year: 1999,
    title: "foo",
    author: "little",
    type: "book",
  },
  {
    price: 11.99,
    chapters: ["one", "two", "three"],
    year: 1999,
    title: "foo",
    author: "lamb",
    type: "book",
  },
  {
    price: 10.99,
    chapters: ["one", "two", "three"],
    year: 1999,
    title: "foo",
    author: "joseph",
    type: "book",
  },
  {
    price: 11.99,
    minutes: 90,
    year: 2004,
    title: "2001: An",
    director: "alan",
    type: "dvd",
  },
  {
    price: 11.99,
    minutes: 90,
    year: 2004,
    title: "Affair",
    director: "alan",
    type: "dvd",
  },
  {
    price: 11.99,
    minutes: 90,
    year: 2004,
    title: "To",
    director: "alan",
    type: "dvd",
  },
  {
    price: 11.99,
    minutes: 90,
    year: 2004,
    title: "Remember",
    director: "alan",
    type: "dvd",
  },
  {
    price: 15.99,
    tracks: [
      {
        seconds: 180,
        name: "one",
      },
      {
        seconds: 200,
        name: "two",
      },
    ],
    year: 2000,
    title: "baz",
    author: "joan",
    type: "cd",
  },
  {
    price: 15.99,
    tracks: [
      {
        seconds: 180,
        name: "one",
      },
      {
        seconds: 200,
        name: "two",
      },
    ],
    year: 2000,
    title: "baz",
    author: "joseph",
    type: "cd",
  },
  {
    price: 16.99,
    tracks: [
      {
        seconds: 1900,
        name: "one",
      },
      {
        seconds: 1800,
        name: "two",
      },
    ],
    year: 2000,
    title: "baz",
    author: "juan",
    type: "cd",
  },
  {
    price: 17.99,
    tracks: [
      {
        seconds: 1800,
        name: "2015",
      },
      {
        seconds: 2800,
        name: "two",
      },
    ],
    year: 2000,
    title: "1989",
    author: "john",
    type: "cd",
  },
  {
    price: 18.99,
    tracks: [
      {
        seconds: 1800,
        name: "one",
      },
      {
        seconds: 2800,
        name: "two",
      },
    ],
    year: 2000,
    title: "If you're reading this",
    author: "john",
    type: "cd",
  },
  {
    price: 19.99,
    tracks: [
      {
        seconds: 1800,
        name: "one",
      },
      {
        seconds: 2800,
        name: "two",
      },
    ],
    year: 2000,
    title: "It's too late",
    author: "john",
    type: "cd",
  },
  {
    price: 20.99,
    tracks: [
      {
        seconds: 1800,
        name: "one",
      },
      {
        seconds: 2800,
        name: "two",
      },
    ],
    year: 2000,
    title: "Nothing was the same",
    author: "drake",
    type: "cd",
  },
];


let type_book = [];
let type_cd = [];
let type_dvd = [];

function separate_different_types(data) {
  let length_data = data.length;
  for(let i = 0; i < length_data; ++i) {
    if(data[i].type === "book") {
      type_book.push(data[i]);
    }
    else if(data[i].type === "cd") {
      type_cd.push(data[i]);
    }
    else {
      type_dvd.push(data[i]);
    }
  }
}



function sort_by_price_each_item(type_book, type_cd, type_dvd) {
  type_cd.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  type_book.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  type_dvd.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
}

function task1(data) {
  var Result = {             
    book: [],
    cd: [],
    dvd: []
  };

  separate_different_types(data);
  //console.log(typecd)
  sort_by_price_each_item(type_book,type_cd,type_dvd);
  let counter = 0;
  
  while(counter < 5 && counter < type_book.length) {
    Result.book.push(type_book[counter]);
    ++counter;
  }
  
  counter = 0;
  while(counter < 5 && counter < type_cd.length) {
    Result.cd.push(type_cd[counter]);
    ++counter;
  }
  
  counter = 0;
  while(counter < 5 && counter < type_dvd.length) {
    Result.dvd.push(type_dvd[counter]);
    ++counter;
  }
  return Result;
}


function task2() {
  var Result = {             
    cd: [],
  }
  let cd_length = type_cd.length;
  for(let i = 0; i < cd_length; ++i) {
    let length_tracks = type_cd[i].tracks.length;
    let total_time = 0;
    for(let j = 0; j < length_tracks; ++j) {
      total_time += type_cd[i].tracks[j].seconds;
    }
    total_time /= 60;
    if(total_time > 60) {
      Result.cd.push(type_cd[i]);
    }
  }
  return Result;
}


function task3() {
  let cd_length = type_cd.length;
  let book_length = type_book.length;
  var Result = {             
    cd: [],
  }
  var set = new Set();
  for(let i = 0; i < book_length; ++i) {
    set.add(type_book[i].author);
  }
  for(let i = 0; i < cd_length; ++i) {
    if(set.has(type_cd[i].author)) {
      Result.cd.push(type_cd[i].author);
    }
  }
  return Result;
}



function task4() {

  ///(?:(?:18|19|20|21)[0-9]{2})/g
  var Result = {             
    book: [],
    cd: [],
    dvd: []
  };
  
  let cd_length = type_cd.length;
  let book_length = type_book.length;
  let dvd_length = type_dvd.length;

  var reg_ex_expr = /(?:(?:18|19|20|21)[0-9]{2})/g

  for(let i = 0; i < book_length; ++i) {
    // let year = parseInt(type_book[i].title);
    // if(!isNaN(year)) {
    //   Result.book.push(type_book[i]);
    // }
    let year = type_book[i].title.match(reg_ex_expr);
    // console.log(type_book[i].title);
    // console.log(year);
    if(year != null) {
      console.log(type_book[i].title);
      console.log(year);
      Result.book.push(type_book[i]);
    }
    else {
      let length_chapter = type_book[i].chapter;
      for(let j = 0; j < length_chapter; ++j) {
        // let year = parseInt(type_book[i].chapter[j]);
        // if(!isNaN(year)) {
        //   Result.book.push(type_book[i]);
        // }
        year = type_book[i].chapter[j].match(reg_ex_expr);
        // console.log(type_book[i].chapter);
        // console.log(year);
        if(year != null) {
          console.log(type_book[i].title);
          console.log(year);
          Result.book.push(type_book[i]);
        }
      }
    }
  }
  
  for(let i = 0; i < dvd_length; ++i) {
    // let year = parseInt(type_dvd[i].title);
    // if(!isNaN(year)) {
    //   Result.dvd.push(type_dvd[i]);
    // }
    var result = type_dvd[i].title.match(reg_ex_expr);
    //console.log(result);
    if(result != null) {
      Result.dvd.push(type_dvd[i]);
    }
  }
  
  for(let i = 0; i < cd_length; ++i) {
    // let year = parseInt(type_cd[i].title);
    // if(!isNaN(year)) {
    //   Result.cd.push(type_cd[i]);
    // }

    let year = type_cd[i].title.match(reg_ex_expr);
    if(year != null) {
      Result.cd.push(type_cd[i]);
    }
    else {
      let length_track = type_cd[i].tracks.length;
      for(let j = 0; j < length_track; ++j) {
        // let year = parseInt(type_cd[i].tracks[j].name);
        // if(!isNaN(year)) {
        //   Result.cd.push(type_cd[i]);
        // }
        year = type_cd[i].tracks[j].name.match(reg_ex_expr);
        if(year != null) {
          Result.cd.push(type_cd[i]);
        }
      }
    }
  }
  return Result;
}


