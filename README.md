# Express GraphQL Server Example


### Installation
1. Clone this project.
    ```sh
    $ git clone https://github.com/skyapps-id/Express-GraphQL-Server-Example.git 
    ```

2. Install Dependency.
    ```sh
    $ cd  Express-GraphQL-Server-Example/
    $ npm install
    ```

3. Run Project.
    ```sh
    Deployment
    $ npm run start 

    or
    
    Development
    $ npm run server
    ```

4.  End Point API
    ```sh
    http://localhost:5000/graphql
    ```

5. Example Query GraphiQL.
    ```sh
    - Get Users
      Query :
      {
        users{
          name,
          address {
            street
            suite
            city
            zipcode
          }
        }
      }
      Result :
      {
        "data": {
          "users": [
            {
              "name": "Leanne Graham",
              "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874"
              }
            },
            {
              "name": "Ervin Howell",
              "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771"
              }
            },
          ]
        }
      }

    - Get User By id
      Query :
      {
        user(id: 1){
          name,
          address {
            street
            suite
            city
            zipcode
          }
        }
      }
      Result:
      {
        "data": {
          "user": {
            "name": "Leanne Graham",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874"
            }
          }
        }
      }
    ```

### Licence

This work is under [MIT](LICENCE) licence.