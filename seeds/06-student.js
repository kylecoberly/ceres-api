exports.seed = function(knex, Promise) {
    return knex.schema.raw("TRUNCATE TABLE \"student\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("student").insert([{
                "first-name": "Aaron",
                "last-name": "Goodman",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Andy",
                "last-name": "Herzog",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Cass",
                "last-name": "Torske",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Chana",
                "last-name": "Reynolds",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Chris",
                "last-name": "Houdlette",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Cole",
                "last-name": "Batson",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Daisha",
                "last-name": "Walton",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Darren",
                "last-name": "Hankins",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Dillon",
                "last-name": "Corkran",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Guillermo",
                "last-name": "Moratorio",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Ike",
                "last-name": "Obidike",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Jeremy",
                "last-name": "Clayton",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Jordan",
                "last-name": "Storz",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Kevin",
                "last-name": "Erickson",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Luke",
                "last-name": "McCrae",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Mark",
                "last-name": "Grant",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Matt",
                "last-name": "Seaton",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Matt",
                "last-name": "Winzer",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Michael",
                "last-name": "Dowd",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Mike",
                "last-name": "Roque",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Murph",
                "last-name": "Grainger",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Phil",
                "last-name": "Cunnell",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Steven",
                "last-name": "Castroverde",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Tyler",
                "last-name": "Briskie",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Zac",
                "last-name": "Jocelyn",
                "cohort": 1,
                "hire-date": null
            },{
                "first-name": "Alex",
                "last-name": "Lane",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Anthony",
                "last-name": "Valdez",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Austin",
                "last-name": "Edwards",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Ben",
                "last-name": "Matson",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Ethan",
                "last-name": "Granato",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Jack",
                "last-name": "Pantalena",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Jeff",
                "last-name": "Diers",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Juan",
                "last-name": "Ignacio Verni",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Merril",
                "last-name": "Jeffs",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Patrick",
                "last-name": "Rauls",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Ralph",
                "last-name": "Minor",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Richard",
                "last-name": "Beese",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Steven",
                "last-name": "VanWoerkom",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Tara",
                "last-name": "Mason",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "William",
                "last-name": "Velarde",
                "cohort": 2,
                "hire-date": null
            },{
                "first-name": "Anita",
                "last-name": "Khedkar",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Bill",
                "last-name": "Boughton",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Brad",
                "last-name": "Folkers",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Daria",
                "last-name": "Calwell",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "J",
                "last-name": "Shepler",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Jeff",
                "last-name": "Hernandex",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Jordan",
                "last-name": "Stephenson",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Lane",
                "last-name": "Faison",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Louis",
                "last-name": "Antweiler",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Matthew",
                "last-name": "Moyer",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Nathan",
                "last-name": "Khedkar",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Edlen",
                "last-name": "Khedkar",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Nick",
                "last-name": "Sugar",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Paul",
                "last-name": "Torres",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Paul",
                "last-name": "Van Dyke",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Ryan",
                "last-name": "Johnson",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Ryan",
                "last-name": "Phillips",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Stephen",
                "last-name": "O'Dell",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Thomas",
                "last-name": "Castleman",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Thomas",
                "last-name": "Krepp",
                "cohort": 3,
                "hire-date": null
            },{
                "first-name": "Brad",
                "last-name": "Gillick",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Brent",
                "last-name": "Thomas",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Derek",
                "last-name": "Kramer",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Devin",
                "last-name": "Gray",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Devin",
                "last-name": "Hanaway",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Coulter",
                "last-name": "Freyre",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "George",
                "last-name": "Flauta",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Izabela",
                "last-name": "Louw",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Jackson",
                "last-name": "Donovan",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "James",
                "last-name": "Schultz",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Jordan",
                "last-name": "Doig",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Jordan",
                "last-name": "Fred",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Jules",
                "last-name": "Perryman",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Justin",
                "last-name": "Hart",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Keith",
                "last-name": "Davis",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Lee",
                "last-name": "Robinson",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Lena",
                "last-name": "Ripple",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Michelle",
                "last-name": "Bergquist",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Molly",
                "last-name": "Brooks",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Nick",
                "last-name": "Fallon",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Nick",
                "last-name": "McKendry",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Taylor",
                "last-name": "Roberts",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Thomas",
                "last-name": "Jones",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Tristan",
                "last-name": "Gilford",
                "cohort": 4,
                "hire-date": null
            },{
                "first-name": "Alex",
                "last-name": "Read",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Andrew",
                "last-name": "Eskenazi",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Caroline",
                "last-name": "O'Donnell",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Chase",
                "last-name": "Hemerda",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Fahad",
                "last-name": "Haidari",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Jake",
                "last-name": "Feldman",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Jason",
                "last-name": "Clifton",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Marlena",
                "last-name": "Baker",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Matt",
                "last-name": "Pitts",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Robert",
                "last-name": "Puls",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Ross",
                "last-name": "Kiser",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Sean",
                "last-name": "McLimans",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Will",
                "last-name": "Carpenter",
                "cohort": 5,
                "hire-date": null
            },{
                "first-name": "Anu",
                "last-name": "Shrestha",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Bartholomew",
                "last-name": "Krystman",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Benjamin",
                "last-name": "Giordano",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Catie",
                "last-name": "Cook",
                "cohort": 6,
                "hire-date": "2017-02-13"
            },{
                "first-name": "Chaylen",
                "last-name": "Arnold",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Colin",
                "last-name": "Binion",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Creighton",
                "last-name": "Soukup",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Erik",
                "last-name": "Mura",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Grey",
                "last-name": "Delamar",
                "cohort": 6,
                "hire-date": "2017-02-17"
            },{
                "first-name": "Ian",
                "last-name": "Ian McGonigle",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Iggy",
                "last-name": "Bazo",
                "cohort": 6,
                "hire-date": "2017-02-03"
            },{
                "first-name": "Jaimie",
                "last-name": "Logan",
                "cohort": 6,
                "hire-date": "2016-12-02"
            },{
                "first-name": "Ji",
                "last-name": "Kim",
                "cohort": 6,
                "hire-date": "2017-01-09"
            },{
                "first-name": "Lane",
                "last-name": "Milos",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Lisa",
                "last-name": "Hull",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Maia",
                "last-name": "Samuel",
                "cohort": 6,
                "hire-date": "2016-11-28"
            },{
                "first-name": "Marc",
                "last-name": "Simonton",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Matthew",
                "last-name": "Donovan",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Navid",
                "last-name": "Fallahazad",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Oswaldo",
                "last-name": "Salazar",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Richard",
                "last-name": "Peters",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Ryan",
                "last-name": "Dunbar",
                "cohort": 6,
                "hire-date": "2017-02-14"
            },{
                "first-name": "Samantha",
                "last-name": "Spensley",
                "cohort": 6,
                "hire-date": "2016-12-09"
            },{
                "first-name": "Samuel",
                "last-name": "Persian",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Stephen",
                "last-name": "Knutter",
                "cohort": 6,
                "hire-date": "2016-12-22"
            },{
                "first-name": "Taylor",
                "last-name": "Hessel",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Thomas",
                "last-name": "Rizzo",
                "cohort": 6,
                "hire-date": null
            },{
                "first-name": "Tyler",
                "last-name": "Chase",
                "cohort": 6,
                "hire-date": "2017-02-16"
            },{
                "first-name": "Adam",
                "last-name": "Franzen",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Akiko",
                "last-name": "Okabe",
                "cohort": 7,
                "hire-date": "2017-02-17"
            },{
                "first-name": "Alexander",
                "last-name": "Glassford",
                "cohort": 7,
                "hire-date": "2016-12-18"
            },{
                "first-name": "Alexander",
                "last-name": "Nye",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Alias",
                "last-name": "Montoya",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Allen",
                "last-name": "Fordham",
                "cohort": 7,
                "hire-date": "2017-01-15"
            },{
                "first-name": "Austin",
                "last-name": "Mahan",
                "cohort": 7,
                "hire-date": "2017-01-13"
            },{
                "first-name": "Brandon",
                "last-name": "Blair",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Derek",
                "last-name": "Styer",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "George",
                "last-name": "Vickstrom",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Gina",
                "last-name": "DeBell",
                "cohort": 7,
                "hire-date": "2017-02-01"
            },{
                "first-name": "Isaac",
                "last-name": "Collier",
                "cohort": 7,
                "hire-date": "2016-11-11"
            },{
                "first-name": "Isaac",
                "last-name": "Miller",
                "cohort": 7,
                "hire-date": "2017-01-09"
            },{
                "first-name": "John",
                "last-name": "Berger",
                "cohort": 7,
                "hire-date": "2017-01-25"
            },{
                "first-name": "Jordon",
                "last-name": "Hoshor",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Kristian",
                "last-name": "Gannon",
                "cohort": 7,
                "hire-date": "2016-12-19"
            },{
                "first-name": "Mark",
                "last-name": "Dickinson",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Nathan",
                "last-name": "Dennis",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Phillip",
                "last-name": "Benz",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Ryan",
                "last-name": "Harings",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Ryan",
                "last-name": "Pando",
                "cohort": 7,
                "hire-date": "2017-01-25"
            },{
                "first-name": "Sam",
                "last-name": "Goldsmith",
                "cohort": 7,
                "hire-date": "2017-03-07"
            },{
                "first-name": "Shane",
                "last-name": "Pittman",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Tommy",
                "last-name": "Gaessler",
                "cohort": 7,
                "hire-date": "2017-01-12"
            },{
                "first-name": "Tyler",
                "last-name": "Maier",
                "cohort": 7,
                "hire-date": null
            },{
                "first-name": "Adriana",
                "last-name": "Galvez",
                "cohort": 8,
                "hire-date": "2016-11-03"
            },{
                "first-name": "Alex",
                "last-name": "Black",
                "cohort": 8,
                "hire-date": "2016-10-10"
            },{
                "first-name": "Alex",
                "last-name": "Murphy",
                "cohort": 8,
                "hire-date": "2016-12-01"
            },{
                "first-name": "Andres",
                "last-name": "Espineira",
                "cohort": 8,
                "hire-date": null
            },{
                "first-name": "Anna",
                "last-name": "Lewis",
                "cohort": 8,
                "hire-date": null
            },{
                "first-name": "Ben",
                "last-name": "Goebel",
                "cohort": 8,
                "hire-date": "2016-11-11"
            },{
                "first-name": "Cole",
                "last-name": "Sobel",
                "cohort": 8,
                "hire-date": "2016-11-03"
            },{
                "first-name": "Devin",
                "last-name": "Stone",
                "cohort": 8,
                "hire-date": "2016-12-08"
            },{
                "first-name": "Jessica",
                "last-name": "Lee",
                "cohort": 8,
                "hire-date": null
            },{
                "first-name": "Jim",
                "last-name": "Watkins",
                "cohort": 8,
                "hire-date": null
            },{
                "first-name": "Jonathan",
                "last-name": "Huxhold",
                "cohort": 8,
                "hire-date": "2017-01-13"
            },{
                "first-name": "Julie",
                "last-name": "DeMasters",
                "cohort": 8,
                "hire-date": null
            },{
                "first-name": "Kendra",
                "last-name": "Lyndon",
                "cohort": 8,
                "hire-date": "2017-02-23"
            },{
                "first-name": "Max",
                "last-name": "Sands",
                "cohort": 8,
                "hire-date": "2017-01-27"
            },{
                "first-name": "Michael",
                "last-name": "Olson",
                "cohort": 8,
                "hire-date": "2017-02-06"
            },{
                "first-name": "Rick",
                "last-name": "Van",
                "cohort": 8,
                "hire-date": null
            },{
                "first-name": "Ricky",
                "last-name": "Padilla",
                "cohort": 8,
                "hire-date": null
            },{
                "first-name": "Ryan",
                "last-name": "Garofalo",
                "cohort": 8,
                "hire-date": null
            },{
                "first-name": "Sarah",
                "last-name": "Healey",
                "cohort": 8,
                "hire-date": "2016-10-17"
            },{
                "first-name": "Sarah",
                "last-name": "Meyer",
                "cohort": 8,
                "hire-date": "2016-10-24"
            },{
                "first-name": "Scott",
                "last-name": "Wilkins",
                "cohort": 8,
                "hire-date": "2017-01-13"
            },{
                "first-name": "Thomas",
                "last-name": "Henderson",
                "cohort": 8,
                "hire-date": "2016-10-14"
            },{
                "first-name": "Tim",
                "last-name": "Pender",
                "cohort": 8,
                "hire-date": "2017-01-20"
            },{
                "first-name": "Vince",
                "last-name": "Vahala",
                "cohort": 8,
                "hire-date": "2016-12-13"
            },{
                "first-name": "Alex",
                "last-name": "James",
                "cohort": 9,
                "hire-date": "2016-11-08"
            },{
                "first-name": "Amanda",
                "last-name": "Pearce",
                "cohort": 9,
                "hire-date": "2016-10-14"
            },{
                "first-name": "Andy",
                "last-name": "Knolla",
                "cohort": 9,
                "hire-date": "2016-11-28"
            },{
                "first-name": "Andrew",
                "last-name": "Vandermeer",
                "cohort": 9,
                "hire-date": "2016-10-19"
            },{
                "first-name": "Bennett",
                "last-name": "Joerger",
                "cohort": 9,
                "hire-date": "2016-11-18"
            },{
                "first-name": "Bradford",
                "last-name": "Lamson-Scribner",
                "cohort": 9,
                "hire-date": "2016-09-20"
            },{
                "first-name": "Chris",
                "last-name": "Comella",
                "cohort": 9,
                "hire-date": null
            },{
                "first-name": "Dan",
                "last-name": "Abbott",
                "cohort": 9,
                "hire-date": "2016-10-25"
            },{
                "first-name": "Evan",
                "last-name": "McClaugherty",
                "cohort": 9,
                "hire-date": "2016-10-12"
            },{
                "first-name": "Heather",
                "last-name": "Stone",
                "cohort": 9,
                "hire-date": "2016-07-11"
            },{
                "first-name": "Kristie",
                "last-name": "McGoldrick",
                "cohort": 9,
                "hire-date": "2016-10-14"
            },{
                "first-name": "Laney",
                "last-name": "Smith",
                "cohort": 9,
                "hire-date": "2016-10-14"
            },{
                "first-name": "Lucas",
                "last-name": "Barbula",
                "cohort": 9,
                "hire-date": "2016-10-18"
            },{
                "first-name": "Lucy",
                "last-name": "Follansbee",
                "cohort": 9,
                "hire-date": "2017-10-17"
            },{
                "first-name": "Mairin",
                "last-name": "Bailey",
                "cohort": 9,
                "hire-date": "2016-09-20"
            },{
                "first-name": "Pawel",
                "last-name": "Maciulewski",
                "cohort": 9,
                "hire-date": "2016-11-03"
            },{
                "first-name": "Pete",
                "last-name": "Aguilar",
                "cohort": 9,
                "hire-date": "2016-10-11"
            },{
                "first-name": "Peter",
                "last-name": "Ostiguy",
                "cohort": 9,
                "hire-date": "2016-12-12"
            },{
                "first-name": "Ray",
                "last-name": "Koren",
                "cohort": 9,
                "hire-date": "2016-10-31"
            },{
                "first-name": "Russell",
                "last-name": "Fisher",
                "cohort": 9,
                "hire-date": "2017-01-11"
            },{
                "first-name": "Steven",
                "last-name": "Lawson",
                "cohort": 9,
                "hire-date": "2017-02-14"
            },{
                "first-name": "Tim",
                "last-name": "Musgrove",
                "cohort": 9,
                "hire-date": "2016-09-20"
            },{
                "first-name": "Wes",
                "last-name": "Hediger",
                "cohort": 9,
                "hire-date": "2017-03-08"
            },{
                "first-name": "Will",
                "last-name": "Thomas",
                "cohort": 9,
                "hire-date": "2016-09-30"
            },{
                "first-name": "Zach",
                "last-name": "Zimmerman",
                "cohort": 9,
                "hire-date": "2016-11-04"
            }]);
        });
};
