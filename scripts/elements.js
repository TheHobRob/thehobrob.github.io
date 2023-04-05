fetch('includes/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

let parent = document.getElementById("header_info");
let children = parent.children;
/*let numberOfChildren = children.length;
console.log(numberOfChildren);*/