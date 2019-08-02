# MariaStore

### Pré-requisitos

- Docker
- Docker Compose
- Yarn

## Executando

- Clonar a aplicação
- Acessar a pasta via terminal
- Executar o seguinte comando:

```
docker-compose up
```

### A aplicação tem a porta `3333` como padrão

### POST `/v1/users`

```json
  {
    "name": "Ana"
    "email": "gerenta@mariastore.com"
    "password": "123456"
  }
```

### POST `/v1/sessions` (Autenticação)

```json
{
  "email": "admin@mariastore.com",
  "password": "admin"
}
```

### POST `/v1/products` (Autenticação necessária)

```json
{
  "sku": 12345677,
  "name": "Action Figure Hulk",
  "price": 100
}
```

### GET `/v1/products`

```json
{
[
  {
  "id": 1,
  "sku": 12345677,
  "name": "Action Figure Hulk",
  "price": 100,
  "createdAt": "2019-08-02T21:44:05.733Z",
  "updatedAt": "2019-08-02T21:44:05.733Z"
  }
]
}
```

### POST `/v1/customers`

```json
{
  "name": "Bruce Banner",
  "email": "smash@email.com",
  "cpf": "39423772099"
}
```

### GET `/v1/customers`

Retorna todos os clientes cadastrados

```json
[
  {
    "id": 1,
    "name": "Tony Stark",
    "email": "tony@marvel.com",
    "cpf": "64557192041",
    "createdAt": "2019-08-02T21:44:05.756Z",
    "updatedAt": "2019-08-02T21:44:05.756Z"
  },
  {
    "id": 2,
    "name": "Peter Parker",
    "email": "peter@marvel.com",
    "cpf": "56241126024",
    "createdAt": "2019-08-02T21:44:05.756Z",
    "updatedAt": "2019-08-02T21:44:05.756Z"
  },
  {
    "id": 3,
    "name": "Natasha Romanoff",
    "email": "natasha@marvel.com",
    "cpf": "33708325001",
    "createdAt": "2019-08-02T21:44:05.756Z",
    "updatedAt": "2019-08-02T21:44:05.756Z"
  }
]
```

### POST `/v1/orders`

```json
{
  "status": "CONCLUDED",
  "total": 189.8,
  "customer_id": 1,
  "items": [
    {
      "amount": 1,
      "price_unit": 109.9,
      "total": 109.9,
      "product_id": 1
    },
    {
      "amount": 1,
      "price_unit": 109.9,
      "total": 109.9,
      "product_id": 2
    }
  ]
}
```

### PUT: `/v1/orders/{id}`

Irá cancelar o pedido.

```json
{
  "id": 7,
  "status": "CANCELED"
}
```

### GET `/v1/orders`

Retorna todos os pedidos cadastrados

```json
[
  {
    "id": 1,
    "created_at": "2019-08-02T21:44:05.760Z",
    "status": "CANCELED",
    "total": 30.5,
    "items": [
      {
        "amount": 1,
        "price_unit": 30.5,
        "total": 30.5,
        "product": {
          "id": 3,
          "sku": 8973211,
          "name": "Pack de stickers"
        }
      }
    ],
    "buyer": {
      "id": 1,
      "name": "Tony Stark",
      "email": "tony@marvel.com",
      "cpf": "64557192041",
      "createdAt": "2019-08-02T21:44:05.756Z",
      "updatedAt": "2019-08-02T21:44:05.756Z"
    }
  },
  {
    "id": 2,
    "created_at": "2019-08-02T21:44:05.760Z",
    "status": "CONCLUDED",
    "total": 199.99,
    "items": [
      {
        "amount": 1,
        "price_unit": 99.99,
        "total": 30.5,
        "product": {
          "id": 3,
          "sku": 8973211,
          "name": "Pack de stickers"
        }
      },
      {
        "amount": 2,
        "price_unit": 50,
        "total": 30.5,
        "product": {
          "id": 3,
          "sku": 8973211,
          "name": "Pack de stickers"
        }
      }
    ],
    "buyer": {
      "id": 2,
      "name": "Peter Parker",
      "email": "peter@marvel.com",
      "cpf": "56241126024",
      "createdAt": "2019-08-02T21:44:05.756Z",
      "updatedAt": "2019-08-02T21:44:05.756Z"
    }
  ]
```

## Executando os testes

- Clonar a aplicação
- Acessar a pasta via terminal
- Executar o seguinte comando:

```
yarn test
```
