hideControls = () => {
  //Name
  fname = document.getElementById("fullname").value;
  document.getElementById("fname").innerHTML = fname;
  //objective
  document.getElementById("obj").innerHTML =
    document.getElementById("obj2").value;
  document.getElementById("obj").style.display = "block";
  //project title
  pTitle = document.getElementById("projTitle").value;
  document.getElementById("projTitleHead").innerHTML = pTitle;
  //project description
  pDesc = document.getElementById("projDes").value;
  document.getElementById("projDesc").innerHTML = pDesc;
  document.getElementById("projDes").style.display = "none";
  //skill add button
  document.getElementById("addSkills").style.display = "none";
  document.getElementById("skill").style.display = "none";
  //workshops and internship
  work_name = document.getElementById("work_name").value;
  work_desc = document.getElementById("work_desc").value;
  int_title = document.getElementById("int_title").value;
  int_desc = document.getElementById("int_desc").value;
  document.getElementById("work_name_l").innerHTML =
    "Workshop Name : " + work_name;
  document.getElementById("work_desc_l").innerHTML =
    "Workshop Description : " + work_desc;
  document.getElementById("int_title_l").innerHTML =
    "Internship Title : " + int_title;
  document.getElementById("int_desc_l").innerHTML =
    "Workshop Name : " + int_desc;
  document.getElementById("work_name").style.display = "none";
  document.getElementById("work_desc").style.display = "none";
  document.getElementById("int_title").style.display = "none";
  document.getElementById("int_desc").style.display = "none";
  // Personal info
  full = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  address = document.getElementById("address").value;
  document.getElementById("name_l").innerHTML = "Full Name : " + full;
  document.getElementById("email_l").innerHTML = "Email Address : " + email;
  document.getElementById("phone_l").innerHTML = "Phone Number : " + phone;
  document.getElementById("address_l").innerHTML =
    "Permanent Address : " + address;
  document.getElementById("name").style.display = "none";
  document.getElementById("email").style.display = "none";
  document.getElementById("phone").style.display = "none";
  document.getElementById("address").style.display = "none";
};

showControls = () => {
  //Nmae
  document.getElementById("fname").innerHTML =
    '<input type="text" id="fullname" />';
  //objective
  document.getElementById("obj").innerHTML = '<textarea id="obj2"></textarea>';
  document.getElementById("obj2").style.display = "block";
  //project title
  document.getElementById("projTitleHead").innerHTML =
    '<input type="text" id="projTitle" />';
  //project description
  document.getElementById("projDesc").innerHTML = "";
  document.getElementById("projDes").style.display = "block";
  document.getElementById("projDes").value = "";
  //skill add button
  document.getElementById("addSkills").style.display = "block";
  document.getElementById("skill").style.display = "block";
  //Personal Info
  document.getElementById("work_name").style.display = "block";
  document.getElementById("work_desc").style.display = "block";
  document.getElementById("int_title").style.display = "block";
  document.getElementById("int_desc").style.display = "block";
  document.getElementById("name").style.display = "block";
  document.getElementById("email").style.display = "block";
  document.getElementById("phone").style.display = "block";
  document.getElementById("address").style.display = "block";
  document.getElementById("work_name_l").innerHTML = "";
  document.getElementById("work_desc_l").innerHTML = "";
  document.getElementById("int_title_l").innerHTML = "";
  document.getElementById("int_desc_l").innerHTML = "";
  document.getElementById("name_l").innerHTML = "";
  document.getElementById("email_l").innerHTML = "";
  document.getElementById("phone_l").innerHTML = "";
  document.getElementById("address_l").innerHTML = "";
};

addSkillSet = () => {
  //get skill value
  const skill = document.getElementById("skill").value;
  const ulElement = document.getElementById("mySkills");
  //create element
  liElement = document.createElement("li");
  liElement.innerHTML = skill;
  //append child
  ulElement.appendChild(liElement);
  document.getElementById("skill").value = "";
};
