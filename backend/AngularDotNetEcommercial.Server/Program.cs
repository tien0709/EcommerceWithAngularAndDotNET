﻿using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AngularDotNetEcommercial.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using AngularDotNetEcommercial.Server.Helpers;
using AngularDotNetEcommercial.Server.MiddleWare;
using Microsoft.AspNetCore.Mvc;
using AngularDotNetEcommercial.Server.Errors;
using AngularDotNetEcommercial.Server.Controllers;
using static System.Runtime.InteropServices.JavaScript.JSType;
using AngularDotNetEcommercial.Server.Extensions;
using AngularDotNetEcommercial.Server.Utils;
using AngularDotNetEcommercial.Core.Entities;
using Microsoft.AspNetCore.Identity;
using AngularDotNetEcommercial.Server.Services.Abstraction;
using AngularDotNetEcommercial.Server.Services.Concreate;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("https://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod(); ;
                      });
});
// truongwf hopwj category vaf product taoj mootj cycle
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddSwaggerDocumentions();
builder.Services.AddDbContext<StoreContext>(option => option
.UseSqlServer(builder.Configuration.GetConnectionString("Default"),
x => x.MigrationsAssembly("Infrastructure")));

builder.Services.AddApplicationServices();

builder.Services.AddIdentity<User, Role>(options =>
{
    // Cấu hình các options nếu cần
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireUppercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequiredLength = 6;
})
.AddEntityFrameworkStores<StoreContext>()  
.AddDefaultTokenProviders();  


var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwaggerDocumention();
}
app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);
app.UseMiddleware<ExceptionMiddleware>();
app.UseStatusCodePagesWithReExecute("/errors/{0}");

//giữ nguyên thứ tự
app.UseAuthentication();
app.UseJwtMiddleware();
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();