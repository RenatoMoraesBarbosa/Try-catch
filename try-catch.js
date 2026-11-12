const consulta = document.getElementById("consulta");
const resultado = document.getElementById("resultado");
let estoque = 10;

function buscarProduto() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(estoque > 0) {
                    resolve("Produto disponível");
                } else {
                    reject("Produto indisponível");
                }
            }, 3000);
        })
    }

    async function conclusao() {
            resultado.innerText = "Aguardando consulta";

            try {
                const pesquisa = await buscarProduto();
                resultado.innerText = pesquisa;
            }

            catch(erro) {
                resultado.innerText = erro
            }
        }


consulta.addEventListener("click", function() {
    conclusao();
})