import axios from "axios";

export default function ReservarAssentos(pedido){
    console.log(pedido);

        const requisicao = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, pedido);
        requisicao.then(() => {console.log("Requisição feita com sucesso!")});
        requisicao.catch(() => {console.log("Erro na requisição")});

}