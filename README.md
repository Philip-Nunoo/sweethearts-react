# Problem statement

* Create a small Facebook Instant Game [1] using React. The game logic should be similar to [kamelrechner.eu](http://kamelrechner.eu/en/male). You can basically just clone the provided camel example or be creative with another topic. The UI should consist of the following elements:
    * **Start Page:** Render a form with multiple inputs. Keep the form plain and simple, just focus on the code. The UI doesn’t have to look good. There is no need to add any images.
    * **Result Page:** Depending on the provided inputs calculate and show the result. The result page should contain a share button to share the result via Facebook SDK share-button functionality [2].

* Use a bundler like webpack to provide a zipped/minified/uglified version as well as a function to run the code in a staging/dev environment.
* Don’t worry too much about CSS or general styling. Ideally integrate a CSS framework like bulma [3] to have basic styling possibilities available.
* Write clean and professional code, ideally separate business logic from display logic
* Provide us with a github/gitlab repository that includes all commits and code so we can see how you approached this test-task.
Don’t spend more than 5 hours on this test-task. If you didn’t finish everything, just show us how far you got.
* Last but not least: Have fun! :)

# Solution

A simple react app built with the following packages

###### Packages

* **[React v16.8.6]()**: A frontend library for building Single Page Applications.
* **[Bulma v0.7.4](https://bulma.io/)**: A frontend UI framework for the web.
* **[node-sass v4.11.0]()**: Compile sass files within a node project.
* **[react-countup v4.1.3](https://www.npmjs.com/package/react-countup)**: A configurable React component wrapper around CountUp.js.
* **[react-dom v16.8.6](https://www.npmjs.com/package/react-dom)**
* **[react-redux v7.0.2](https://www.npmjs.com/package/react-redux)**: Official React bindings for Redux.
* **[react-router v5.0.0](https://www.npmjs.com/package/react-router)**: Declarative routing for React.
* **[redux v4.0.1](https://reduxframework.com/)**: Predictable state container for JavaScript apps.
* **[simpl-schema v1.5.5](https://www.npmjs.com/package/simpl-schema)**: SimpleSchema validates JavaScript objects to ensure they match a schema.
* **[uniforms v1.31.1](https://www.npmjs.com/package/uniforms)**: A set of React libraries for building forms.
* **[uniforms-bulma]()**: (WIP) Bulma UI Components submitted by Me(Philip Afful Nunoo).

The application is written as a *Single Page Application* with three main pages just as [kamelrechner.eu](http://kamelrechner.eu) (with emphasizes on the male user).

* Landing page
* Questionaire page
* Results page

### Data Persistence
Since this is a simple frontend application, all data is persisted using redux store and required no db connectivity.

### Building project

Since builds are mostly not pushed to github this is the official way to generate a working build for the project below.

```sh
$ npm i
$ npm run build
```

after this, you should have a working folder called build where you would find your ```index.html```.

1. You can install http-server to test the working build. Example

```sh
$ npm install -g http-server
```

2. Create a private key and a certificate via openssl. This is necessary to run the secure local server.

```sh
$ cd path/to/my/game/build
$ openssl genrsa 2048 > key.pem
$ openssl req -x509 -days 1000 -new -key key.pem -out cert.pem
```

3. Run the game from localhost with SSL. Once the key and certificate are ready, you can serve from localhost using SSL.

```sh
$ http-server --ssl -c-1 -p 8080 -a 127.0.0.1 
```

4. After this, pointing your browser to https://localhost:8080 should show you the game running.




### Nice to have
* Save user response
* User management