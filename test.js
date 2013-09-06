var router = new Router;
var routes = [
  {route: "#!/book/:id", callback: function(id) {console.log(id)}, context: this},
  {
      route: "#!/books(/tag/:tag)(/shelf/:id)",
      callback: function(tag, id) {
          console.log({tag: tag, id: id});
      },
      context: this
  },
  {
      route: "#!/p:id",
      callback: function(id) {
          console.log(id);
      },
      context: this
  }
];
router.add(routes);
router.dispatch();
// test
var tests = ["#!/book/100", "#!/books/shelf/100", "#!/books", "#!/books/tag/tagName", "#!/books/tag/tagName/shelf/100", "#!/p100", "#!/p2"];
for(var i = 0; i < tests.length; i++) {
    var test = tests[i];
    (function(test) {
        setTimeout(function() {
            console.log(test);
            window.location.hash = test;
        }, 1000*i);
    })(test)
}