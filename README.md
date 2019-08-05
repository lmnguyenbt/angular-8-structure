# Angular Architecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Folder Structure

```
|-- src
|   |-- assets
|   |-- environments
|   |-- app
|   |   |-- auth
|   |   |   |-- auth.service.ts
|   |   |-- guard
|   |   |   |-- auth.guard.ts
|   |   |   |-- route.guard.ts
|   |   |-- services
|   |   |   |-- http.interceptor.ts
|   |   |   |-- http-response-handler.service.ts
|   |   |   |-- jwt.service.ts  
|   |   |   |-- preloading.service.ts
|   |   |   |-- table.service.ts 
|   |   |   |-- permission.service.ts   
|   |   |-- modules
|   |   |   |-- modules.ts
|   |   |   |-- routing.module.ts
|   |   |   |-- dashboard
|   |   |   |   |-- dashboard.component.html
|   |   |   |   |-- dashboard.component.scss
|   |   |   |   |-- dashboard.component.ts
|   |   |   |   |-- dashboard.module.ts
|   |   |   |   `-- dashboard-routing.module.ts
|   |   |   |-- login
|   |   |   |   |-- login.component.html
|   |   |   |   |-- login.component.scss
|   |   |   |   |-- login.component.ts
|   |   |   |   |-- login.module.ts
|   |   |   |   `-- login-routing.module.ts
|   |   |   |-- posts
|   |   |   |   |-- components
|   |   |   |   |   |-- post-details
|   |   |   |   |   |   |-- post-details.component.html
|   |   |   |   |   |   |-- post-details.component.scss
|   |   |   |   |   |   |-- post-details.component.spec.ts
|   |   |   |   |   |   `-- post-details.component.ts
|   |   |   |   |   |-- post-form
|   |   |   |   |   |   |-- post-form.component.html
|   |   |   |   |   |   |-- post-form.component.scss
|   |   |   |   |   |   |-- post-form.component.spec.ts
|   |   |   |   |   |   `-- post-form.component.ts
|   |   |   |   |   `-- posts-list
|   |   |   |   |       |-- posts-list.component.html
|   |   |   |   |       |-- posts-list.component.scss
|   |   |   |   |       |-- posts-list.component.spec.ts
|   |   |   |   |       `-- posts-list.component.ts
|   |   |   |   |-- posts.module.ts
|   |   |   |   |-- posts-routing.module.ts
|   |   |   |   `-- posts.service.ts
|   |   |    `-- ...
|   |   `-- shared
|   |       |-- directives
|   |       |   |-- clickOutside.directive.ts
|   |       |   |-- index.ts
|   |       |   |-- number.directive.ts
|   |       |   |-- sortTable.directive.ts
|   |       |   `-- sticky.directive.ts
|   |       |-- animations
|   |       |   |-- fadeIn.animation.ts
|   |       |   |-- fallIn.animation.ts
|   |       |   |-- index.ts
|   |       |   |-- moveIn.animation.ts
|   |       |   |-- moveInLeft.animation.ts
|   |       |   `-- slideInRight.animation.ts
|   |       |-- components
|   |       |   |-- footer
|   |       |   |   |-- footer.component.html
|   |       |   |   |-- footer.component.scss
|   |       |   |   `-- footer.component.ts
|   |       |   |-- header
|   |       |   |   |-- header.component.html
|   |       |   |   |-- header.component.scss
|   |       |   |   `-- header.component.ts
|   |       |   |-- index.ts
|   |       |   `-- spinner
|   |       |       |-- spinner.component.scss
|   |       |       `-- spinner.component.ts
|   |       |-- containers
|   |       |   |-- layout
|   |       |   |   |-- layout.component.ts
|   |       |   |   |-- layout.component.scss
|   |       |   |   |-- layout.component.html
|   |       |-- models
|   |       |   |-- auth
|   |       |   |   |-- login.model.ts
|   |       |   |   |-- register.model.ts
|   |       |   |   `-- user.model.ts
|   |       |   `-- index.ts
|   |       |-- interfaces
|   |       |   `-- post.interface.ts
|   |       `-- pipes
|   |           |-- index.ts
|   |           |-- sanitize-html.pipe.ts
|   |           |-- date.pipe.ts
|   |           `-- truncate.pipe.ts
|   |-- app.component.ts
|   |-- app-config.service.ts
|   |-- app.module.ts
|   `-- app-routing.module.ts
|-- index.html 
|-- styles.scss
`-- ...
```
