# NODEPKI

Modified version from https://github.com/aditosoftware/nodepki-webclient where certificates are written to /certs/<domain>/
 * key.pem
 * domain.crt
 * intermediate.pem
 * bundle.pem

## Start

```
docker-compose up -d
```

## Issue new certificate

Setup socks5-proxy port 1080 and goto http://nodepki:5000 and request a new certificate.

## Usage

Generated certificates can be found in /certs where other containers can pick them up.

## Setup user

```
docker-compose run nodepki ash -c "cd /root/nodepki && node /root/nodepki/nodepkictl.js useradd --username thomas --password test"
```
