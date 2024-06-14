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
// insertUser("ritwik@gmail.com","1234567","Ritwik","Singh");

interface updateParams {
  firstName : string,
  lastName : string
}

async function updateUser(username : string ,{
  firstName , lastName} : updateParams){
    const res = await prisma.user.update({
      where : {username},
      data : {
        firstName,
        lastName
      }
    });
    console.log(res);
  }
  updateUser("ritwik@gmail.com" , {
    firstName : "ritwik1",
    lastName : "Singh1"
  })

  async function getUser(username : string){
    const res = await prisma.user.findUnique({
      where : {
        username
      }
    });
    console.log("from get");
    console.log(res);
  }

  getUser("ritwik@gmail.com");