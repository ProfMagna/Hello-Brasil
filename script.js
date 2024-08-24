const caixaPrincipal = document.querySelector(".caixa-principal") ;
const caixaAfirmativas = document.querySelector(".caixa-afirmativas") ;
const caixaImagens = document.querySelector(".caixa-imagens") ;

const perguntas =[
    {
        enunciado : "Em sua cidade ocorrem assédios e desrespeitos às mulheres e aos assentos prioritários?",
        alternativas : [
            {
                texto: "Sim, acontece com frequência. Estabelecer assentos  e portas de entrada e saída prioritários para gestantes, idosos, crianças e deficientes.",
                afirmacao: "Resposta positiva.  Facilitar a entrada e a saída de um público específico." 
            },
            {
            texto: "Não ou raramente." ,
            afirmacao: "Resposta negativa. Manter os assentos e as entradas do transporte público no modelo atual."
            }
        ]
    },
    {
        enunciado : "O desmatamento no Brasil atingiu índices alarmantes., tornando-se praticamente cultural. Os efeitos estão sendo sentidos no dia-a-dia da população. É possível minimizar o desmatamento no país?",
        alternativas : [
            {
            texto: "Sim, por intermédio de políticas de fiscalização e controle ambiental rigoroso",
            afirmacao: "Com a rigidez da fiscalização podemos induzir a mudança de comportamento das pessoas por meio de sanções."
            },
            {
            texto: "Não, porque as leis não são cumpridas" ,
            afirmacao: "Há deficiência no sistema de fiscalização." 
            }
        ]
    },
    {
        enunciado : "Qual as consequências do uso de agrotóxico na agricultura?",
        alternativas : [
            {
            texto: "Há um impacto muito grande no meio ambiente, causando prejuízos ao solo, água e atmosfera. ",
            afirmacao: "Causando a morte das abelhas, diminuindo a diversidade das plantas, gerando um impacto econômico."
            },
            {
            texto: "A produção das espécies  é maior, reduz o controle de pragas, aumenta a distribuição da produção." ,
            afirmacao: "Aumentando a produção há uma vantagem no setor de exportação, favorecendo assim a economia do país."
            }
        ]
    }
] ;

function adicionarImagens(){
    caixaImagens.textContent = "" ;
    caixaImagens.style.backgroundImage = "url('imagem/cataratas.jpg')" ;
}

adicionarImagens() ;
