## Migrations

Jotta relaatiotietokannan taulujen rakenne saadaan pysymään koodin kanssa synkronissa, niiden rakenne kannattaa luoda *migrations*-työkalulla. Samalla työkalulla voidaan lisätä tietokantaan myös testitiedot *seeds*.

*node.js* ympäristölle on monta *migrations*-työkalua, tässä käytämme *knex*:iä.

### Knex:in asennus

Tee itsellesi uusi kansio ja asenna siihen *knex*. Muista listätä myös *.gitignore*.

```cmd
npm init
npm install knex --save-dev
```

Aja *knex*-init, joka luo konffaustiedoston *knexfile.js*. Anna projektille nimeksi esim. "vuokraus" ja paina *enter*-muihin kohtiin.

```cmd
npx knex init
```

*knexfile.js*:ssä pitäisi olla vähintään kirjautumistiedot localhost-tietokannan käyttöön.

Jos käytät MySQL-tietokantaa, päivitä *development* -tiedot seuraaviksi:

```js
module.exports = {
    client: 'mysql',
    connection: {
      user: 'root',
      password: 'mypass123',
      database: 'my_rentals'
    }
}
```

Jos taas käytät Postgress-tietokantaa:

```js
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user:'postgres',
      password: 'mypass123',
      database: 'my_rentals'
    }
}
```

Asenna vielä *mysql*:

```cmd
npm install mysql --save
```

Tai *postgres*:

```cmd
npm install pg --save
```

### Docker

Docker:in avulla voidaan ajaa erilaisia tietokantaversioita ja kehitysympäristöjä ilman erillista asennusta. Tässä harjoituksessa opetellaan käyttämään Docker:ia lokaalin kehitysympäristön käynnistämiseen:

Käynnistä [MySQL ja PHPMyAdmin dockerilla](https://otredu.github.io/docker/mysql.html) ja luo *my_rentals*-tietokanta.

### Taulujen luominen

Luo uusi *migrations*-tiedosto:

```cmd
npx knex migrate:make create_rental
```

Tämä tekee tyhjän migrations-tiedoston *migrations*-kansioon.

Määrittele siinä *users*-taulun kentät:

```js
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', t => {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email')
        t.timestamps(false, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
  };
```

Aja nyt ensimmäinen *migrations*:

```cmd
npx knex migrate:latest
```

Jos haluaa tehdä muutoksia, tämän *migrations*-version voi poistaa ajamalla:

```cmd
npx knex migrate:rollback
```

Tässä esimerkissä on luotu toinen taulu, ja taulujen välille relaatio:

```js
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', t => {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email')
        t.timestamps(false, true)
    })
    .createTable('appartments', t => {
        t.increments('id').primary()
        t.string('address').notNullable()
        t.integer('user_id').unsigned().references('id').inTable('users').notNull().onDelete('cascade');
        t.timestamps(false, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('appartments')
    .dropTableIfExists('users')
  };
```

Huomaa, että taulut on luotava tässä järjestyksessä ja poistettava päinvastaisessa järjestyksessä.

### Seeds

Luoduille tauluille voidaan ajaa testidataa *seeds.js*-tiedostoista. Luo ensin tyhjä *seeds*-tiedosto:

```cmd
npx knex seed:make 01_users
```

Tämä luo tyhjän 01_users.js *seeds*-kansioon. Tallenna siihen testidata:

```js

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'fodark', password: "12", email: 'mock@email.com'},
        {id: 2, username: 'john', password: "34", email: 'mock2@email.com'},
        {id: 3, username: 'david', password: "56", email: 'mock3@email.com'}
      ]);
    });
};
```

Saat testidatan tietokantaan ajamalla:

```cmd
npx knex seed:run
```

Toiseen tauluun voidaan lisätä niinikään tietoja (02_appartments.js):

```js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appartments').del()
    .then(function () {
      // Inserts seed entries
      return knex('appartments').insert([
        {id: 1, address: 'Koulutie 1', user_id: 3},
        {id: 2, address: 'Koulutie 2', user_id: 2},
        {id: 3, address: 'Koulutie 3', user_id: 1}
      ]);
    });
};
```

*knex* ajaa *seeds*-tiedostot aakkosjärjestyksessä, joten ne kannattaa numeroida, niin että ajojärjestys on haluttu.


### Develoment vs. production

Jos haluat ajaa tietokannan tuotantoympäristöön, muista lisätä *host*-tieto knex.js-tiedostoon (tässä on disabloitu SSL, ei sovellu tuotantokäyttöön):

```js
  production: {
    client: 'postgresql',
    connection: {
      host: 'myremoteserver',
      database: 'myremotedb',
      user:     'myremoteuser',
      password: 'myuremotepassword',
      ssl:  { rejectUnauthorized: false }
    }
```

Lisää käynnistykseen *--env* flag:

```cmd
npx knex migrate:latest --env production
npx knex seed:run --env production
```

### Lisätietoa:

- [Knex migrations and seeding](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)
- [Database migrations with Knex](http://perkframework.com/v1/guides/database-migrations-knex.html)
- [Knex cheatsheet](https://devhints.io/knex#schema)
- [Knex migrations installation](http://knexjs.org/#Installation-migrations)
