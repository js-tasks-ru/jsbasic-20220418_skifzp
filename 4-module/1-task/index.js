function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  for( let friend of friends){
    let li = document.createElement("li");
    li.innerText = friend.firstName + " " + friend.lastName;
    ul.appendChild(li);
  }
  return ul;
}