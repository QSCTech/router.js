# Router.js

类似 Backbone 的路由实现

## Usage

### 基本使用

```javascript
router = new Router;
router.add({route: "#!/book/:id", callback: function(id) {console.log(id)}, context: this});
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

## License

Copyright (C) 2013 Hexcles Ma, Zeno Zeng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
