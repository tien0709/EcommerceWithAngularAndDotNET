using AngularDotNetEcommercial.Infrastructure.Data;
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

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// truongwf hopwj category vaf product taoj mootj cycle
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddSwaggerDocumentions();
builder.Services.AddApplicationServices();
builder.Services.AddDbContext<StoreContext>(option => option
.UseSqlServer(builder.Configuration.GetConnectionString("Default"), 
x => x.MigrationsAssembly("Infrastructure")));

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwaggerDocumention();
}
//app.UseCors(builder =>
//        builder.WithOrigins("http://localhost:4200")
//               .AllowAnyHeader()
//               .AllowAnyMethod());
app.UseMiddleware<ExceptionMiddleware>();
app.UseStatusCodePagesWithReExecute("/errors/{0}");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
