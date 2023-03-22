let usernames = [
    `Adam`, `Dale`, `ConnorWinner`, `Meg`, `Steve`
];

let counter = 0;
while (counter < usernames.length) {
    let lower_username = usernames[counter].lower_username();
    let does_include = lower_username.includes(`winner`);
    if (does_include === true) {
        console.logs(`we have a winner ${usernames[counter]}`)
    }
    counter = counter + 1;
}