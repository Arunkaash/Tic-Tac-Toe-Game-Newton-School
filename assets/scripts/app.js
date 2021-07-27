let p1 = {
    first: "newton",
}

function a(marks, branch) {
    console.log(this.first + "......." + marks + "......." + branch);
}


a.apply(p1, [100, "cse"]);