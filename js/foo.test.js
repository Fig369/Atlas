test('returns `bar`', () =>{
    const foo = require('../foo')
    expect(foo.foo()).toBe('bar')
})