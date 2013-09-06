# Router.js

## Usage

### 基本使用

```javascript
router = new Router;
router.add({route: "#!/book/:id", callback: function(id) {console.log(id)}});
router.add({route: "#!/p:id", callback: function(id) {console.log(id)}});
router.dispatch();
```

### 可选路由

```javascript
router = new Router;
route = {
    route: "#!/books(/tag/:tag)(/shelf/:id)",
    callback: function(tag, id) {
        console.log({tag: tag, id: id});
    }
};
router.add(route);
router.dispatch();
```

### 增加多条记录

```javascript
router = new Router;
routes = [
    {route: "#!/book/:id", callback: function(id) {console.log(id)}, context: this},
    {route: "#!/shelf/:id", callback: function(id) {console.log(id)}, context: this}
];
router.add(routes);
router.dispatch();
```



