const user = {
  name : "senthur",
  age : "21",
  fetchUser : () => {
    setTimeout(() => {
      console.log(`${user.name} is ${user.age} years old!`);
    }, 2000);
  },
};

export { user };
