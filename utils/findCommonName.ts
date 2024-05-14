import prisma from '../prisma';

const commonNames = async () => {
  const users = await prisma.user.findMany({})
  const userNames = new Map<string, number>()

  for (let i=0; i < users.length; i++){
    const user = users[i]

    userNames.set(user.firstName, userNames.has(user.firstName) ? userNames.get(user.firstName)! + 1 : 1)
  }

  let mostCommon = '';
  let nameCount = 0;

  for (const [key, value] of userNames){
    if (value > nameCount){
      mostCommon = key
      nameCount = value
    }
  }
  

  console.log("The most frequent first name is " + mostCommon + ", " + nameCount + " users have this name.")
}


export default commonNames;