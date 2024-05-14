
import prisma from './prisma';

const findYouths = async () => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          DOB: {
            startsWith: '2006'
          },
        },
        {
          DOB: {
            startsWith: '2005'
          },
        },
        {
          DOB: {
            startsWith: '2004'
          }
        },
        {
          DOB: {
            startsWith: '2003'
          },
        }
      ]
    }
  })
  
  const eighteen = new Date();
  eighteen.setFullYear(new Date().getFullYear() - 18);

  const twentyOne = new Date();
  twentyOne.setFullYear(new Date().getFullYear() - 21);


  let youthCount = 0;
  for (let i=0; i < users.length; i++){
    const user = users[i]
    const DOB = new Date(Date.parse(user.DOB))
    
    if (DOB <= eighteen && DOB >= twentyOne){
      youthCount++
    }
  }
  console.log("There are "+ youthCount +" users older than 18 and younger than 21.")
}


export default findYouths;