import axios from "axios";

class ErrosService {

  public async buscarErros(filtro: any, pagina: number, itensPorPagina: number) {
    return await axios.post(`filtrar?pagina=${pagina}&itensPorPagina=${itensPorPagina}`, filtro)
      .then(retorno => {
        return retorno.data;
      })
      .catch(erro => {
        return Promise.reject(`Erro carregando dados: ${erro.message}`)
      })
  }

  public async bucarErroId(idErro: number) {      
    return await axios.get(`id/${idErro}`)
      .then(retorno => {        
        return retorno.data;
      })
      .catch(erro => {        
        return Promise.reject(`Erro buscando registro: ${erro.message}`)
      })
  }

  public async corrigirErro(erro: any) {
    return axios.post('corrigir', erro)
      .then(retorno => {
        return retorno.status;
      })
      .catch(erro => {
        return Promise.reject(`Erro corrigindo registro: ${erro.message}`)
      })
  }

  public async deletarErro(erro: any) {
    return axios.delete(`deletar/${erro.iderro}`)
      .then(retorno => {
        return retorno.status;
      })
      .catch(erro => {
        return Promise.reject(`Erro deletando registro: ${erro.message}`)
      })
  }

  public top5Erros() {
    return axios.get("top5erros")
      .then(retorno => {
        return retorno.data;
      })
      .catch(erro => {
        return Promise.reject(`Erro buscando Top 5 Erros: ${erro.message}`)
      })
  }

  public errosPorVersao() {
    return axios.get("errosPorVersao")
      .then(retorno => {
        return retorno.data;
      })
      .catch(erro => {
        return Promise.reject(`Erro buscando Erros Por Versao: ${erro.message}`)
      })
  }

  public errosPorForm() {
    return axios.get("errosPorForm")
      .then(retorno => {
        return retorno.data;
      })
      .catch(erro => {
        return Promise.reject(`Erro buscando Erros Por Form: ${erro.message}`)
      })
  }

  public errosPorFormVersao() {
    return axios.get("errosPorFormVersao")
      .then(retorno => {
        return retorno.data;
      })
      .catch(erro => {
        return Promise.reject(`Erro buscando Erros Por Form/Versao: ${erro.message}`)
      })
  }

  public totalErros(){
    return axios.get("totalErros")
    .then(retorno => {
      return retorno.data;
    })
    .catch(erro => {
      return Promise.reject(`Erro buscando total de Erros: ${erro.message}`)
    })
  }

  public totalErrosCorrigidos(){
    return axios.get("totalErrosCorrigidos")
    .then(retorno => {
      return retorno.data;
    })
    .catch(erro => {
      return Promise.reject(`Erro buscando total de Erros Corrigidos: ${erro.message}`)
    })
  }

  public totalErrosNaoCorrigidos(){
    return axios.get("totalErrosNaoCorrigidos")
    .then(retorno => {
      return retorno.data;
    })
    .catch(erro => {
      return Promise.reject(`Erro buscando total de Erros Não Corrigidos: ${erro.message}`)
    })
  }
}

export default new ErrosService();