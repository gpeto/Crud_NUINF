
PessoasApp.service('PessoaService', function ($http) {
    // Listar Pessoas
    this.getTodasPessoas = function () {
        return $http.get("/Pessoa/GetPessoa");
    }

    // Cadastrar
    this.adicionarFuncionario = function (funcionario) {

        var request = $http({
            method: 'post',
            url: '/Funcionario/AdicionarFuncionario',
            data: funcionario
        });

        return request;
    }

    //Atualizar Pessoa Por Id: Atualizar
    this.atualizarPessoa = function (pessoa) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Pessoa/AtualizarPessoa',
            data: pessoa
        });
        return requestAtualizado;
    }

    //Excluir Pessoa Por Id: Deletar
    this.excluirPessoa = function (AtualizadoId) {

        return $http.post('/Pessoa/ExcluirPessoa/' + AtualizadoId);
    }
});


