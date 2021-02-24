const jwt = require("jsonwebtoken");

const username = "Alex";
const roles = ['admin'];
const jwt_key = "my-secret";
const jwt_exp = "1h";

const token = jwt.sign({ username, roles }, jwt_key, { expiresIn: jwt_exp });
console.log(token);

jwt.verify(token, jwt_key, (err, result) => {
    if (err) {
        console.log("verification failure");
        console.log(err.message);
    } else {
        console.log(result);
    }
});


/*let SECRET = 'mysecret';
let payload = {
    username: 'shukaku',
    iss: 'ISS'
}*/

/*let token = jwt.sign(payload, SECRET, { expiresIn: 13 });
console.log(token);
setTimeout(() => {
    jwt.verify(token, "mysecret", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }

    })
}, 12000);*/

