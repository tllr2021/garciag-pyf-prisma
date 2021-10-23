# Comandos para la API de cinema-app
Antes de realizar los siguientes comandos sería necesario definir algunos objetos de la base de datos, por algún motivo el archivo `seed.graphql` no genera las entradas iniciales de la base de datos en la cloud de prisma, por lo que será necesario crearlos antes. 🚀

Los datos en los comandos son como ejemplo.

## Registar un colaborador y generar el número de nómina
El número de nómina consiste de un número de 5 digitos aleatorio y la nómina o pago se calcular en base a el pago por día multiplicado por los días en los que trabaja el colaborador

```
mutation {
  customCreateEmployee(
    data: {
      name: "Pepe",
      email: "employee1@gmail.com",
      password: "123456",
      status: ACTIVE,
      area: TICKETS,
      theater: {
        connect: {
          id: "6173fdcaa7b11b000814cd70"
        }
      }
      workDays: {
        set: [
          MONDAY,
          TUESDAY,
          WEDNESDAY,
          THURSDAY,
          FRIDAY,
          SATURDAY
        ]
      }
    }
  ) {
    id
    name
    email
    payrollNumber
    paymentDue
  }
}
```

## Cambiar el status de un colaborador
Para cambiar el status del colaborador se puede utilizar la funcion para actualizar al colaborador en base a su número de nómina (payrollNumber)

```
mutation {
  updateEmployeeByPayroll(
    payrollNumber: 96099,
    data: {
      status: ON_VACATION
    }
  ) {
    id
    name
    payrollNumber
    paymentDue
  }
}
```

## Editar un colaborador por número de nómina
Igual que en el caso anterior se puede usar el siguiente comando para editar a un colaborador

```
mutation {
  updateEmployeeByPayroll(
    payrollNumber: 96099,
    data: {
      name: "Arturo"
    }
  ) {
    id
    name
    payrollNumber
    paymentDue
  }
}
```

## Asignar una nomina a pagar al colaborador en base a los días trabajados
Al crear un empleado se calcula el pago del trabajador en base a un pago base multiplicado por los días de la semana que se trabaja, el pago se considera quincenal

```
mutation {
  customCreateEmployee(
    data: {
      name: "Pepe",
      email: "employee1@gmail.com",
      password: "123456",
      status: ACTIVE,
      area: TICKETS,
      theater: {
        connect: {
          id: "6173fdcaa7b11b000814cd70"
        }
      }
      workDays: {
        set: [
          MONDAY,
          TUESDAY,
          WEDNESDAY,
          THURSDAY,
          FRIDAY,
          SATURDAY
        ]
      }
    }
  ) {
    id
    name
    email
    payrollNumber
    paymentDue
  }
}
```

## Del resolver de creación de colaborador se cumplen los siguientes requisitos
- Un  colaborador tiene un area de trabajo asignada: (CANDY, TICKETS, SANITIZE, ROOM_CLEANING)
- Un colaborador tiene un cine asignado (en este caso también viceversa)
- Un cine tiene colaboradores asignados

## Un usuario se puede registrar
## Un usuario tiene una tarjeta donde se registran sus puntos
Para registar a un usuario y su respectiva tarjeta se puede usar la siguiente mutation, los puntos por default son 0

```
mutation {
  signup(
  	email: "luis@gmail.com",
    password: "123456", 
    name: "Luis Arturo",
    birthday: "1999-02-21T14:10:20+01:00",
    isMember: true,
    card: {
      create: {
        expiration: "2025-02-21T14:10:20+01:00",
        points: 0
   		}
    }
  ) {
    token
  }
}
```

## Un usuario puede hacer login
```
mutation {
  login(
  	email: "arturo@gmail.com",
    	password: "123456", 
  ) {
    token
  }
}
```

## Un usuario puede cambiar su contraseña
```
mutation {
  setPwd(
    data: {
  		email: "arturo@gmail.com",
    	password: "1234567", 
    }
  ) {
    id
    name
  }
}
```

## Se pueden consultar los puntos de un usuario 
Para consultar los puntos de un usuario solo se necesita que el usuario tenga una tarjeta y el ID del usuario

```
query {
  getUserPoints(userId: "6173df44a7b11b000814cd32") 
}
```

## Realizar una venta de dulcería y agregar puntos al usuario
```
mutation {
  customCreateProductSale (
    data: {
      theater: {
        connect: {
        	id: "6173fdcaa7b11b000814cd70"
        }
      },
      user: {
        connect: {
        	id: "6173df44a7b11b000814cd32"
        }
      },
      total: 340
      products: {
        connect: [
          {
            id: "61741140a7b11b000814cd88"
          },
          {
            id: "61741157a7b11b000814cd89"
          }
        ]
      }
    }
  ) {
    id
    total
  }
}
```

## Realizar una venta de tickets y agregar puntos al usuario
```
mutation {
  customCreateTicketSale (
    data: {
      theater: {
        connect: {
        	id: "6173fdcaa7b11b000814cd70"
        }
      },
      user: {
        connect: {
        	id: "6173df44a7b11b000814cd32"
        }
      },
      total: 140
      tickets: {
        connect: [
          {
            id: "61741140a7b11b000814cd88"
          },
          {
            id: "61741157a7b11b000814cd89"
          }
        ]
      }
    }
  ) {
    id
    total
  }
}
```

Ambos objetos (ProductSale y TicketSale) constituyen las ventas de un cine y para traer las ganancias de dichas ventas sólo hay que filtrar en base al atributo theater dentro de cada objeto.