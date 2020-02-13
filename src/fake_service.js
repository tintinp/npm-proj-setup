const { PiksiReceiverManager } = require('..')

const main = () => {
  const p = new PiksiReceiverManager()
  console.log(p.getX(), p.getY())
  p.add()
  console.log(p.getX(), p.getY())
}

main()
