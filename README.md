# Angular 2 - Beta Signup Example
An lightweight server-less Angular 2 beta signup infrastructure using [Formspree](https://formspree.io/).
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Structure
The app containes two main routes. The first one is `/login`. This displays a login page, which should be hidden to the public in beta mode (but should still be accessible by internal operators for demo purposes [authentication is handled by a static token]). The second one is `/beta` which provides a beta signup form and a corresponding success page. The form data are submitted server-less via email to the project operators via Formspree. The beta state can be toggled via a flag in the environment config file.
