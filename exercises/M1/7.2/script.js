const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // Para ficar mais fácil a obtenção dos dados, melhor reservar em constantes
  const deliveryPerson = order.order.delivery['deliveryPerson'];
  const customerName = order['name'];
  const phone = order['phoneNumber'];
  const street = order['address'].street;
  const streetNumber = order['address'].number;
  const apartment = order.address['apartment'];
  const answer = `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${phone}, ${street}, Nº: ${streetNumber}, AP: ${apartment}`;
  return answer;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.name = 'Luiz Silva';
  const newTotal = order.payment.total = '50';
  const muzzarellaAndCalabresa = order.order.pizza = {
    muzzarella: {
      amount: 1,
      price: 15
    },

    calabresa: {
      amount: 1,
      price: 20
    }
  }

  const drinkName = order.order.drinks.coke.type;
  
  const answer = `Olá ${name}, o total do seu pedido de ${Object.keys(muzzarellaAndCalabresa)} e ${drinkName} é R$${newTotal},00.`;
  return answer;
}

console.log(orderModifier(order));