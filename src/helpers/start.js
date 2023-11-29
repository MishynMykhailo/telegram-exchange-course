const { Markup, Extra } = require('telegraf');
const send = require('../helpers/send');

const wrap = (btn, index, currentRow) => currentRow.length >= index / 1;
    