const QUARTOS = ["401", "402", "403", "404"]
const STORAGE = "registroReports"

export const salvarReport = (id, nome, telefone,  endereco, textoReferencias, srcImage) => {
    try {
        const progressoAtual = JSON.parse(localStorage.getItem(STORAGE)) || {}
    progressoAtual[`report->${id}`] = {
        id: id, 
        nome: nome,
        telefone: telefone,
        endereco: endereco,
        textoReferencias: textoReferencias,
        srcImage: srcImage,
        dataRegistro: new Date().toISOString()
    }
    localStorage.setItem(STORAGE, JSON.stringify(progressoAtual));
    
    } catch (error) {
        console.error("Erro ao salvar o report");
    }
}

export const listarReports = () => {
    try {
        const dados = JSON.parse(localStorage.getItem(STORAGE)) || {};
        return Object.values(dados);
    } catch (error) {
        console.error("Erro ao listar os reports:", error);
        return [];
    }
};