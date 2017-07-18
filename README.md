# NODEPKI

## Start

```
docker-compose up -d
```

# Browser

Setup socks5-proxy port 1080 and goto http://nodepki:5000/

## Setup user

```
docker-compose run nodepki ash -c "cd /root/nodepki && node /root/nodepki/nodepkictl.js useradd --username thomas --password test"
```
