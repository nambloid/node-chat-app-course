const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {
        const from = 'Sender';
        const text = 'Message test text';
        const message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe('number');
    });

});
