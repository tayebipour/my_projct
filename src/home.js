
const user = document.querySelector("#user_name");
const psw = document.querySelector("#password");
const btn_submit = document.querySelector("#btn_submit");

const div_lab = document.querySelector(".divlabel");
const pm_lab = document.createElement("label");

const person = [];

const add_to = {
  username:"",
  password:"",
};

user.addEventListener("keydown", () => {
  chack_input();
});

btn_submit.addEventListener("click", () => {
  if (user.value === "" || psw.value === "") {
    pm_massage();
    btn_submit.classList.remove("btn-success");
    btn_submit.classList.add("btn-dark");
  } else {
    add_list(user.value);
  }
});

function pm_massage() {
  pm_lab.textContent = "Enter username and password please";
  const lbl_pm= div_lab.appendChild(pm_lab);/////****************************** */
  setInterval(() => {
    pm_lab.classList.toggle("label");
  }, 1000);
  return lbl_pm;
}

function chack_input() {
  btn_submit.classList.remove("btn-dark");
  btn_submit.classList.add("btn-success");
  pm_massage();////********************************* */
  div_lab.removeChild(pm_lab);
  if (user.value === "") {
    btn_submit.classList.remove("btn-success");
    btn_submit.classList.add("btn-dark");
  }
}



function add_list(search_name) {
  const obj_user = localStorage.getItem("obj")
    ? localStorage.getItem("obj")
    : "";
  const obj_storage = JSON.parse(obj_user);

  for (let i = 0; i < obj_storage.length; i++) {
    if (person[i] === search_name) {
      pm_lab.textContent = "existence name";
      console.log("existence name");
    }
  }

  if (person != search_name) {
    add_to.username = user.value;
    add_to.password = psw.value;
    person.push(add_to);
    console.log(typeof person);

    // Serialize the object using JSON.stringify()
    const add_Obj = JSON.stringify(person);
    // Store the serialized object in localStorage
    localStorage.setItem("obj", add_Obj);
  }
}
