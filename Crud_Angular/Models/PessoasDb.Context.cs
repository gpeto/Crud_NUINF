﻿//------------------------------------------------------------------------------
// <auto-generated>
//    O código foi gerado a partir de um modelo.
//
//    Alterações manuais neste arquivo podem provocar comportamento inesperado no aplicativo.
//    Alterações manuais neste arquivo serão substituídas se o código for gerado novamente.
// </auto-generated>
//------------------------------------------------------------------------------
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace Crud_Angular.Models
{
    public partial class PessoasEntities : DbContext
    {
        public PessoasEntities()
            : base("name=PessoasEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<Pessoas> Pessoas { get; set; }
        public DbSet<Telefone> Telefones { get; set; }
    }
}