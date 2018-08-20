using Crud_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crud_Angular.Controllers
{
    public class PessoasController : Controller
    {
        // Método de Listagem de Pessoas
    #region Método Listar
        public JsonResult GetPessoas()
        {
            using (var db = new PessoasEntities())
            {
                List<Pessoas> listarPessoas = db.Pessoas.ToList();

                return Json(listarPessoas, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

    #region Cadastrar Pessoas
    public JsonResult AdicionarPessoas(Pessoas pessoa)
        {
            if (pessoa != null)
            {
                using(var db = new PessoasEntities())
                {
                    db.Pessoas.Add(pessoa);
                    db.SaveChanges();

                    return Json(new { sucess = true });
                }
                
            }
            return Json(new { sucess = false });
        }


        #endregion

        #region Método para Atualizar - UPDATE

        [HttpPost]
        public JsonResult AtualizarPessoa(Pessoas pessoa)
        {
            using (var db = new PessoasEntities())
            {
                var PessoaAtualizado = db.Pessoas.Find(pessoa.Id);

                if (PessoaAtualizado == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    PessoaAtualizado.nome = pessoa.nome;
                    PessoaAtualizado.cpf = pessoa.cpf;
                    PessoaAtualizado.email = pessoa.email;
                    PessoaAtualizado.telefones = pessoa.telefones;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Método para Excluir - DELETE

        [HttpPost]
        public JsonResult ExcluirPessoa(int id)
        {
            using (var db = new PessoasEntities())
            {
                var pessoas = db.Pessoas.Find(id);
                if (pessoas == null)
                {
                    return Json(new { success = false });
                }

                db.Pessoas.Remove(pessoas);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion
    }
}