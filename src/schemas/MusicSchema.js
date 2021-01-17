export default class MusicSchema {
    static schema = {
        name: 'Music',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            title: 'string',
            url: 'string'
        }
    }
}