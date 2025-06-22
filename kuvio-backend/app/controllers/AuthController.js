const { login, register} = require("../models/AuthModel");

async function loginAction(request, response) {
    if (!request.body.username || !request.body.password) {
        return response.status(400).json({ message: 'All Fields must be filled in.' });
    }
    let jsonObject = await readUserFromRequest(request)
    let status = await login(jsonObject)
    response.status(status.code).json({ message: status.message, token: status.token });
}

async function registerAction(request, response) {
    if (!request.body.firstname || !request.body.lastname || !request.body.username || !request.body.password) {
        return response.status(400).json({ message: 'All Fields must be filled in.' })
    }
    let jsonObject = await readUserFromRequest(request)
    let status = await register(jsonObject)
    response.status(status.code).json(status.message)
}

async function logoutAction(request, response) {

}

async function readUserFromRequest(request) {
    let userid = request.params.id
    let firstname = request.body.firstname
    let lastname = request.body.lastname
    let username = request.body.username
    let picture = request.body.picture
    let password = request.body.password
    let role = request.body.role


    return {
        'userid': userid,
        'firstname': firstname,
        'lastname': lastname,
        'username': username,
        'picture': picture,
        'password': password,
        'role': role
    }
}

module.exports = {
    loginAction,
    registerAction,
    logoutAction
}