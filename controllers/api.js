const { response, request } = require('express');


const apiGet = async(req = request, res = response) => {

    res.json({
        msg: 'apiGet : OK'

    });
}

const apiPut = async(req = request, res = response) => {

    res.json({
        msg: 'apiPut : OK'

    });
}

const apiPost = async(req = request, res = response) => {

    res.json({
        msg: 'apiPost : OK'

    });
}

const apiDelete = async(req = request, res = response) => {

    res.json({
        msg: 'apiDelete : OK'

    });
}

module.exports = {
    apiGet,
    apiPost,
    apiPut,
    apiDelete
}