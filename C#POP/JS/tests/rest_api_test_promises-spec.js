const rp = require('request-promise');

describe('test RestApi prmises', () => {
    it('Promises', (done) => {
        const getURL = "https://jsonplaceholder.typicode.com/posts/?userId=5";
        let returnBodyGet = require('../json/getMethod.json');

        let getMethod = {
            method: 'GET',
            uri: getURL,
            headers: {
                /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
            }
        };

        const urlPost = "https://jsonplaceholder.typicode.com/posts";
        let jsonFilePost_form = require('../json/postMethod_form.json');
        let jsonFilePost_return = require('../json/postMethod_return.json');
        const formsPost = jsonFilePost_form;
        const returnBodyPost = jsonFilePost_return;

        let postMethod = {
            method: 'POST',
            uri: urlPost,
            form: formsPost,
            headers: {
                /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
            }
        };
        
        rp(getMethod)
            .then(function (body) {
                expect(JSON.parse(body)).toContain(returnBodyGet);
                done();
            })
            .then(()=>rp(postMethod)
                .then(function (body) {
                    expect(JSON.parse(body)).toEqual(returnBodyPost);
                    done();
                })
            )
            .catch(function (err) {
                console.log(err);
                done();
            });
    });
});