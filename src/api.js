export const serverLogin = async (email, password) => {
  // return fetch(
  //   `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  // ).then(res => res.json()).then(data => data.success)
  return fetch(
    `https://loft-taxi.glitch.me/auth`, 
    {
      method: 'POST',
      headers: { "Content-Type": 'application/json'},
      body: JSON.stringify({ email, password })
    }
  ).then(res => res.json()).then(data => data)
}

// POST /register - возвращает {success: true, token: AUTH_TOKEN} если регистрация прошла успешно, иначе возвращает {success: false, error: Сообщение об ошибке}
// Ожидает следущий объект в запросе:
// {email: "email@example.com", password: "password", name: "Name", surname: "Surname"}

export const serverRegistration = async (email, password, name, surname) => {
  return fetch(
    `https://loft-taxi.glitch.me/register`,
    {
      method: "POST",  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, surname })
    }
  ).then(res => res.json()).then(data => data)
}


// GET /route - позволяет получить маршрут. Принимает address1 и address2 в качестве аргументов.
// Пример запроса: https://loft-taxi.glitch.me/route?address1=Шаверма на Невском&address2=Пулково (LED).
export const serverRoute = async (address1, address2) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`, 
    {
      method: "GET"
    }
  ).then(res => res.json()).then(data => data);
};


// GET /addressList - выдаёт список доступных адресов
// Пример запроса: https://loft-taxi.glitch.me/addressList
export const serverAddress = async () => {
  return fetch(
    `https://loft-taxi.glitch.me/addressList`, {
      method: "GET"
    }
  ).then(res => res.json());
};


// GET /card - возвращает данные кредитной карты
// Пример запроса: https://loft-taxi.glitch.me/card?token=AUTH_TOKEN.
export const serverGetCard = async (token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?token=${token}`
  ).then(res => res.json());
};

// POST/card - возвращает {success: true} если добавление или изменение данных кредитной карты произошло успешно, иначе возвращает {success: false, error: Сообщение об ошибке}
// Ожидает следущий объект в запросе:
// {cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN}

export const serverPostCard = async (cardNumber, cardDate, cardName, cvc, token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card`,
    {
      method: "POST",  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cardNumber, cardDate, cardName, cvc, token })
    }
  ).then(res => res.json()).then(data => data)
}