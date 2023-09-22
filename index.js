// todo
/**
 * basic scenario:
 * - trader able to trade item
 *
 * user story
 * - as a trader, i want to be able to post my trade item so that my item can be traded
 * - as a trader, i want to be able to initiate trade with other trade, so that i can get the item
 *
 * POST /trades
 *
 * {
 *  userId: string,
 *  itemName: string
 * }
 *
 * acceptance tests
 * user story: as a trader, i want to be able to post my trade item so that my item can be traded
 *
 *  Scenario: Trader succeed to post item to be trade
 *    Given a valid trader
 *    When trader is post the trade item with valid details
 *    Then the item should be listed
 *
 * user story: as a trader, i want to be able to initiate trade with other trade, so that i can get the item
 *
 *  Scenario: Trader succeed to initiate trade from listed item
 *    Given
 *      a posted item "Membrane Keyboard" with trader named "Bob"
 *      And a trader named "Greg" with "Mechanical Keyboard"
 *    When Greg attempt to trade keyboard with Bob
 *    Then
 *      Bob should be receive the notification of trading for his Membrane Keyboard
 *
 * user story: as a trader, i want to be able accept the trade so that i able to get the traded item
 *
 *  Scenario: Trader succeed to accept the incoming trade
 *    Given
 *    When
 *    Then
 *
 *
 *
 * unit test harus apa
 *
 * - fast (should be reliabe)
 * - naming test yang bener
 */

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(`mongodb://127.0.0.1:27017/trading`);

const traderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// const traderSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
// });

const traderModel = mongoose.model('Trader', traderSchema);

app.get('/', (req, res) => res.send(`yessir`));

const controller = (req, res) => {};

/**
 * db trader
 * id: string
 * name: string
 */

/**
 * item
 * id
 * name
 * price
 */

const port = 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
