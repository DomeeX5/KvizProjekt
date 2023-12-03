export function RandomOrder() {
  let ul = document.querySelector('ul');
  for (var k = ul!.children.length; k >= 0; k--) {
    ul!.appendChild(ul!.children[Math.random() * k | 0]);
  }
}

export function RandomOrder2() {
  var ulList = document.getElementsByClassName("myElement");
for (let j = 0; j < ulList.length; j++) {
  var thisUL = ulList[j];
  for (let i = thisUL.children.length; i >= 0; i--) {
    thisUL.appendChild(thisUL.children[Math.random() * i | 0]);
  }
}
}
