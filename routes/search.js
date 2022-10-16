const router = require('express').Router()
const All_funds = require('../models/all_fund')

router.route('/allFunds').get(async (req, res) => {
  try {
    const results = await All_funds.aggregate([
      {
        $search: {
          index: 'autocomplete',
          autocomplete: {
            query: `${req.query.term}`,
            path: 'schemeName'
          }
        }
      },
      { $limit: 10 },
      { $project: { schemeCode: 1, _id: 0, schemeName: 1 } }
    ])
    res.status(200).json(results)
  } catch (error) {
    res.status(400).json('Error: ' + error)
  }
})

module.exports = router
