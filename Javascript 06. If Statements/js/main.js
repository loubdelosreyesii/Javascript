let customerIsBanned = true;
let crackers = true;
let soup = "Chicken Noodle Soup";
let reply;

if(customerIsBanned){
    reply = "No soup for you!";
}
else if (soup && crackers){
    reply = `Here's your order of ${soup} and ${crackers}`;
}
else if(soup){
    reply= `Here's your order of ${soup}`;
}
else{
    reply = `Sorry, we're out of soup.`;
}

console.log(reply);