import Realm from 'realm'

import MusicSchema from '../schemas/MusicSchema'

export default function getRealm() {
    return Realm.open({
        schema: [MusicSchema]
    })
}