/**

*/
PessoasApp.controller('PessoasCtrl', function ($scope, PessoaService) {

    carregarPessoas();

    function carregarPessoas() {
        var listarPessoas = PessoaService.getTodasPessoas();

        listarPessoas.then(function (d) {

            $scope.Pessoas = d.data;
        },
            function () {
                alert("-------Erro na execução!!!-----");
            });
    }

    //CADASTRAR:
    $scope.adicionarPessoa = function () {

        var pessoa = {
            Id: $scope.Id,
            nome: $scope.nome,
            cpf: $scope.cpf,
            dataNascimento: $scope.dataNascimento,
            email: $scope.Email,
            telefones: $scope.telefones
        };

        var adicionarInfos = PessoaService.adicionarPessoa(pessoa);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarPessoas();
                alert("Cadastrado com Sucesso!");

                $scope.limparDados();
            } else { alert("Falha no cadastro!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar cadastrar uma nova Pessoa!");
            });
    }

    //Deletar os campos 
    $scope.limparDados = function () {
        $scope.Id = "";
        $scope.nome = "";
        $scope.cpf = "";
        $scope.dataNascimento ="";
        $scope.Email = "";
        $scope.telefones = "";
    }

    //Atualizar pelo Id:
    $scope.atualizarPorId = function (pessoa) {

        $scope.AtualizadoId = Pessoas.Id;
        $scope.AtualizadoNome = Pessoas.Nome;
        $scope.AtualizadoCpf = Pessoas.cpf;
        $scope.AtualizadoDataNascimento = Pessoas.dataNascimento;
        $scope.AtualizadoEmail = Pessoas.Email;
        $scope.AtualizadoTelefones = Pessoas.telefones;
      
    }

    //Método responsável por resgatar dados para a exclusão:
    $scope.excluirPorId = function (pessoa) {
        $scope.AtualizadooId = pessoa.Id;
        $scope.AtualizadoNome = pessoa.Nome;
    }

    //Atualizar:
    $scope.atualizarPessoa = function () {
        var pessoa = {
            Id: $scope.AtualizadoId,
            Nome: $scope.AtualizadoNome,
            cpf: $scope.AtualizadoCpf,
            dataNascimento: $scope.AtualizadoDataNascimento,
            Email: $scope.AtualizadoEmail,
            Telefones: $scope.AtualizadoTelefones
            
        };
        var atualizarInfos = pessoasService.atualizarPessoa(pessoa);
        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarPessoas();
                alert("Atualizado com Sucesso!");
                $scope.limparDadosAtualizados();
            }
            else {
                alert("Falha na atualização");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar atualizar!");
            });
    }

    //Limpar os Dados depois de Atualizar Pessoa:
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoId = '';
        $scope.AtualizadoNome = '';
        $scope.AtualizadoCpf = '';
        $scope.AtualizadodataNascimento = '';
        $scope.AtualizadoEmail = '';
        $scope.AtualizadoTelefones = '';
    }

    //Excluir Pessoa pelo Id:
    $scope.excluirPessoa = function (AtualizadoId) {

        var excluirInfos = PessoaService.excluirPessoa($scope.AtualizadoId);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                carregarPessoas();

                alert("Pessoa excluída com Sucesso!");
            }
            else {
                alert("Pessoa não excluída!");
            }
        });
    }
});