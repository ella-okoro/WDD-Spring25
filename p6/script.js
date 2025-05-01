function initialize() {
    document.getElementById("btn1").addEventListener("click", greetUser);
    document.getElementById("btn2").addEventListener("click", showSkills);
    document.getElementById("myForm").addEventListener("submit", handleForm);
  }
  
  function greetUser() {
    alert("Hello! Thanks for visiting Ella's page.");
  }
  
  function showSkills() {
    const skills = ["Python", "JavaScript", "SQL", "Java", "HTML", "CSS", "Git", "PHP"];
    alert("Here are some of my skills:\n" + skills.join(", "));
  }
  
  function handleForm(event) {
    event.preventDefault();
    const name = document.forms["myForm"]["username"].value;
    const role = document.forms["myForm"]["role"].value;
    alert(`Welcome, ${name}! Your selected role is: ${role}.`);
  }
  