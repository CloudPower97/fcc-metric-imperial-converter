const regex = /(\d+(?:.?\d+)?(?:\/\d+)?)?(.+)/
const convert = require('convert-units')

exports.convert = ({ query: { input } }, res) => {
  const conversion = {
    gal: 'l',
    l: 'gal',
    lbs: 'kg',
    kg: 'lbs',
    mi: 'km',
    km: 'mi',
  }

  if (input) {
    let [, initNum, initUnit] = regex.exec(input)
    let errors = []

    initNum = initNum ? initNum.split('/').reduce((acc, cur) => acc / cur) : 1
    initUnit = initUnit.toLowerCase()

    if (!Object.keys(conversion).includes(initUnit)) {
      errors.push(`Invalid unit '${initUnit}'`)
    }

    if (!Number(initNum)) {
      errors.push(`Invalid number '${initNum}'`)
    }

    if (errors.length) {
      res.status(422).json({ errors })
    } else {
      const returnUnit = conversion[initUnit]
      const returnNum = convert(initNum)
        .from(initUnit === 'lbs' ? 'lb' : initUnit)
        .to(returnUnit === 'lbs' ? 'lb' : returnUnit)
        .toFixed(5)

      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: `${initNum}${initUnit} converts to ${returnNum}${returnUnit}`,
      })
    }
  } else {
    res.sendStatus(400)
  }
}
