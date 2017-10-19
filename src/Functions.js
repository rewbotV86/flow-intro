// @flow

function getColor(name: "success" | "warning" | "danger") {
    switch (name) {
      case "success" : return "green";
      case "warning" : return "yellow";
      case "danger"  : return "red";
    }
}
getColor("dangerr");

function concat(a: string, b: string) {
  return a + b;
}
concat(1, 2);

function foo(x: ?number): string {
  if (x) {
      return x;
  }

  return "default string"
}