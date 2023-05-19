const users = [
    {id: 1, firstName: "Saraa", lastName: "Naraa" },
    {id: 2, firstName: "Bataa", lastName: "Suhee" },
];

exports.getUsers = (request, response, next) => {
    response.status(200). json({
        users: users,
    });
};

exports.createUser = (request, response, next) => {
    users.push({ id: users.length +1, ...request.body });
    response.status(400).json({ message: `New user is created.`});
};

exports.getUser = (request, response, next) => {
    const { id } = request.params;
    if (id > users.length) {
        response
        .status (400)
        .json({ message: `${request.params.id} id is not exist` });
    } else {
        response.status(200).json(users[parseInt(id) - 1]);
    }
};

exports.updateUser = (request, response, next) => {
    if (id > users.length)
        response.status(400)
        .json({ message: `${request.params.id} id is not exist` });
}