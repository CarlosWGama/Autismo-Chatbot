import { CBAction, Face } from "../../../chatbot/interfaces";
import * as principal from './inicial';


export function inicial(doAction: CBAction) {
    doAction([
        {message: 'O que deseja saber?', delay: 2000, avatar: Face.NEUTRO},
    ], [
        {title: 'O que é autismo?' , onPress: oQueEAutistmo},
        {title: 'Qual a prevalência?' , onPress: qualPrevalencia},
        {title: 'Existe diferença de grau?' , onPress: diferencaGrau},
        {title: 'Só isso' , onPress: async() => {
            await doAction([
                {message: 'Só isso!', you: true}
            ])
            principal.principal(doAction)
        }},
    ])
}

export async function oQueEAutistmo(doAction: CBAction) {
    await doAction([
        {message: 'O que é autismo?', you: true},
        {message: 'Trata-se de um distúrbio que afeta o desenvolvimento da criança já nos três primeiros anos de vida, especialmente em determinados aspectos:', delay: 3000, avatar: Face.NEUTRO},
        {message: 'Linguagem: o transtorno pode acarretar limitações na fala. Em casos extremos, os pequenos autistas não conseguem, de fato, progredir na comunicação verbal', delay: 3000},
        {message: 'Interações sociais: o isolamento é uma característica que se manifesta frequentemente nesse grupo. Não raro, ocorre a dificuldade em estabelecer relações sociais, que geralmente se dão por meio de interações curtas.', delay: 3000},
        {message: 'Variabilidade comportamental: os autistas exploram seus brinquedos de maneira restrita, focando apenas um detalhe ou uma função específica do objeto. Além disso, apresentam comportamentos repetitivos e autoestimulatórios, intolerância a mudanças na rotina ou na disposição do ambiente.', delay: 4000},
    ]);

    inicial(doAction)
}   

export async function qualPrevalencia(doAction: CBAction) {
    await doAction([
        {message: 'Qual a prevalência?', you: true},
        {message: 'Nos Estados Unidos, a incidência é de um autista a cada 110 indivíduos', delay: 1000, avatar: Face.FELIZ},
        {message: 'Já no Brasil, infelizmente, os estudos epidemiológicos não fornecem dados precisos.', delay: 2000, avatar: Face.NEUTRO},
        {message: 'Estima-se que a cada 100 pessoas, uma pode ser portadora do transtorno.', delay: 1500},
    ]);
    
    inicial(doAction)
}

export async function diferencaGrau(doAction: CBAction) {
    await doAction([
        {message: 'Existe diferença de grau?', you: true},
        {message: 'Algumas crianças manifestam sintomas mais brandos, enquanto em outras eles aparecem de maneira mais agressiva. ', delay: 1000, avatar: Face.FELIZ},
        {message: 'Há casos em que há também uma associação com outras enfermidades, como deficiência mental, distúrbio alimentar, do sono ou transtorno obsessivo-compulsivo.', delay: 2000, avatar: Face.NEUTRO},
        {message: 'Diante de tantas variáveis, fica difícil classificar os graus de autismo com precisão.', delay: 1500},
    ], [
        { title: 'Existe tratamento?', onPress: existeTratamento},
        { title: 'Como é o dianóstico?', onPress: comoDiagnosticar},
        { title: 'Obrigado!', onPress: async () => {
            await doAction([
                {message: 'Obrigado', you: true},
            ])
            inicial(doAction)
        }},
    ]);    
}
//Tratamento
export async function existeTratamento(doAction: CBAction) {
    await doAction([
        {message: 'Existe tratamento?', you: true},
        {message: 'Sim', delay: 500, avatar: Face.FELIZ},
        {message: 'O tratamento pode envolver desde o controle com remédios até acompanhamento fonoaudiológico, psicológico e terapia ocupacional. ', delay: 1500},
        {message: 'O sucesso depende dos seguintes fatores:', delay: 1500, avatar: Face.TRISTE},
        {message: 'Idade do início da intervenção: quanto antes o tratamento começar, melhor será o prognóstico. Daí a importância de identificar os sinais de risco já nos bebês;', delay: 2000, avatar: Face.NEUTRO},
        {message: 'Abordagem de tratamento adequada às características e limitações do paciente;', delay: 2000},
        {message: 'Comprometimento da família durante esse processo;', delay: 2000},
        {message: 'Rigor na adesão ao programa terapêutico que, em geral, dura pelo menos dois anos, com 40 horas semanais de acompanhamento profissional', delay: 2000},
    ], [
        { title: 'Obrigado!', onPress: async () => {
            await doAction([
                {message: 'Obrigado', you: true},
            ])
            inicial(doAction)
        }},
    ]);

    inicial(doAction)
    
}
//Dianóstico
export async function comoDiagnosticar(doAction: CBAction) {
    await doAction([
        {message: 'Como posso diagnósticar?', you: true},
        {message: 'Cabe a um psiquiatra ou neurologista infantil a tarefa de identificar o autismo com base em avaliações clínicas, a partir da observação do comportamento do pequeno e dos relatos familiares. ', delay: 3000, avatar: Face.FELIZ},
        {message: 'Não existem testes laboratoriais capazes de apontar a alteração. ', delay: 2000},
        {message: 'É por volta dos 3 anos de idade que as características do transtorno se tornam mais evidentes. ', delay: 2000},
        {message: 'Atualmente, alguns pesquisadores tentam identificar sinais precoces em bebês, antes mesmo de completarem 1 ano de vida.', delay: 3000},
        {message: 'Algumas características que fazem soar o alarme de risco são:', delay: 2000},
        {message: '- O bebê não mantém o contato visual com quem fala com ele - muitas vezes, nem mesmo com a mãe durante a amamentação;', delay: 3000},
        {message: '- Tentativas de brincadeiras, jogos ou mesmo vocalizações dos pais e familiares não costumam chamar a atenção da criança e a insistência chega a incomodá-la;', delay: 4000},
        {message: '- A apatia e o isolamento nas relações sociais são típicos do problema. Frequentemente, a criança prefere ficar sozinha, focada em objetos luminosos, sonoros ou movimentos repetitivos;', delay: 4000},
        {message: '- Irritabilidade excessiva, sem causa aparente, também requer atenção, assim como mudanças no comportamento alimentar - e recusa, vômitos recorrentes - e alterações de sono.', delay: 4000},
        {message: 'É importante ressaltar que esses sinais são apenas indicativos de que algo não vai bem com o seu bebê. ', delay: 3000},
        {message: 'Ao notar algum deles, a ordem é buscar o auxílio profissional.', delay: 2000},
    ]);

    inicial(doAction)
    
}