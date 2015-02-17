$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
      event.preventDefault();

      var inputtedSideOne = parseInt($("input#side-one").val());
      var inputtedSideTwo = parseInt($("input#side-two").val());
      var inputtedSideThree = parseInt($("input#side-three").val());
      var newTriangle = {
        sides: [inputtedSideOne,
                inputtedSideTwo,
                inputtedSideThree],
        type: function() {
          this.sides.sort(function(a, b) {
            return a - b;
          });
            if(this.sides[2] > this.sides[0] + this.sides[1]) {
              alert("This is not a triangle");
            } else if(this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
                $("ul#equilaterals").append("<li>" + this.sides + "</li>");
            } else if(this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2]) {
                $("ul#isoceles").append("<li>" + this.sides + "</li>");
            } else {
                $("ul#scalenes").append("<li>" + this.sides + "</li>");
            }

          }
        };
      newTriangle.type();

  });
});
