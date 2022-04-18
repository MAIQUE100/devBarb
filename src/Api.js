const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, { //Verificacao de existencia de Token, para logar direto.
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },
    signIn: async (email, password) => { //Rquisicao de login
       // console.log("URL", `${BASE_API}/auth/login`);
        //console.log("Body", JSON.stringify({email, password}));

        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    },

    signUp: async (name, email, password) => { //Requisicao de cadastro
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json();
        return json;
    }
};

//  **** APRENDER A USAR O "" AXIOS "" *****