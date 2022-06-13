import nextConnect from 'next-connect';
const { authenticate } = require('ldap-authentication')
import Cors from 'cors'
import initMiddleware from '../../config/init-middleware'
const ActiveDirectory = require('activedirectory');
// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
)
const authAPI = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

// Process a POST request
authAPI.post(async (req, res) => {
    await cors(req, res)
    const { username, password } = req.body;
    if (!(username && password)) {
        res.status(400).json("All input is required");
    }
    // try {
    //     let authenticated = await authenticate({
    //         ldapOpts: { url: 'ldap://id-adds04.kemlu.go.id' },
    //         userDn: 'cn=' + username + ',cn=User Deplu,dc=kemlu,dc=go.id',
    //         userPassword: password,
    //     })

    //     console.log(authenticated);
    //     res.status(200).json({ message: 'Authenticated!' })

    // } catch (error) {
    //     res.status(400).send({
    //         message: error.message || "Error in Login LDAP"
    //     });
    // }

    var sAMAccountName = 'search';
    var userPrincipalName = 'dummy.basic02@kemlu.go.id';
    var dn = 'CN=dummy.basic02,OU=User Deplu,DC=kemlu,DC=go,DC=id';
    // Find user by a sAMAccountName

    var config = {
        url: 'ldap://id-adds04.kemlu.go.id',
        baseDN: 'dc=kemlu,dc=go.id'
    }
    var ad = new ActiveDirectory(config);
    ad.authenticate(dn, 'pejambon#6', function (err, auth) {
        if (err) {
            console.log('ERROR: ' + JSON.stringify(err));
            res.status(400).send({
                message: err.message || "Error in Login LDAP"
            });
            return;
        }

        if (auth) {
            ad.findUser(sAMAccountName, function (err, user) {
                if (err) {
                    console.log('ERROR: ' + JSON.stringify(err));
                    res.status(400).send({
                        message: err.message || "Error in Login LDAP"
                    });
                    return;
                }

                if (!user) {
                    console.log('User: ' + sAMAccountName + ' not found.');
                    res.status(400).send({
                        message: error.message || "Error in Login LDAP"
                    });
                }
                else {
                    console.log(JSON.stringify(user));
                    
                }
            });
            console.log('Authenticated!');
            res.status(200).json({ message: 'Authenticated!' })
        }
        else {
            console.log('Authentication failed!');
            res.status(400).send({
                message: error.message || "Error in Login LDAP"
            });
        }
    });



});
export default authAPI;
