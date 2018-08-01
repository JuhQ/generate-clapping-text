import generate from './index'

describe('generate clapping text', () => {
  it('should generate text with spaces', () => {
    expect(generate('i am too old for memes')).toEqual(
      'i 👏 am 👏 too 👏 old 👏 for 👏 memes',
    )
  })

  it('should generate text without spaces', () => {
    expect(
      generate('i do not understand youth and their memes', {
        addSpace: false,
      }),
    ).toEqual('i👏do👏not👏understand👏youth👏and👏their👏memes')
  })

  it('should generate text with custom space characters', () => {
    expect(
      generate('all hope is lost', {
        space: '👌',
      }),
    ).toEqual('all👌👏👌hope👌👏👌is👌👏👌lost')
  })
})
