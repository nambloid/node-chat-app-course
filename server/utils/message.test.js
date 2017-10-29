const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {
        const from = 'Sender';
        const latitude = 15;
        const longitude = 19;
        const expectedUrl = 'https://www.google.com/maps?q=15,19';
        const message = generateLocationMessage(from, latitude, longitude);

        expect(message.from).toBe(from);
        expect(message.url).toBe(expectedUrl);
        expect(typeof message.createdAt).toBe('number');
    });

});
