
const ccccccc = [
    {"src":"./images/CST8101.jpg", "alt":"Cover page of the text book CST8101","coursecode": "CST8101","level":"level 1","title": "Computer Essentials","description": "The essentials of computer software, hardware, and laptop management form the foundation forbuilding further technical programming skills. Learn to configure your laptop environment, basic PC andtroubleshoot problems. Students create backups, install virus protection, and manage files through abasicunderstanding of the Windows Operating System."},
    {"src":"images/CST8116.jpg", "alt":"Cover page of the text book CST8116","coursecode": "CST8116","level":"level 1","title": "Introduction to Computer Programming","description": "Possessing the fundamentals of logic, problem-solving and programming language structure providesa solid foundation for further study in the field. Students develop introductory knowledge of computerprogrammingwith emphasis on problem analysis and design, using algorithms, pseudocode, flowcharts, UML ClassDiagramsandtesting, with the Java programming language used as a means to implement problem solution designs." },
    {"src":"images/CST8215.jpg", "alt":"Cover page of the text book CST8215","coursecode": "CST8215","level":"level 1","title": "Introduction to Database","description": "Databases are used to store data and are a core component of many information technology systems.Students learn the fundamentals of relational databases design using Entity Relation Diagrams (ERDs) anduseStructured Query Language (SQL) to create, modify and query a database. Students design and createdatabases thatare maintainable, secure, and adaptable to change in business requirements, using normalization." },
    {"src":"images/MAT8001.jpg", "alt":"Cover page of the text book MAT8001","coursecode": "MAT8001","level":"level 1","title": "Technical Mathematics for Computer Science","description": "The study of algebraic and transcendental functions is an essential prerequisite to Calculus.Students manipulate algebraic expressions, solve algebraic equations and linear systems, and learn theproperties ofand graph algebraic and transcendental functions. Students investigate computer number systems inaddition toBoolean algebra and logic to help solve problems involving computer systems."},
    {"src":"images/ENL1813.jpg", "alt":"The Algonquin Collage web page photo","coursecode": "ENL1813","level":"level 1","title": "Communications I","description": "Communication remains an essential skill sought by employers, regardless of discipline or fieldof study. Using a practical, vocation-oriented approach, students focus on meeting the requirements ofeffectivecommunication. Through a combination of lectures, exercises, and independent learning, students practisewriting,speaking, reading, listening, locating and documenting information and using technology to communicateprofessionally."},
    {"src":"images/CST8285.jpg", "alt":"The Algonquin Collage web page photo","coursecode": "CST8285","level":"level 2","title": "Web Programming","description": "The World Wide Web (WWW) has become an integrated part of everyday life. Students develop basic skills of webprogramming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions toproblems of increasing interactivity and complexity. Lectures are reinforced by practical assignments that encouragestudents to construct and maintain their own websites."},
    {"src":"images/CST8284.jpg", "alt":"The Algonquin Collage web page photo","coursecode": "CST8284","level":"level 2","title": "Object Oriented Programming (Java)","description": "Working in the field of information technology as a programmer requires a firm understanding of Object-OrientedProgramming (OOP) concepts. Students explore object-oriented programming methodology using the Java programminglanguage. Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are covered andreinforced with practical applications."},
    {"src":"images/CST8102.jpg", "alt":"The Algonquin Collage web page photo","coursecode": "CST8102","level":"level 2","title": "Operating System Fundamentals (GNU/Linux)","description": "Operating systems form the backbone of information technology systems coordinating the interaction between hardware andsoftware. Students explore the basic concepts and components of Operating Systems (OS), and how they function andinteract with hardware and software components. Students examine the details of operating system structures, processmanagement, storage management, installation, configuration, and administration both in theory and through practicalassignments based on the GNU/Linux operating system."},
    {"src":"images/CST2355.jpg", "alt":"The Algonquin Collage web page photo","coursecode": "CST2355","level":"level 2","title": "Database Systems","description": "Database systems can automate data processing tasks as well as tie into the security of information technology systems.Students acquire practical experience using market-leading object-relational database management systems like Oracle andMySQL. Students obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks."},
]
var result=ccccccc;
var aaaaaa=0;
function sortCourseABC(){
    if(aaaaaa%2==0){
        result=result.sort((a, b) => a.level.localeCompare(b.level));
    }else{
        result=result.sort((a, b) => b.level.localeCompare(a.level));
    }
    aaaaaa++;
    loading();
}
var abc;
function filter2ccccccc() {
    if(abc==1){
        serachccccccc();
    }
    result=result.filter(function(c){ return c.level === "level 2"; });
    loading();
    abc=0;
}
function filter1ccccccc() {
    if(abc==0){
        serachccccccc();
    }
    result=result.filter(function(c){ return c.level === "level 1"; });
    loading();
    abc=1;
}
function resetccccccc() {
    var sousuo = document.getElementById("myInput").value.toUpperCase();
    sousuo.value="";
    result=ccccccc;
    loading();
}
function serachccccccc() {
    var sousuo = document.getElementById("myInput").value.toUpperCase();
    result=ccccccc.filter(function(c){ return c.title.toUpperCase().indexOf(sousuo) > -1; });
    loading();
} 

function loading() {
    var count;
    var shabi=document.getElementById("shabi");
    shabi.innerHTML=null;
    for(count=0;count<result.length;count++){
        const section = document.createElement("section");
        const img =document.createElement("img");
        img.setAttribute("src",result[count].src);
        img.setAttribute("alt",result[count].alt);
        const div =document.createElement("div");
        const coursecodes =document.createElement("h3");
        coursecodes.textContent=result[count].coursecode;
        const levels =document.createElement("p");
        levels.textContent=result[count].level;
        const titles =document.createElement("p");
        titles.textContent=result[count].title;
        const descriptions =document.createElement("p");
        descriptions.textContent=result[count].description;
        section.appendChild(img);
        section.appendChild(div);
        div.appendChild(coursecodes);
        div.appendChild(levels);
        div.appendChild(titles);
        div.appendChild(descriptions);
        shabi.appendChild(section);
    }
}
loading();
