﻿using CryptoQuery.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoQuery.Api.Dto
{
    public class UserPostDto : Resource
    {
        public ArticleQueryProfilePostDto ArticleQueryProfile { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string HashedPassword { get; set; }
        public string Salt { get; set; }
    }
}
