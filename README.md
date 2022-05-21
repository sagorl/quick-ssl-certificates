# quick-ssl-certificates
Self-signed certificates generator for development purposes, simple server included.

The script asks no questions, just creates certificates for localhost, all configurations (including passphrases) are in defaults.cfg and in get-certs.sh

## Instructions

### generation
```sh
$ cd quick-ssl-certificates/
$ chmod +x ./get-certs.sh
$ ./get-certs.sh
```
### testing
Node.js must be installed.
```sh
$ node quick_server.js
```
After myCA.pem is imported in a browser as Certificate Authority the https://localhost:8443 will be available through https.
