import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data :{
        username,
        password,
        firstName,
        lastName
    
    },
    select :{
        id : true,
        password: true,
        firstName : true,
        lastName :true,
        username : true
    }

  })
  console.log(res);
}
insertUser("ritwik@gmail.com","1234567","Ritwik","Singh");