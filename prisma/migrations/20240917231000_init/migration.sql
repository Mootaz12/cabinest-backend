-- CreateTable
CREATE TABLE "User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "imageUrl" TEXT
);

-- CreateTable
CREATE TABLE "Cabin" (
    "cabinId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cabinName" TEXT NOT NULL,
    "maxCapacity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "imageUrl" TEXT,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
