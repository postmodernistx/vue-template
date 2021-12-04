# Vue template
This is my personal Vue template for "bootstrapping" projects rather quickly.

It includes, by default, basic Google authentication against a Firebase instance, configured in `.env`.

Folder names and project structure is somewhat compatible with [Material Icons](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) for [PHPStorm](https://www.jetbrains.com/phpstorm/), to get them [pretty icons](https://github.com/mallowigi/a-file-icon-idea#file-icons).

Will display a login button to authenticate with a Google account.

## Project setup
### Installing GreenSock for the first time
Then the first time that you install GSAP to a project you need to install via:
```
npm install gsap@npm:@gsap/business
```

### Installing other dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Common weirdness
### Save a CSS variable from a Vue component
- https://learnvue.co/2021/05/how-to-use-vue-css-variables-reactive-styles-rfc/
- https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component

## Firebase Read/Write rules

Limit read/write to certain Google users

https://console.firebase.google.com/project/PROJECT-NAME-HERE/firestore/rules

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid == "google-user-id-goes-here";
      allow read, write: if request.auth.uid == "another-user-id-here";
    }
  }
}
```

