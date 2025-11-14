// type guard
// in typeOf

type Alphanuemirc = number | string;

const add = (a: Alphanuemirc, b: Alphanuemirc) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
};
console.log(add("4", 2));

// in guard
type NormalUser = {
  name: string;
};

type Adminuser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | Adminuser) => {
  if ("role" in user) {
    console.log(`This ${user.name} and his role is: ${user.role}`);
  } else {
    console.log(`This ${user.name}`);
  }
};
getUserInfo({ name: "Normal", role: "Admin" });
