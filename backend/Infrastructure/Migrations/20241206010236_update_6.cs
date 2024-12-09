using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class update_6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItem_ShoppingSession_ShoppingSessionId1",
                table: "CartItem");

            migrationBuilder.DropTable(
                name: "ShoppingSession");

            migrationBuilder.DropIndex(
                name: "IX_CartItem_ShoppingSessionId1",
                table: "CartItem");

            migrationBuilder.DropColumn(
                name: "ShoppingSessionId1",
                table: "CartItem");

            migrationBuilder.RenameColumn(
                name: "ShoppingSessionId",
                table: "CartItem",
                newName: "CartId");

            migrationBuilder.AddColumn<string>(
                name: "CartId1",
                table: "CartItem",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "CartItem",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.CreateTable(
                name: "Cart",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreateDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cart", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartItem_CartId1",
                table: "CartItem",
                column: "CartId1");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItem_Cart_CartId1",
                table: "CartItem",
                column: "CartId1",
                principalTable: "Cart",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItem_Cart_CartId1",
                table: "CartItem");

            migrationBuilder.DropTable(
                name: "Cart");

            migrationBuilder.DropIndex(
                name: "IX_CartItem_CartId1",
                table: "CartItem");

            migrationBuilder.DropColumn(
                name: "CartId1",
                table: "CartItem");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "CartItem");

            migrationBuilder.RenameColumn(
                name: "CartId",
                table: "CartItem",
                newName: "ShoppingSessionId");

            migrationBuilder.AddColumn<string>(
                name: "ShoppingSessionId1",
                table: "CartItem",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ShoppingSession",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CreateDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    UpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    total = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShoppingSession", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShoppingSession_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartItem_ShoppingSessionId1",
                table: "CartItem",
                column: "ShoppingSessionId1");

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingSession_UserId",
                table: "ShoppingSession",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItem_ShoppingSession_ShoppingSessionId1",
                table: "CartItem",
                column: "ShoppingSessionId1",
                principalTable: "ShoppingSession",
                principalColumn: "Id");
        }
    }
}
