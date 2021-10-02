ts<!DOCTYPE ;html>
<html>
<head>
<script>
    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed."
    }
    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed."
    }
    function ZamasWebAPI(Webpage) {
        console.log('MyWebAPI' + website)
    }
    <script>
        src= "https://zamashangase.github.io/WSOA3029A_1664818/index.html/js/myScript.js"
    </script>
    <script src="main.js"></script>
</script>
</head>
<body>
    <h1>Welcome To My Web API</h1>
    <p id= "demo"> This is a website for my character Nandi, who is a part time art consultant and part-time digital art student at Wits University.</p>
    <button type= "button"
    onclick="myFunction()"Try It></button>
    
    let c = 1.01 + 2.02;
    console.log(c.toString));
    console.log(c.toString));

</body>
</html>
//code for Responsive design javascript//
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
/*toggle mobile menu or mobile function*/
function toggleMenu() {
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "< class='fas fa-times'></i>";
    }else{
        menu.classList.add("active");
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "< class='fas fa-times'></i>";
    }
}

fetch("https://zamashangase.github.io/WSOA3029A_1664818/index.html")
.then((r) => r.json())
.then((nandi) => {
    console.log(mywebAPI);
    console.log('zama reveived');
    handleMyWebAPI(mywebAPI);
})
.catch((error) => console.warn("Our Warning", error));

const handleMyWebAPI = (mywebAPI) => {
    document.querySelector("p").innerText = nandisWork.value;
    document.querySelector("img").src = mywebAPI.img1_url;
    console.log("This website was created by Zama");

    
};
console.log('This webpage was created by Zama to dicuss and use Github Web API to dicuss personality of people being seen on social media')
