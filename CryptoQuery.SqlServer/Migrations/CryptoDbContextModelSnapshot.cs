﻿// <auto-generated />
using CryptoQuery.SqlServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace CryptoQuery.SqlServer.Migrations
{
    [DbContext(typeof(CryptoDbContext))]
    partial class CryptoDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CryptoQuery.Domain.Articles.Article", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Author");

                    b.Property<int>("Complexity");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<DateTime>("DateOfPublification");

                    b.Property<int>("Quality");

                    b.Property<string>("Title");

                    b.Property<string>("Topic");

                    b.Property<DateTime>("UpdatedAt");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.ToTable("Articles");
                });

            modelBuilder.Entity("CryptoQuery.Domain.Users.ArticleQueryProfile", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Complexity");

                    b.Property<bool>("PushEnabled");

                    b.Property<int>("PushToken");

                    b.Property<int>("Quality");

                    b.HasKey("Id");

                    b.ToTable("ArticleQueryProfile");
                });

            modelBuilder.Entity("CryptoQuery.Domain.Users.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("ArticleQueryProfileId");

                    b.Property<string>("CreatedAt");

                    b.Property<string>("Email");

                    b.Property<string>("HashedPassword");

                    b.Property<string>("Role");

                    b.Property<string>("Salt");

                    b.Property<string>("UpdatedAt");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("ArticleQueryProfileId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CryptoQuery.Domain.Users.User", b =>
                {
                    b.HasOne("CryptoQuery.Domain.Users.ArticleQueryProfile", "ArticleQueryProfile")
                        .WithMany()
                        .HasForeignKey("ArticleQueryProfileId");
                });
#pragma warning restore 612, 618
        }
    }
}
