export function newFunction() {
  let ul = document.querySelector('ul');
  for (var k = ul!.children.length; k >= 0; k--) {
    ul!.appendChild(ul!.children[Math.random() * k | 0]);
  }
}
