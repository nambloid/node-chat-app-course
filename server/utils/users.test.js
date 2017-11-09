const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'UserOne',
            room: 'RoomOne'
        }, {
            id: '2',
            name: 'UserTwo',
            room: 'RoomTwo'
        }, {
            id: '3',
            name: 'UserThree',
            room: 'RoomOne'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'TestName',
            room: 'TestRoom'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var invalidUserId = '99';
        var user = users.removeUser(invalidUserId);

        expect(user).toBeFalsy()
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });


    it('should not find a user', () => {
        var invalidUserId = '99';
        var user = users.getUser(invalidUserId);

        expect(user).toBeFalsy();
    });

    it('should return names for room RoomOne', () => {
        var userList = users.getUserList('RoomOne');
        expect(userList).toEqual(['UserOne', 'UserThree']);
    });

    it('should return names for room RoomTwo', () => {
        var userList = users.getUserList('RoomTwo');
        expect(userList).toEqual(['UserTwo']);
    });

});
