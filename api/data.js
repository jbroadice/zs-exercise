var Chance = require('chance');
var chance = new Chance();
var twenty = [];
for(var j=0;j<20;j++){
  if(j<10){
    twenty.push(j + 1);
  } else {
    twenty.push(false);
  }
}

module.exports = function () {
  var data = {
    users: [
      {
        "id": 1,
        "givenName": "Peter",
        "familyName": "Capaldi"
      },
      {
        "id": 2,
        "givenName": "Matt",
        "familyName": "Smith"
      },
      {
        "id": 3,
        "givenName": "David",
        "familyName": "Tennant"
      },
      {
        "id": 4,
        "givenName": "Christopher",
        "familyName": "Eccleston"
      },
      {
        "id": 5,
        "givenName": "Jenna",
        "familyName": "Coleman"
      },
      {
        "id": 6,
        "givenName": "Alex",
        "familyName": "Kingston"
      },
      {
        "id": 7,
        "givenName": "Karen",
        "familyName": "Gillan"
      },
      {
        "id": 8,
        "givenName": "Catherine",
        "familyName": "Tate"
      }
    ],
    "types": [
      {
        "creationDateTime": "2016-08-17T13:07:19.800Z",
        "id": "article",
        "documentsCount": 5,
        "description": "Articles about the programme",
        "name": "Article Page",
        "colourId": "golden"
      },
      {
        "creationDateTime": "2016-08-13T15:00:44.200Z",
        "id": "profile",
        "documentsCount": 6,
        "description": "Actor/Actress profiles",
        "name": "Profile Page",
        "colourId": "spray"
      }
    ],
    files: []
  };

  for (var i = 0; i < 20; i++) {
    var date = chance.date({year: 2015});
    var modifiedDate = new Date(date.getTime() + chance.d8() * 60*60000);
    var id = chance.guid();
    var title = chance.sentence({words: 2});
    var status = chance.pickone(["In progress", "Published", "For review", "Approved"]);
    var scheduled = chance.bool({likelihood: 10});
    if (scheduled) {
      status = 'Scheduled'
    }
    var rndm = Math.floor( (Math.random() * twenty.length) );
    data.files.push({
      "creationDateTime": date.toISOString(),
      "status": status,
      "modifiedBy": chance.d8(),
      "type": chance.pickone(["profile", "article"]),
      "uri": "/project/test/content/" + id,
      "version": chance.d4(),
      "id": id,
      "fileId": title.replace(' ', '-'),
      "scheduled": scheduled,
      "title": title,
      "createdBy": chance.d8(),
      "modifiedDateTime": modifiedDate.toISOString(),
      "live": chance.bool({likelihood: 60}),
      "popularity": twenty[rndm]
    });
    twenty.splice(rndm, 1);
  }

  return data;
};
