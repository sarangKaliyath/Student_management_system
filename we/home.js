

function slideshow() {
    

    const arr = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3GNA8dZpFL3mI1fUZ0x7KwHaEK%26pid%3DApi&f=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.OsfrOejuYf-eDkLy9XkpMAHaEK%26pid%3DApi&f=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3oqK4Lmx6aM1O0UbMbHWawHaEK%26pid%3DApi&f=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YdObH6oALJ9z85qXpYDxNgHaEK%26pid%3DApi&f=1"]
    let div = document.getElementById('slideshow');

    let img = document.createElement('img');

    img.src = arr[0];

    let i = 0;

    div.append(img);


    setInterval(function () {
        
        if (i == arr.length) {
            i = 0;
        }

        img.src = arr[i];

        i++;

    }, 3000);

}

slideshow();


const students = [

    { name: "alpha",    attendance: "99",  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YdkNhFNLUQ_NN3gZir70pQHaHZ%26pid%3DApi&f=1" },
    { name: "bravo",    attendance: "100", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YdkNhFNLUQ_NN3gZir70pQHaHZ%26pid%3DApi&f=1" },
    { name: "charlie",  attendance: "97",  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YdkNhFNLUQ_NN3gZir70pQHaHZ%26pid%3DApi&f=1" },
    { name: "delta",    attendance: "98",  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YdkNhFNLUQ_NN3gZir70pQHaHZ%26pid%3DApi&f=1" },
    { name: "echo",     attendance: "87",  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YdkNhFNLUQ_NN3gZir70pQHaHZ%26pid%3DApi&f=1" },
    { name: "foxtrot",  attendance: "77",  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YdkNhFNLUQ_NN3gZir70pQHaHZ%26pid%3DApi&f=1" },

];


if (localStorage.getItem("students") == null) {
    
    localStorage.setItem("students", JSON.stringify(students));
}


function showStudents(d) {
    
    let students = d

    let students_div = document.getElementById('students');

    students_div.innerHTML = null;

    students.forEach(function (el) {
        
        let div = document.createElement('div');

        let p_name = document.createElement("p");

        p_name.innerText = el.name;

        
        let p_att = document.createElement("p");

        p_att.innerHTML = el.attendance;

        let img = document.createElement('img');

        img.src = el.img;

        div.append(img, p_name, p_att);

        
        students_div.append(div);

    });


}

showStudents(JSON.parse(localStorage.getItem('students')));
// show when students are not sorted;



function sortLH() {
    
    let students = JSON.parse(localStorage.getItem("students"))

    students = students.sort(function(a, b){
        return a.attendance - b.attendance;
    })

    
    showStudents(students);
    console.log("lh");
    
}

function sortHL() {
    
    let students = JSON.parse(localStorage.getItem("students"))

    students = students = students.sort(function(a,b){
        return b.attendance - a.attendance;
    })

    showStudents(students)
    console.log("hl")

}


