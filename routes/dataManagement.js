const router = require('express').Router()
const All_funds = require('../models/all_fund')
const axios = require('axios')

router.route('/insertAllFunds').get(async (req, res) => {
  try {
    const all_funds_length = await All_funds.count()
    if (all_funds_length < 40000) {
      const mf = await axios.get('https://api.mfapi.in/mf')
      All_funds.insertMany(
        mf.data,
        ordered = false,
        bypass_document_validation = true
      )
    }
    console.log(all_funds_length)
    res.json('Success')
  } catch (error) {
    res.status(400).json('Error: ' + error)
  }
})

module.exports = router
